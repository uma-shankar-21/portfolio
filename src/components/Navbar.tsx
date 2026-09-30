import { useEffect, useState } from 'react';
import { Icon } from './Icons';
import type { Theme } from '../useTheme';

const items = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Achievements', 'achievements'],
  ['Contact', 'contact'],
] as const;

export function Navbar({
  onContact,
  theme,
  onToggleTheme,
}: {
  onContact: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleContact = () => {
    closeMenu();
    onContact();
  };

  const toggleLabel =
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  const toggle = (mobile = false) => (
    <button
      className={`theme-toggle ${
        mobile ? 'theme-toggle-mobile' : 'theme-toggle-desktop'
      }`}
      onClick={onToggleTheme}
      aria-label={toggleLabel}
      title={toggleLabel}
      aria-pressed={theme === 'light'}
    >
      <span className="theme-toggle-icon">
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
      </span>

      <span className="theme-toggle-label">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a
          className="wordmark"
          href="#top"
          onClick={closeMenu}
          aria-label="Uma Shankar, home"
        >
          <span className="wordmark-mark">
            U S <span></span>
          </span>

          <span>Uma Shankar</span>
        </a>

        {menuOpen && (
          <button
            className="nav-backdrop"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        )}

        <nav
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
          aria-label="Main navigation"
        >
          {items.map(([label, id]) =>
            id === 'contact' ? (
              <button
                key={id}
                className="nav-link"
                onClick={handleContact}
              >
                {label}
              </button>
            ) : (
              <a
                key={id}
                className="nav-link"
                href={`#${id}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            ),
          )}

          {toggle(true)}
        </nav>

        <div className="nav-actions">
          {toggle()}
        </div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}