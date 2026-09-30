import { Icon } from './Icons';
import { socialLinks } from '../data/portfolio';
import { ResumeLinks } from './ResumeLinks';

export function Hero({ onContact }: { onContact: () => void }) {
  return <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-halo" aria-hidden="true" />
    <div className="hero-content">
      <div className="eyebrow hero-eyebrow"><span className="status-dot" /> AI / ENGINEERING <span className="eyebrow-separator">—</span> PERSONAL SITE</div>
      <h1 id="hero-title">Uma Shankar<br /><span>Kommireddy</span></h1>
      <p className="hero-role">AI/ML &amp; Full Stack Engineer</p>
      <p className="hero-intro">AI/ML &amp; Full Stack Engineer building intelligent systems that connect LLMs, backend infrastructure, and real-world products.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">View Projects <Icon name="arrow" /></a><ResumeLinks compact /><button className="button button-outline" onClick={onContact}>Contact Me <Icon name="arrow" /></button></div>
      <div className="hero-socials" aria-label="Social links">{socialLinks.map(({ label, href, icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon name={icon} /> <span>{label}</span><Icon className="social-external" name="external" /></a>)}</div>
    </div>
    <div className="hero-aside" aria-hidden="true">
      <div className="signal-card"><div className="signal-head"><span className="signal-label">SYSTEMS / THINKING</span><span className="signal-live">● ACTIVE</span></div><div className="signal-visual"><div className="signal-ring ring-one"/><div className="signal-ring ring-two"/><div className="signal-ring ring-three"/><div className="signal-core"><Icon name="spark" /></div><span className="signal-node node-one"/><span className="signal-node node-two"/><span className="signal-node node-three"/></div><div className="signal-footer"><span>LLM</span><i/><span>BACKEND</span><i/><span>PRODUCT</span></div></div>
      <span className="hero-coordinate">17° 26′ 14.6″ N&nbsp;&nbsp; 78° 26′ 44.1″ E</span>
    </div>
    <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
  </section>;
}
