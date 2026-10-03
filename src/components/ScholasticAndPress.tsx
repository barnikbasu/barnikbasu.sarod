import React from 'react';
import { Newspaper, GraduationCap, BookOpen, Terminal } from 'lucide-react';

export const ScholasticAndPress: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-black border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Scholastic Profile */}
          <div className="bg-[#0a0a0a] border border-[#222222] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#CC0000]" />
                <span className="text-xs font-display tracking-widest text-[#888888] uppercase">
                  SCHOLASTIC FOUNDATION // ACADEMICS
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-2">
                BEYOND MUSIC: SCHOLASTIC PROFILE
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#999999] leading-relaxed mb-6">
                Parallel to his profound classical immersion, Barnik Basu sustains high academic excellence, pursuing Computer Science & Engineering at IIIT Kalyani.
              </p>

              <div className="space-y-4">
                <div className="bg-black border border-[#1f1f1f] p-4 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[#CC0000] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display text-xs text-white font-bold tracking-wide">
                      INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, KALYANI
                    </div>
                    <div className="text-[11px] text-[#CC0000] font-display tracking-wider">
                      B.Tech in Computer Science & Engineering · 2025–2029
                    </div>
                    <div className="text-[11px] text-[#777777] font-body mt-0.5">
                      Institute of National Importance
                    </div>
                  </div>
                </div>

                <div className="bg-black border border-[#1f1f1f] p-4 flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-[#CC0000] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display text-xs text-white font-bold tracking-wide">
                      JOINT ENTRANCE EXAMINATION (JEE MAIN) 2025
                    </div>
                    <div className="text-[11px] text-[#CC0000] font-display tracking-wider">
                      97.52 Percentile
                    </div>
                    <div className="text-[11px] text-[#777777] font-body mt-0.5">
                      Among the top 2.5% of 1.5M+ registered candidates
                    </div>
                  </div>
                </div>

                <div className="bg-black border border-[#1f1f1f] p-4 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#CC0000] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display text-xs text-white font-bold tracking-wide">
                      ST. XAVIER'S INSTITUTION, PANIHATI
                    </div>
                    <div className="text-[11px] text-[#888888] font-display tracking-wider">
                      Academic Schooling · 2010–2025
                    </div>
                    <div className="text-[11px] text-[#777777] font-body mt-0.5">
                      15 Years of Foundational & Senior Secondary Education
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1a1a1a] text-[11px] font-display tracking-wider text-[#888888] space-y-0.5">
              <div className="text-[#CC0000] font-bold uppercase tracking-widest text-[10px]">IDENTITY</div>
              <div className="text-[#CCCCCC]">Primary vocation: Sarodist · Hindustani Classical Music</div>
              <div className="text-[#888888]">Junior Scholar · Sarod · ITC Sangeet Research Academy</div>
            </div>
          </div>

          {/* Right Column: Press Reviews & Dispatches */}
          <div className="bg-[#0a0a0a] border border-[#222222] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#CC0000]" />
                <span className="text-xs font-display tracking-widest text-[#888888] uppercase">
                  CRITICAL RECEPTION // ARCHIVE
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-2">
                PRESS REVIEWS & DISPATCHES
              </h3>
              <div className="text-xs font-display tracking-widest text-[#CC0000] uppercase font-semibold mb-6">
                NEWSPAPER AND JOURNAL ARTICLES
              </div>

              {/* Intentional Archive Placeholder Card */}
              <div className="bg-black border border-[#222222] p-8 text-center flex flex-col items-center justify-center my-4">
                <div className="w-12 h-12 bg-[#121212] border border-[#2a2a2a] flex items-center justify-center mb-4 text-[#CC0000]">
                  <Newspaper className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg text-white font-bold tracking-wider uppercase mb-2">
                  PRESS ARCHIVE
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#888888] max-w-sm mb-4 leading-relaxed">
                  Verified newspaper reviews, critical analyses, and journal features will appear here. Recital reviews are currently being archived for publication.
                </p>
                <div className="inline-block bg-[#141414] border border-[#262626] text-[10px] font-display tracking-widest text-[#AAAAAA] px-3 py-1 uppercase">
                  STATUS: RECEPTIVE TO PRESS & CRITICAL ENQUIRIES
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between text-[11px] font-display tracking-wider text-[#666666]">
              <span>PRESS CONTACT: barnikbasu@gmail.com</span>
              <span className="text-[#CC0000]">KOLKATA Sabhas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
