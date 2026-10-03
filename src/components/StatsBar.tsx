import React from 'react';

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-[#080808] border-b border-[#222222] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {/* Stat 1 */}
          <div className="border-l-2 border-[#CC0000] pl-4">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              14+
            </div>
            <div className="font-display text-xs font-semibold text-[#CC0000] tracking-widest uppercase mt-1">
              YEARS RIYAAZ & TALIM
            </div>
            <div className="text-[11px] text-[#777777] font-body mt-0.5">
              Disciplined Classical Sādhanā
            </div>
          </div>

          {/* Stat 2 */}
          <div className="border-l-2 border-[#333333] pl-4">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              1ST
            </div>
            <div className="font-display text-xs font-semibold text-[#CCCCCC] tracking-widest uppercase mt-1">
              Vibe in Savaan 25, IIT Madras
            </div>
            <div className="text-[11px] text-[#777777] font-body mt-0.5">
              Winner — Instrumentals Category
            </div>
          </div>

          {/* Stat 3 */}
          <div className="border-l-2 border-[#333333] pl-4">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              ITC SRA
            </div>
            <div className="font-display text-xs font-semibold text-[#CCCCCC] tracking-widest uppercase mt-1">
              Junior Scholar
            </div>
            <div className="text-[11px] text-[#777777] font-body mt-0.5">
              ITC Sangeet Research Academy
            </div>
          </div>

          {/* Stat 4 */}
          <div className="border-l-2 border-[#333333] pl-4">
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              97.52%
            </div>
            <div className="font-display text-xs font-semibold text-[#CCCCCC] tracking-widest uppercase mt-1">
              SCHOLASTIC RIGOR
            </div>
            <div className="text-[11px] text-[#777777] font-body mt-0.5">
              Joint Entrance Examination 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
