import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { useTheme } from './useTheme';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return <>
    <Navbar onContact={() => setContactOpen(true)} theme={theme} onToggleTheme={toggleTheme} />
    <main><Hero onContact={() => setContactOpen(true)} /><About /><Experience /><Projects /><Skills /><Achievements /><Education /><section className="contact-cta section-wrap"><div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let's make it<br /><span>work beautifully.</span></h2></div><button className="button button-primary" onClick={() => setContactOpen(true)}>Contact Me <span aria-hidden="true">↗</span></button></section></main>
    <Footer />
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
  </>;
}

export default App;
