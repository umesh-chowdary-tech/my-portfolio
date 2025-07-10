import React, { useState } from 'react';
import { Home, User, FileText, MessageSquare, Phone } from 'react-feather';
import profilePic from '../images/profile-picture.jpeg'

const Sidebar = ({ activeTab, setActiveTab }) => {
  // Sidebar is collapsed when on 'home' tab
  const collapsed = activeTab === 'home';

  const navItems = [
    { name: 'home', icon: Home, label: 'HOME' },
    { name: 'about', icon: User, label: 'ABOUT ME' },
    { name: 'resume', icon: FileText, label: 'RESUME' },
    // { name: 'portfolio',icon:Home, label: 'PORTFOLIO' },
    { name: 'testimonials', icon: MessageSquare, label: 'TESTIMONIALS' },
    { name: 'contact', icon: Phone, label: 'CONTACT' },
  ];

  return (
    <div
      className={`transition-all duration-300 flex flex-col items-center bg-[#FDB813] p-6 ${
        collapsed ? 'w-20 md:w-20' : 'w-full md:w-64'
      }`}
    >
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
              onClick={() => setActiveTab(item.name)}
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
  );
};

export default Sidebar;