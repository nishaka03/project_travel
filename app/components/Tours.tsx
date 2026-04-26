'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tours = [
  {
    id: 'udawalawe',
    title: 'Udawalawe Safari',
    subtitle: 'Elephant Encounters',
    description: 'Explore the wild beauty of Udawalawe National Park and visit the heartwarming Elephant Transit Home with us. Enjoy seamless, comfortable transfers as you witness majestic elephants in their natural habitat. Experience an unforgettable safari adventure, combining wildlife and conservation, all tailored to make your journey truly extraordinary!',
    image: '/images/udawalawe_safari.png',
    highlights: ['Elephant Transit Home', 'Jeep Safari', 'Wildlife Conservation'],
  },
  {
    id: 'galle',
    title: 'Galle Day Tour',
    subtitle: 'Colonial Charm',
    description: 'Wander through the cobblestone streets of the UNESCO World Heritage Galle Fort, visit the iconic lighthouse, and enjoy the beautiful southern coastline.',
    image: '/images/galle_tour.png',
    highlights: ['Galle Fort', 'Dutch Lighthouse', 'Turtle Hatchery'],
  },
  {
    id: 'yala',
    title: 'Yala Safari',
    subtitle: 'Leopard Spotting',
    description: 'Embark on an exhilarating jeep safari in Yala National Park, famous for its high density of elusive leopards, sloth bears, and diverse birdlife.',
    image: '/images/yala_safari.png',
    highlights: ['Leopard Tracking', 'Sloth Bears', 'Coastal Wilderness'],
  },
  {
    id: 'ella_nuwara',
    title: 'Ella & Nuwara Eliya',
    subtitle: 'Tea Country Magic',
    description: 'A 2-day journey through the misty hills of Nuwara Eliya and the laid-back vibe of Ella. See breathtaking waterfalls and endless tea estates.',
    image: '/images/ella_nuwara.png',
    highlights: ['Nine Arch Bridge', 'Tea Factory', 'Gregory Lake'],
  },
  {
    id: 'kandy_pinnawala',
    title: 'Kandy & Pinnawala',
    subtitle: 'Cultural Heart',
    description: 'Visit the sacred Temple of the Tooth Relic in Kandy and witness the incredible sight of elephants bathing at the Pinnawala Elephant Orphanage.',
    image: '/images/kandy_pinnawala.png',
    highlights: ['Temple of the Tooth', 'Pinnawala', 'Peradeniya Gardens'],
  },
  {
    id: 'ella_day',
    title: 'Ella Day Tour',
    subtitle: 'Mountain Escapes',
    description: "Discover the charm of Ella in a single day. Hike up Little Adam's Peak, cross the Nine Arch Bridge, and take a refreshing dip at Ravana Falls.",
    image: '/images/ella_day.png',
    highlights: ["Little Adam's Peak", 'Nine Arch Bridge', 'Ravana Falls'],
  },
  {
    id: 'sigiriya_dambulla',
    title: 'Sigiriya & Dambulla',
    subtitle: 'Ancient Majesty',
    description: 'Climb the breathtaking Sigiriya Rock Fortress and explore the intricate murals and statues inside the Dambulla Cave Temple on this full-day tour.',
    image: '/images/sigiriya_dambulla.png',
    highlights: ['Sigiriya Rock', 'Dambulla Caves', 'Village Tour'],
  },
  {
    id: 'whale_watching',
    title: 'Whale Watching',
    subtitle: 'Ocean Giants',
    description: 'Set sail from Mirissa or Trincomalee to witness the magnificent blue whales and playful dolphins in the deep blue waters of the Indian Ocean.',
    image: '/images/whale_watching.png',
    highlights: ['Blue Whales', 'Dolphins', 'Coastal Cruise'],
  },
  {
    id: 'pinnawala_day',
    title: 'Pinnawala Day Tour',
    subtitle: 'Gentle Giants',
    description: 'Spend a heartwarming day at the Pinnawala Elephant Orphanage. Watch baby elephants being bottle-fed and the herd bathing in the Maha Oya river.',
    image: '/images/pinnawala_day.png',
    highlights: ['Elephant Bathing', 'Feeding Sessions', 'Spice Garden'],
  },
];

export default function Tours() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tours" className="py-24 lg:py-32 bg-beige-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-accent mb-4">
            Our Experiences
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-green-deep mb-6">
            Curated Sri Lankan
            <span className="block text-green-forest italic">Adventures</span>
          </h2>
          <div className="organic-divider">
            <svg className="w-6 h-6 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3c-1.5 4-4.5 7-9 9 4.5 2 7.5 5 9 9 1.5-4 4.5-7 9-9-4.5-2-7.5-5-9-9z" />
            </svg>
          </div>
        </motion.div>

        {/* Tour Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-organic hover:shadow-card-hover transition-all duration-500 ${index % 3 === 1 ? 'lg:translate-y-8' : ''}`}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image src={tour.image} alt={tour.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <Link href={`/tours/${tour.id}`} className="absolute inset-0 bg-green-deep/0 group-hover:bg-green-deep/60 transition-all duration-500 flex items-center justify-center cursor-pointer z-10">
                  <span className="text-beige-sand font-body font-semibold text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                    Explore <span>→</span>
                  </span>
                </Link>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-gold-accent/90 backdrop-blur-sm rounded-full text-xs font-body font-bold text-green-deep uppercase tracking-wider z-20">{tour.subtitle}</div>
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="text-xl font-heading font-bold text-green-deep mb-3 group-hover:text-green-forest transition-colors">{tour.title}</h3>
                <p className="text-sm text-charcoal-light font-body leading-relaxed mb-5">{tour.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((h) => (
                    <span key={h} className="px-3 py-1 text-xs font-body font-medium text-green-forest bg-green-leaf/10 rounded-full border border-green-leaf/20">{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
