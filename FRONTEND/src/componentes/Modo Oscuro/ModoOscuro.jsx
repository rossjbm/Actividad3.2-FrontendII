// ModoOscuro.jsx
import React, { useEffect, useState } from 'react';

const ModoOscuro = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = (event) => {
      setIsDarkMode(event.matches);
    };

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setIsDarkMode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', updateDarkMode);

    return () => {
      darkModeMediaQuery.removeEventListener('change', updateDarkMode);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDarkMode ? 'dark' : 'light';
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [isDarkMode]);

  // Render children components with isDarkMode prop
  return children(isDarkMode);
};

export default ModoOscuro;



