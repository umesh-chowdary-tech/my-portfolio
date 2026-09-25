// Runs after `vite build`. GitHub Pages is a static host with no rewrite rules,
// so a URL like /my-portfolio/projects only loads if dist/projects/index.html
// exists. This writes one per section and per case study, each with its own title,
// description and link-preview tags, plus a 404.html that loads the app for any
// unknown path.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import pages, { SITE_URL } from '../src/data/pages.js';
import caseStudies, { SITE_NAME } from '../src/data/caseStudies.js';

const dist = new URL('../dist/', import.meta.url);
const template = readFileSync(new URL('index.html', dist), 'utf8');

const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Replace the content of every tag matched by `pattern`; fail the build if
// index.html no longer has it, rather than ship a page with the wrong preview.
const setContent = (html, pattern, value) => {
  const matches = html.match(new RegExp(pattern.source, 'g'));
  if (!matches) throw new Error(`prerender-routes: no match for ${pattern} in dist/index.html`);
  return html.replace(new RegExp(pattern.source, 'g'), (_, before) => `${before}${escapeAttr(value)}"`);
};

const routes = [
  ...pages.filter((page) => page.path !== '/'),
  ...caseStudies.map((study) => ({
    path: `/projects/${study.slug}`,
    title: `${study.title} | ${SITE_NAME}`,
    description: study.summary,
  })),
];

for (const route of routes) {
  const url = `${SITE_URL}${route.path}/`;
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(route.title)}</title>`);
  html = setContent(html, /((?:name="description"|property="og:description"|name="twitter:description")\s+content=")[^"]*"/, route.description);
  html = setContent(html, /((?:property="og:title"|name="twitter:title")\s+content=")[^"]*"/, route.title);
  html = setContent(html, /(property="og:url"\s+content=")[^"]*"/, url);
  html = setContent(html, /(rel="canonical"\s+href=")[^"]*"/, url);

  const dir = new URL(`.${route.path}/`, dist);
  mkdirSync(dir, { recursive: true });
  writeFileSync(new URL('index.html', dir), html);
}

writeFileSync(new URL('404.html', dist), template);
console.log(`prerender-routes: wrote ${routes.length} pages and 404.html`);
