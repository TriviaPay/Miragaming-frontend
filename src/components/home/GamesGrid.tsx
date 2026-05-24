import React, { type CSSProperties } from 'react';
import { useInView } from '../../hooks/useInView';
import './GamesGrid.css';

type Game = {
  title: string;
  description: string;
  image: string;
  color: string;
  genre: string;
  platform: string;
};

const games: Game[] = [
  {
    title: 'COIN DROP DASH',
    description: 'Master the gravity-defying challenge, collect coins, and outpace the clock in this hyper-casual thrill.',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop',
    color: '#fbbf24',
    genre: 'Hyper Casual',
    platform: 'Web + App',
  },
  {
    title: 'LUDO LEAGUE',
    description: 'Fast multiplayer ludo with private rooms, tournaments, and emoji-powered play.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop',
    color: '#a78bfa',
    genre: 'Family PvP',
    platform: 'Mobile + PC',
  },
  {
    title: 'SNAKE & LADDER',
    description: 'Climb fast, dodge snakes, and race to the finish in ranked and casual rooms.',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070&auto=format&fit=crop',
    color: '#2563eb',
    genre: 'Board Classic',
    platform: 'Mobile + Web',
  },
  {
    title: 'TRIVIA COIN',
    description: 'Answer timed trivia rounds, streak wins, and earn coins on the leaderboard.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    color: '#f97316',
    genre: 'Quiz Battle',
    platform: 'Web + App',
  },
];

const GamesGrid: React.FC = () => {
  const { elementRef, isInView } = useInView<HTMLElement>({
    threshold: 0.14,
    rootMargin: '0px 0px -10% 0px',
  });

  return (
    <section
      className={`games-section section-shell fade-section ${isInView ? 'is-visible' : ''}`}
      id="games"
      ref={elementRef}
    >
      <div className="container">
        <div className="section-header">
          <p className="section-tag">OUR GAMES</p>
          <h2 className="section-title">Games Developed</h2>
          <p className="section-subtitle">
            Casual board and quiz titles from <span className="gradient-text">MiraGaming</span>, crafted for fast fun and replay.
          </p>
          <div className="title-glow"></div>
        </div>

        <div className="games-grid">
          {games.map((game, index) => (
            <article
              className="game-card glass-morphism"
              key={game.title}
              style={{
                '--accent-color': game.color,
                '--stagger-delay': `${index * 120}ms`,
              } as CSSProperties}
            >
              <div className="game-img-wrapper">
                <img src={game.image} alt={game.title} className="game-img" />
                <div className="card-gradient"></div>
                <div className="game-badge">{game.genre}</div>
              </div>
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-desc">{game.description}</p>
                <div className="game-meta">
                  <span>{game.platform}</span>
                  <span>Live Ops Ready</span>
                </div>
                <a href="#" className="learn-more">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesGrid;
