import { skillGroups } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Skills() {
  return <section className="section-wrap section-block skills-section" id="skills">
    <Reveal className="section-heading-row"><div><p className="eyebrow"></p><h2>Skills for the<br /><span>work at hand.</span></h2></div><p className="section-lede">A practical stack across applied AI, full-stack development, data, and secure delivery.</p></Reveal>
    <div className="skills-grid">{skillGroups.map((group, i) => <Reveal key={group.title} delay={i * 45}><article className="skill-group"><h3>{group.title}</h3><div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article></Reveal>)}</div>
  </section>;
}
