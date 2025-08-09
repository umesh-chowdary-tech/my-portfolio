import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/ProtfoiloSection';
import TestimonialsSection from './components/Testimonials';
import ContactSection from './components/ContactSection';
import  Resume  from './components/Resume';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 bg-[url('../public/images/backgroundImage.jpg')] scrollbar-none" data-test-id="app-root">

      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg" data-test-id="main-container">
        <div className="flex flex-col md:flex-row min-h-[80vh] md:min-h-[700px]" data-test-id="main-flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex-1 overflow-hidden hide-scrollbar h-full min-h-0">
            <div className="p-4 sm:p-6">
              {activeTab === 'home' && <HomeSection setActiveTab={setActiveTab} />}
              {activeTab === 'about' && <AboutSection />}
              {activeTab === 'resume' && <Resume/>}
              {activeTab === 'portfolio' && <PortfolioSection />}
              {activeTab === 'testimonials' && <TestimonialsSection />}
              {activeTab === 'contact' && <ContactSection />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;