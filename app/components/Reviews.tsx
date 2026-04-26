'use client';

import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Tom W',
    location: 'Travelled with family',
    rating: 5,
    text: "Kasun was our tour guide for a two day trip, picking us up in Kalutara for Yala national park, Ella (nine arches bridge, mini adams peak), the Ella to Nanouya train, Little England, Kandy buddhist temple and tea factory! Kasun was nothing short of fantastic - his service...",
    date: 'August 2025',
  },
  {
    name: 'Peter Piper',
    location: 'Munich, Germany',
    rating: 5,
    text: "My wife and I went to Yala National Park with Kasun. He picked us up at the resort. On the way out he showed us a tea factory spontaneously, which was very worth seeing. During the safari (we were lucky enough to see a leopard) he was able to answer all our questions....",
    date: 'December 2024',
  },
  {
    name: 'Jane B',
    location: 'Travelled as a couple',
    rating: 5,
    text: "We've had the best time exploring and learning about some of the main places of Sri Lanka with our tour guide Kasun. He is a true professional, very efficient, friendly and knowledgeable. Nothing was ever to much trouble and he made sure we really did get to see...",
    date: 'July 2025',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-gold-accent' : 'text-beige-warm'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-green-deep relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-forest/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-beige-sand mb-6">
            What Our Guests
            <span className="block text-gold-accent italic">Are Saying</span>
          </h2>
          <div className="organic-divider">
            <svg className="w-6 h-6 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3c-1.5 4-4.5 7-9 9 4.5 2 7.5 5 9 9 1.5-4 4.5-7 9-9-4.5-2-7.5-5-9-9z" />
            </svg>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-green-forest/40 backdrop-blur-sm border border-green-moss/20 rounded-2xl p-7 hover:bg-green-forest/60 transition-all duration-300"
            >
              <StarRating rating={review.rating} />
              <p className="text-beige-sand/80 font-body text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-beige-sand font-body font-semibold text-sm">{review.name}</p>
                  <p className="text-beige-sand/50 font-body text-xs">{review.location}</p>
                </div>
                <span className="text-xs text-gold-accent/60 font-body">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TripAdvisor Widget Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-green-forest/30 border border-green-moss/20 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-gold-accent" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" opacity="0.2" />
                <circle cx="8" cy="12" r="2" />
                <circle cx="16" cy="12" r="2" />
                <path d="M12 4c-2 0-3.5.5-5 2h10c-1.5-1.5-3-2-5-2z" />
              </svg>
              <span className="text-beige-sand font-heading font-bold text-lg">TripAdvisor Reviews</span>
            </div>
            <p className="text-beige-sand/60 font-body text-sm mb-4">
              See all our verified reviews and ratings on TripAdvisor
            </p>

            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-accent text-green-deep font-body font-semibold text-sm rounded-full hover:bg-gold-light transition-all duration-300"
            >
              View on TripAdvisor →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
