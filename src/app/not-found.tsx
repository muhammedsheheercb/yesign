'use client';
import React from 'react';
import { Home, Utensils, Phone } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8E7] to-[#FFE4B5]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#A9861B]/10 via-transparent to-[#D4AF37]/10"></div>
        <div className="absolute top-20 left-20 h-32 w-32 rounded-full border-2 border-[#A9861B]/20"></div>
        <div className="absolute right-32 bottom-40 h-48 w-48 rounded-full border-2 border-[#FF6B35]/10"></div>
        <div className="absolute top-1/2 right-20 h-24 w-24 rounded-full border-2 border-[#D4AF37]/15"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        {/* 404 Number with Spice Bowl Icon */}
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="bg-gradient-to-r from-[#A9861B] via-[#FF6B35] to-[#A9861B] bg-clip-text text-9xl leading-none font-bold text-transparent md:text-[12rem]">
              404
            </h1>
            {/* Spice Bowl Icon in the middle 0 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 animate-pulse text-[#A9861B] md:h-20 md:w-20"
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
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="font-milchella mb-6 text-4xl leading-tight text-[#A9861B] md:text-5xl">
            Oops! This dish is not on
            <span className="block text-[#373737]">our menu today</span>
          </h2>
          <p className="font-montserrat__alternates mx-auto max-w-2xl text-base leading-relaxed text-[#666666] md:text-lg">
            We couldn&apos;t find the page you&apos;re looking for. It might
            have been removed, or the link may be incorrect. Don&apos;t worry,
            let&apos;s get you back to enjoying our delicious authentic Indian
            cuisine!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={'/'}>
            <button className="font-montserrat__alternates group flex transform items-center gap-3 rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37] px-8 py-4 font-bold text-white uppercase shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Home size={20} />
              Back to Home
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A9861B] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
            </button>
          </Link>

          <Link href={'/menu'}>
            <button className="font-montserrat__alternates group flex items-center gap-3 rounded-full border-2 border-[#A9861B] px-8 py-4 font-bold text-[#A9861B] uppercase transition-all duration-300 hover:bg-[#A9861B] hover:text-white">
              <Utensils size={20} />
              View Menu
            </button>
          </Link>
        </div>

        {/* Decorative Food Elements */}
        <div className="mb-12 flex items-center justify-center gap-6 opacity-70 md:gap-8">
          <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border-2 border-[#A9861B]/30 bg-gradient-to-br from-[#A9861B]/20 to-[#D4AF37]/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#A9861B]"
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

          <div className="h-2 w-2 animate-pulse rounded-full bg-[#FF6B35]"></div>

          <div className="h-14 w-14 rounded-full border-2 border-[#FF6B35]/30 bg-gradient-to-br from-[#FF6B35]/20 to-[#F7931E]/20"></div>

          <div className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37] delay-300"></div>

          <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full border-2 border-[#C41E3A]/30 bg-gradient-to-br from-[#C41E3A]/20 to-[#FF6B35]/20 delay-500">
            <div className="h-10 w-10 rounded-full bg-[#C41E3A]/40"></div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="mx-auto max-w-2xl rounded-2xl border-2 border-[#A9861B]/20 bg-white p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="font-milchella mb-3 text-3xl text-[#A9861B]">
              Need Help?
            </h3>
            <p className="font-montserrat__alternates text-sm text-[#666666]">
              Our team is here to assist you with orders and inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Call Us */}
            <Link
              href="tel:0507440148"
              className="group flex items-center gap-4 rounded-xl border-2 border-[#A9861B]/20 bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-4 transition-all duration-300 hover:border-[#A9861B] hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#A9861B] to-[#D4AF37]">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-montserrat__alternates text-xs font-semibold text-[#A9861B] uppercase">
                  Call Us Now
                </p>
                <p className="font-montserrat__alternates text-base font-bold text-[#373737]">
                  050 744 0148
                </p>
              </div>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/0507440148"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border-2 border-[#25D366]/20 bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-4 transition-all duration-300 hover:border-[#25D366] hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-montserrat__alternates text-xs font-semibold text-[#25D366] uppercase">
                  WhatsApp
                </p>
                <p className="font-montserrat__alternates text-base font-bold text-[#373737]">
                  Order Now
                </p>
              </div>
            </Link>
          </div>

          {/* Address */}
          <div className="mt-6 rounded-xl bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-4">
            <p className="font-montserrat__alternates text-xs font-semibold text-[#A9861B] uppercase">
              Visit Us
            </p>
            <p className="font-montserrat__alternates mt-2 text-sm text-[#666666]">
              Warehouse 130-103, King Key Stores <br />
              Dubai Investment Park 2
            </p>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mt-12">
          <p className="font-montserrat__alternates mb-4 text-sm font-semibold tracking-wider text-[#A9861B] uppercase">
            Popular Pages
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="font-montserrat__alternates rounded-full bg-white px-6 py-2 text-sm text-[#666666] shadow-md transition-all hover:bg-[#FFF8E7] hover:text-[#A9861B]"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="font-montserrat__alternates rounded-full bg-white px-6 py-2 text-sm text-[#666666] shadow-md transition-all hover:bg-[#FFF8E7] hover:text-[#A9861B]"
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className="font-montserrat__alternates rounded-full bg-white px-6 py-2 text-sm text-[#666666] shadow-md transition-all hover:bg-[#FFF8E7] hover:text-[#A9861B]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Spice Particles */}
      <div className="absolute top-1/4 left-10 h-2 w-2 animate-bounce rounded-full bg-[#A9861B] delay-1000"></div>
      <div className="absolute top-3/4 right-20 h-1 w-1 animate-bounce rounded-full bg-[#FF6B35] delay-500"></div>
      <div className="absolute top-1/2 left-1/4 h-1.5 w-1.5 animate-bounce rounded-full bg-[#D4AF37] delay-700"></div>
      <div className="absolute right-1/4 bottom-20 h-2 w-2 animate-bounce rounded-full bg-[#C41E3A] delay-300"></div>

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

export default NotFound;
