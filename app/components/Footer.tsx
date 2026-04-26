'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-green-deep relative overflow-hidden">
      {/* Wave SVG divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80h1440V40c-240 30-480 50-720 30S240 10 0 40v40z" fill="#1a3c2a" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div>
                <span className="text-lg font-heading font-bold text-beige-sand">Bentota Holiday Tours</span>
                <span className="block text-[10px] text-gold-accent/80 tracking-[0.2em] uppercase font-body">Sri Lanka Tours</span>
              </div>
            </div>
            <p className="text-beige-sand/60 font-body text-sm leading-relaxed max-w-xs">
              Authentic, personalized tour experiences across the beautiful island of Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-body font-semibold text-gold-accent uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Tours', 'Reviews', 'About'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-beige-sand/60 hover:text-gold-accent transition-colors font-body">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-body font-semibold text-gold-accent uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-sm text-beige-sand/60 font-body">Plkasun0@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                <span className="text-sm text-beige-sand/60 font-body">+94 77 721 3798</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span className="text-sm text-beige-sand/60 font-body">Bentota, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-moss/20 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-xs text-beige-sand/40 font-body">
            © {new Date().getFullYear()} Bentota Holiday Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
