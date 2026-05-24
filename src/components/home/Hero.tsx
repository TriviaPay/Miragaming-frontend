import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section section-shell" id="home">
      <div className="hero-background">
        <img
          src="https://stock.adobe.com/search?k=games+pattern"
          alt="Games pattern banner"
          className="hero-bg-img"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop';
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-grid-overlay" />
        <div className="hero-animated-layers" aria-hidden="true">
          <div className="hero-scanline" />
          <div className="hero-hud-ring hero-hud-ring-a" />
          <div className="hero-hud-ring hero-hud-ring-b" />
          <div className="hero-energy-orb" />
          <div className="hero-particle-field">
            <span className="particle p1" />
            <span className="particle p2" />
            <span className="particle p3" />
            <span className="particle p4" />
            <span className="particle p5" />
            <span className="particle p6" />
            <span className="particle p7" />
          </div>
          <div className="hero-laser-trails">
            <span className="laser laser-a" />
            <span className="laser laser-b" />
            <span className="laser laser-c" />
          </div>
          <div className="hero-target-nodes">
            <span className="target-node node-a" />
            <span className="target-node node-b" />
            <span className="target-node node-c" />
          </div>
          <div className="hero-input-cluster">
            <span className="input-chip chip-a">A</span>
            <span className="input-chip chip-b">B</span>
            <span className="input-chip chip-x">X</span>
            <span className="input-chip chip-y">Y</span>
          </div>
        </div>
      </div>

      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <p className="hero-kicker">Fun Casual Games</p>
          <h1 className="hero-title">
            <span className="gradient-text">MiraGaming</span>
          </h1>
          <p className="hero-subtitle">
            Play Snake & Ladder, Ludo, and Trivia Coin in one fast, colorful, and competitive gaming hub.
          </p>

          <div className="hero-actions">
            <a href="#games" className="primary-btn">
              View Our Games
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </div>

          <div className="hero-status-ticker" aria-label="Live studio events">
            <div className="ticker-track">
              <span>Snake & Ladders Live Rooms</span>
              <span>Ludo League Tournament Open</span>
              <span>Trivia Coin Daily Challenge</span>
              <span>Quiz Master Bonus Round</span>
            </div>
            <div className="ticker-track" aria-hidden="true">
              <span>Snake & Ladders Live Rooms</span>
              <span>Ludo League Tournament Open</span>
              <span>Trivia Coin Daily Challenge</span>
              <span>Quiz Master Bonus Round</span>
            </div>
          </div>

          <div className="hero-metrics">
            <div className="metric-pill">
              <span className="metric-value">4+</span>
              <span className="metric-label">Featured Games</span>
            </div>
            <div className="metric-pill">
              <span className="metric-value">1M+</span>
              <span className="metric-label">Matches Played</span>
            </div>
            <div className="metric-pill">
              <span className="metric-value">24/7</span>
              <span className="metric-label">Live Tournaments</span>
            </div>
          </div>
        </div>

        <aside className="hero-surface glass-morphism" aria-label="Studio highlights">
          <div className="surface-header">
            <p>Live Gaming Snapshot</p>
            <span className="live-dot">Online</span>
          </div>
          <div className="surface-row">
            <span>Active board tables</span>
            <strong>12,480</strong>
          </div>
          <div className="surface-row">
            <span>Trivia coin pool</span>
            <strong>243,000</strong>
          </div>
          <div className="surface-row">
            <span>Mini-game top score</span>
            <strong>9,820</strong>
          </div>
          <div className="surface-chart">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
