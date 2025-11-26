'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/gallery/1.webp',
    alt: 'YESIGN Creative Work 1',
    category: 'Branding',
  },
  {
    src: '/images/gallery/2.webp',
    alt: 'YESIGN Creative Work 2',
    category: 'Web Design',
  },
  {
    src: '/images/gallery/3.webp',
    alt: 'YESIGN Creative Work 3',
    category: 'Graphic Design',
  },
  {
    src: '/images/gallery/4.webp',
    alt: 'YESIGN Creative Work 4',
    category: 'Marketing',
  },
  {
    src: '/images/gallery/5.webp',
    alt: 'YESIGN Creative Work 5',
    category: 'Branding',
  },
  {
    src: '/images/gallery/6.webp',
    alt: 'YESIGN Creative Work 6',
    category: 'Web Design',
  },
  {
    src: '/images/gallery/7.webp',
    alt: 'YESIGN Creative Work 7',
    category: 'Video',
  },
  {
    src: '/images/gallery/8.webp',
    alt: 'YESIGN Creative Work 8',
    category: 'Graphic Design',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 md:py-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-1/3 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="font-inter text-xs font-medium tracking-[0.3em] text-cyan-400 uppercase">
              Our Work
            </span>
            <div className="h-px w-8 bg-cyan-400" />
          </div>
          <h2 className="font-barlow text-4xl font-light tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
            Creative <span className="font-bold text-cyan-400">Gallery</span>
          </h2>
          <p className="font-inter mt-4 max-w-xl text-sm text-white/50 md:text-base">
            Explore our portfolio of stunning designs, innovative websites, and
            impactful brand identities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative cursor-pointer overflow-hidden ${
                index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div
                className={`relative w-full overflow-hidden ${
                  index === 0 || index === 5
                    ? 'h-[300px] sm:h-[400px] lg:h-[500px]'
                    : 'h-[250px] sm:h-[200px] lg:h-[240px]'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 h-0 w-0 border-t-2 border-l-2 border-cyan-400 transition-all duration-500 group-hover:h-12 group-hover:w-12" />
                <div className="absolute right-0 bottom-0 h-0 w-0 border-r-2 border-b-2 border-cyan-400 transition-all duration-500 group-hover:h-12 group-hover:w-12" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center border border-cyan-400 bg-cyan-400/20 backdrop-blur-sm">
                    <ZoomIn className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="font-inter text-xs font-medium tracking-wider text-cyan-400 uppercase">
                    {image.category}
                  </span>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border border-white/0 transition-all duration-500 group-hover:border-cyan-400/50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button className="group font-inter flex items-center gap-3 border-2 border-cyan-400 bg-transparent px-8 py-4 text-sm font-semibold tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:bg-cyan-400 hover:text-black">
            <span>View All Projects</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 md:top-8 md:right-8"
              onClick={closeLightbox}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous Button */}
            <button
              className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 md:left-8"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next Button */}
            <button
              className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 md:right-8"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative mx-4 h-[70vh] w-full max-w-5xl md:mx-8 md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 z-10 h-8 w-8 border-t-2 border-l-2 border-cyan-400 md:-top-4 md:-left-4 md:h-12 md:w-12" />
              <div className="absolute -right-2 -bottom-2 z-10 h-8 w-8 border-r-2 border-b-2 border-cyan-400 md:-right-4 md:-bottom-4 md:h-12 md:w-12" />

              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {/* Image Info */}
              <div className="absolute right-0 -bottom-16 left-0 text-center">
                <span className="font-inter text-xs font-medium tracking-wider text-cyan-400 uppercase">
                  {galleryImages[selectedImage].category}
                </span>
                <p className="font-inter mt-1 text-sm text-white/60">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
