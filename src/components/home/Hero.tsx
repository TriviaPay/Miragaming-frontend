import React from 'react';
import Lottie from 'lottie-react';
import heroBg from '../../assets/bg.png';
import hiThereAnimation from '../../assets/Hi there!.json';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section section-shell" id="home">
      <div className="hero-background">
        <img
          src={heroBg}
          alt="Mira Gaming studio background"
          className="hero-bg-img"
        />
      </div>

      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-visually-hidden">Mira Gaming</h1>
          <p className="hero-kicker">Independent Game Studio</p>
          <p className="hero-subtitle">
            Mira Gaming Private Limited designs and publishes mobile games built for everyday play.
            Walk Champ is available now; Trivia Coin and Vibe Link are in active development.
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

          <div className="hero-status-ticker" aria-label="Studio updates">
            <div className="ticker-track">
              <span>Walk Champ — Now Available</span>
              <span>Trivia Coin — In Development</span>
              <span>Vibe Link — In Development</span>
              <span>Mira Gaming Private Limited</span>
            </div>
            <div className="ticker-track" aria-hidden="true">
              <span>Walk Champ — Now Available</span>
              <span>Trivia Coin — In Development</span>
              <span>Vibe Link — In Development</span>
              <span>Mira Gaming Private Limited</span>
            </div>
          </div>

          <div className="hero-metrics">
            <div className="metric-pill">
              <span className="metric-value">3</span>
              <span className="metric-label">Pipeline</span>
            </div>
            <div className="metric-pill">
              <span className="metric-value">1</span>
              <span className="metric-label">Live</span>
            </div>
            <div className="metric-pill">
              <span className="metric-value">2</span>
              <span className="metric-label">In Development</span>
            </div>
          </div>
        </div>

        <div className="hero-mascot" aria-hidden="true">
          <div className="hero-mascot-scene">
            <div className="hero-mascot-ring hero-mascot-ring-a" />
            <div className="hero-mascot-ring hero-mascot-ring-b" />
            <Lottie
              animationData={hiThereAnimation}
              loop
              className="hero-mascot-lottie"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
