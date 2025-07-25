import { Home, User, FileText, MessageSquare, Phone } from 'react-feather';
import profilePic from '../images/profile-picture.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  // Mobile sidebar toggle
  const [mobileOpen, setMobileOpen] = useState(false);
  // Collapsed on home for md+ screens
  const collapsed = activeTab === 'home';

  const navItems = [
    { name: 'home', icon: Home, label: 'HOME' },
    { name: 'about', icon: User, label: 'ABOUT ME' },
    { name: 'resume', icon: FileText, label: 'RESUME' },
    { name: 'testimonials', icon: MessageSquare, label: 'TESTIMONIALS' },
    { name: 'contact', icon: Phone, label: 'CONTACT' },
    { name: 'upload', icon: FileText, label: 'RESUME UPLOAD' },
  ];

  // Sidebar content as a function for reuse
  const sidebarContent = (
    <>
      <div className="flex-1 w-full flex flex-col items-center">
        {!collapsed && (
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-6"
          />
        )}
        <nav className="space-y-4 w-full flex flex-col items-center">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative w-full flex justify-center group"
            >
              <button
                className={`flex items-center justify-center md:justify-start px-2 py-2 rounded-md transition-colors w-full
                  ${activeTab === item.name
                    ? 'bg-white text-[#FDB813]'
                    : 'text-white hover:bg-white/10'}
                  ${collapsed ? 'justify-center' : ''}
                `}
                onClick={() => {
                  setActiveTab(item.name);
                  setMobileOpen(false); // close sidebar on mobile after selection
                }}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && (
                  <span className="ml-2">{item.label}</span>
                )}
              </button>
              {collapsed && (
                <span
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200 z-10"
                  style={{ minWidth: '80px' }}
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
      {/* Social icons at the bottom */}
      {!collapsed && (
        <div className={`flex flex-row items-center w-full p-4 space-x-4 justify-start bg-[#FDB813] mt-auto`}>
          <a href="https://www.linkedin.com/in/umesh-chowdary-anubrolu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
          </a>
          <a href="https://github.com/umesh-chowdary-learing" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-800 hover:text-black" />
          </a>
          <a href="https://x.com/UChowdary23" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-6 h-6 text-pink-500 hover:text-pink-700" />
          </a>
          <a href="mailto:jobs.umeshchowdary@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-bold text-xs hover:bg-red-600 transition">G</span>
          </a>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* Hamburger for mobile only */}
      <div className="md:hidden" data-test-id="sidebar-mobile-toggle">
        <button
          className="fixed top-4 left-4 z-30 bg-[#FDB813] text-white p-2 rounded shadow-lg focus:outline-none"
          onClick={() => setMobileOpen(true)}
          aria-label="Open sidebar"
          style={{ display: mobileOpen ? 'none' : 'block' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>
      {/* Overlay and sidebar for mobile */}
      {mobileOpen && (
        <div data-test-id="sidebar-mobile-overlay">
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-64 bg-[#FDB813] shadow-lg z-30 p-6 flex flex-col" data-test-id="sidebar-mobile">
            <button
              className="self-end mb-4 text-gray-700 hover:text-black"
              onClick={() => setMobileOpen(false)}
              aria-label="Close sidebar"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
      {/* Sidebar for md+ screens */}
      <div className="hidden md:flex flex-col h-full rounded-tl-lg rounded-bl-lg bg-[#FDB813]" data-test-id="sidebar-desktop-wrapper">
        <div
          className={`transition-all duration-300 flex flex-col items-center p-6 ${
            collapsed ? 'w-20 justify-center h-full' : 'w-64' 
          } flex-shrink-0 md:h-[700px]`} data-test-id="sidebar-desktop"
        >
          {sidebarContent}
        </div>
      </div>
    </>
  );
};

export default Sidebar;