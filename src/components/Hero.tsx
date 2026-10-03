import React from 'react';
import { ArrowDown, Award, Play } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onExploreBio: () => void;
  onWatchVideos: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreBio, onWatchVideos }) => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-[#222222] overflow-hidden bg-black">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Barnik Basu Sarod Recital"
          className="w-full h-full object-cover object-center opacity-35 grayscale transition-all duration-500 ease-out hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Gradients & Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges / Monograph Kickers */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#CC0000] text-white text-xs font-display tracking-widest px-3 py-1 font-semibold uppercase">
              OFFICIAL MONOGRAPH // 2026
            </span>
            <span className="hidden sm:inline-block text-xs font-display tracking-widest text-[#AAAAAA]">
              KOLKATA, INDIA · SENIA MAIHAR GHARANA
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-display tracking-widest text-[#CCCCCC] bg-[#121212]/90 border border-[#2a2a2a] px-3 py-1">
            <Award className="w-3.5 h-3.5 text-[#CC0000]" />
            <span>JUNIOR SCHOLAR — ITC SANGEET RESEARCH ACADEMY</span>
          </div>
        </div>

        {/* Main Title Lockup */}
        <div className="max-w-4xl">
          <div className="text-xs font-display tracking-widest text-[#888888] uppercase mb-2">
            INDIAN CLASSICAL SAROD VIRTUOSO
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white uppercase leading-[0.9] mb-4">
            BARNIK BASU
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-base sm:text-xl tracking-wider text-[#E0E0E0] uppercase font-medium mb-6">
            <span>SARODIST</span>
            <span className="text-[#CC0000]">▪</span>
            <span>HINDUSTANI CLASSICAL MUSIC</span>
            <span className="text-[#CC0000]">▪</span>
            <span>KOLKATA, INDIA</span>
          </div>

          <p className="font-body text-sm sm:text-base text-[#AAAAAA] max-w-2xl leading-relaxed mb-8">
            Steeped in rigorous classical riyaaz and the sacred guru-shishya parampara, Barnik Basu explores the deep resonance, vocal nuances, and intricate tantrakari of the Senia-Maihar gharana under the guidance of ITC SRA Gurus.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onExploreBio}
              className="bg-[#CC0000] hover:bg-[#990000] text-white font-display text-sm tracking-widest font-semibold px-6 py-3.5 uppercase transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>EXPLORE BIOGRAPHY</span>
              <span className="text-xs">→</span>
            </button>
            <button
              onClick={onWatchVideos}
              className="border border-[#444444] hover:border-[#CC0000] hover:text-white text-[#CCCCCC] bg-black/60 font-display text-sm tracking-widest font-semibold px-6 py-3.5 uppercase transition-colors cursor-pointer flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-[#CC0000] fill-current" />
              <span>WATCH RECITALS</span>
            </button>
          </div>
        </div>

        {/* Bottom Metadata Ledger & Scroll Cue */}
        <div className="pt-8 border-t border-[#222222] grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="border-l-2 border-[#CC0000] pl-3">
            <div className="text-[10px] font-display tracking-widest text-[#777777] uppercase">DISCIPLINE</div>
            <div className="font-display text-sm text-white tracking-wide">HINDUSTANI CLASSICAL SAROD</div>
          </div>

          <div className="border-l-2 border-[#333333] pl-3">
            <div className="text-[10px] font-display tracking-widest text-[#777777] uppercase">INSTITUTION</div>
            <div className="font-display text-sm text-white tracking-wide">ITC SANGEET RESEARCH ACADEMY</div>
          </div>

          <div className="border-l-2 border-[#333333] pl-3">
            <div className="text-[10px] font-display tracking-widest text-[#777777] uppercase">LINEAGE</div>
            <div className="font-display text-sm text-white tracking-wide">SENIA MAIHAR GHARANA</div>
          </div>

          <div className="flex items-center justify-start md:justify-end gap-2 text-[#888888] font-display text-xs tracking-widest">
            <span className="text-white">SCROLL DOWN</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#CC0000] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
