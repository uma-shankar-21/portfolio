import { Icon } from './Icons';
import { Reveal } from './Reveal';
import { publicPath } from '../data/publicPaths';

export function Achievements() {
  return <section className="section-wrap section-block achievement-section" id="achievements">
    <Reveal className="section-heading-row"><div><p className="eyebrow"></p><h2>Selected for<br /><span>what comes next.</span></h2></div><p className="section-lede">Recognition earned through curiosity, problem solving, and building with others.</p></Reveal>
    <div className="achievement-layout">
      <Reveal className="achievement-feature"><article className="achievement-card"><div className="achievement-card-head"><div className="event-emblem"><Icon name="spark" /></div><span className="achievement-label">BESSEMER TECH CATALYST</span><span className="achievement-date">BENGALURU · SEP 05, 2026</span></div><div className="achievement-body"><div className="finalist-word">FINALIST<span> / HACKATHON</span></div><div className="achievement-metrics"><div><strong>Top 3%</strong><span>of 10,000+ registrants</span></div><div><strong>Top 300</strong><span>finalists selected</span></div></div><p>Selected among the top 300 finalists from 10,000+ registrants.</p><div className="certificate-note">Certificate confirms participation in Bessemer Tech Catalyst.</div><div className="certificate-actions"><a className="certificate-link" href={publicPath('Uma_Shankar_hackthn_cert.pdf')} target="_blank" rel="noreferrer">View Certificate <Icon name="arrow" /></a><a className="certificate-download" href={publicPath('Uma_Shankar_hackthn_cert.pdf')} download="Uma_Shankar_hackthn_cert.pdf">Download PDF <Icon name="download" /></a></div></div><div className="achievement-card-foot"><span>01 — 02</span><span>COMPETITIVE SELECTION</span></div></article></Reveal>
      <Reveal className="secondary-achievement" delay={90}><article className="honor-card"><span className="eyebrow">PROBLEM SOLVING</span><div className="honor-rating">5<span>★</span></div><h3>HackerRank</h3><p>5-Star rating in Problem Solving and Python.</p><div className="honor-tags"><span>PROBLEM SOLVING</span><span>PYTHON</span></div></article></Reveal>
    </div>
  </section>;
}
