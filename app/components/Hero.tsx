'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/elle 2.jpeg"
          alt="Ella - Sri Lanka"
          fill
          className="object-cover object-[75%_center] md:object-center"
          priority
          sizes="100vw"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-deep/70 via-green-deep/40 to-green-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-deep/60 via-green-deep/30 to-transparent" />
        <div className="absolute inset-0 bg-black/20" /> {/* Extra darkening wash */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold-accent/5 blur-3xl animate-float" />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full bg-green-leaf/10 blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-start pt-32 sm:justify-center sm:pt-0">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden sm:block mb-6"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 text-[10px] sm:text-xs font-body font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gold-accent border border-gold-accent/30 rounded-full bg-gold-accent/10">
              Curated Experiences Since 2012
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-beige-sand leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-6 drop-shadow-2xl mt-4 sm:mt-0"
          >
            Discover the
            <span className="block text-gold-accent italic drop-shadow-md">Soul of Sri Lanka</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-sm sm:text-xl text-white font-body font-medium leading-relaxed mb-6 sm:mb-10 max-w-lg drop-shadow-md"
          >
            Immerse yourself in ancient temples, misty tea plantations, and
            untamed wildlife with a guide who calls this paradise home.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute bottom-10 left-6 sm:relative sm:bottom-auto sm:left-auto flex flex-col sm:flex-row items-start gap-3 sm:gap-4 sm:mt-2 z-20"
          >
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-tripadvisor"
              className="group flex sm:inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-gold-accent text-green-deep font-body font-bold text-xs sm:text-base rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] w-[220px] sm:w-auto"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="6.5" cy="13.5" r="2.5" />
                <circle cx="17.5" cy="13.5" r="2.5" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" />
              </svg>
              Book on TripAdvisor
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <Link
              href="/#tours"
              id="hero-cta-explore"
              className="flex sm:inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 border border-beige-sand/30 bg-black/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none text-beige-sand font-body font-medium text-xs sm:text-base rounded-full hover:bg-beige-sand/10 hover:border-beige-sand/50 transition-all duration-300 w-[220px] sm:w-auto"
            >
              Explore Tours
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
