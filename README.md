# Umesh Chowdary Anubrolu | Portfolio

The personal portfolio of Umesh Chowdary Anubrolu, Member Technical at ADP India and Full Stack AI Engineer.

**Live site:** https://umesh-chowdary-tech.github.io/my-portfolio/

## What's on the site

| Page | URL | What it shows |
|---|---|---|
| Home | [`/`](https://umesh-chowdary-tech.github.io/my-portfolio/) | Introduction, measured results and featured work |
| About | [`/about`](https://umesh-chowdary-tech.github.io/my-portfolio/about/) | Professional highlights, skills, awards and certifications |
| Projects | [`/projects`](https://umesh-chowdary-tech.github.io/my-portfolio/projects/) | Work at ADP, personal projects and research |
| Case studies | [`/projects/vidhi`](https://umesh-chowdary-tech.github.io/my-portfolio/projects/vidhi/), [`/projects/migration-agent`](https://umesh-chowdary-tech.github.io/my-portfolio/projects/migration-agent/), [`/projects/agentic-ai-platform`](https://umesh-chowdary-tech.github.io/my-portfolio/projects/agentic-ai-platform/) | The main projects in depth: approach, diagrams, results and lessons |
| Resume | [`/resume`](https://umesh-chowdary-tech.github.io/my-portfolio/resume/) | Two-page PDF to view or download |
| Contact | [`/contact`](https://umesh-chowdary-tech.github.io/my-portfolio/contact/) | Email, phone, LinkedIn, GitHub and X |

Every page has its own link, browser-tab title and link preview. A button in the sidebar (or the top bar on phones)
switches between light and dark themes. The site starts in the visitor's system theme and remembers their choice. It
works on phones and desktops.

## Tech stack

- [React 18](https://react.dev/) with [React Router 6](https://reactrouter.com/)
- [Vite 6](https://vite.dev/) for the dev server and build
- [Tailwind CSS 3](https://tailwindcss.com/) for styling
- [react-feather](https://github.com/feathericons/react-feather) and [react-icons](https://react-icons.github.io/react-icons/) for icons
- [ESLint 9](https://eslint.org/) for linting, and [Playwright](https://playwright.dev/) for the smoke test
- [GitHub Pages](https://pages.github.com/), published with [gh-pages](https://github.com/tschaub/gh-pages)

## Run it locally

You need [Node.js](https://nodejs.org/) 20 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Edits show up in the browser as soon as you save.

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server at http://localhost:3000 |
| `npm run build` | Builds the site into `dist/` |
| `npm run preview` | Serves the built site at http://localhost:4173/my-portfolio/, exactly as GitHub Pages will |
| `npm run lint` | Checks the code with ESLint |
| `npm run test:smoke` | After a build, opens every page in light and dark mode in a real browser and checks every link |
| `npm run deploy` | Builds the site and publishes it to GitHub Pages (pushing to `main` does this automatically) |

## Deploying

Pushing to `main` deploys the site. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow lints, builds
and smoke-tests it, then pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves. If a check fails, nothing
is published and the live site stays as it was. The new version is live a minute or two after the workflow finishes. To redeploy without a new commit, run the workflow from the repository's
**Actions** tab.

To deploy from your own computer instead, run:

```bash
npm run deploy
```

It does the same build and push, without the checks, and anything not yet on `main` will go live and then be
replaced by the next automatic deploy.

GitHub Pages is a static host, so a link like `/my-portfolio/projects/` only works if a file exists at that path. After
Vite builds the app, [`scripts/prerender-routes.js`](scripts/prerender-routes.js) writes an `index.html` for every
section and case study, each with its own title, description and link-preview tags, plus a `404.html` that sends
unknown links to the home page.

## Updating content

| To change | Edit |
|---|---|
| Projects | [`src/data/projects.js`](src/data/projects.js) |
| Case studies | [`src/data/caseStudies.js`](src/data/caseStudies.js) for the text, [`src/components/diagrams.jsx`](src/components/diagrams.jsx) for the diagrams |
| Resume | Replace [`public/Umesh_Anubrolu_Resume.pdf`](public/Umesh_Anubrolu_Resume.pdf), keeping the same file name |
| Home page text | [`src/components/HomeSection.jsx`](src/components/HomeSection.jsx) |
| About page text, skills and awards | [`src/components/AboutSection.jsx`](src/components/AboutSection.jsx) |
| Contact details | [`src/components/ContactSection.jsx`](src/components/ContactSection.jsx) and the social links in [`src/components/Sidebar.jsx`](src/components/Sidebar.jsx) |
| Page titles and link-preview descriptions | [`src/data/pages.js`](src/data/pages.js) for sections, [`index.html`](index.html) for the home page |
| Link-preview image | [`public/og-image.png`](public/og-image.png), 1200 × 630 pixels |

**Projects.** Each project has a title, category, period, description, highlights, tech list and links. Projects
without public code leave out `links` and can set a `note` such as "Private repository". Keep every claim to something
you can explain in an interview, and quote numbers exactly as they were measured.

**Case studies.** Each one has a summary, facts, results, optional diagram and sections of paragraphs or bullets. To
link a project card to its case study, set `caseStudy` in [`src/data/projects.js`](src/data/projects.js) to the case
study's `slug`. The home page features every case study, and the build gives each one its own page.

**Adding a section.** Add an entry to [`src/data/pages.js`](src/data/pages.js), its component to the `sections` map in
[`src/App.jsx`](src/App.jsx) and an icon to the `icons` map in [`src/components/Sidebar.jsx`](src/components/Sidebar.jsx).
The menu, the routes and the build step all pick it up from there.

## Project structure

```
├── .github/workflows/
│   └── deploy.yml            # checks and deploys the site on every push to main
├── index.html                # page shell: meta tags, link previews, early theme script
├── public/                   # copied as is: resume PDF, icons, preview image, manifest
├── scripts/
│   ├── prerender-routes.js   # writes a real HTML page for each section and case study after the build
│   └── smoke-test.js         # opens every page in a browser and checks every link
├── src/
│   ├── index.jsx             # entry point and router setup
│   ├── App.jsx               # layout and routes
│   ├── data/
│   │   ├── pages.js          # sections: URL, menu label, title, description
│   │   ├── projects.js       # everything on the Projects page
│   │   └── caseStudies.js    # the case-study pages
│   ├── components/           # one component per section, plus CaseStudy, diagrams, Sidebar and ThemeToggle
│   └── images/               # profile photo and background
├── firestore.rules           # database rules for the hidden Testimonials section
└── vite.config.js
```

## Testimonials (hidden for now)

A Testimonials section, where visitors can leave a testimonial stored in Firebase Firestore, is built but not in the
menu. The component is [`src/components/Testimonials.jsx`](src/components/Testimonials.jsx). To bring it back:

1. In the [Firebase console](https://console.firebase.google.com/), open project `my-portfolio-6312`, go to
   **Firestore Database > Rules**, paste in [`firestore.rules`](firestore.rules) and click **Publish**. These rules let
   visitors read and add testimonials, but not edit or delete them.
2. Add it as a section, as described in [Adding a section](#updating-content).
