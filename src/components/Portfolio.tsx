import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import VideoModal from './VideoModal';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | string[] | null>(null);
  const categories = ['All', 'Commercial', 'Event Films', 'Documentary'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  const renderProject = (project: any, index: number) => {
    const isLarge = index < 2;
    
    return (
      <motion.div
        key={project.id}
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative w-full ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
      >
        <div className="space-y-4">
          {/* Visual Focus */}
          <div 
            onClick={() => setSelectedVideo(project.videoUrls || project.videoUrl)}
            className="relative aspect-[16/9] overflow-hidden rounded-minimal border border-white/5 cursor-pointer block bg-surface/20"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              style={{ objectPosition: project.customPosition || 'center' }}
              referrerPolicy="no-referrer"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/30">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,106,0,0.3)] scale-90 group-hover:scale-100 transition-transform duration-500">
                <Play size={20} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Minimal Info */}
          <div className="flex items-center justify-between gap-4 px-1">
            <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-medium text-text/60 group-hover:text-accent transition-colors duration-500">
              {project.title.split(' — ')[0]}
            </h3>
            
            <div className="flex items-center gap-4">
              <span className="text-muted/30 text-[8px] uppercase tracking-[0.2em] font-mono">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="section-padding bg-bg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[1px] w-8 bg-accent/50" />
              <span className="text-accent uppercase tracking-[0.6em] text-[9px] font-bold">
                Work
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-[0.2em] text-text/90">
              Selected Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-500 relative pb-2 ${
                  filter === cat ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => renderProject(project, index))}
          </AnimatePresence>
        </div>

        <div className="mt-32 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/5 hover:border-accent/30 transition-all duration-500 text-[9px] uppercase tracking-[0.4em] font-bold rounded-minimal bg-surface/20 backdrop-blur-sm text-muted hover:text-text"
          >
            Full Archive
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal 
            isOpen={!!selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
            videoUrl={selectedVideo} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
