"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Our Advantage", href: "#advantage" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 250; i++) {
    // Deterministic pseudo-random using index 'i' to avoid hydration mismatches
    const random1 = Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
    const random2 = Math.abs((Math.cos(i * 78.233) * 43758.5453) % 1);
    const random3 = Math.abs((Math.sin(i * 45.123) * 43758.5453) % 1);

    const size = random1 * 4 + 2; // 2px to 6px
    const x = random2 * 100;
    const y = random3 * 100;
    const duration = (random1 * 2) + 3; // 3s to 5s pulsing duration
    const delay = random2 * 2; // 0s to 2s initial delay
    
    stars.push({ i, size, x, y, duration, delay });
  }
  return stars;
};

const STARS = generateStars();

function RevolvingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <motion.div
        className="absolute"
        style={{ width: "150vw", height: "150vw", minWidth: "1200px", minHeight: "1200px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        {STARS.map((star) => (
          <motion.div
            key={star.i}
            className="absolute rounded-full bg-[#191919] dark:bg-white dark:shadow-[0_0_6px_rgba(255,255,255,0.8)] shadow-[0_0_6px_rgba(0,0,0,0.1)]"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}


export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Track scroll position so the fixed header can pick up a background
  // once it's no longer sitting over the hero image
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden">
      <RevolvingStars />

      {/* Header — fixed so logo + menu stay sticky on top across the whole page */}
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-start justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-14 transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-[#0f1115]/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-black/10 dark:border-white/10" : "bg-transparent"
        }`}
      >
        <motion.a
          href="#home"
          className="flex items-center"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          aria-label="SNAP home"
        >
          <Image
            src="/snap-logo-light.png"
            alt="SNAP Logo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain sm:h-12 dark:hidden"
          />
          <Image
            src="/snap-logo-dark.png"
            alt="SNAP Logo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain sm:h-12 hidden dark:block"
          />
        </motion.a>

        {/* Menu toggle — swaps icon between Menu and X in place */}
        <motion.button
          className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-md text-[#191919] dark:text-white/85 transition hover:bg-black/5 dark:hover:bg-white/10 dark:hover:text-white relative z-[60]"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                <X size={22} strokeWidth={1.4} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                <Menu size={22} strokeWidth={1.4} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </header>

      {/* Full-page overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff] dark:bg-[#111111]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Close button — fixed top-right, same spot as the trigger */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-4 sm:right-6 sm:top-4 md:right-10 md:top-4 lg:right-14 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-md text-[#191919] dark:text-white/85 transition hover:bg-black/5 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X size={22} strokeWidth={1.4} />
            </button>

            {/* Centered menu items */}
            <nav className="flex flex-col items-center gap-6 sm:gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl sm:text-5xl font-semibold text-[#191919] dark:text-white/90 transition hover:text-black dark:hover:text-white"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-20 pb-10 text-center">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#191919]/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-medium text-[#191919] dark:text-white backdrop-blur-md shadow-sm"
        >
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#ff6148] text-[10px] text-white">
            ✦
          </span>
          <span>Surat's Premier Chartered Accountants</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="
            max-w-4xl
            text-[38px]
            sm:text-5xl
            md:text-6xl
            lg:text-[72px]
            font-light
            tracking-tight
            text-[#191919]
            dark:text-white
            leading-[1.05]
          "
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="font-medium block">Your Trusted Financial</span>
          <span className="inline-block mt-1 border-b border-[#191919]/40 text-[#191919]/80 dark:border-white/70 dark:text-white/80 pb-1">
            Partners in Surat
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="
            mt-6
            max-w-2xl
            text-sm
            sm:text-base
            md:text-lg
            leading-relaxed
            text-[#5f5b52]
            dark:text-gray-300
          "
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          SNAP & Associates handles tax, audit, and advisory — powered by deep expertise and proactive strategies. Grow your business with clarity and confidence.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#191919] dark:bg-white px-8 text-sm sm:text-base font-semibold text-white dark:text-[#191919] transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            Book a Meeting
          </a>
          <a
            href="#process"
            className="flex h-12 sm:h-14 items-center justify-center rounded-full border border-[#191919]/20 dark:border-white/20 bg-white/50 dark:bg-white/5 px-8 text-sm sm:text-base font-semibold text-[#191919] dark:text-white transition-colors hover:bg-black/5 dark:hover:bg-white/10 backdrop-blur-md"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
