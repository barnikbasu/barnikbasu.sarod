import React from 'react';
import { Award, Trophy, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 sm:py-28 bg-[#050505] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#CC0000]" />
              <span className="text-xs font-display tracking-widest text-[#888888] uppercase">
                HONORS & RECOGNITION // VERIFIED CITATIONS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              AWARDS & ACHIEVEMENTS
            </h2>
          </div>
          <div className="text-xs font-display tracking-widest text-[#888888] max-w-sm">
            Unblemished, verified achievements recognizing technical dexterity, raga fidelity, and dedicated scholastic advancement in classical instrumental music.
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Monument Frame */}
          <div className="lg:col-span-5 bg-black border border-[#222222] p-4 flex flex-col justify-between group">
            <div className="relative aspect-[4/3] bg-[#121212] overflow-hidden mb-4 border border-[#1a1a1a]">
              <img
                src={IMAGES.awards}
                alt="Sarod at Baithak Recital"
                className="w-full h-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#CC0000] text-white font-display text-[10px] tracking-widest px-2.5 py-1 uppercase font-bold">
                MAIHAR GHARANA HERITAGE
              </div>
            </div>

            <div>
              <div className="font-display text-sm text-white font-semibold tracking-wider uppercase mb-1">
                KOLKATA HERITAGE BAITHAK
              </div>
              <p className="font-body text-xs text-[#888888] leading-relaxed">
                25-string Maihar Sarod resting before an acoustic sabha session. Handcrafted teakwood resonator and mirror-finished steel fingerboard attuned to kharoj-pancham.
              </p>
            </div>
          </div>

          {/* Right Column: Verified Achievements List */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Achievement 1 */}
            <div className="bg-[#0c0c0c] border border-[#222222] border-l-4 border-l-[#CC0000] p-6 sm:p-7 hover:border-[#333333] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="bg-[#CC0000] text-white text-[10px] font-display tracking-widest px-2 py-0.5 font-bold uppercase">
                  2025 // ALL-INDIA COMPETITION
                </span>
                <span className="text-xs font-display tracking-widest text-[#888888]">
                  IIT MADRAS
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mb-1">
                WINNER — INSTRUMENTALS CATEGORY
              </h3>
              <div className="font-display text-xs text-[#CC0000] tracking-widest uppercase font-semibold mb-3">
                VIBE IN SAAVAN · INDIAN INSTITUTE OF TECHNOLOGY MADRAS
              </div>
              <p className="font-body text-xs sm:text-sm text-[#AAAAAA] leading-relaxed mb-4">
                Secured 1st Place in the competitive Instrumentals Category at IIT Madras, Chennai, adjudicated by senior classical music critics and veteran artists for exemplary raga delineation, tonal purity, and laykari.
              </p>

              <div className="flex items-center gap-2 text-[11px] font-display tracking-wider text-[#777777] border-t border-[#1a1a1a] pt-3">
                <Trophy className="w-3.5 h-3.5 text-[#CC0000]" />
                <span>FIRST PRIZE GOLD DISTINCTION · SOLO SAROD RECITAL</span>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="bg-[#0c0c0c] border border-[#222222] border-l-4 border-l-[#333333] p-6 sm:p-7 hover:border-[#333333] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="bg-[#1f1f1f] text-white text-[10px] font-display tracking-widest px-2 py-0.5 font-bold uppercase">
                  2026 // INSTITUTIONAL FELLOWSHIP
                </span>
                <span className="text-xs font-display tracking-widest text-[#888888]">
                  ITC SRA KOLKATA
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mb-1">
                JUNIOR SCHOLAR APPOINTMENT
              </h3>
              <div className="font-display text-xs text-[#CCCCCC] tracking-widest uppercase font-semibold mb-3">
                ITC SANGEET RESEARCH ACADEMY · APRIL 2026 — PRESENT
              </div>
              <p className="font-body text-xs sm:text-sm text-[#AAAAAA] leading-relaxed mb-4">
                Selected as Junior Scholar in Sarod under the rigorous residential scholarship framework of ITC SRA, Kolkata. Cultivating master-level raga development and performance under prestigious Guru supervision.
              </p>

              <div className="flex items-center gap-2 text-[11px] font-display tracking-wider text-[#777777] border-t border-[#1a1a1a] pt-3">
                <Award className="w-3.5 h-3.5 text-[#CC0000]" />
                <span>RESIDENTIAL SCHOLARSHIP · ADVANCED GURU-SHISHYA MENTORSHIP</span>
              </div>
            </div>

            {/* Additional Credential Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-display tracking-wider">
              <div className="bg-black border border-[#1f1f1f] p-3 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0" />
                <span className="text-[#CCCCCC]">14+ Years of Rigorous Sādhanā</span>
              </div>
              <div className="bg-black border border-[#1f1f1f] p-3 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0" />
                <span className="text-[#CCCCCC]">Full-Time ITC SRA Residential Scholar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
