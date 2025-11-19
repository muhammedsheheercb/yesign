'use client';
import React, { useState } from 'react';

type DayOfWeek =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

const MenuSection = () => {
  const [activeDay, setActiveDay] = useState<DayOfWeek>('MONDAY');

  const weeklyMenu: Record<
    DayOfWeek,
    { breakfast: string; lunch: string; dinner: string }
  > = {
    MONDAY: {
      breakfast: 'DOSA SET',
      lunch: 'MOTTA/BARIK RICE & FISH CURRY WITH VEGETABLES',
      dinner: 'POROTTA + BEEF CURRY',
    },
    TUESDAY: {
      breakfast: 'IDLY SET',
      lunch: 'MOTTA/BARIK RICE & CHICKEN CURRY WITH VEGETABLES',
      dinner: 'CHAPATHI + EGG ROAST',
    },
    WEDNESDAY: {
      breakfast: 'APPAM + KADALA CURRY',
      lunch: 'MOTTA/BARIK RICE & VEGETABLES',
      dinner: 'GHEE RICE + CHICKEN CURRY',
    },
    THURSDAY: {
      breakfast: 'PUTTU + KADALA CURRY',
      lunch: 'MOTTA/BARIK RICE & FISH CURRY WITH VEGETABLES',
      dinner: 'DAL FRY + CHICKEN FRY + KUBOOS',
    },
    FRIDAY: {
      breakfast: 'IDIYAPPAM + GREENPEAS CURRY',
      lunch: 'BIRIYANI',
      dinner: 'POROTTA + FISH CURRY',
    },
    SATURDAY: {
      breakfast: 'POROTTA + EGG ROAST',
      lunch: 'MOTTA/BARIK RICE & FISH CURRY WITH VEGETABLES',
      dinner: 'APPAM + CHICKEN CURRY',
    },
    SUNDAY: {
      breakfast: 'UPPMA + BANANA',
      lunch: 'BEEF BIRIYANI',
      dinner: 'NONE',
    },
  };

  const days: DayOfWeek[] = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
  ];

  // Rest of your component remains the same...

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-milchella mb-4 text-4xl text-[#A9861B] md:text-6xl">
            Our Menu
          </h2>
          <p className="font-montserrat__alternates mx-auto max-w-2xl text-base text-[#373737] md:text-lg">
            Discover our authentic Indian cuisine with monthly mess packages and
            daily specials
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 1 Time Food - Lunch Only */}
          <div className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] p-6 text-center">
              <h3 className="font-montserrat__alternates mb-2 text-2xl font-bold text-white">
                1 TIME FOOD
              </h3>
              <p className="text-sm text-white/90">LUNCH</p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#A9861B]">180</span>
                <span className="text-xl text-[#373737]"> AED</span>
                <p className="mt-2 text-sm text-[#373737]">ONLY</p>
              </div>
              <p className="font-montserrat__alternates mb-6 text-sm font-semibold text-[#FF6B35]">
                FIXED AMOUNT
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#FF6B35]">✓</span>
                  <span className="text-sm text-[#373737]">
                    Fresh daily lunch
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#FF6B35]">✓</span>
                  <span className="text-sm text-[#373737]">
                    Traditional recipes
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#FF6B35]">✓</span>
                  <span className="text-sm text-[#373737]">
                    Rice & curry meals
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Times Food - Lunch & Dinner */}
          <div className="transform overflow-hidden rounded-2xl border-4 border-[#A9861B] bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative bg-gradient-to-r from-[#A9861B] to-[#D4AF37] p-6 text-center">
              <div className="absolute top-2 right-2 rounded-full bg-[#FF6B35] px-3 py-1 text-xs font-bold text-white">
                POPULAR
              </div>
              <h3 className="font-montserrat__alternates mb-2 text-2xl font-bold text-white">
                2 TIMES FOOD
              </h3>
              <p className="text-sm text-white/90">LUNCH + DINNER</p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#A9861B]">320</span>
                <span className="text-xl text-[#373737]"> AED</span>
                <p className="mt-2 text-sm text-[#373737]">ONLY</p>
              </div>
              <p className="font-montserrat__alternates mb-6 text-sm font-semibold text-[#A9861B]">
                FIXED AMOUNT
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#A9861B]">✓</span>
                  <span className="text-sm text-[#373737]">
                    Lunch & Dinner daily
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#A9861B]">✓</span>
                  <span className="text-sm text-[#373737]">
                    Complete meal combo
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#A9861B]">✓</span>
                  <span className="text-sm text-[#373737]">
                    Best value package
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Times Food - All Meals */}
          <div className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-[#C41E3A] to-[#FF6B35] p-6 text-center">
              <h3 className="font-montserrat__alternates mb-2 text-2xl font-bold text-white">
                3 TIMES FOOD
              </h3>
              <p className="text-sm text-white/90">
                BREAK FAST + LUNCH + DINNER
              </p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-6">
                <span className="text-5xl font-bold text-[#A9861B]">370</span>
                <span className="text-xl text-[#373737]"> AED</span>
                <p className="mt-2 text-sm text-[#373737]">ONLY</p>
              </div>
              <p className="font-montserrat__alternates mb-6 text-sm font-semibold text-[#C41E3A]">
                FIXED AMOUNT
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#C41E3A]">✓</span>
                  <span className="text-sm text-[#373737]">
                    All three meals
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#C41E3A]">✓</span>
                  <span className="text-sm text-[#373737]">
                    Full day coverage
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#C41E3A]">✓</span>
                  <span className="text-sm text-[#373737]">
                    Maximum savings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Menu Schedule */}
        <div className="mb-20 rounded-2xl bg-white p-8 shadow-xl md:p-12">
          <h3 className="font-milchella mb-8 text-center text-3xl text-[#A9861B] md:text-5xl">
            Weekly Menu
          </h3>
          <p className="font-montserrat__alternates mb-12 text-center text-[#373737]">
            Taste your menu - Fresh preparations every day
          </p>

          {/* Day Selector */}
          <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-7">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`font-montserrat__alternates rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 md:text-base ${
                  activeDay === day
                    ? 'scale-105 bg-gradient-to-r from-[#A9861B] to-[#D4AF37] text-white shadow-lg'
                    : 'bg-[#FFF8E7] text-[#373737] hover:bg-[#FFE4B5]'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Menu Display */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Breakfast */}
            <div className="rounded-xl border-l-4 border-[#FF6B35] bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-[#FF6B35] p-3">
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-montserrat__alternates text-xl font-bold text-[#373737]">
                  BREAK FAST
                </h4>
              </div>
              <p className="font-montserrat__alternates text-lg leading-relaxed text-[#373737]">
                {weeklyMenu[activeDay].breakfast}
              </p>
            </div>

            {/* Lunch */}
            <div className="rounded-xl border-l-4 border-[#A9861B] bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-[#A9861B] p-3">
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h4 className="font-montserrat__alternates text-xl font-bold text-[#373737]">
                  LUNCH
                </h4>
              </div>
              <p className="font-montserrat__alternates text-lg leading-relaxed text-[#373737]">
                {weeklyMenu[activeDay].lunch}
              </p>
            </div>

            {/* Dinner */}
            <div className="rounded-xl border-l-4 border-[#C41E3A] bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-[#C41E3A] p-3">
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h4 className="font-montserrat__alternates text-xl font-bold text-[#373737]">
                  DINNER
                </h4>
              </div>
              <p className="font-montserrat__alternates text-lg leading-relaxed text-[#373737]">
                {weeklyMenu[activeDay].dinner}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-2xl bg-gradient-to-r from-[#A9861B] to-[#D4AF37] p-8 text-center shadow-2xl md:p-12">
          <h3 className="font-milchella mb-4 text-3xl text-white md:text-5xl">
            Have a Healthy Food
          </h3>
          <p className="font-montserrat__alternates mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Download our complete menu catalog or order your monthly mess today.
            Fast & Free Delivery!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Download PDF Button */}
            <a
              href="/pdf/spice_catering.pdf"
              target="_blank"
              className="font-montserrat__alternates flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#A9861B] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF8E7] hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download Menu PDF</span>
            </a>

            {/* Order Now Button */}
            <a
              href="https://wa.me/0507440148"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat__alternates flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#128C7E] hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 border-t border-white/30 pt-8">
            <p className="font-montserrat__alternates mb-2 text-xl font-bold text-white">
              ORDER MESS TODAY!
            </p>
            <a
              href="tel:0507440148"
              className="font-montserrat__alternates text-3xl font-bold text-white transition-colors duration-300 hover:text-[#FFE4B5] md:text-4xl"
            >
              050 744 0148
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="font-montserrat__alternates text-sm text-[#373737]">
            * Monthly mess available - 2 time delivery
          </p>
          <p className="font-montserrat__alternates mt-2 text-sm text-[#373737]">
            * Advance must payment: 200 AED
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
