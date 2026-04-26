'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    id: 1,
    title: 'Contact us',
    description: 'You can contact us via Whatsapp or Email to plan your perfect itinerary.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Pick you at your place',
    description: 'We will pick you up directly from your hotel for the tour, ensuring a hassle-free start.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Pay After Your Tour',
    description: 'All the payment can be done securely after completing the tour. No upfront fees required.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Steps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-accent/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-accent mb-4">
            Booking A Tour
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-green-deep mb-6">
            3 Easy <span className="text-green-forest italic">Steps</span>
          </h2>
          <div className="organic-divider">
            <svg className="w-6 h-6 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3c-1.5 4-4.5 7-9 9 4.5 2 7.5 5 9 9 1.5-4 4.5-7 9-9-4.5-2-7.5-5-9-9z" />
            </svg>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent" />

          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="relative flex flex-col items-center text-center bg-beige-light/50 p-8 rounded-3xl border border-beige-warm/30 shadow-organic"
            >
              <div className="w-24 h-24 bg-green-leaf/10 rounded-full flex items-center justify-center mb-6 text-green-forest border-4 border-white shadow-sm relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-green-deep mb-4">{step.title}</h3>
              <div className="w-12 h-[1px] bg-gold-accent/50 mb-4" />
              <p className="text-sm text-charcoal-light font-body leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/94777213798"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-green-forest hover:bg-green-deep text-white font-body font-semibold rounded-full shadow-organic transition-all duration-300 hover:-translate-y-1 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-wider text-green-leaf opacity-80">WhatsApp Us</span>
              <span>+94 77 721 3798</span>
            </div>
          </a>

          <a
            href="mailto:Plkasun0@gmail.com"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white hover:bg-beige-light border-2 border-gold-accent/50 text-green-deep font-body font-semibold rounded-full shadow-organic transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-6 h-6 text-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-wider text-charcoal-light opacity-80">Email Us</span>
              <span>Plkasun0@gmail.com</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
