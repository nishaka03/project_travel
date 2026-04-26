'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-beige-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-green-leaf/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-60 h-60 bg-gold-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-accent mb-4">
            Your Guide
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-green-deep mb-6">
            Meet the Heart Behind
            <span className="block text-green-forest italic">Ceylon Trails</span>
          </h2>
          <div className="organic-divider">
            <svg className="w-6 h-6 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3c-1.5 4-4.5 7-9 9 4.5 2 7.5 5 9 9 1.5-4 4.5-7 9-9-4.5-2-7.5-5-9-9z" />
            </svg>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Photo — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-organic-xl aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/temple of tooth.jpeg"
                alt="Kasun Perera - Your Sri Lankan Tour Guide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/40 via-transparent to-transparent" />
            </div>
            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-gold-accent text-green-deep rounded-2xl p-5 shadow-gold"
            >
              <span className="block text-3xl font-heading font-bold">10+</span>
              <span className="text-xs font-body font-semibold uppercase tracking-wider">Years Guiding</span>
            </motion.div>
          </motion.div>

          {/* Bio — 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-green-deep mb-2">
              Kasun
            </h3>
            <p className="text-gold-accent font-body font-semibold text-sm mb-6 tracking-wide">
              SLTDA Certified Professional Tour Guide
            </p>
            <div className="space-y-4 text-charcoal-light font-body leading-relaxed">
              <p>
                Hello! I am Kasun, a passionate and professional tour guide with over a decade of experience crafting memorable journeys across Sri Lanka. Specializing in one-day and two-day trips, I have turned my love for travel into a dedicated, personalized tour service.
              </p>
              <p>
                My mission is to make your travels unforgettable, filled with enriching experiences and lasting memories. Having guided countless happy travelers, particularly from the UK and Germany, I pride myself on delivering exceptional service. As a licensed guide certified by the Sri Lanka Tourism Development Authority, you&apos;re in safe, experienced hands ready to explore the best that Sri Lanka has to offer!
              </p>
            </div>

            {/* Features & Services */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-8 pt-8 border-t border-beige-warm/50 text-sm font-body font-semibold text-green-deep">
              <div className="flex items-center gap-2">
                <span className="text-gold-accent">✔</span> 1 & 2 Day Tours
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-accent">✔</span> Airport Transfers
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-accent">✔</span> Pay at the End
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-accent">✔</span> Comfortable Vehicles
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-accent">✔</span> Tailor-made Tours
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-accent">✔</span> 100% Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
