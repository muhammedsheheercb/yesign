import Image from 'next/image';
import React from 'react';
import {
  Palette,
  Globe,
  TrendingUp,
  Video,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Stunning visuals that tell your brand story',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Modern, responsive websites that convert',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Marketing',
    description: 'Data-driven strategies for growth',
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Compelling videos that captivate audiences',
  },
];

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-black px-4 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle Gradient */}
        <div className="absolute top-0 -right-60 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-0 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Image Gallery Section */}
          <div className="relative flex w-full flex-row items-center justify-center gap-3 md:gap-5 lg:w-1/2">
            {/* Main Large Image */}
            <div className="group relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src="/images/home/about/1.webp"
                width={5600}
                height={3500}
                alt="YESIGN Creative Work - Branding Design"
                className="relative h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[350px] md:w-[280px] lg:h-[420px] lg:w-[320px]"
              />
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 border-cyan-400" />
            </div>

            {/* Stacked Images */}
            <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
              <div className="group relative overflow-hidden">
                <Image
                  src="/images/home/about/2.webp"
                  width={5600}
                  height={3500}
                  alt="YESIGN Creative Work - Web Design"
                  className="h-[105px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[167px] md:w-[280px] lg:h-[200px] lg:w-[320px]"
                />
                <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-cyan-400/30" />
              </div>
              <div className="group relative overflow-hidden">
                <Image
                  src="/images/home/about/3.webp"
                  width={5600}
                  height={3500}
                  alt="YESIGN Creative Work - Digital Marketing"
                  className="h-[105px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[167px] md:w-[280px] lg:h-[200px] lg:w-[320px]"
                />
                <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-cyan-400/30" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 border border-cyan-400/30 bg-black/90 px-5 py-3 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="font-inter text-xs font-medium tracking-wider text-white uppercase">
                Award-Winning Agency
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex w-full flex-col items-start justify-start gap-6 lg:w-1/2">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-cyan-400" />
              <span className="font-inter text-xs font-medium tracking-[0.3em] text-cyan-400 uppercase">
                About YESIGN
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-barlow text-4xl font-light tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
              Crafting Digital
              <span className="mt-2 block font-bold text-cyan-400">
                Excellence
              </span>
            </h1>

            {/* Tagline */}
            <h4 className="font-playfair max-w-[600px] text-xl leading-relaxed font-normal text-white/80 md:text-2xl">
              We transform ideas into powerful brands through strategic design
              and innovative digital solutions
            </h4>

            {/* Description */}
            <p className="font-inter max-w-[550px] text-sm leading-relaxed font-normal text-white/50 md:text-base">
              At YESIGN, we believe every brand has a unique story waiting to be
              told. Our passionate team of designers, developers, and marketers
              work collaboratively to create memorable experiences that resonate
              with your audience and drive measurable results.
            </p>

            {/* Services Grid */}
            <div className="mt-4 grid w-full grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/5 transition-colors duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/10">
                    <service.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-inter text-sm font-semibold text-white">
                      {service.title}
                    </span>
                    <span className="font-inter text-xs text-white/40">
                      {service.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex items-center gap-8">
              <button className="group font-inter flex items-center gap-3 border-2 border-cyan-400 bg-cyan-400 px-8 py-4 text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:bg-transparent hover:text-cyan-400">
                <span>Explore Our Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <div className="flex flex-col">
                <span className="font-barlow text-3xl font-bold text-white">
                  150<span className="text-cyan-400">+</span>
                </span>
                <span className="font-inter text-xs tracking-wider text-white/40 uppercase">
                  Projects Done
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
