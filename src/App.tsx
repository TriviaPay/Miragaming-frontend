import { type FC, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import GamesGrid from './components/home/GamesGrid';
import AboutSection from './components/home/AboutSection';
import ContactFooter from './components/layout/ContactFooter';
import LegalPage from './components/legal/LegalPage';
import { getLegalPageByPath } from './content/legalPages';
import { isHomePath, normalizePath, scrollToHomeSection } from './config/paths';
import './App.css';

const App: FC = () => {
  const pathname = normalizePath(window.location.pathname);
  const legalPage = getLegalPageByPath(pathname);

  useEffect(() => {
    if (legalPage) {
      window.scrollTo(0, 0);
      return;
    }

    if (isHomePath(window.location.pathname)) {
      scrollToHomeSection(window.location.pathname);
    }
  }, [legalPage, pathname]);

  if (legalPage) {
    return (
      <div className="app-wrapper">
        <Navbar />
        <LegalPage page={legalPage} />
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <GamesGrid />
        <AboutSection />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
