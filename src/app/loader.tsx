<<<<<<< HEAD
'use client';
=======
>>>>>>> dbe9b69 (all section added)
import React from 'react';

interface LoaderProps {
  message?: string;
  subMessage?: string;
}

const Loader: React.FC<LoaderProps> = ({
<<<<<<< HEAD
  message = 'Preparing Your Authentic Meal',
  subMessage = 'Welcome to Spice Catering - Where tradition meets taste',
}) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8E7] to-[#FFE4B5]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#A9861B]/10 via-transparent to-[#D4AF37]/10"></div>
        <div className="absolute top-24 left-24 h-36 w-36 animate-pulse rounded-full border-2 border-[#A9861B]/20"></div>
        <div className="absolute right-32 bottom-48 h-48 w-48 animate-pulse rounded-full border-2 border-[#D4AF37]/15 delay-500"></div>
        <div className="absolute top-1/2 right-16 h-24 w-24 animate-pulse rounded-full border-2 border-[#FF6B35]/20 delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        {/* Logo/Brand Name */}
        <div className="mb-8">
          <h2 className="font-milchella text-5xl text-[#A9861B] md:text-7xl">
            Spice Catering
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#A9861B]"></div>
            <span className="font-montserrat__alternates text-sm text-[#666666]">
              Authentic Indian Cuisine
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#A9861B]"></div>
          </div>
        </div>

        {/* Main Loader Animation - Indian Spice Bowl */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Outer rotating ring - represents the spice bowl */}
            <div className="h-32 w-32 animate-spin rounded-full border-4 border-transparent border-t-[#D4AF37] border-r-[#A9861B]"></div>

            {/* Middle rotating ring - spice mixing */}
            <div
              className="absolute top-2 left-2 h-28 w-28 animate-spin rounded-full border-4 border-transparent border-t-[#F7931E] border-l-[#FF6B35]"
=======
  message = 'Preparing your dining experience',
  subMessage = 'Welcome to True Manchester - where innovation meets flavor',
}) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#000]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#D1A04D]/10 via-transparent to-[#D1A04D]/5"></div>
        <div className="absolute top-24 left-24 h-36 w-36 animate-pulse rounded-full border border-[#D1A04D]/20"></div>
        <div className="absolute right-32 bottom-48 h-48 w-48 animate-pulse rounded-full border border-[#D1A04D]/10 delay-500"></div>
        <div className="absolute top-1/2 right-16 h-24 w-24 animate-pulse rounded-full border border-[#D1A04D]/15 delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        {/* Main Loader Animation */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="h-32 w-32 animate-spin rounded-full border-4 border-transparent border-t-[#E6B85C] border-r-[#D1A04D]"></div>

            {/* Middle rotating ring */}
            <div
              className="absolute top-2 left-2 h-28 w-28 animate-spin rounded-full border-4 border-transparent border-t-[#D1A04D]/70 border-l-[#E6B85C]/70"
>>>>>>> dbe9b69 (all section added)
              style={{
                animationDirection: 'reverse',
                animationDuration: '1.5s',
              }}
            ></div>

<<<<<<< HEAD
            {/* Inner pulsing circle - the spice */}
            <div className="absolute top-6 left-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-[#A9861B]/40 to-[#D4AF37]/40">
              {/* Spice icon/center */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 animate-bounce text-[#A9861B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>

            {/* Floating spice particles */}
            <div className="absolute -top-4 left-1/2 h-2 w-2 animate-bounce rounded-full bg-[#FF6B35] delay-300"></div>
            <div className="absolute top-1/2 -left-4 h-1.5 w-1.5 animate-bounce rounded-full bg-[#D4AF37] delay-700"></div>
            <div className="absolute right-1/2 -bottom-4 h-2 w-2 animate-bounce rounded-full bg-[#C41E3A] delay-1000"></div>
            <div className="absolute top-1/2 -right-4 h-1 w-1 animate-bounce rounded-full bg-[#F7931E] delay-500"></div>
=======
            {/* Inner pulsing circle */}
            <div className="absolute top-6 left-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-[#D1A04D]/40 to-[#E6B85C]/40">
              <div className="h-8 w-8 animate-bounce rounded-full bg-[#D1A04D]/60"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute -top-4 left-1/2 h-2 w-2 animate-bounce rounded-full bg-[#D1A04D] delay-300"></div>
            <div className="absolute top-1/2 -left-4 h-1.5 w-1.5 animate-bounce rounded-full bg-[#E6B85C] delay-700"></div>
            <div className="absolute right-1/2 -bottom-4 h-2 w-2 animate-bounce rounded-full bg-[#D1A04D]/80 delay-1000"></div>
            <div className="absolute top-1/2 -right-4 h-1 w-1 animate-bounce rounded-full bg-[#E6B85C] delay-500"></div>
>>>>>>> dbe9b69 (all section added)
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
<<<<<<< HEAD
          <h1 className="font-milchella mb-4 text-3xl leading-tight text-[#A9861B] md:text-4xl">
            {message}
          </h1>
          <p className="font-montserrat__alternates mx-auto max-w-2xl text-base leading-relaxed text-[#666666] md:text-lg">
=======
          <h1 className="font-josefin_Sans mb-4 text-4xl leading-tight font-[500] tracking-[2%] text-[#D1A04D] md:text-5xl">
            {message}
          </h1>
          <p className="font-poppins mx-auto max-w-2xl text-lg leading-relaxed font-[300] tracking-[1%] text-[#E6E6E6] md:text-xl">
>>>>>>> dbe9b69 (all section added)
            {subMessage}
          </p>
        </div>

<<<<<<< HEAD
        {/* Progress Dots - Spice colors */}
        <div className="mb-12 flex items-center justify-center gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#A9861B]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#FF6B35] delay-150"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#D4AF37] delay-300"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#C41E3A] delay-500"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#F7931E] delay-700"></div>
=======
        {/* Progress Dots */}
        <div className="mb-12 flex items-center justify-center gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#D1A04D]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#E6B85C] delay-150"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#D1A04D]/80 delay-300"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#E6B85C] delay-450"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-[#D1A04D] delay-600"></div>
>>>>>>> dbe9b69 (all section added)
        </div>

        {/* Progress Bar */}
        <div className="mx-auto mb-16 max-w-md">
<<<<<<< HEAD
          <div className="h-2 overflow-hidden rounded-full bg-[#A9861B]/20">
            <div
              className="animate-slide h-full rounded-full bg-gradient-to-r from-[#A9861B] via-[#FF6B35] to-[#D4AF37]"
=======
          <div className="h-1 overflow-hidden rounded-full bg-[#D1A04D]/20">
            <div className="h-full animate-pulse rounded-full bg-gradient-to-r from-[#D1A04D] via-[#E6B85C] to-[#D1A04D]"></div>
            <div
              className="animate-slide absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-transparent via-[#D1A04D]/60 to-transparent"
>>>>>>> dbe9b69 (all section added)
              style={{
                animation: 'slide 2s ease-in-out infinite',
                width: '30%',
              }}
            ></div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Cooking Process Simulation */}
        <div className="flex items-center justify-center gap-6 opacity-80 md:gap-8">
          <div className="text-center">
            <div className="mb-3 flex h-14 w-14 animate-pulse items-center justify-center rounded-full border-2 border-[#A9861B]/30 bg-gradient-to-br from-[#A9861B]/20 to-[#D4AF37]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#A9861B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <span className="font-montserrat__alternates text-xs text-[#666666]">
              Selecting
            </span>
          </div>

          <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#A9861B]/40 to-transparent"></div>

          <div className="text-center">
            <div className="mb-3 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border-2 border-[#FF6B35]/30 bg-gradient-to-br from-[#FF6B35]/20 to-[#F7931E]/20 delay-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 animate-spin text-[#FF6B35]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ animationDuration: '2s' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <span className="font-montserrat__alternates text-xs text-[#666666]">
              Cooking
            </span>
          </div>

          <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#A9861B]/40 to-transparent"></div>

          <div className="text-center">
            <div className="mb-3 flex h-14 w-14 animate-pulse items-center justify-center rounded-full border-2 border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20 delay-1000">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#25D366]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-montserrat__alternates text-xs text-[#666666]">
              Ready!
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-12">
          <p className="font-montserrat__alternates text-xs text-[#A9861B]">
            Fresh • Authentic • Delicious
          </p>
        </div>
      </div>

      {/* Ambient Floating Elements - Spice particles */}
      <div className="animate-float absolute top-1/4 left-12 h-2 w-2 rounded-full bg-[#A9861B]/60"></div>
      <div className="animate-float absolute top-2/3 right-20 h-1.5 w-1.5 rounded-full bg-[#FF6B35]/60 delay-1000"></div>
      <div className="animate-float absolute top-1/3 left-1/3 h-1 w-1 rounded-full bg-[#D4AF37]/60 delay-500"></div>
      <div className="animate-float absolute right-1/3 bottom-1/4 h-2 w-2 rounded-full bg-[#C41E3A]/60 delay-700"></div>
=======
        {/* Dining Process Simulation */}
        <div className="flex items-center justify-center gap-8 opacity-70">
          <div className="text-center">
            <div className="mb-2 h-12 w-12 animate-pulse rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#D1A04D]/30 to-[#E6B85C]/30"></div>
            <span className="font-poppins text-xs font-[300] text-[#E6E6E6]">
              Ingredients
            </span>
          </div>
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D1A04D]/40 to-transparent"></div>
          <div className="text-center">
            <div className="mb-2 flex h-14 w-14 animate-pulse items-center justify-center rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#E6B85C]/30 to-[#D1A04D]/30 delay-500">
              <div className="h-6 w-6 animate-spin rounded-full bg-[#D1A04D]/40"></div>
            </div>
            <span className="font-poppins text-xs font-[300] text-[#E6E6E6]">
              Crafting
            </span>
          </div>
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D1A04D]/40 to-transparent"></div>
          <div className="text-center">
            <div className="mb-2 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-[#D1A04D]/20 bg-gradient-to-br from-[#E6B85C]/30 to-[#D1A04D]/30 delay-1000">
              <div className="h-8 w-8 rounded-full bg-[#D1A04D]/40"></div>
            </div>
            <span className="font-poppins text-xs font-[300] text-[#E6E6E6]">
              Ready
            </span>
          </div>
        </div>
      </div>

      {/* Ambient Floating Elements */}
      <div className="animate-float absolute top-1/5 left-12 h-2 w-2 rounded-full bg-[#D1A04D]/60"></div>
      <div className="animate-float absolute top-2/3 right-20 h-1.5 w-1.5 rounded-full bg-[#E6B85C]/60 delay-1000"></div>
      <div className="animate-float absolute top-1/3 left-1/3 h-1 w-1 rounded-full bg-[#D1A04D]/60 delay-500"></div>
>>>>>>> dbe9b69 (all section added)

      <style jsx>{`
        @keyframes slide {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(300%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide {
          animation: slide 2s ease-in-out infinite;
        }
<<<<<<< HEAD

        .delay-150 {
          animation-delay: 150ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
=======
>>>>>>> dbe9b69 (all section added)
      `}</style>
    </div>
  );
};

export default Loader;
