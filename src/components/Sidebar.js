import React from 'react';
import { Home, User, FileText, MessageSquare, Phone } from 'react-feather';
import profilePic from '../images/profile-picture.jpeg'

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { name: 'home', icon: Home, label: 'HOME' },
    { name: 'about', icon: User, label: 'ABOUT ME' },
    { name: 'resume', icon: FileText, label: 'RESUME' },
    // { name: 'portfolio',icon:Home, label: 'PORTFOLIO' },
    { name: 'testimonials', icon: MessageSquare, label: 'TESTIMONIALS' },
    { name: 'contact', icon: Phone, label: 'CONTACT' },
  ];

  return (
    <div className="w-full md:w-64  bg-[#FDB813] p-6 flex flex-col items-center">
      <img
        src={profilePic}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-6"
      />
      <nav className="space-y-4 w-full">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center justify-start px-4 py-2 rounded-md transition-colors ${
              activeTab === item.name
                ? 'bg-white text-[#FDB813]'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setActiveTab(item.name)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;