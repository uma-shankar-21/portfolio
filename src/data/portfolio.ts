export const links = {
  github: 'https://github.com/uma-shankar-21',
  linkedin: 'https://www.linkedin.com/in/uma-shankar-054647239/',
  leetcode: 'https://leetcode.com/u/kommireddy2143/',
  email: 'kommireddy2143@gmail.com',
};

export const projects = [
  {
    number: '01',
    title: 'FATUY',
    subtitle: 'Financial Assistant That Understands You',
    description: 'A full-stack AI banking assistant with conversational access to account activity. It combines short and long-term memory with asynchronous processing for personalized responses.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Kafka'],
    href: 'https://github.com/uma-shankar-21/FATUY',
  },
  {
    number: '02',
    title: 'RAWJD',
    subtitle: 'Resume intelligence, grounded in evidence',
    description: 'A privacy-first resume and job-description platform using semantic retrieval and evidence-based generation. PII is tokenized before AI processing, with session data expiring after six hours.',
    tags: ['React', 'TypeScript', 'Express', 'Redis', 'RAG', 'SSE'],
    href: 'https://github.com/uma-shankar-21/RawJD',
  },
  {
    number: '03',
    title: 'Assessment',
    subtitle: 'Trace · AI e-commerce investigation',
    description: 'A local investigation demo that combines order data, FastAPI, MCP services, specialist agents, and a React interface to trace e-commerce issues back to database evidence.',
    tags: ['React', 'TypeScript', 'FastAPI', 'MCP', 'Ollama', 'MySQL'],
    href: 'https://github.com/uma-shankar-21/assesment',
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['Python', 'TypeScript', 'SQL', 'C++'] },
  { title: 'AI & applied AI', items: ['LLM Integration', 'AI Agents', 'Agentic Workflows', 'RAG', 'MCP', 'LangChain', 'LangGraph', 'Ollama'] },
  { title: 'Backend & APIs', items: ['FastAPI', 'Django', 'Node.js', 'REST APIs', 'GraphQL', 'Microservices', 'Server-Sent Events'] },
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Material UI'] },
  { title: 'Databases & retrieval', items: ['PostgreSQL', 'MySQL', 'Redis', 'pgvector'] },
  { title: 'Cloud & production', items: ['Docker', 'AWS (Basics)', 'Git', 'GitHub Actions', 'GitLab CI/CD', 'Kafka'] },
  { title: 'Security & data privacy', items: ['PII Detection', 'Data Anonymization', 'Data Privacy', 'Presidio', 'Semgrep', 'OWASP ZAP'] },
];

export const socialLinks = [
  { label: 'GitHub', href: links.github, icon: 'github' },
  { label: 'LinkedIn', href: links.linkedin, icon: 'linkedin' },
  { label: 'LeetCode', href: links.leetcode, icon: 'leetcode' },
] as const;
