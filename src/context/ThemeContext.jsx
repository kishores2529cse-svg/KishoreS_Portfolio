import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ks-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'light'; // Day / Light is the default theme
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      body?.classList.add('dark');
      body?.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      body?.classList.add('light');
      body?.classList.remove('dark');
    }
    localStorage.setItem('ks-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
