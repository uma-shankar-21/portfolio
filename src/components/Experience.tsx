import { Reveal } from './Reveal';
import { Icon } from './Icons';

const experience = [
  {
    company: 'Guidizy', role: 'Software Engineer (Full Stack & AI)', date: 'Jul 2025 — Aug 2026', location: 'Remote', index: '01',
    points: [
      'Designed and shipped reusable LLM/AI integrations using RAG and Model Context Protocol (MCP) for agentic workflow automation across 10+ backend microservices.',
      'Replaced manual FAQ-node creation with an AI-driven pipeline that generates FAQ nodes from customer-uploaded knowledge-base PDFs, reducing manual effort by 99%.',
      'Built asynchronous execution pipelines using Redis, Server-Sent Events, Node.js, TypeScript, and PostgreSQL to support real-time workflow execution.',
      'Implemented PII detection, data anonymization, Semgrep, and OWASP ZAP to improve privacy and security across AI processing and CI pipelines.',
    ],
  },
  {
    company: 'QualityKiosk Technologies', role: 'Digital Quality Engineer', date: 'Apr 2024 — Jun 2025', location: 'Mumbai', index: '02',
    points: ['Validated REST APIs and backend data integrity using SQL verification and regression testing for a banking wealth-management platform, resolving 70+ Jira tickets while collaborating with engineering teams to triage defects.'],
    project: true,
  },
];

export function Experience() {
  return <section className="section-wrap section-block experience-section" id="experience">
    <Reveal className="section-heading-row"><div><p className="eyebrow"></p><h2>Work that meets<br /><span>the real world.</span></h2></div><p className="section-lede">Building AI-enabled software and validating the systems people rely on.</p></Reveal>
    <div className="timeline">{experience.map((job, i) => <Reveal key={job.company} delay={i * 100}><article className="timeline-entry"><div className="timeline-marker"><span>{job.index}</span><i /></div><div className="timeline-main"><div className="experience-top"><div><p className="experience-company">{job.company}</p><h3>{job.role}</h3></div><div className="experience-meta"><span>{job.date}</span><span><Icon name="pin" />{job.location}</span></div></div><ul className="experience-points">{job.points.map((point) => <li key={point}>{point}</li>)}</ul>{job.project && <div className="client-project"><div className="client-project-head"><div><span className="eyebrow">PROJECT / CLIENT</span><h4>Finacle Wealth Management System</h4><p>HDFC Bank <span>·</span> Mumbai (Offsite)</p></div><span className="project-type">FULL TIME</span></div><p className="client-period">Jun 2024 — Jun 2025</p><div className="qa-responsibilities"><div><span>01</span>Functional testing against expected behaviour</div><div><span>02</span>Daily stakeholder discussions and defect assignment to developers</div><div><span>03</span>Test reports and daily status reports for stakeholders</div><div><span>04</span>Test scenarios, test cases, and defect lifecycle</div></div></div>}</div></article></Reveal>)}</div>
  </section>;
}
