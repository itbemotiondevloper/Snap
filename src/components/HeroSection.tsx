"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
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

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-14">
        <motion.a
          href="#"
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

        <motion.button
          className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-md text-white/85 transition hover:bg-white/10 hover:text-white"
          type="button"
          aria-label="Open menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <Menu size={22} strokeWidth={1.4} />
        </motion.button>
      </header>

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
    text-[30px]
    sm:text-[48px]
    md:text-[72px]
    lg:text-[88px]
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
  <span className="font-medium block">The Intelligent</span>

  <span className="inline-block mt-1 border-b border-white/70 text-white/80">
    File Browser
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
  Store, browse, research, and organize your files with AI,
  available on web and desktop.
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
            Loading experience...
          </p>
        </motion.div>
      </div>
    </section>
  );
}