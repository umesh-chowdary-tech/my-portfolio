import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
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

  // Each section gets its own browser-tab title and history entry
  useEffect(() => {
    const page = pages.find((p) => p.path === pathname.replace(/(.)\/$/, '$1'));
    if (page) document.title = page.title;
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 bg-[url('./images/backgroundImage.jpg')] dark:bg-gray-800 dark:bg-blend-multiply scrollbar-none" data-test-id="app-root">
      <ThemeToggle />
      <div className="w-full max-w-7xl bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 rounded-lg shadow-lg" data-test-id="main-container">
        <div className="flex flex-col md:flex-row min-h-[80vh] md:min-h-[700px]" data-test-id="main-flex">
          <Sidebar />
          <div className="flex-1 overflow-hidden hide-scrollbar h-full min-h-0">
            <main className="p-4 sm:p-6">
              <Routes>
                {pages.map(({ path }) => (
                  <Route key={path} path={path} element={sections[path]} />
                ))}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
