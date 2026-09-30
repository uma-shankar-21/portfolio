import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const theme = document.documentElement.dataset.theme;
  return theme === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7f8f5' : '#0b0d0c');
    try { window.localStorage.setItem('uma-portfolio-theme', theme); } catch { /* The selected theme remains available for this session. */ }
  }, [theme]);
  const toggleTheme = useCallback(() => {
    document.documentElement.classList.add('theme-transitioning');
    window.setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 220);
    setTheme((current) => current === 'dark' ? 'light' : 'dark');
  }, []);
  return { theme, toggleTheme } as const;
}
