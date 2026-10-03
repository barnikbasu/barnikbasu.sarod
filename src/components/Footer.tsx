import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#1a1a1a] py-12 text-[#888888]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#141414] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                BARNIK BASU
              </span>
              <span className="w-1.5 h-1.5 bg-[#CC0000]" />
            </div>
            <div className="font-display text-xs text-[#AAAAAA] tracking-widest uppercase">
              SAROD · HINDUSTANI CLASSICAL MUSIC · KOLKATA, INDIA
            </div>
            <div className="text-[11px] font-body text-[#666666] mt-1">
              Junior Scholar — Sarod · ITC Sangeet Research Academy
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-display text-xs tracking-widest">
            <a href="#home" className="hover:text-white transition-colors">
              HOME
            </a>
            <a href="#biography" className="hover:text-white transition-colors">
              BIOGRAPHY
            </a>
            <a href="#awards" className="hover:text-white transition-colors">
              AWARDS
            </a>
            <a href="#videos" className="hover:text-white transition-colors">
              VIDEOS
            </a>
            <a href="#photos" className="hover:text-white transition-colors">
              PHOTOS
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              CONTACT
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-display tracking-wider text-[#666666]">
          <div>
            © {new Date().getFullYear()} BARNIK BASU. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#CC0000]">▪</span>
            <span className="uppercase">SENIA MAIHAR GHARANA TRADITION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
