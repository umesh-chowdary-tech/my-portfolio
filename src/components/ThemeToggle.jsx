import React, { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'react-feather';

// The theme lives in the `dark` class on <html>: index.html sets it before the
// page draws, and this button flips it. Every copy of the button (desktop sidebar,
// mobile top bar) watches that class, so they all stay in step.
const subscribe = (onChange) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
};
const isDark = () => document.documentElement.classList.contains('dark');

const ThemeToggle = ({ className = '' }) => {
  const dark = useSyncExternalStore(subscribe, isDark);

  const toggle = () => {
    const next = !isDark();
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage blocked (private window): the switch still works for this visit
    }
  };

  const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`p-2 rounded-full bg-gray-900 text-yellow-300 hover:bg-gray-700 transition-colors ${className}`}
      data-test-id="theme-toggle"
    >
      {dark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
