import { useEffect, useRef, type FormEvent, type KeyboardEvent } from 'react';
import { links, socialLinks } from '../data/portfolio';
import { Icon } from './Icons';

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.classList.add('modal-open');
    closeRef.current?.focus();
    const escape = (event: globalThis.KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('keydown', escape);
      document.body.classList.remove('modal-open');
      previous?.focus();
    };
  }, [open, onClose]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not(:disabled), input, textarea')].filter((el) => el.offsetParent !== null);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${String(data.get('name') ?? '').trim()}`;
    const body = `Name: ${String(data.get('name') ?? '').trim()}\nEmail: ${String(data.get('email') ?? '').trim()}\n\nMessage:\n${String(data.get('message') ?? '').trim()}`;
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  if (!open) return null;
  return <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-title" aria-describedby="contact-description" ref={dialogRef} onKeyDown={onKeyDown}>
      <button className="modal-close" ref={closeRef} aria-label="Close contact dialog" onClick={onClose}><Icon name="close" /></button>
      <div className="contact-panel"><p className="eyebrow"><span className="status-dot" /> OPEN TO A GOOD CONVERSATION</p><h2 id="contact-title">Let's build something meaningful.</h2><p id="contact-description" className="contact-description">Have a project, opportunity, or engineering problem in mind? I'd be happy to connect.</p>
        <a className="contact-email" href={`mailto:${links.email}`}><span className="contact-icon"><Icon name="mail" /></span><span><small>EMAIL</small>{links.email}</span><Icon className="contact-arrow" name="arrow" /></a>
        <div className="contact-social-list">{socialLinks.map(({ label, href, icon }) => <a href={href} target="_blank" rel="noreferrer" key={label}><span><Icon name={icon} />{label}</span><span>View {label}<Icon name="external" /></span></a>)}</div>
        <div className="contact-bottom-note"><span>AI / FULL STACK ENGINEERING</span><span>RESPONDING TO SELECT OPPORTUNITIES</span></div>
      </div>
      <div className="contact-form-panel"><div className="form-heading"><p className="eyebrow">SEND A MESSAGE</p><p>Tell me a little about what you have in mind.</p></div><form onSubmit={submit}><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required placeholder="Your name" /><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" required rows={4} placeholder="A few details about your idea..." /><button className="button button-primary form-submit" type="submit">Send Message <Icon name="arrow" /></button><p className="form-note">Opens your email app with the message ready to send.</p></form></div>
    </div>
  </div>;
}
