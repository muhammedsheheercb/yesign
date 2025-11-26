'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Smartphone,
  Palette,
  PenTool,
  Globe,
  Zap,
  TrendingUp,
  Video,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

export function ServicesSection() {
  const services = [
    {
      title: 'Branding',
      description: 'Build a memorable brand identity',
      icon: BarChart3,
    },
    {
      title: 'Digital Marketing',
      description: 'Reach your audience effectively',
      icon: Smartphone,
    },
    {
      title: 'Graphic Designing',
      description: 'Stunning visuals that speak',
      icon: Palette,
    },
    {
      title: 'Logo Design',
      description: 'Iconic marks that last',
      icon: PenTool,
    },
    {
      title: 'Website Designing',
      description: 'Modern & responsive websites',
      icon: Globe,
    },
    {
      title: 'Business Campaign',
      description: 'Campaigns that convert',
      icon: Zap,
    },
    {
      title: 'Traditional Marketing',
      description: 'Time-tested strategies',
      icon: TrendingUp,
    },
    {
      title: 'Video Production',
      description: 'Cinematic storytelling',
      icon: Video,
    },
    {
      title: 'Strategies',
      description: 'Data-driven planning',
      icon: FileText,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-1/4 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />

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
        {/* Header Section */}
        <div className="mx-auto mb-20 max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center gap-3"
              >
                <div className="h-px w-8 bg-cyan-400" />
                <span className="font-inter text-xs font-medium tracking-[0.3em] text-cyan-400 uppercase">
                  Know Us Better
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-barlow text-4xl leading-tight font-light tracking-tight text-white uppercase md:text-5xl lg:text-6xl"
              >
                We Help Create
                <span className="mt-2 block font-bold text-cyan-400">
                  Strategies & Design
                </span>
              </motion.h2>
            </div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="font-inter text-base leading-relaxed text-white/60 md:text-lg">
                We never underestimate any part of each project as they&apos;re
                all essential to meeting the ultimate goal. You&apos;ll be
                engaged with our positive and enthusiastic attitude.
              </p>
              <Link
                href="/our-services"
                className="group flex items-center gap-2 self-start"
              >
                <span className="font-inter text-sm font-medium tracking-wider text-cyan-400 uppercase transition-colors group-hover:text-cyan-300">
                  View All Services
                </span>
                <ArrowUpRight className="h-4 w-4 text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="relative h-52 overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {/* Number Badge */}
                    <div className="font-barlow absolute top-4 right-6 text-6xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-cyan-400/10">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 h-6 w-6 border-t border-l border-cyan-400/0 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-cyan-400" />
                    <div className="absolute right-0 bottom-0 h-6 w-6 border-r border-b border-cyan-400/0 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-cyan-400" />

                    {/* Icon and Title Container */}
                    <div className="relative z-10 flex h-full flex-col">
                      {/* Icon */}
                      <div className="mb-5">
                        <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
                          <IconComponent className="h-6 w-6 text-white/60 transition-colors duration-300 group-hover:text-cyan-400" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-barlow mb-2 text-lg font-semibold tracking-wide text-white uppercase transition-colors duration-300 group-hover:text-cyan-400">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-inter text-sm text-white/40">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom border animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />

                    {/* Right border animation */}
                    <motion.div
                      className="absolute right-0 bottom-0 w-[2px] bg-gradient-to-t from-cyan-400 to-cyan-300"
                      initial={{ height: 0 }}
                      whileHover={{ height: '100%' }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeOut',
                        delay: 0.1,
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left"
        >
          <p className="font-inter text-base text-white/40">
            Ready to elevate your brand?{' '}
            <span className="text-white">Let&apos;s work together.</span>
          </p>
          <Link
            href="/contact"
            className="group font-inter flex items-center gap-3 border-2 border-cyan-400 bg-cyan-400 px-8 py-4 text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:bg-transparent hover:text-cyan-400"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
