'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Tours', href: '#tours' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'glass py-3 shadow-organic-lg'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">

            <div>
              <span className="text-lg font-heading font-bold text-beige-sand tracking-wide">
                Bentota Holiday Tours
              </span>
              <span className="block text-[10px] text-gold-accent/80 tracking-[0.2em] uppercase font-body">
                Sri Lanka Tours
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-body font-medium text-beige-sand/80 hover:text-gold-accent transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="/#booking"
              className="ml-2 px-5 py-2.5 bg-gold-accent text-green-deep text-sm font-semibold font-body rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-full bg-beige-sand rounded-full origin-left"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                className="block h-[2px] w-full bg-beige-sand rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-full bg-beige-sand rounded-full origin-left"
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-green-deep/95 backdrop-blur-xl"
              onClick={handleLinkClick}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="text-3xl font-heading font-semibold text-beige-sand hover:text-gold-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/#booking"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-3 bg-gold-accent text-green-deep text-lg font-semibold font-body rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold"
              >
                Book Now
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
