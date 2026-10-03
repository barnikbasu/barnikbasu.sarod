import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'biography', label: 'BIOGRAPHY' },
  { id: 'awards', label: 'AWARDS & ACHIEVEMENTS' },
  { id: 'videos', label: 'VIDEOS' },
  { id: 'photos', label: 'PHOTOS' },
  { id: 'contact', label: 'CONTACT' },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        scrolled ? 'bg-black/95 border-[#222222] shadow-2xl backdrop-blur-md' : 'bg-black border-[#1a1a1a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Wordmark (Zone 1) */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#CC0000]"
          aria-label="Barnik Basu Home"
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white group-hover:text-[#CC0000] transition-colors">
              BARNIK BASU
            </span>
            <span className="w-1.5 h-1.5 bg-[#CC0000] self-end mb-2"></span>
          </div>
        </button>

        {/* Desktop Navigation (Zone 2) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-display text-sm tracking-widest px-4 py-2 transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#CC0000] text-white font-semibold'
                    : 'text-[#CCCCCC] hover:text-white hover:bg-[#141414]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action / Status Badge (Zone 3) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-1.5 font-display text-xs tracking-widest px-3 py-1.5 border border-[#333333] hover:border-[#CC0000] hover:text-white text-[#AAAAAA] transition-colors"
          >
            <span>BOOKINGS</span>
            <ArrowUpRight className="w-3 h-3 text-[#CC0000]" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:bg-[#1a1a1a] border border-[#222222] focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-18 bottom-0 bg-black/98 border-t border-[#222222] z-50 flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex flex-col gap-2 pt-4">
            <span className="text-xs font-display tracking-widest text-[#666666] mb-2 px-3">
              NAVIGATION // ARCHIVE DIRECTORY
            </span>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-display text-xl tracking-wider py-3 px-4 transition-colors ${
                    isActive
                      ? 'bg-[#CC0000] text-white font-semibold'
                      : 'text-[#CCCCCC] hover:text-white hover:bg-[#111111]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#222222] flex flex-col gap-3 pb-6">
            <div className="text-xs text-[#888888]">
              <p className="font-display tracking-wider text-white">BARNIK BASU</p>
              <p>Sarodist · Hindustani Classical Music</p>
              <p className="text-[#CC0000] mt-1">ITC Sangeet Research Academy, Kolkata</p>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#CC0000] text-white font-display text-sm tracking-widest py-3 font-semibold uppercase hover:bg-[#990000] transition-colors"
            >
              SEND DIRECT MESSAGE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
