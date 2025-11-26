'use client';

import { EntranceWave } from '@/components/Animation';
import { ReviewsCarousel } from './ReviewCarousal';
import { mockReviews } from './mockReviews';

const Reviews = () => {
  // Using mock reviews for YESIGN
  // In production, replace with: const response = await ReviewService.getReviewData();
  const reviews = mockReviews;

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 md:py-28">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient Glow */}
        <div className="absolute top-1/2 -left-40 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute top-1/3 -right-40 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <span className="font-inter text-xs font-medium tracking-[0.3em] text-cyan-400 uppercase">
            Testimonials
          </span>
          <EntranceWave
            text="What Our Clients Say"
            className="font-barlow text-center text-3xl font-light tracking-tight text-white uppercase md:text-4xl lg:text-5xl"
          />
          <div className="mt-2 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <p className="font-inter mt-2 max-w-xl text-center text-sm text-white/50 md:text-base">
            Trusted by businesses across Kerala and beyond
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative px-4 md:px-8">
          {reviews && <ReviewsCarousel reviews={reviews} />}
        </div>

        {/* Stats */}
        <div className="mx-auto flex flex-wrap items-center justify-center gap-12 px-4 pt-4 md:gap-20">
          <div className="flex flex-col items-center gap-2">
            <span className="font-barlow text-4xl font-bold text-white md:text-5xl">
              150<span className="text-cyan-400">+</span>
            </span>
            <span className="font-inter text-xs tracking-wider text-white/40 uppercase">
              Happy Clients
            </span>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="flex flex-col items-center gap-2">
            <span className="font-barlow text-4xl font-bold text-white md:text-5xl">
              4.9<span className="text-cyan-400">★</span>
            </span>
            <span className="font-inter text-xs tracking-wider text-white/40 uppercase">
              Average Rating
            </span>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="flex flex-col items-center gap-2">
            <span className="font-barlow text-4xl font-bold text-white md:text-5xl">
              500<span className="text-cyan-400">+</span>
            </span>
            <span className="font-inter text-xs tracking-wider text-white/40 uppercase">
              Projects Done
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
