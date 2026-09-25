import React, { useState } from 'react';
import { Moon, Sun } from 'react-feather';

// index.html sets the starting theme before the page draws; this only flips it.
const ThemeToggle = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage blocked (private window): the switch still works for this visit
    }
    setDark(next);
  };

  const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="fixed top-4 right-4 z-30 p-2 rounded-full shadow-lg bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700 transition-colors"
      data-test-id="theme-toggle"
    >
      {dark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
