import { Icon } from './Icons';

// Use the raw.githubusercontent URL so the browser opens the PDF file itself (renders inline in most browsers).
const rawUrl = 'https://raw.githubusercontent.com/uma-shankar-21/portfolio/main/Uma_Shankar_Resume.pdf';

export function ResumeLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`resume-links ${compact ? 'resume-links-compact' : ''}`}>
    <a className="button button-quiet" href={rawUrl} target="_blank" rel="noopener noreferrer">View Resume <Icon name="external" /></a>
    {!compact && <a className="button button-outline" href={rawUrl} download="Uma_Shankar_Resume.pdf">Download Resume <Icon name="download" /></a>}
  </div>;
}
