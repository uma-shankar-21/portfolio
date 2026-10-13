const resumeUrl = 'https://raw.githubusercontent.com/uma-shankar-21/portfolio/main/Uma_Shankar_Resume.pdf';

export function ResumeLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`resume-links ${compact ? 'resume-links-compact' : ''}`}>
    <a className="button button-quiet" href={resumeUrl} target="_blank" rel="noreferrer">View Resume <Icon name="external" /></a>
    {!compact && <a className="button button-outline" href={resumeUrl} download="Uma_Shankar_Resume.pdf">Download Resume <Icon name="download" /></a>}
  </div>;
}
