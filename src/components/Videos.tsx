import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { IMAGES } from '../assets/images';

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  badge: string;
  event: string;
  context: string;
  director?: string;
  thumbnail: string;
  backupThumbnail: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'desh-ek-raag',
    youtubeId: 'lPqU_ROp4OQ',
    title: 'DESH EK RAAG 3.0',
    subtitle: 'ITC SANGEET RESEARCH ACADEMY',
    badge: 'ITC SRA FEATURE',
    event: 'RECORDING ARCHIVE · KOLKATA',
    context:
      'Barnik performed Sarod as part of Desh Ek Raag 3 at ITC Sangeet Research Academy, a musical tribute to India and its cultural heritage alongside esteemed peers.',
    thumbnail: 'https://img.youtube.com/vi/lPqU_ROp4OQ/hqdefault.jpg',
    backupThumbnail: IMAGES.plateTechnique,
  },
  {
    id: 'satyajit-ray-tribute',
    youtubeId: 'EsSSCtMQLMQ',
    title: 'TRIBUTE TO SATYAJIT RAY',
    subtitle: 'HIRAK RAJAR DESHE',
    badge: 'CINEMATIC RETROSPECTIVE',
    event: 'FILM ARCHIVE · HIRAK RAJAR DESHE',
    context:
      'A Sarod tribute to legendary filmmaker Satyajit Ray, featuring iconic music composed and directed by Ray from the classic film Hirak Rajar Deshe.',
    director: 'Music directed by Satyajit Ray · Sarod played by Barnik Basu',
    thumbnail: 'https://img.youtube.com/vi/EsSSCtMQLMQ/hqdefault.jpg',
    backupThumbnail: IMAGES.plateRecital,
  },
];

export const Videos: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);

  return (
    <section id="videos" className="py-20 sm:py-28 bg-black border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#CC0000]" />
              <span className="text-xs font-display tracking-widest text-[#888888] uppercase">
                AUDIOVISUAL ARCHIVE // RECORDINGS & YOUTUBE BROADCASTS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              FEATURED VIDEOS
            </h2>
          </div>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-display text-xs tracking-widest text-[#AAAAAA] hover:text-[#CC0000] transition-colors border border-[#262626] px-3 py-1.5 self-start sm:self-end"
          >
            <span>YOUTUBE CHANNEL</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#CC0000]" />
          </a>
        </div>

        {/* 2-Column Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-[#0a0a0a] border border-[#222222] p-5 sm:p-6 flex flex-col justify-between hover:border-[#444444] transition-colors group"
            >
              <div>
                {/* Rectangular Video Thumbnail with Center Crimson Play Button */}
                <div
                  onClick={() => setActiveVideo({ id: video.youtubeId, title: video.title })}
                  className="relative aspect-video bg-[#121212] border border-[#1f1f1f] overflow-hidden cursor-pointer mb-5 group/thumb"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveVideo({ id: video.youtubeId, title: video.title });
                    }
                  }}
                  aria-label={`Play video: ${video.title}`}
                >
                  <img
                    src={video.thumbnail}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = video.backupThumbnail;
                    }}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/5 transition-colors" />

                  {/* Red Badge */}
                  <div className="absolute top-3 left-3 bg-[#CC0000] text-white text-[10px] font-display tracking-widest px-2.5 py-1 font-bold uppercase">
                    {video.badge}
                  </div>

                  {/* Centered Crimson Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#CC0000] flex items-center justify-center text-white shadow-2xl transition-transform duration-200 group-hover/thumb:scale-110">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Subtitle Bar on thumbnail */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-display tracking-wider text-[#CCCCCC] px-2 py-0.5 border border-[#333333]">
                    CLICK TO PLAY
                  </div>
                </div>

                {/* Video Info Lockup */}
                <div className="text-[10px] font-display tracking-widest text-[#CC0000] uppercase font-bold mb-1">
                  {video.event}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mb-1">
                  {video.title}
                </h3>
                <div className="font-display text-xs text-[#888888] tracking-widest uppercase mb-3 font-medium">
                  {video.subtitle}
                </div>

                <p className="font-body text-xs sm:text-sm text-[#AAAAAA] leading-relaxed mb-4">
                  {video.context}
                </p>

                {video.director && (
                  <div className="bg-black border border-[#1c1c1c] p-3 mb-4 text-[11px] font-display tracking-wider text-[#999999]">
                    {video.director}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1c1c1c] flex items-center justify-between">
                <button
                  onClick={() => setActiveVideo({ id: video.youtubeId, title: video.title })}
                  className="bg-[#CC0000] hover:bg-[#990000] text-white font-display text-xs tracking-widest font-semibold px-4 py-2 uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>PLAY RECORDING</span>
                </button>

                <a
                  href={`https://youtu.be/${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs tracking-widest text-[#888888] hover:text-[#CC0000] uppercase transition-colors flex items-center gap-1"
                >
                  <span>WATCH ON YOUTUBE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        videoId={activeVideo?.id ?? null}
        videoTitle={activeVideo?.title ?? ''}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
};
