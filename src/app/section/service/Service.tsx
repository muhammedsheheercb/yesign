import {
  ArrowRight,
  Palette,
  Globe,
  BarChart3,
  Video,
  Megaphone,
  PenTool,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function ServicesSection() {
  const services = [
    {
      title: 'Graphic Designing',
      description:
        'At Yesign, graphic design is more than visuals. We craft visual identities that speak volumes.',
      icon: Palette,
    },
    {
      title: 'Web Design & SEO',
      description:
        'Our web designs are made to move minds and stir hearts. Built for performance and beauty.',
      icon: Globe,
    },
    {
      title: 'Social Media Marketing',
      description:
        'We turn social media into a stage where your story unfolds and your audience connects.',
      icon: BarChart3,
    },
  ];

  return (
    <section className="relative h-full w-full overflow-hidden bg-black py-20 md:py-28">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -right-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute bottom-20 -left-40 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="font-inter mb-4 text-xs font-medium tracking-[0.3em] text-cyan-400 uppercase">
            Best Features
          </span>
          <h2 className="font-barlow text-4xl font-light tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
            Our <span className="font-bold text-cyan-400">Services</span>
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-4">
          {/* Left Section with Image */}
          <div className="flex flex-col justify-between lg:col-span-1">
            <div className="group relative mb-8 overflow-hidden">
              {/* Image */}
              <Image
                src="/images/home/about/4.webp"
                alt="Best of Our Features"
                width={400}
                height={500}
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-96"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 h-12 w-12 border-t-2 border-l-2 border-cyan-400 transition-all duration-500 group-hover:h-16 group-hover:w-16" />
              <div className="absolute right-0 bottom-0 h-12 w-12 border-r-2 border-b-2 border-cyan-400 transition-all duration-500 group-hover:h-16 group-hover:w-16" />

              {/* Text Overlay */}
              <div className="absolute right-6 bottom-6 left-6">
                <h3 className="font-barlow text-2xl leading-tight font-bold text-white md:text-3xl">
                  Best Of
                  <br />
                  <span className="text-cyan-400">Our Features</span>
                </h3>
              </div>
            </div>

            <Link href="/our-services" className="group">
              <button className="font-inter flex w-full items-center justify-center gap-3 border-2 border-cyan-400 bg-transparent px-6 py-4 text-sm font-semibold tracking-wider text-cyan-400 uppercase transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                <span>See All Services</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Right Section with Service Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/50 hover:bg-white/10"
                >
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 h-8 w-8 border-t border-l border-cyan-400/30 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:border-cyan-400" />
                  <div className="absolute right-0 bottom-0 h-8 w-8 border-r border-b border-cyan-400/30 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:border-cyan-400" />

                  {/* Number Badge */}
                  <div className="font-barlow absolute top-6 right-6 text-5xl font-bold text-white/5 transition-colors duration-500 group-hover:text-cyan-400/10">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center border border-cyan-400/30 bg-cyan-400/5 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/10">
                    <service.icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h4 className="font-barlow relative z-10 mb-3 text-xl font-semibold tracking-wide text-white uppercase">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="font-inter relative z-10 mb-8 flex-1 text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>

                  {/* Arrow Link */}
                  <Link
                    href="/our-services"
                    className="group/link relative z-10 flex items-center gap-2 self-start text-sm font-medium text-white/40 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <span className="font-inter tracking-wider uppercase">
                      Learn More
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Additional Services Row */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Video Production',
                  icon: Video,
                  desc: 'Cinematic storytelling that captures attention',
                },
                {
                  title: 'Branding',
                  icon: PenTool,
                  desc: 'Complete brand identity that stands out',
                },
                {
                  title: 'Digital Marketing',
                  icon: Megaphone,
                  desc: 'Strategic campaigns that drive results',
                },
              ].map((service, index) => (
                <Link
                  key={index}
                  href="/our-services"
                  className="group flex items-center gap-4 border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/5 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/10">
                    <service.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-inter text-sm font-semibold text-white">
                      {service.title}
                    </h5>
                    <p className="font-inter text-xs text-white/40">
                      {service.desc}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
