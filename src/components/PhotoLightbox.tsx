import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoItem {
  id: string;
  plate: string;
  title: string;
  location: string;
  year: string;
  description: string;
  src: string;
}

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (photo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 p-4 sm:p-8 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="relative max-w-5xl w-full bg-black border border-[#262626] p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="bg-[#CC0000] text-white text-[10px] font-display tracking-widest px-2 py-0.5 font-bold uppercase">
              {photo.plate}
            </span>
            <span id="lightbox-title" className="font-display text-sm sm:text-base text-white font-bold tracking-wider uppercase">
              {photo.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#AAAAAA] hover:text-white hover:bg-[#1a1a1a] border border-[#333333] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Display with Nav Buttons */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden flex items-center justify-center">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full object-contain filter grayscale contrast-125"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/80 hover:bg-[#CC0000] text-white border border-[#333333] transition-colors cursor-pointer"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/80 hover:bg-[#CC0000] text-white border border-[#333333] transition-colors cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Meta */}
        <div className="mt-4 pt-3 border-t border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-display tracking-wider">
          <div className="text-[#AAAAAA]">
            <span>{photo.location}</span> · <span className="text-[#CC0000]">{photo.year}</span>
            <p className="font-body text-xs text-[#777777] mt-1">{photo.description}</p>
          </div>
          <div className="text-[11px] text-[#555555] shrink-0">
            USE ARROW KEYS OR ESC TO NAVIGATE
          </div>
        </div>
      </div>
    </div>
  );
};
