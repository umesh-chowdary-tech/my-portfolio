// One entry per section, in menu order. The router, the sidebar and the build
// step that writes a real HTML page for each URL (scripts/prerender-routes.js)
// all read from this list, so a new section only needs adding here and in App.jsx.
export const SITE_URL = 'https://umesh-chowdary-tech.github.io/my-portfolio';

const NAME = 'Umesh Chowdary Anubrolu';

const pages = [
  {
    path: '/',
    label: 'HOME',
    // Keep in sync with <title> in index.html, which is what the home page serves
    title: `${NAME} | Full Stack AI Engineer`,
  },
  {
    path: '/about',
    label: 'ABOUT ME',
    title: `About | ${NAME}`,
    description: 'Member Technical at ADP India in Hyderabad: skills, awards, certifications and what I work on.',
  },
  {
    path: '/projects',
    label: 'PROJECTS',
    title: `Projects | ${NAME}`,
    description: 'Agentic AI platforms, RAG, fine-tuned models and full-stack products, at ADP and on my own.',
  },
  {
    path: '/resume',
    label: 'RESUME',
    title: `Resume | ${NAME}`,
    description: 'View or download my resume as a PDF.',
  },
  {
    path: '/contact',
    label: 'CONTACT',
    title: `Contact | ${NAME}`,
    description: 'Get in touch by email, phone, LinkedIn, GitHub or X.',
  },
];

export default pages;
