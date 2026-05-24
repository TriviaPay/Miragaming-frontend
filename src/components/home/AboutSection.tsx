import React, { type CSSProperties, type ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import './AboutSection.css';

type StatItem = {
  value: string;
  label: string;
  icon: ReactNode;
};

const stats: StatItem[] = [
  {
    value: '10+',
    label: 'Projects',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    value: '500K+',
    label: 'Players',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    value: '24/7',
    label: 'Support',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
];

const AboutSection: React.FC = () => {
  const { elementRef, isInView } = useInView<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });

  return (
    <section
      className={`about-section section-shell fade-section ${isInView ? 'is-visible' : ''}`}
      id="about"
      ref={elementRef}
    >
      <div className="container about-grid">
        <div className="about-content">
          <h2 className="section-title">
            About <span className="gradient-text">MiraGaming</span>
          </h2>
          <p className="about-text">
            <span className="gradient-text">MiraGaming</span> is a creative game development studio focused on building fun, competitive, and immersive gaming experiences.
            We push the boundaries of technology to create worlds that players never want to leave.
          </p>

          <div className="about-highlights">
            <span>Realtime multiplayer architecture</span>
            <span>Retention-focused UX systems</span>
            <span>Performance-first art pipeline</span>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                className="stat-item"
                key={stat.label}
                style={{ '--stat-delay': `${index * 120}ms` } as CSSProperties}
              >
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <div className="stat-info">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image-wrapper">
          <div className="image-border"></div>
          <img
            src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2071&auto=format&fit=crop"
            alt="Gaming Setup"
            className="about-img"
          />
          <div className="logo-overlay">
            <span className="logo-mira">M</span>
          </div>
          <div className="floating-card">
            <p>Studio Stack</p>
            <strong>Unity + Unreal + WebGL</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
