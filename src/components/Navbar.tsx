import { useEffect, useState } from 'react';
import { Icon } from './Icons';
import type { Theme } from '../useTheme';
import { publicPath } from '../data/publicPaths';

const items = [['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'], ['Skills', 'skills'], ['Achievements', 'achievements'], ['Contact', 'contact']] as const;

export function Navbar({ onContact, theme, onToggleTheme }: { onContact: () => void; theme: Theme; onToggleTheme: () => void }) {
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
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  const handleContact = () => { closeMenu(); onContact(); };
  const toggleLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  const toggle = (mobile = false) => <button className={`theme-toggle ${mobile ? 'theme-toggle-mobile' : 'theme-toggle-desktop'}`} onClick={onToggleTheme} aria-label={toggleLabel} title={toggleLabel} aria-pressed={theme === 'light'}><span className="theme-toggle-icon"><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></span><span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span></button>;
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-inner">
      <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Uma Shankar, home"><span className="wordmark-mark">u<span>.</span></span><span>Uma Shankar</span></a>
      {menuOpen && <button className="nav-backdrop" aria-label="Close navigation menu" onClick={closeMenu} />}
      <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Main navigation">
        {items.map(([label, id]) => id === 'contact' ? <button key={id} className="nav-link" onClick={handleContact}>{label}</button> : <a key={id} className="nav-link" href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        {toggle(true)}
        <a className="nav-mobile-resume" href={publicPath('Uma_Shankar_Resume.pdf')} download="Uma_Shankar_Resume.pdf" onClick={closeMenu}>Download Resume <Icon name="download" /></a>
      </nav>
      <div className="nav-actions">{toggle()}<a className="button button-quiet nav-download" href={publicPath('Uma_Shankar_Resume.pdf')} download="Uma_Shankar_Resume.pdf">Download Resume <Icon name="download" /></a></div>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
    </div>
  </header>;
}
