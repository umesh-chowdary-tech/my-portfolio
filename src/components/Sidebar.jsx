import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Home, User, Code, FileText, Phone, Mail, Menu, X } from 'react-feather';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import profilePic from '../images/profile-picture.jpeg';
import ThemeToggle from './ThemeToggle';
import pages from '../data/pages';

const icons = { '/': Home, '/about': User, '/projects': Code, '/resume': FileText, '/contact': Phone };
const navItems = pages.map((page) => ({ ...page, icon: icons[page.path] }));

const socials = [
  { href: 'https://www.linkedin.com/in/umesh-chowdary-anubrolu/', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://github.com/umesh-chowdary-tech', label: 'GitHub', icon: FaGithub },
  { href: 'https://x.com/UChowdary23', label: 'X (Twitter)', icon: FaXTwitter },
  { href: 'mailto:jobs.umeshchowdary@gmail.com', label: 'Email', icon: Mail },
];

// Text on the brand yellow is dark throughout: white on #FDB813 is too low-contrast to read.
const NavItems = ({ collapsed, onNavigate }) => (
  <nav className="w-full space-y-2" aria-label="Sections">
    {navItems.map((item) => (
      <div key={item.path} className="relative group">
        <NavLink
          to={item.path}
          end={item.path === '/'} // exact match only for Home; the rest also match their sub-pages and the trailing slash GitHub Pages adds
          aria-label={item.label}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-md px-3 py-2 font-medium transition-colors ${collapsed ? 'justify-center' : ''} ${
              isActive ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-black/10'
            }`
          }
        >
          <item.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          {!collapsed && <span>{item.label}</span>}
        </NavLink>
        {collapsed && (
          <span className="pointer-events-none absolute left-full top-1/2 z-10 ml-2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {item.label}
          </span>
        )}
      </div>
    ))}
  </nav>
);

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    {socials.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="text-gray-900 hover:text-gray-700"
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </a>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // On desktop the sidebar collapses to icons on the home page, which has its own photo
  const collapsed = useLocation().pathname === '/';

  return (
    <>
      {/* Phones: a top bar that stays in view, with a slide-in menu */}
      <header className="md:hidden sticky top-0 z-30 flex items-center justify-between rounded-t-lg bg-[#FDB813] px-3 py-2" data-test-id="mobile-top-bar">
        <button
          type="button"
          className="rounded p-2 text-gray-900 hover:bg-black/10"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
        <Link to="/" className="font-bold text-gray-900">Umesh Anubrolu</Link>
        <ThemeToggle />
      </header>
      {mobileOpen && (
        <div className="md:hidden" data-test-id="sidebar-mobile-overlay">
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col gap-6 bg-[#FDB813] p-6 shadow-lg" data-test-id="sidebar-mobile">
            <button
              type="button"
              className="self-end rounded p-1 text-gray-900 hover:bg-black/10"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <img src={profilePic} alt="" className="mx-auto h-24 w-24 rounded-full" />
            <NavItems collapsed={false} onNavigate={() => setMobileOpen(false)} />
            <div className="mt-auto">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}

      {/* Desktop: the yellow column runs the full height; its contents stay in view while the page scrolls */}
      <aside className="hidden md:block flex-shrink-0 rounded-l-lg bg-[#FDB813]" data-test-id="sidebar-desktop-wrapper">
        <div
          className={`sticky top-4 flex h-[calc(100vh-2rem)] flex-col items-center gap-6 p-4 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}
          data-test-id="sidebar-desktop"
        >
          {!collapsed && <img src={profilePic} alt="" className="h-24 w-24 rounded-full" />}
          <div className={`w-full ${collapsed ? 'my-auto' : ''}`}>
            <NavItems collapsed={collapsed} />
          </div>
          <div className={`flex w-full items-center gap-4 ${collapsed ? 'flex-col' : 'mt-auto justify-between'}`}>
            {!collapsed && <SocialLinks />}
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
