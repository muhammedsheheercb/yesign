'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="h-full w-full bg-gradient-to-b from-[#2C1810] to-[#1A0F0A] px-4 pt-8 lg:px-8">
      <div className="flex flex-col gap-8 pt-8 lg:pt-16">
        {/* Main Content */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-8 md:px-16 lg:px-32">
          {/* Logo and Contact Section */}
          <div className="flex flex-col items-center gap-8 md:items-start">
            {/* Logo */}
            <div>
              <Link href={'/'}>
                <div className="flex flex-col items-center gap-2 md:items-start">
                  <h2 className="font-milchella text-4xl text-[#A9861B] lg:text-5xl">
                    Spice Catering
                  </h2>
                  <p className="font-montserrat__alternates text-sm text-[#D4AF37]">
                    Authentic Indian Cuisine
                  </p>
                </div>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-center gap-6 md:items-start">
              <div className="flex flex-col items-center gap-3 md:items-start">
                <span className="font-montserrat__alternates text-sm font-bold tracking-wider text-[#A9861B] uppercase">
                  Contact Us
                </span>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 text-[#D4AF37]"
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
                  <Link
                    className="font-montserrat__alternates text-center text-sm leading-relaxed text-[#E5D4B5] transition-colors hover:text-[#D4AF37] md:text-left"
                    target="_blank"
                    href={
                      'https://maps.google.com/?q=Warehouse+130-103+Dubai+Investment+Park+2'
                    }
                  >
                    Warehouse 130-103, King Key Stores <br />
                    for Warehouse Management <br />
                    Dubai Investment Park 2
                  </Link>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#D4AF37]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <Link
                    className="font-montserrat__alternates text-lg font-bold text-[#E5D4B5] transition-colors hover:text-[#D4AF37]"
                    href={'tel:0507440148'}
                  >
                    050 744 0148
                  </Link>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#D4AF37]"
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
                  <Link
                    className="font-montserrat__alternates text-sm text-[#E5D4B5] transition-colors hover:text-[#D4AF37]"
                    href={'mailto:spicysquarecatering@gmail.com'}
                  >
                    spicysquarecatering@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center justify-center gap-6 md:items-start md:pt-12">
            <h3 className="font-montserrat__alternates text-lg font-bold tracking-wider text-[#A9861B] uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col items-center gap-4 md:items-start">
              <Link
                href={'/'}
                className="font-montserrat__alternates text-base font-semibold tracking-wide text-[#E5D4B5] uppercase transition-all duration-300 hover:translate-x-2 hover:text-[#D4AF37]"
              >
                Home
              </Link>
              <Link
                href={'/menu'}
                className="font-montserrat__alternates text-base font-semibold tracking-wide text-[#E5D4B5] uppercase transition-all duration-300 hover:translate-x-2 hover:text-[#D4AF37]"
              >
                Menu
              </Link>
              <Link
                href={'/contact'}
                className="font-montserrat__alternates text-base font-semibold tracking-wide text-[#E5D4B5] uppercase transition-all duration-300 hover:translate-x-2 hover:text-[#D4AF37]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex w-full flex-col items-center gap-6 md:w-auto md:items-start md:pt-12">
            <h3 className="font-montserrat__alternates text-lg font-bold tracking-wider text-[#A9861B] uppercase">
              Our Services
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 text-[#D4AF37]"
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
                <span className="font-montserrat__alternates text-sm text-[#E5D4B5]">
                  Monthly Mess Packages
                </span>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 text-[#D4AF37]"
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
                <span className="font-montserrat__alternates text-sm text-[#E5D4B5]">
                  Authentic Indian Cuisine
                </span>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 text-[#D4AF37]"
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
                <span className="font-montserrat__alternates text-sm text-[#E5D4B5]">
                  Fresh Daily Preparation
                </span>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 text-[#D4AF37]"
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
                <span className="font-montserrat__alternates text-sm text-[#E5D4B5]">
                  Home Delivery Available
                </span>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 text-[#D4AF37]"
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
                <span className="font-montserrat__alternates text-sm text-[#E5D4B5]">
                  Traditional Kerala Recipes
                </span>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 text-[#D4AF37]"
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
                <span className="font-montserrat__alternates text-sm text-[#E5D4B5]">
                  Affordable Pricing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-t-3xl bg-gradient-to-r from-[#A9861B] to-[#D4AF37] px-6 py-8 text-center">
          <h3 className="font-milchella mb-3 text-2xl text-white md:text-3xl">
            Order Your Monthly Mess Today
          </h3>
          <p className="font-montserrat__alternates mb-6 text-white/90">
            Fresh, authentic Indian meals delivered to your doorstep
          </p>
          <a
            href="https://wa.me/0507440148"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat__alternates inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#A9861B] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#FFF8E7]"
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

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-[#A9861B]/20 py-6">
          <div className="flex flex-col items-center justify-center md:px-16 lg:px-32">
            <p className="font-montserrat__alternates text-xs tracking-wide text-[#E5D4B5]/70 uppercase">
              © 2025 Spice Catering. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
