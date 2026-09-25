import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CaseStudy from './components/CaseStudy';
import ContactSection from './components/ContactSection';
import Resume from './components/Resume';
import pages from './data/pages';

const sections = {
  '/': <HomeSection />,
  '/about': <AboutSection />,
  '/projects': <ProjectsSection />,
  '/resume': <Resume />,
  '/contact': <ContactSection />,
};

function App() {
  const { pathname } = useLocation();

  // Each section gets its own browser-tab title (case studies set their own),
  // and a new section starts at the top of the page
  useEffect(() => {
    const page = pages.find((p) => p.path === pathname.replace(/(.)\/$/, '$1'));
    if (page) document.title = page.title;
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen p-2 sm:p-4 bg-[url('./images/backgroundImage.jpg')] dark:bg-gray-800 dark:bg-blend-multiply" data-test-id="app-root">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col rounded-lg bg-white text-gray-900 shadow-lg dark:bg-gray-900 dark:text-gray-100 md:min-h-[calc(100vh-2rem)] md:flex-row"
        data-test-id="main-container"
      >
        <Sidebar />
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
          <Routes>
            {pages.map(({ path }) => (
              <Route key={path} path={path} element={sections[path]} />
            ))}
            <Route path="/projects/:slug" element={<CaseStudy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
