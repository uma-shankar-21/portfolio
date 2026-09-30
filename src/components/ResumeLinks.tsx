import { Icon } from './Icons';

export function ResumeLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`resume-links ${compact ? 'resume-links-compact' : ''}`}>
    <a className="button button-quiet" href="/Uma_Shankar_Resume.pdf" target="_blank" rel="noreferrer">View Resume <Icon name="external" /></a>
    {!compact && <a className="button button-outline" href="/Uma_Shankar_Resume.pdf" download="Uma_Shankar_Resume.pdf">Download Resume <Icon name="download" /></a>}
  </div>;
}
