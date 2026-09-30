import { links, socialLinks } from "../data/portfolio";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <div className="footer-identity">
          <a className="wordmark" href="#top">
            <span className="wordmark-mark">
              U S<span></span>
            </span>
            <span>Uma Shankar Kommireddy</span>
          </a>
          <p>AI/ML &amp; Full Stack Engineer</p>
        </div>
        <nav className="footer-socials" aria-label="Social links">
          {socialLinks.map(({ label, href, icon }) => (
            <a href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon name={icon} />
              {label}
            </a>
          ))}
          <a href={`mailto:${links.email}`}>
            <Icon name="mail" />
            Email
          </a>
        </nav>
        <div className="footer-bottom">
          <span>© 2026 Uma Shankar Kommireddy</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
