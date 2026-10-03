import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  videoId: string | null;
  videoTitle: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoId, videoTitle, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (videoId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-black border border-[#262626] p-2 sm:p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-3 mb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#CC0000]" />
            <h3 id="video-modal-title" className="font-display text-sm sm:text-base text-white font-bold tracking-wider uppercase">
              {videoTitle}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://youtu.be/${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-display tracking-widest text-[#AAAAAA] hover:text-[#CC0000] flex items-center gap-1"
            >
              <span>OPEN ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1 text-[#CCCCCC] hover:text-white hover:bg-[#1a1a1a] border border-[#333333] transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Embed Frame */}
        <div className="relative aspect-video w-full bg-black border border-[#1a1a1a] overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        <div className="mt-3 px-2 flex justify-between items-center text-[11px] font-display tracking-wider text-[#777777]">
          <span>RECORDING ARCHIVE · BARNIK BASU SAROD RECITAL</span>
          <span className="text-[#CC0000]">PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
};
