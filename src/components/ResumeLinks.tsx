import { Icon } from './Icons';

// Open the GitHub PDF viewer in a new tab for "View Resume" so the browser shows the PDF inline.
const viewUrl = 'https://github.com/uma-shankar-21/portfolio/blob/main/Uma_Shankar_Resume.pdf';
// Use the raw.githubusercontent URL for explicit download (used by the Download button).
const downloadUrl = 'https://raw.githubusercontent.com/uma-shankar-21/portfolio/main/Uma_Shankar_Resume.pdf';

export function ResumeLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`resume-links ${compact ? 'resume-links-compact' : ''}`}>
    <a className="button button-quiet" href={viewUrl} target="_blank" rel="noreferrer">View Resume <Icon name="external" /></a>
    {!compact && <a className="button button-outline" href={downloadUrl} download="Uma_Shankar_Resume.pdf">Download Resume <Icon name="download" /></a>}
  </div>;
}
