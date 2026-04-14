import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string | string[];
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [videoUrl]);

  if (!isOpen) return null;

  const urls = Array.isArray(videoUrl) ? videoUrl : [videoUrl];
  const currentUrl = urls[currentIndex];

  // Convert YouTube watch URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/shorts/')) {
      const id = url.split('shorts/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : url;
  };

  const getVideoId = (url: string) => {
    if (url.includes('youtube.com/shorts/')) {
      return url.split('shorts/')[1].split('?')[0];
    }
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className={`relative w-full max-w-6xl flex flex-col md:flex-row bg-black rounded-minimal overflow-hidden shadow-2xl border border-white/5 ${urls.length > 1 ? 'aspect-auto' : 'aspect-video'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Player Container */}
        <div className="relative flex-1 aspect-video bg-black">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:text-accent transition-colors rounded-full"
          >
            <X size={24} />
          </button>
          
          <iframe
            key={currentUrl}
            src={getEmbedUrl(currentUrl)}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video Player"
          />
        </div>

        {/* Gallery Sidebar */}
        {urls.length > 1 && (
          <div className="w-full md:w-64 bg-surface/30 border-t md:border-t-0 md:border-l border-white/5 p-4 md:p-6 flex flex-col">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent mb-4">Video Gallery</h4>
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0 scrollbar-hide">
              {urls.map((url, idx) => {
                const videoId = getVideoId(url);
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-32 md:w-full aspect-video rounded-minimal overflow-hidden border transition-all duration-300 ${
                      currentIndex === idx ? 'border-accent ring-1 ring-accent' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity z-10 ${currentIndex === idx ? 'opacity-0' : 'opacity-100'}`}>
                      <span className="text-[8px] uppercase tracking-widest font-bold">Reel {idx + 1}</span>
                    </div>
                    {videoId && (
                      <img 
                        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                        alt={`Reel ${idx + 1}`}
                        className="w-full h-full object-cover grayscale opacity-50"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default VideoModal;
