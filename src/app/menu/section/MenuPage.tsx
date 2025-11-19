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

interface MenuItem {
  name: string;
  description: string;
  price?: string;
  items?: string[];
}

interface DayMenu {
  breakfast: MenuItem;
  lunch: MenuItem;
  dinner: MenuItem;
}

const MenuPage = () => {
  const [activeDay, setActiveDay] = useState<DayOfWeek>('MONDAY');
  const [activeMealType, setActiveMealType] = useState<
    'all' | 'breakfast' | 'lunch' | 'dinner'
  >('all');

  const weeklyMenu: Record<DayOfWeek, DayMenu> = {
    MONDAY: {
      breakfast: {
        name: 'DOSA SET',
        description:
          'Crispy South Indian crepes served with traditional accompaniments',
        items: ['3 Dosa', 'Coconut Chutney', 'Sambar', 'Tomato Chutney'],
      },
      lunch: {
        name: 'MOTTA/BARIK RICE & FISH CURRY',
        description:
          'Authentic Kerala style fish curry with steamed rice and vegetables',
        items: [
          'Motta/Barik Rice',
          'Fish Curry',
          'Mixed Vegetables',
          'Pickle',
          'Papad',
        ],
      },
      dinner: {
        name: 'POROTTA + BEEF CURRY',
        description: 'Flaky layered flatbread with spicy Kerala beef curry',
        items: ['3 Porotta', 'Beef Curry', 'Onion Raita', 'Pickle'],
      },
    },
    TUESDAY: {
      breakfast: {
        name: 'IDLY SET',
        description:
          'Soft steamed rice cakes with traditional South Indian sides',
        items: ['4 Idly', 'Coconut Chutney', 'Sambar', 'Gun Powder'],
      },
      lunch: {
        name: 'MOTTA/BARIK RICE & CHICKEN CURRY',
        description:
          'Flavorful chicken curry with steamed rice and fresh vegetables',
        items: [
          'Motta/Barik Rice',
          'Chicken Curry',
          'Mixed Vegetables',
          'Pickle',
          'Papad',
        ],
      },
      dinner: {
        name: 'CHAPATHI + EGG ROAST',
        description: 'Soft whole wheat flatbread with spicy egg roast',
        items: ['4 Chapathi', 'Egg Roast (2 eggs)', 'Dal Curry', 'Pickle'],
      },
    },
    WEDNESDAY: {
      breakfast: {
        name: 'APPAM + KADALA CURRY',
        description: 'Soft rice pancakes with spicy black chickpea curry',
        items: ['4 Appam', 'Kadala Curry', 'Coconut Chutney', 'Banana'],
      },
      lunch: {
        name: 'MOTTA/BARIK RICE & VEGETABLES',
        description: 'Healthy vegetarian meal with mixed vegetable curry',
        items: [
          'Motta/Barik Rice',
          'Mixed Veg Curry',
          'Dal Fry',
          'Pickle',
          'Papad',
        ],
      },
      dinner: {
        name: 'GHEE RICE + CHICKEN CURRY',
        description: 'Aromatic ghee rice paired with rich chicken curry',
        items: ['Ghee Rice', 'Chicken Curry', 'Raita', 'Pickle', 'Papad'],
      },
    },
    THURSDAY: {
      breakfast: {
        name: 'PUTTU + KADALA CURRY',
        description: 'Steamed rice cake cylinders with black chickpea curry',
        items: ['Puttu', 'Kadala Curry', 'Banana', 'Papad'],
      },
      lunch: {
        name: 'MOTTA/BARIK RICE & FISH CURRY',
        description: 'Traditional fish curry with rice and vegetables',
        items: [
          'Motta/Barik Rice',
          'Fish Curry',
          'Mixed Vegetables',
          'Pickle',
          'Papad',
        ],
      },
      dinner: {
        name: 'DAL FRY + CHICKEN FRY + KUBOOS',
        description: 'Arabic bread with lentil curry and fried chicken',
        items: [
          '3 Kuboos',
          'Dal Fry',
          'Chicken Fry (4 pcs)',
          'Pickle',
          'Onion Salad',
        ],
      },
    },
    FRIDAY: {
      breakfast: {
        name: 'IDIYAPPAM + GREENPEAS CURRY',
        description: 'String hoppers with aromatic green peas curry',
        items: ['Idiyappam', 'Green Peas Curry', 'Coconut Chutney', 'Banana'],
      },
      lunch: {
        name: 'BIRIYANI',
        description: 'Special Friday biryani with chicken/mutton',
        items: [
          'Chicken/Mutton Biriyani',
          'Raita',
          'Pickle',
          'Papad',
          'Boiled Egg',
        ],
      },
      dinner: {
        name: 'POROTTA + FISH CURRY',
        description: 'Layered flatbread with traditional fish curry',
        items: ['3 Porotta', 'Fish Curry', 'Onion Raita', 'Pickle'],
      },
    },
    SATURDAY: {
      breakfast: {
        name: 'POROTTA + EGG ROAST',
        description: 'Flaky porotta with spicy egg roast',
        items: ['2 Porotta', 'Egg Roast (2 eggs)', 'Banana', 'Tea/Coffee'],
      },
      lunch: {
        name: 'MOTTA/BARIK RICE & FISH CURRY',
        description: 'Kerala style fish curry with rice and sides',
        items: [
          'Motta/Barik Rice',
          'Fish Curry',
          'Mixed Vegetables',
          'Pickle',
          'Papad',
        ],
      },
      dinner: {
        name: 'APPAM + CHICKEN CURRY',
        description: 'Soft rice pancakes with flavorful chicken curry',
        items: ['4 Appam', 'Chicken Curry', 'Coconut Chutney', 'Pickle'],
      },
    },
    SUNDAY: {
      breakfast: {
        name: 'UPPMA + BANANA',
        description: 'Semolina breakfast with fresh banana',
        items: ['Uppma', 'Coconut Chutney', 'Banana', 'Tea/Coffee'],
      },
      lunch: {
        name: 'BEEF BIRIYANI',
        description: 'Special Sunday beef biryani',
        items: ['Beef Biriyani', 'Raita', 'Pickle', 'Papad', 'Boiled Egg'],
      },
      dinner: {
        name: 'NONE',
        description: 'Dinner not available on Sundays',
        items: [],
      },
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

  const getMealIcon = (mealType: string) => {
    switch (mealType) {
      case 'breakfast':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
        );
      case 'lunch':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
        );
      case 'dinner':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
        );
      default:
        return null;
    }
  };

  const renderMealCard = (meal: MenuItem, mealType: string, color: string) => {
    if (meal.name === 'NONE') {
      return (
        <div
          className={`rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center opacity-60`}
        >
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-gray-300 p-4 text-gray-500">
              {getMealIcon(mealType)}
            </div>
          </div>
          <h4 className="font-montserrat__alternates mb-2 text-2xl font-bold text-gray-400">
            {mealType.toUpperCase()}
          </h4>
          <p className="text-gray-400">Not Available</p>
        </div>
      );
    }

    return (
      <div
        className={`group transform rounded-2xl border-l-8 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
        style={{ borderLeftColor: color }}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="rounded-full p-4 text-white transition-transform duration-300 group-hover:rotate-12"
              style={{ backgroundColor: color }}
            >
              {getMealIcon(mealType)}
            </div>
            <div>
              <h4
                className="font-montserrat__alternates text-sm font-semibold tracking-wider uppercase"
                style={{ color }}
              >
                {mealType}
              </h4>
              <h3 className="font-milchella text-2xl text-[#373737] md:text-3xl">
                {meal.name}
              </h3>
            </div>
          </div>
        </div>

        <p className="font-montserrat__alternates mb-6 text-base leading-relaxed text-[#666666]">
          {meal.description}
        </p>

        {meal.items && meal.items.length > 0 && (
          <div className="space-y-3 border-t border-gray-200 pt-6">
            <p className="font-montserrat__alternates text-sm font-semibold tracking-wider text-[#373737] uppercase">
              Includes:
            </p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {meal.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span className="font-montserrat__alternates text-sm text-[#373737]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const currentMenu = weeklyMenu[activeDay];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E7] via-[#FFFFFF] to-[#FFF8E7]">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#A9861B] to-[#D4AF37] py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-milchella mb-6 text-5xl text-white md:text-7xl lg:text-8xl">
            Our Complete Menu
          </h1>
          <p className="font-montserrat__alternates mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
            Explore our authentic Indian cuisine with carefully crafted meals
            for breakfast, lunch, and dinner
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-montserrat__alternates text-white">
                Fresh Daily
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-montserrat__alternates text-white">
                Authentic Recipes
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-montserrat__alternates text-white">
                Home Delivery
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="font-milchella mb-4 text-4xl text-[#A9861B] md:text-5xl">
            Monthly Mess Packages
          </h2>
          <p className="font-montserrat__alternates text-lg text-[#373737]">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 1 Time Food */}
          <div className="transform overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] p-8 text-center">
              <h3 className="font-montserrat__alternates mb-2 text-3xl font-bold text-white">
                LUNCH ONLY
              </h3>
              <p className="text-white/90">1 Time Food</p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[#FF6B35]">180</span>
                <span className="text-2xl text-[#373737]"> AED</span>
                <p className="mt-2 text-[#373737]">per month</p>
              </div>
              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF6B35]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    Fresh lunch daily
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF6B35]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    Rice & curry meals
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF6B35]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    Free delivery
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Times Food */}
          <div className="relative transform overflow-hidden rounded-3xl border-4 border-[#A9861B] bg-white shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
              <span className="rounded-full bg-[#FF6B35] px-6 py-2 text-sm font-bold text-white shadow-lg">
                MOST POPULAR
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#A9861B] to-[#D4AF37] p-8 pt-12 text-center">
              <h3 className="font-montserrat__alternates mb-2 text-3xl font-bold text-white">
                LUNCH + DINNER
              </h3>
              <p className="text-white/90">2 Times Food</p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[#A9861B]">320</span>
                <span className="text-2xl text-[#373737]"> AED</span>
                <p className="mt-2 text-[#373737]">per month</p>
              </div>
              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#A9861B]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    Lunch & Dinner daily
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#A9861B]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    2 time delivery
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#A9861B]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    Best value package
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Times Food */}
          <div className="transform overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-[#C41E3A] to-[#FF6B35] p-8 text-center">
              <h3 className="font-montserrat__alternates mb-2 text-3xl font-bold text-white">
                ALL MEALS
              </h3>
              <p className="text-white/90">3 Times Food</p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[#C41E3A]">370</span>
                <span className="text-2xl text-[#373737]"> AED</span>
                <p className="mt-2 text-[#373737]">per month</p>
              </div>
              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#C41E3A]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    All three meals
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#C41E3A]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    Full day coverage
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#C41E3A]"
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
                  <span className="font-montserrat__alternates text-[#373737]">
                    Maximum convenience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-montserrat__alternates text-sm text-[#666666]">
            * Advance payment required: 200 AED | ** 2 time delivery included
          </p>
        </div>
      </div>

      {/* Weekly Menu Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-milchella mb-4 text-4xl text-[#A9861B] md:text-6xl">
              Weekly Menu Schedule
            </h2>
            <p className="font-montserrat__alternates text-lg text-[#373737]">
              Fresh preparations every day with authentic Indian flavors
            </p>
          </div>

          {/* Day Selector */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`font-montserrat__alternates rounded-xl px-6 py-4 text-base font-bold transition-all duration-300 md:px-8 md:text-lg ${
                  activeDay === day
                    ? 'scale-110 bg-gradient-to-r from-[#A9861B] to-[#D4AF37] text-white shadow-2xl'
                    : 'bg-[#FFF8E7] text-[#373737] hover:scale-105 hover:bg-[#FFE4B5]'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Meal Type Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveMealType('all')}
              className={`font-montserrat__alternates rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 ${
                activeMealType === 'all'
                  ? 'bg-[#A9861B] text-white shadow-lg'
                  : 'bg-gray-200 text-[#373737] hover:bg-gray-300'
              }`}
            >
              All Meals
            </button>
            <button
              onClick={() => setActiveMealType('breakfast')}
              className={`font-montserrat__alternates rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 ${
                activeMealType === 'breakfast'
                  ? 'bg-[#FF6B35] text-white shadow-lg'
                  : 'bg-gray-200 text-[#373737] hover:bg-gray-300'
              }`}
            >
              Breakfast
            </button>
            <button
              onClick={() => setActiveMealType('lunch')}
              className={`font-montserrat__alternates rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 ${
                activeMealType === 'lunch'
                  ? 'bg-[#A9861B] text-white shadow-lg'
                  : 'bg-gray-200 text-[#373737] hover:bg-gray-300'
              }`}
            >
              Lunch
            </button>
            <button
              onClick={() => setActiveMealType('dinner')}
              className={`font-montserrat__alternates rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 ${
                activeMealType === 'dinner'
                  ? 'bg-[#C41E3A] text-white shadow-lg'
                  : 'bg-gray-200 text-[#373737] hover:bg-gray-300'
              }`}
            >
              Dinner
            </button>
          </div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {(activeMealType === 'all' || activeMealType === 'breakfast') && (
              <div>
                {renderMealCard(currentMenu.breakfast, 'breakfast', '#FF6B35')}
              </div>
            )}
            {(activeMealType === 'all' || activeMealType === 'lunch') && (
              <div>{renderMealCard(currentMenu.lunch, 'lunch', '#A9861B')}</div>
            )}
            {(activeMealType === 'all' || activeMealType === 'dinner') && (
              <div>
                {renderMealCard(currentMenu.dinner, 'dinner', '#C41E3A')}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Week Overview Section */}
      <div className="bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-milchella mb-4 text-4xl text-[#A9861B] md:text-5xl">
              Complete Week at a Glance
            </h2>
            <p className="font-montserrat__alternates text-lg text-[#373737]">
              Plan your week with our diverse menu offerings
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-white shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#A9861B] to-[#D4AF37]">
                  <th className="font-montserrat__alternates px-6 py-4 text-left text-white">
                    Day
                  </th>
                  <th className="font-montserrat__alternates px-6 py-4 text-left text-white">
                    Breakfast
                  </th>
                  <th className="font-montserrat__alternates px-6 py-4 text-left text-white">
                    Lunch
                  </th>
                  <th className="font-montserrat__alternates px-6 py-4 text-left text-white">
                    Dinner
                  </th>
                </tr>
              </thead>
              <tbody>
                {days.map((day, index) => (
                  <tr
                    key={day}
                    className={`border-b border-gray-200 transition-colors duration-200 hover:bg-[#FFF8E7] ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="font-montserrat__alternates px-6 py-4 font-bold text-[#A9861B]">
                      {day}
                    </td>
                    <td className="font-montserrat__alternates px-6 py-4 text-[#373737]">
                      {weeklyMenu[day].breakfast.name}
                    </td>
                    <td className="font-montserrat__alternates px-6 py-4 text-[#373737]">
                      {weeklyMenu[day].lunch.name}
                    </td>
                    <td className="font-montserrat__alternates px-6 py-4 text-[#373737]">
                      {weeklyMenu[day].dinner.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#A9861B] to-[#D4AF37] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-milchella mb-6 text-4xl text-white md:text-6xl">
            Ready to Order?
          </h2>
          <p className="font-montserrat__alternates mb-10 text-xl text-white/90">
            Download our menu or place your order now via WhatsApp
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="/pdf/spice_catering.pdf"
              target="_blank"
              className="font-montserrat__alternates flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-[#A9861B] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#FFF8E7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
              <span>Download Full Menu</span>
            </a>

            <a
              href="https://wa.me/0507440148"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat__alternates flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>

          <div className="mt-12 border-t border-white/30 pt-8">
            <p className="font-montserrat__alternates mb-3 text-2xl font-bold text-white">
              Contact Us Today!
            </p>
            <a
              href="tel:0507440148"
              className="font-montserrat__alternates text-4xl font-bold text-white transition-colors duration-300 hover:text-[#FFE4B5] md:text-5xl"
            >
              050 744 0148
            </a>
            <p className="font-montserrat__alternates mt-4 text-white/90">
              Available 7 days a week | Fast & Free Delivery
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[#FF6B35] p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-montserrat__alternates mb-3 text-2xl font-bold text-[#373737]">
                Fresh Daily Preparation
              </h3>
              <p className="font-montserrat__alternates text-[#666666]">
                All meals are prepared fresh every day with the finest
                ingredients
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[#A9861B] p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-montserrat__alternates mb-3 text-2xl font-bold text-[#373737]">
                Home Delivery
              </h3>
              <p className="font-montserrat__alternates text-[#666666]">
                Convenient delivery right to your doorstep, twice daily
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[#C41E3A] p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-montserrat__alternates mb-3 text-2xl font-bold text-[#373737]">
                Authentic Recipes
              </h3>
              <p className="font-montserrat__alternates text-[#666666]">
                Traditional Indian recipes prepared with authentic spices and
                techniques
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
