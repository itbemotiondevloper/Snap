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
      {/* Mobile Background */}
      <Image
        src="/hero-mobile.png"
        alt="Mobile workspace"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />

      {/* Desktop Background */}
      <Image
        src="/hero-workspace.png"
        alt="Designer workspace with laptop"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover md:block"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 top-0 h-40 sm:h-52 bg-gradient-to-b from-black/70 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Header — fixed so logo + menu stay sticky on top across the whole page */}
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-start justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-14 transition-colors duration-300 ${
          isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <motion.a
          href="#home"
          className="flex items-start gap-2 text-[10px] sm:text-xs font-semibold uppercase leading-none text-white/90"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          aria-label="Design Hive home"
        >
          <span className="mt-0.5 grid h-4 w-4 grid-cols-2 gap-0.5">
            <span className="rounded-[1px] bg-white" />
            <span className="rounded-[1px] bg-white/50" />
            <span className="rounded-[1px] bg-white/50" />
            <span className="rounded-[1px] bg-white" />
          </span>

          <span className="flex flex-col">
            <span>Design</span>
            <span>Hive</span>
          </span>
        </motion.a>

        {/* Menu toggle — swaps icon between Menu and X in place */}
        <motion.button
          className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-md text-white/85 transition hover:bg-white/10 hover:text-white relative z-[60]"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]"
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
              className="absolute right-4 top-4 sm:right-6 sm:top-4 md:right-10 md:top-4 lg:right-14 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-md text-white/85 transition hover:bg-white/10 hover:text-white"
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
                  className="text-3xl sm:text-5xl font-semibold text-white/90 transition hover:text-white"
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
      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 pt-16 pb-10 text-center">
        <motion.h1
          className="
            -mt-24
            md:-mt-16
            lg:-mt-10
            max-w-[95%]
            sm:max-w-4xl
            lg:max-w-5xl
            text-[22px]
            sm:text-[36px]
            md:text-[52px]
            lg:text-[64px]
            leading-[1.05]
            font-light
            tracking-tight
            text-white
            drop-shadow-[0_8px_22px_rgba(0,0,0,0.35)]
          "
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="font-medium block"> Your Trusted Financial</span>

          <span className="inline-block mt-1 border-b border-white/70 text-white/80">
            Partners in Surat
          </span>
        </motion.h1>

        <motion.p
          className="
            mt-5
            px-2
            max-w-[280px]
            sm:max-w-md
            md:max-w-xl
            text-[13px]
            sm:text-sm
            md:text-base
            leading-relaxed
            text-white/85
          "
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
        >
          SNAP & Associates Chartered Accountants specializing in Audit, Taxation & Financial Advisory. Helping businesses and individuals grow with clarity and confidence.
        </motion.p>

        {/* Loader */}
        <motion.div
          className="mt-10 sm:mt-16 md:mt-24 lg:mt-32 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <motion.div
            className="mb-4 h-8 w-8 border border-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ clipPath: "polygon(50% 0%, 100% 86%, 0% 86%)" }}
          />

          <p className="text-[10px] sm:text-xs text-white/75">
            Get a Free Consultation...
          </p>
        </motion.div>
      </div>
    </section>
  );
}