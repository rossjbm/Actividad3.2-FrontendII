import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importa los iconos de luna y sol

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* Botón para activar/desactivar modo oscuro */}
      <button onClick={toggleDarkMode} className="fixed right-4 top-4 z-50 bg-white p-2 rounded-full shadow-lg">
        {isDarkMode ? <FaSun size={24} color="#FFA500" /> : <FaMoon size={24} color="#4B5563" />}
      </button>
      {children(isDarkMode)}
    </>
  );
};

export default ModoOscuro;




