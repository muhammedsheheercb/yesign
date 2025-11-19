'use client';
import { ScrollAnimate } from '@/components/Animation';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image paths - add your images here
  const images = [
    '/images/home/hero/1.webp',
    '/images/home/hero/2.webp',
    '/images/home/hero/3.webp',
    '/images/home/hero/4.webp',

    // Add more images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              priority={index === 0}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-40 bg-black/10" />

      {/* Animated Content Container */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <ScrollAnimate>
          <h1 className="font-milchella text-center text-5xl font-[700] tracking-[5%] text-[#fff] uppercase hover:cursor-pointer lg:text-8xl">
            SPICY SQUARE <br /> CATERING SERVIVES
          </h1>
        </ScrollAnimate>
      </div>

      {/* Optional: Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentImageIndex
                ? 'w-8 bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
