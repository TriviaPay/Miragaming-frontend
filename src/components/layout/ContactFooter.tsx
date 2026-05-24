import React, { type CSSProperties } from 'react';
import { useInView } from '../../hooks/useInView';
import './ContactFooter.css';

const socials = [
  { name: 'Discord', label: 'D' },
  { name: 'Twitter', label: 'X' },
  { name: 'YouTube', label: 'Y' },
  { name: 'Instagram', label: 'I' },
  { name: 'LinkedIn', label: 'L' },
];

const openings = ['Game Developer', 'UI/UX Designer', '3D Artist', 'Marketing Manager'];

const ContactFooter: React.FC = () => {
  const { elementRef, isInView } = useInView<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px',
  });

  return (
    <footer
      className={`contact-footer section-shell fade-section ${isInView ? 'is-visible' : ''}`}
      id="contact"
      ref={elementRef}
    >
      <div className="container footer-headline">
        <p>Have a project, publishing idea, or co-dev opportunity?</p>
        <a href="#" className="headline-btn">
          Book a discovery call
        </a>
      </div>

      <div className="container footer-grid">
        <div className="footer-section footer-contact">
          <h3 className="footer-title">Contact Details</h3>
          <div className="contact-info">
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <p className="label">Email</p>
                <p className="value">hello@miragaming.com</p>
              </div>
            </div>

            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .81 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.81 2 2 0 0 1 1.72 2z"></path>
              </svg>
              <div>
                <p className="label">Phone</p>
                <p className="value">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <p className="label">Studio Address</p>
                <p className="value">
                  123 Game Studio Way
                  <br />
                  Madison, Wisconsin, USA
                </p>
              </div>
            </div>
          </div>

          <div className="social-connect">
            <p className="label">Connect With Us</p>
            <div className="social-icons">
              {socials.map((social) => (
                <a href="#" key={social.name} className="social-icon" aria-label={social.name}>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-section footer-message">
          <h3 className="footer-title">Send Us a Message</h3>
          <form className="message-form">
            <div className="form-row">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <textarea placeholder="Message" className="form-textarea" rows={4}></textarea>
            <button type="submit" className="send-btn">
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>

        <div className="footer-section footer-opportunities">
          <div className="careers-section">
            <h3 className="footer-title">Careers / Opportunities</h3>
            <p className="careers-text">Join Our Team</p>
            <p className="careers-subtext">
              We are always looking for passionate individuals to help us create the next generation of games.
            </p>
            <ul className="openings-list">
              {openings.map((opening, index) => (
                <li key={opening} style={{ '--opening-delay': `${index * 90}ms` } as CSSProperties}>
                  <span>{opening}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </li>
              ))}
            </ul>
            <a href="#" className="view-careers-btn">
              View Careers
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="partnership-section glass-morphism">
            <h3 className="footer-title">Work With Us</h3>
            <p className="partnership-text">
              We partner with publishers and platforms worldwide to bring innovative games to life.
            </p>
            <button className="partnership-btn" type="button">
              Partnership Inquiries
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <div className="logo tiny-logo">
            <span className="logo-mira">Mira</span>
            <span className="logo-gaming gradient-text">Gaming</span>
          </div>
          <p className="copyright">(c) 2026 <span className="gradient-text">MiraGaming</span>. All rights reserved.</p>
          <div className="bottom-socials">
            <div className="icon-group">
              {socials.map((social) => (
                <a href="#" key={`bottom-${social.name}`} className="icon-box-small" aria-label={social.name}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
