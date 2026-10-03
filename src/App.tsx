import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JourneyQuote } from './components/JourneyQuote';
import { Biography } from './components/Biography';
import { StatsBar } from './components/StatsBar';
import { Awards } from './components/Awards';
import { Videos } from './components/Videos';
import { Photos } from './components/Photos';
import { ScholasticAndPress } from './components/ScholasticAndPress';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'biography', 'awards', 'videos', 'photos', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#CCCCCC] font-body selection:bg-[#CC0000] selection:text-white">
      {/* Sticky Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreBio={() => scrollTo('biography')}
          onWatchVideos={() => scrollTo('videos')}
        />

        {/* 2. Philosophy & Creed (A Journey with the Sarod) */}
        <JourneyQuote />

        {/* 3. Biography & Guru-Shishya Tradition (Profile, Gurus, Performances) */}
        <Biography />

        {/* 4. Numerical Milestones Bar */}
        <StatsBar />

        {/* 5. Awards & Achievements */}
        <Awards />

        {/* 6. Featured Videos & Audiovisual Archive */}
        <Videos />

        {/* 7. Captured Moments Photo Gallery */}
        <Photos />

        {/* 8. Scholastic Profile & Press Reviews */}
        <ScholasticAndPress />

        {/* 9. Contact & Booking Form with Constellation Canvas */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Back to Top Control */}
      <BackToTop />
    </div>
  );
}
