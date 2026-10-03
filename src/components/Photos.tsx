import React, { useState } from 'react';
import { ZoomIn, Camera } from 'lucide-react';
import { PhotoLightbox } from './PhotoLightbox';
import { IMAGES } from '../assets/images';

interface PhotoItem {
  id: string;
  plate: string;
  title: string;
  location: string;
  year: string;
  description: string;
  src: string;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    plate: 'PLATE 01',
    title: 'ITC SANGEET RESEARCH ACADEMY',
    location: 'Tollygunge, Kolkata',
    year: '2026',
    description: 'Scholar riyaaz session, perfecting bol-bani and stroke resonance under master tutelage.',
    src: IMAGES.plateTechnique,
  },
  {
    id: 'photo-2',
    plate: 'PLATE 02',
    title: 'VIBE IN SAAVAN — IIT MADRAS',
    location: 'IIT Madras, Chennai',
    year: '2025',
    description: '1st Prize solo Sarod performance in the Instrumentals Category at national level.',
    src: IMAGES.plateRecital,
  },
  {
    id: 'photo-3',
    plate: 'PLATE 03',
    title: 'ANUKRITI RECITAL',
    location: 'IIIT Kalyani Auditorium',
    year: '2025',
    description: 'Classical instrumental concert exposition featuring intricate chhanda and laykari.',
    src: IMAGES.hero,
  },
  {
    id: 'photo-4',
    plate: 'PLATE 04',
    title: 'PANCHAMI BAITHAK',
    location: 'Dasgupta House, Belgharia',
    year: '2024',
    description: 'Intimate chamber recital presenting contemplative alap and traditional drut bandish.',
    src: IMAGES.awards,
  },
];

export const Photos: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    }
  };

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  return (
    <section id="photos" className="py-20 sm:py-28 bg-[#050505] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#CC0000]" />
              <span className="text-xs font-display tracking-widest text-[#888888] uppercase">
                PHOTOGRAPHIC ARCHIVE // STAGE & SABHA
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              CAPTURED MOMENTS
            </h2>
          </div>
          <div className="text-xs font-display tracking-widest text-[#888888]">
            STAGE RECITALS · BAITHAKS · SCHOLARSHIP ARCHIVE
          </div>
        </div>

        {/* 4-Column Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="bg-[#0a0a0a] border border-[#222222] p-3 hover:border-[#CC0000] transition-colors cursor-pointer group flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActivePhotoIndex(index);
                }
              }}
              aria-label={`View photo: ${photo.title}`}
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-square bg-[#121212] overflow-hidden mb-3 border border-[#1a1a1a]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />

                  {/* Zoom Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-[#CC0000] text-white flex items-center justify-center">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Top-left plate badge */}
                  <div className="absolute top-2 left-2 bg-black/90 border border-[#333333] text-white text-[9px] font-display tracking-widest px-2 py-0.5 uppercase">
                    {photo.plate}
                  </div>
                </div>

                {/* Details */}
                <div className="text-[10px] font-display text-[#CC0000] tracking-widest uppercase font-bold mb-1">
                  {photo.year} • {photo.location}
                </div>
                <h3 className="font-display text-sm text-white font-bold tracking-wider uppercase mb-1 leading-snug">
                  {photo.title}
                </h3>
              </div>

              <div className="text-[10px] font-body text-[#777777] border-t border-[#1a1a1a] pt-2 mt-2">
                {photo.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photo={activePhotoIndex !== null ? GALLERY_PHOTOS[activePhotoIndex] : null}
        onClose={() => setActivePhotoIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
