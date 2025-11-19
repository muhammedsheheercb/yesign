'use client';
import React from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error?: Error;
  reset?: () => void;
  title?: string;
  message?: string;
}

const Error: React.FC<ErrorProps> = ({
  error,
  reset,
  title = 'Oops! Something went wrong',
  message = "We're experiencing some technical difficulties. Our team at Spice Catering is working to fix this issue. Please try again in a moment.",
}) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8E7] to-[#FFE4B5]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#A9861B]/10 via-transparent to-[#D4AF37]/10"></div>
        <div className="absolute top-32 left-16 h-40 w-40 animate-pulse rounded-full border-2 border-[#A9861B]/20"></div>
        <div className="absolute right-20 bottom-32 h-56 w-56 rounded-full border-2 border-[#FF6B35]/10"></div>
        <div className="absolute top-2/3 right-32 h-28 w-28 animate-pulse rounded-full border-2 border-[#D4AF37]/15 delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-32 w-32 animate-pulse items-center justify-center rounded-full border-4 border-[#FF6B35]/40 bg-gradient-to-br from-[#FF6B35]/30 to-[#F7931E]/30 shadow-2xl">
              <AlertTriangle size={64} className="text-[#FF6B35]" />
            </div>
            <div className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#C41E3A] to-[#FF6B35] shadow-lg">
              <span className="text-xl font-bold text-white">!</span>
            </div>
            {/* Pulsing rings */}
            <div className="absolute inset-0 animate-ping rounded-full border-2 border-[#FF6B35]/30"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="font-milchella mb-6 text-4xl leading-tight text-[#A9861B] md:text-5xl">
            {title}
          </h1>
          <p className="font-montserrat__alternates mx-auto mb-6 max-w-2xl text-base leading-relaxed text-[#666666] md:text-lg">
            {message}
          </p>

          {/* Error Details (if provided) */}
          {error && (
            <div className="mx-auto mb-8 max-w-2xl rounded-xl border-2 border-[#FF6B35]/30 bg-white p-6 shadow-lg">
              <p className="font-montserrat__alternates mb-2 text-sm font-semibold text-[#FF6B35] uppercase">
                Error Details:
              </p>
              <p className="overflow-x-auto rounded-lg bg-[#FFF8E7] p-4 text-left font-mono text-xs text-[#373737] md:text-sm">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {reset && (
            <button
              onClick={reset}
              className="font-montserrat__alternates group flex transform items-center gap-3 rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37] px-8 py-4 font-bold text-white uppercase shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <RefreshCw
                size={20}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
              Try Again
            </button>
          )}

          <Link href={'/'}>
            <button className="font-montserrat__alternates group flex items-center gap-3 rounded-full border-2 border-[#A9861B] px-8 py-4 font-bold text-[#A9861B] uppercase transition-all duration-300 hover:bg-[#A9861B] hover:text-white">
              <Home size={20} />
              Back to Home
            </button>
          </Link>

          <Link
            href={'https://wa.me/0507440148'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-montserrat__alternates group flex items-center gap-3 rounded-full border-2 border-[#25D366] px-8 py-4 font-bold text-[#25D366] uppercase transition-all duration-300 hover:bg-[#25D366] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Contact Us
            </button>
          </Link>
        </div>

        {/* Status Indicators */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-3 rounded-full border-2 border-[#FF6B35]/30 bg-white px-6 py-3 shadow-md">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#FF6B35]"></div>
            <span className="font-montserrat__alternates text-sm font-semibold text-[#666666]">
              Service Interrupted
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-full border-2 border-[#25D366]/30 bg-white px-6 py-3 shadow-md">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#25D366] delay-300"></div>
            <span className="font-montserrat__alternates text-sm font-semibold text-[#666666]">
              Recovery in Progress
            </span>
          </div>
        </div>

        {/* Support Card */}
        <div className="mx-auto max-w-2xl rounded-2xl border-2 border-[#A9861B]/20 bg-white p-8 shadow-2xl">
          <h3 className="font-milchella mb-4 text-2xl text-[#A9861B] md:text-3xl">
            Need Immediate Assistance?
          </h3>
          <p className="font-montserrat__alternates mb-6 text-sm text-[#666666]">
            Contact Spice Catering directly for orders, inquiries, or support
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Phone */}
            <Link
              href="tel:0507440148"
              className="group flex items-center gap-4 rounded-xl border-2 border-[#A9861B]/20 bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-4 transition-all duration-300 hover:border-[#A9861B] hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37]">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-montserrat__alternates text-xs font-semibold text-[#A9861B] uppercase">
                  Call Us
                </p>
                <p className="font-montserrat__alternates text-base font-bold text-[#373737]">
                  050 744 0148
                </p>
              </div>
            </Link>

            {/* Email */}
            <Link
              href="mailto:spicysquarecatering@gmail.com"
              className="group flex items-center gap-4 rounded-xl border-2 border-[#FF6B35]/20 bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-4 transition-all duration-300 hover:border-[#FF6B35] hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-montserrat__alternates text-xs font-semibold text-[#FF6B35] uppercase">
                  Email Us
                </p>
                <p className="font-montserrat__alternates text-xs font-bold text-[#373737] md:text-sm">
                  spicysquarecatering@gmail.com
                </p>
              </div>
            </Link>
          </div>

          {/* Address */}
          <div className="mt-6 rounded-xl bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-4">
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 text-[#C41E3A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-left">
                <p className="font-montserrat__alternates text-xs font-semibold text-[#C41E3A] uppercase">
                  Our Location
                </p>
                <p className="font-montserrat__alternates mt-1 text-sm text-[#666666]">
                  Warehouse 130-103, King Key Stores <br />
                  Dubai Investment Park 2
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Helpful Tips */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-lg">
          <p className="font-montserrat__alternates mb-3 text-sm font-semibold text-[#A9861B] uppercase">
            While You Wait
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="font-montserrat__alternates rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] px-5 py-2 text-sm text-[#666666] transition-all hover:text-[#A9861B] hover:shadow-md"
            >
              Browse Home
            </Link>
            <Link
              href="/menu"
              className="font-montserrat__alternates rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] px-5 py-2 text-sm text-[#666666] transition-all hover:text-[#A9861B] hover:shadow-md"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="font-montserrat__alternates rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] px-5 py-2 text-sm text-[#666666] transition-all hover:text-[#A9861B] hover:shadow-md"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-20 h-4 w-4 animate-bounce rounded-full bg-[#A9861B]/60"></div>
      <div className="absolute right-16 bottom-40 h-2 w-2 animate-bounce rounded-full bg-[#FF6B35]/60 delay-700"></div>
      <div className="absolute top-1/3 right-10 h-3 w-3 animate-bounce rounded-full bg-[#D4AF37]/60 delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 h-2 w-2 animate-bounce rounded-full bg-[#C41E3A]/60 delay-300"></div>

      {/* Subtle Effect Lines */}
      <div className="absolute top-1/4 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#A9861B]/30 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent delay-500"></div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default Error;
