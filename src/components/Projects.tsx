import { projects } from '../data/portfolio';
import { Icon } from './Icons';
import { Reveal } from './Reveal';

export function Projects() {
  return <section className="section-wrap section-block projects-section" id="projects">
    <Reveal className="section-heading-row"><div><p className="eyebrow"></p><h2>Built with intent.<br /><span>Grounded in reality.</span></h2></div><p className="section-lede">A closer look at systems spanning applied AI, privacy, backend infrastructure, and product interfaces.</p></Reveal>
    <div className="projects-grid">{projects.map((project, i) => <Reveal key={project.number} delay={i * 90}><article className="project-card"><div className="project-card-top"><span className="project-number">{project.number} / 03</span><span className="project-mark"><Icon name="external" /></span></div><div className="project-title-group"><h3>{project.title}</h3><p>{project.subtitle}</p></div><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" className="project-link">View Project <Icon name="arrow" /></a><div className="project-index-watermark" aria-hidden="true">{project.number}</div></article></Reveal>)}</div>
  </section>;
}
