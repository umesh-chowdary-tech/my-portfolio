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
    <div className="max-h-screen flex items-center justify-center p-4 bg-[url('../public/images/backgroundImage.jpg')] scrollbar-none">

      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg   ">
        <div className="flex flex-col md:flex-row h-[700px]">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex-1 overflow-hidden hide-scrollbar">
            <div className="p-6">
              {activeTab === 'home' && <HomeSection />}
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