import { Home, User, FileText, MessageSquare, Phone } from 'react-feather';
import profilePic from '../images/profile-picture.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

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
    <div className="flex flex-col h-full">
      <div
        className={`transition-all duration-300 flex flex-col items-center bg-[#FDB813] p-6 ${
          collapsed ? 'w-20 md:w-20' : 'w-full md:w-64'
        } flex-1`}
      >
        {!collapsed && (
          <>
            <img
              src={profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-6"
            />
          </>
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
      {/* Social icons at the bottom */}
      {!collapsed && (
        <div className={`flex flex-row items-center w-full p-4 space-x-4 justify-start bg-[#FDB813]`}>
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
    </div>
  );
};

export default Sidebar;