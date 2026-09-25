// Smoke test for the built site (run `npm run build` first). It serves dist/ the
// way GitHub Pages does, opens every section and case study in a real browser in
// both light and dark mode, and then checks every link it found. It fails when a
// page errors, has the wrong title or no heading, ignores the visitor's theme, or
// links to something that is gone.
//
// Locally it drives the installed Microsoft Edge; in CI it uses Playwright's
// Chromium (installed by the workflow).
import { chromium } from 'playwright';
import { preview } from 'vite';
import pages from '../src/data/pages.js';
import caseStudies, { SITE_NAME } from '../src/data/caseStudies.js';

const routes = [
  ...pages.map(({ path, title }) => ({ path, title })),
  ...caseStudies.map(({ slug, title }) => ({ path: `/projects/${slug}`, title: `${title} | ${SITE_NAME}` })),
];

// LinkedIn answers every automated request with status 999, so it can't be checked
const UNCHECKABLE = [/linkedin\.com/];
// Only these mean the target is really gone; other errors (403, 429...) are usually
// a site blocking automated requests, and are reported without failing the run
const BROKEN_STATUSES = new Set([404, 410]);

const server = await preview({ preview: { port: 4173, strictPort: true } });
const base = server.resolvedUrls.local[0].replace(/\/$/, ''); // http://localhost:4173/my-portfolio
const browser = await chromium.launch(process.env.CI ? {} : { channel: 'msedge' });

const failures = [];
const warnings = [];
const links = new Set();

for (const colorScheme of ['light', 'dark']) {
  const context = await browser.newContext({ colorScheme });
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));

    const where = `${route.path} (${colorScheme})`;
    const response = await page.goto(`${base}${route.path === '/' ? '/' : `${route.path}/`}`, { waitUntil: 'networkidle' });
    if (response?.status() !== 200) failures.push(`${where}: HTTP ${response?.status()}`);

    const title = await page.title();
    if (title !== route.title) failures.push(`${where}: title is "${title}", expected "${route.title}"`);
    if ((await page.locator('main :is(h1, h2)').count()) === 0) failures.push(`${where}: no heading on the page`);

    const dark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    if (dark !== (colorScheme === 'dark')) failures.push(`${where}: did not follow the visitor's ${colorScheme} theme`);

    errors.forEach((error) => failures.push(`${where}: ${error}`));
    (await page.$$eval('a[href]', (anchors) => anchors.map((a) => a.href))).forEach((href) => links.add(href));
    await page.close();
  }
  await context.close();
}
await browser.close();

// GitHub Pages redirects a folder URL without its trailing slash (/my-portfolio)
// to the one with it; the local preview server doesn't, so add it here
const asOnGitHubPages = (href) => (href.startsWith(base) && !/\/$|\.\w+$/.test(new URL(href).pathname) ? `${href}/` : href);

for (const link of [...links].sort()) {
  if (!/^https?:/.test(link) || UNCHECKABLE.some((pattern) => pattern.test(link))) continue; // mailto:, tel:, LinkedIn
  const href = asOnGitHubPages(link);
  try {
    let response = await fetch(href, { method: 'HEAD', redirect: 'follow' });
    if (response.status >= 400) response = await fetch(href, { redirect: 'follow' }); // some sites refuse HEAD
    if (BROKEN_STATUSES.has(response.status)) failures.push(`broken link: ${href} (HTTP ${response.status})`);
    else if (response.status >= 400) warnings.push(`could not verify ${href} (HTTP ${response.status})`);
  } catch (error) {
    failures.push(`broken link: ${href} (${error.cause?.code || error.message})`);
  }
}

await new Promise((resolve) => server.httpServer.close(resolve));

warnings.forEach((warning) => console.warn(`warning: ${warning}`));
console.log(`Checked ${routes.length} pages in light and dark mode, and ${links.size} links.`);
if (failures.length > 0) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`));
  process.exit(1);
}
console.log('All good.');
