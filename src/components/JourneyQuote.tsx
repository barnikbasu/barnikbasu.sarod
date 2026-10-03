import React from 'react';
import { Quote } from 'lucide-react';

export const JourneyQuote: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#070707] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2.5 h-2.5 bg-[#CC0000]" />
          <span className="text-xs font-display tracking-widest text-[#999999] uppercase">
            PHILOSOPHY // ARTISTIC CREED
          </span>
        </div>

        {/* Contemporary Editorial Kicker */}
        <div className="text-[11px] font-display tracking-widest text-[#CC0000] uppercase font-bold mb-1">
          RIYAAZ & RESONANCE
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8">
          A JOURNEY WITH THE SAROD
        </h2>

        {/* Prominent Classical Creed Quote */}
        <div className="relative bg-[#0d0d0d] border border-[#222222] border-l-4 border-l-[#CC0000] p-6 sm:p-10 mb-12">
          <Quote className="absolute top-4 right-4 w-10 h-10 text-[#222222] pointer-events-none" />
          <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-white uppercase leading-snug mb-4">
            &ldquo;THE SAROD IS NOT MERELY STRUCK; IT IS INVOKED. EVERY STROKE CARRIES THREE GENERATIONS OF SĀDHANĀ, BRIDGING THE SILENCE OF THE TEMPLE WITH THE RESONANCE OF THE STRINGS.&rdquo;
          </blockquote>
          <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-4 mt-6">
            <span className="font-display text-xs tracking-widest text-[#CC0000] font-semibold uppercase">
              BARNIK BASU · KOLKATA, INDIA
            </span>
            <span className="text-xs font-display tracking-widest text-[#666666]">
              JUNIOR SCHOLAR — ITC SRA
            </span>
          </div>
        </div>

        {/* 3 Foundational Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-black border border-[#1f1f1f] p-6 hover:border-[#CC0000] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-xs tracking-widest text-[#CC0000] font-bold">
                01 · RIYAAZ MODE // SĀDHANĀ
              </span>
              <span className="w-1.5 h-1.5 bg-[#444444]" />
            </div>
            <h3 className="font-display text-lg text-white font-semibold mb-2">
              DISCIPLINED RIYAAZ
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#999999] leading-relaxed">
              Foundational acoustic riyaaz focusing on swara shuddhi (tonal purity), immaculate finger-callous placement on the steel fingerboard, and deep emotional poise.
            </p>
          </div>

          <div className="bg-black border border-[#1f1f1f] p-6 hover:border-[#CC0000] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-xs tracking-widest text-[#CC0000] font-bold">
                02. DHRUPAD-ANG
              </span>
              <span className="w-1.5 h-1.5 bg-[#444444]" />
            </div>
            <h3 className="font-display text-lg text-white font-semibold mb-2">
              GRAVITAS & EXPOSITION
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#999999] leading-relaxed">
              Unfolding meditative alap, expansive meend-glides across notes, and vocal phrasing shaped through the living Guru-Shishya tradition of the Senia-Shahjahanpur Gharana.
            </p>
          </div>

          <div className="bg-black border border-[#1f1f1f] p-6 hover:border-[#CC0000] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-xs tracking-widest text-[#CC0000] font-bold">
                03. TĀNTRAKĀRI
              </span>
              <span className="w-1.5 h-1.5 bg-[#444444]" />
            </div>
            <h3 className="font-display text-lg text-white font-semibold mb-2">
              RHYTHMIC VIRTUOSITY
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#999999] leading-relaxed">
              Mastery over intricate rhythmic cycles (tala), complex layakari, off-beat bol-patterns, and razor-sharp high-velocity jhala execution with coconut plectrum.
            </p>
          </div>
        </div>

        {/* Technical Instrument Specifications Bar */}
        <div className="bg-[#111111] border border-[#222222] p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-[10px] font-display tracking-widest text-[#666666] uppercase">INSTRUMENT</div>
            <div className="font-display text-xs sm:text-sm text-white font-semibold tracking-wider">25-STRING SAROD</div>
          </div>
          <div>
            <div className="text-[10px] font-display tracking-widest text-[#666666] uppercase">TUNING SYSTEM</div>
            <div className="font-display text-xs sm:text-sm text-white font-semibold tracking-wider">KHAROJ-PANCHAM</div>
          </div>
          <div>
            <div className="text-[10px] font-display tracking-widest text-[#666666] uppercase">HERITAGE</div>
            <div className="font-display text-xs sm:text-sm text-white font-semibold tracking-wider">SENIA SHAHJAHANPUR</div>
          </div>
          <div>
            <div className="text-[10px] font-display tracking-widest text-[#666666] uppercase">TRADITION</div>
            <div className="font-display text-xs sm:text-sm text-[#CC0000] font-semibold tracking-wider">GURU-SHISHYA PARAMPARA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
