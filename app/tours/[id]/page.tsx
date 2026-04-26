import Link from 'next/link';
import Image from 'next/image';

const tourDetails: Record<string, any> = {
  udawalawe: {
    title: 'Udawalawe Safari',
    subtitle: 'Discover Udawalawe National Park And Elephant Transit Home',
    image: '/images/safari 2.jpeg',
    gallery: [
      '/images/safari.jpeg',
      '/images/safari 2.jpeg',
      '/images/with an elephant 2.jpeg'
    ],
    paragraphs: [
      "Embark on an unforgettable adventure to Udawalawe National Park, located just a 2.5-hour drive from Bentota. Known for its thriving population of wild elephants, the park is a paradise for wildlife lovers. Enjoy an exciting safari through its vast landscapes in a 4x4 safari vehicle, where you can also spot buffalo, deer, and a variety of bird species.",
      "Enhance your visit with a stop at the Elephant Transit Home, a remarkable sanctuary dedicated to rehabilitating orphaned baby elephants. Here, you can witness these gentle giants during feeding times as they prepare for a return to the wild.",
      "With us, you can explore both the Elephant Transit Home and the national park in a seamless and comfortable journey. Let us take care of the details while you immerse yourself in the beauty and wildlife of this iconic destination!"
    ],
    features: [
      "One day tour",
      "Two and a half hour drive",
      "Safari on a 4X4 vehicle",
      "English/German Speaking Guide",
      "Comfortable vehicle",
      "Pay after the tour"
    ]
  },
  galle: {
    title: 'Galle Day Tour',
    subtitle: 'Explore the Best of Sri Lanka’s South Coast',
    image: '/images/galle 3.jpeg',
    gallery: [
      '/images/galle1.jpeg',
      '/images/galle 3.jpeg',
      '/images/galle 4.jpeg',
      '/images/galle 5.jpeg',
      '/images/galle 6.jpeg',
      '/images/tortoise 2.jpeg',
      '/images/with a turtle.jpeg',
      '/images/maadu river 2.jpeg',
      '/images/maadu river ig.jpeg'
    ],
    paragraphs: [
      "Embark on an unforgettable journey to the South Coast of Sri Lanka, where history, culture, and nature come together to create a magical experience.",
      "Start your adventure in Galle City, home to the famous Dutch Fort, a UNESCO World Heritage site. Explore its cobblestone streets, colonial architecture, and vibrant atmosphere.",
      "Witness the fascinating tradition of stilt fishing, where fishermen balance gracefully above the ocean—a centuries-old practice unique to this region.",
      "Relax and unwind on a Madu River or Bentota River Safari, gliding through serene mangroves teeming with birdlife and other fascinating creatures. The natural beauty of these waterways is truly mesmerizing.",
      "Discover the wonders of the Moonstone Mine in Meetiyagoda, where you can see how these rare gems are mined and crafted into stunning jewelry.",
      "Wrap up your day with a visit to a Turtle Hatchery, learning about conservation and seeing adorable baby turtles up close. Join us for an enriching experience that blends history, wildlife, and culture in one unforgettable trip!"
    ],
    features: [
      "Comfortable vehicle",
      "English/German Speaking Guide",
      "Pay after the tour"
    ]
  },
  yala: {
    title: 'Yala Safari',
    subtitle: 'Unforgettable Yala Safari Experience',
    image: '/images/yala2.jpeg',
    gallery: [
      '/images/yala safari.jpeg',
      '/images/yala2.jpeg',
      '/images/safari.jpeg'
    ],
    paragraphs: [
      "Join us for an exciting Yala Safari adventure, departing comfortably from Bentota with a relaxing 3-hour drive to one of Sri Lanka’s most renowned national parks. Enjoy seamless transfers in air-conditioned vehicles, ensuring you arrive at Yala feeling refreshed and ready for an exhilarating safari experience.",
      "Once at the park, embark on a thrilling 4X4 vehicle safari led by our knowledgeable guide, who will take you through the park's diverse landscapes and introduce you to its incredible wildlife. Yala is famous for its leopards, and you’ll have the chance to spot these elusive big cats in their natural habitat, along with other fascinating animals such as elephants, sloth bears, crocodiles, and an abundance of birdlife.",
      "At our tour company, we pride ourselves on providing exceptional service tailored to your preferences. Whether you're looking for a half-day or full-day safari, we will customize the safari to suit your needs, ensuring a truly personalized experience.",
      "Let us take care of the details while you enjoy a once-in-a-lifetime opportunity to explore the stunning Yala National Park and witness the majestic wildlife in Sri Lanka's southern wilderness. Book your safari today for an unforgettable adventure!"
    ],
    features: [
      "Comfortable vehicle",
      "Safari on a 4X4 vehicle",
      "English/German Speaking Guide",
      "Pay after the tour"
    ]
  },
  ella_nuwara: {
    title: 'Two-Day Adventure',
    subtitle: 'Udawalawe, Ella & Scenic Train Journey to Nuwara Eliya',
    image: '/images/elle 2.jpeg',
    gallery: [
      '/images/elle.jpeg',
      '/images/elle 2.jpeg',
      '/images/waterfall.jpeg',
      '/images/like nuwara eliya.jpeg',
      '/images/damro tea.jpeg',
      '/images/mist.jpeg'
    ],
    paragraphs: [
      "Experience the best of Sri Lanka’s natural beauty and cultural charm with this meticulously planned two-day tour.",
      "Day 1: Begin your journey with an early pick-up from Bentota, heading to Udawalawe National Park. Enjoy a thrilling morning safari and visit the Elephant Transit Home, a sanctuary for orphaned elephants. Continue to Ella to explore the stunning Rawana Falls, walk across the iconic Nine Arches Bridge, and hike up Mini Adam’s Peak for breathtaking panoramic views. Unwind and spend the night in Ella.",
      "Day 2: Embark on the world-renowned Ella to Nanuoya train ride, passing through lush tea plantations, misty mountains, and cascading waterfalls. Visit Nuwara Eliya, also known as “Little England,” and tour a tea factory to learn the art of tea production.",
      "Wrap up your adventure with a scenic drive back to your hotel in Bentota, creating unforgettable memories along the way. Join us for a perfect blend of wildlife, nature, and culture on this incredible two-day tour. Don’t miss this amazing experience!"
    ],
    features: [
      "Comfortable vehicle",
      "English/German Speaking Guide",
      "4X4 Vehicle for the Safari",
      "All entrance tickets are included",
      "Train ride from Ella to Nanuoya",
      "Accommodation is included on half board basis",
      "Pay after the tour"
    ]
  },
  kandy_pinnawala: {
    title: 'Kandy & Pinnawala Day Tour',
    subtitle: 'A Day of Culture, History & Nature',
    image: '/images/dalada maligawa 2.jpeg',
    gallery: [
      '/images/temple of tooth.jpeg',
      '/images/dalada maligawa.jpeg',
      '/images/dalada maligawa 2.jpeg',
      '/images/dalada maligawa 3.jpeg',
      '/images/a temple.jpeg',
      '/images/with an elephant.jpeg',
      '/images/with an elephant 3.jpeg'
    ],
    paragraphs: [
      "Embark on an enriching day tour from Bentota, exploring the iconic Pinnawala Elephant Orphanage, the sacred Temple of the Tooth Relic, vibrant Kandy city, and the serene Peradeniya Botanical Gardens.",
      "5:00 AM Departure: Begin your adventure with an early pick-up from your hotel in Bentota. Relax and enjoy the scenic drive as the sun rises over Sri Lanka’s stunning landscapes.",
      "Stop 1: Pinnawala Elephant Orphanage: Witness the heartwarming sight of orphaned elephants being cared for and interacting with their caretakers. Watch them bathe, feed, and roam freely in their natural habitat.",
      "Stop 2: Temple of the Sacred Tooth Relic: Explore the sacred and historic Temple of the Tooth, a UNESCO World Heritage site. Admire its stunning architecture and learn about its deep spiritual significance.",
      "Stop 3: Peradeniya Botanical Garden: Visit the serene Peradeniya Botanical Gardens, known for their lush landscapes, vibrant flora, and exquisite collection of orchids. A true paradise for nature lovers!",
      "Optional Visits (If Agreed): Learn the fascinating process of tea production at a Tea Factory, discover traditional Sri Lankan craft at a Batik Factory, or explore stunning jewelry pieces at a Gem Museum.",
      "Conclude your day with a scenic drive back to Bentota, arriving by evening, filled with memories of a day well spent."
    ],
    features: [
      "Comfortable vehicle",
      "English/German Speaking Guide",
      "All entrance tickets are included",
      "Pay after the tour"
    ]
  },
  ella_day: {
    title: 'Ella Day Tour',
    subtitle: 'Uncover the Charm of Picturesque Ella',
    image: '/images/elle.jpeg',
    gallery: [
      '/images/elle.jpeg',
      '/images/waterfall.jpeg',
      '/images/mist.jpeg'
    ],
    paragraphs: [
      "Embark on a full-day adventure in Ella, one of Sri Lanka's most picturesque destinations. This guided tour offers a perfect blend of natural beauty, cultural heritage, and outdoor excitement.",
      "Your journey begins with a visit to the famous Nine Arches Bridge, an architectural marvel surrounded by lush green landscapes. Take time to marvel at this majestic bridge, which is one of Sri Lanka’s most photographed sites. Next, we’ll head to Little Adam's Peak, where you'll enjoy a moderate hike that leads you to breathtaking panoramic views of Ella’s valleys, tea plantations, and distant mountains. The hike takes approximately 1-2 hours, offering an opportunity to connect with nature while exploring scenic trails.",
      "After descending, relax and rejuvenate as we head to Ravana Falls, a stunning 25-meter waterfall nestled in a jungle setting. This picturesque spot offers the perfect opportunity for photos.",
      "This tour combines nature, adventure, and relaxation, providing a well-rounded experience for those looking to explore the heart of Ella. With stunning landscapes, cultural landmarks, and moderate hiking, this day trip is perfect for nature enthusiasts and adventure seekers alike."
    ],
    features: [
      "Comfortable vehicle",
      "English/German Speaking Guide",
      "Pay after the tour"
    ]
  },
  sigiriya_dambulla: {
    title: 'Sigiriya & Dambulla',
    subtitle: 'One-Day Tour to Sigiriya Rock & Dambulla Cave Temple',
    image: '/images/sigiriya.jpeg',
    gallery: [
      '/images/sigiriya.jpeg',
      '/images/dambulla.jpeg',
      '/images/a temple.jpeg'
    ],
    paragraphs: [
      "Embark on an unforgettable one-day adventure exploring two of Sri Lanka’s most iconic historical landmarks: Sigiriya Rock and the Dambulla Cave Temple. This exciting tour begins with an early morning departure from Bentota, ensuring you make the most of your day.",
      "Your first stop is Sigiriya, also known as Lion’s Rock, a UNESCO World Heritage site. Climb to the top of this ancient rock fortress, which rises 200 meters above the jungle below. Along the way, you’ll marvel at the stunning frescoes and be amazed by the intricate designs of the Lion’s Gate. At the summit, enjoy panoramic views that stretch across lush greenery, offering a unique perspective of Sri Lanka’s natural beauty.",
      "Next, visit the Dambulla Cave Temple, one of the largest and best-preserved cave temple complexes in Sri Lanka. Explore five caves adorned with magnificent Buddha statues and vibrant murals that date back over 2,000 years. The serene atmosphere and rich cultural heritage will leave you in awe.",
      "This day tour provides a perfect balance of adventure, history, and culture, making it an essential experience for anyone visiting Sri Lanka. Don’t miss out on this incredible journey!"
    ],
    features: [
      "Comfortable vehicle",
      "English/German Speaking Guide",
      "Pay after the tour"
    ]
  },
  whale_watching: {
    title: 'Whale Watching Tour in Mirissa',
    subtitle: 'An Unforgettable Ocean Adventure',
    image: '/images/bentota .jpeg',
    gallery: [
      '/images/bentota .jpeg'
    ],
    paragraphs: [
      "Embark on an extraordinary whale watching tour in Mirissa, Sri Lanka, departing early at 4:45 AM from Bentota to make the most of your day. This thrilling experience takes you to the warm waters of the Indian Ocean, where you’ll have the opportunity to witness the majestic blue whales in their natural habitat. Known for its high whale sighting success rate, Mirissa offers one of the best whale watching experiences in the world.",
      "During the tour, you’ll not only have a chance to see the awe-inspiring blue whales, but also playful dolphins as they dance alongside the boat. These magnificent creatures are a delight to observe and add to the magic of the trip.",
      "On your return journey, take in the unique sight of stilt fishermen perched on poles, a traditional fishing method that has been practiced for generations along Sri Lanka’s southern coast.",
      "This tour offers the perfect blend of marine wildlife encounters and cultural exploration. Don’t miss this once-in-a-lifetime opportunity to see these incredible creatures and immerse yourself in Sri Lanka’s coastal beauty. Book your Mirissa whale watching tour today for an unforgettable adventure!"
    ],
    features: [
      "Comfortable vehicle",
      "English/German Speaking Guide",
      "Boat & entrance fees are included",
      "Pay after the tour"
    ]
  },
  pinnawala_day: {
    title: 'Pinnawala Elephant Orphanage',
    subtitle: 'Pinnawala Elephant Orphanage Tour',
    image: '/images/with an elephant 3.jpeg',
    gallery: [
      '/images/with an elephant.jpeg',
      '/images/with an elephant 2.jpeg',
      '/images/with an elephant 3.jpeg'
    ],
    paragraphs: [
      "Embark on a captivating day trip to the Pinnawala Elephant Orphanage, located about 3 hours from Bentota. This unique sanctuary is home to over 70 elephants, many of which were rescued from the wild or orphaned. During your visit, witness these majestic creatures up close as they bathe in the river, feed, and interact with their caretakers in a safe, natural environment.",
      "As one of Sri Lanka’s top wildlife destinations, Pinnawala offers an unforgettable experience for animal lovers and families. Learn about the conservation efforts to protect these endangered giants and the story behind the orphanage’s founding.",
      "Your tour also includes a scenic drive through Sri Lanka’s picturesque countryside, giving you a chance to enjoy the lush landscapes along the way. Whether you're an animal enthusiast or simply seeking a peaceful escape, the Pinnawala Elephant Orphanage promises a day full of adventure, education, and wonder.",
      "Book your tour now for a truly memorable experience!"
    ],
    features: [
      "One day tour",
      "3 hours drive",
      "Comfortable vehicle",
      "English/German Speaking Guide",
      "Pay after the tour"
    ]
  }
};

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch tour data
  const tour = tourDetails[id];

  // Fallback if tour ID isn't found
  if (!tour) {
    return (
      <div className="min-h-screen bg-beige-light flex flex-col items-center justify-center">
        <h1 className="text-4xl font-heading font-bold text-green-deep mb-4">Tour Not Found</h1>
        <Link href="/#tours" className="text-gold-accent font-body hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige-light pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#tours"
          className="inline-flex items-center gap-2 text-green-moss hover:text-green-forest font-body font-semibold mb-8 transition-colors"
        >
          <span>←</span> Back to Tours
        </Link>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-organic">
          {/* Header */}
          <span className="inline-block px-4 py-1.5 text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-accent border border-gold-accent/30 rounded-full bg-gold-accent/10 mb-6">
            Tour Details
          </span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-green-deep mb-4">
            {tour.title}
          </h1>
          <p className="text-xl text-green-forest font-body italic mb-8">
            {tour.subtitle}
          </p>

          {/* Main Image */}
          <div className="relative w-full h-64 sm:h-[450px] rounded-2xl overflow-hidden mb-12 shadow-organic">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Content area: Description & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Description Paragraphs (Takes up 2/3 width) */}
            <div className="lg:col-span-2 space-y-6 text-charcoal-light font-body leading-relaxed text-lg">
              {tour.paragraphs.map((para: string, index: number) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Features Sidebar (Takes up 1/3 width) */}
            <div className="bg-beige-light/50 border border-beige-warm/30 rounded-2xl p-6 h-fit">
              <h3 className="text-xl font-heading font-bold text-green-deep mb-6 pb-4 border-b border-gold-accent/30">
                Tour Inclusions
              </h3>
              <ul className="space-y-4">
                {tour.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-charcoal-light font-body text-sm font-medium">
                    <span className="text-gold-accent mt-0.5">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-beige-warm/50">
                <a
                  href="https://wa.me/94777213798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-forest hover:bg-green-deep text-white font-body font-semibold py-3 px-4 rounded-xl transition-colors shadow-organic"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Book Now
                </a>
              </div>
            </div>

          </div>

          {/* Image Gallery */}
          {tour.gallery && tour.gallery.length > 0 && (
            <div className="mt-16 pt-12 border-t border-beige-warm/30">
              <h3 className="text-2xl font-heading font-bold text-green-deep mb-8 text-center">
                Tour Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tour.gallery.map((imgSrc: string, idx: number) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-organic-sm group">
                    <Image
                      src={imgSrc}
                      alt={`${tour.title} gallery image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
