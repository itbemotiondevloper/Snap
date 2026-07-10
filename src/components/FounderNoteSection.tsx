"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link, Mail, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const photos = [
  {
    src: "/founder-event.png",
    alt: "Founder at a startup event",
    label: "Founder",
  },
  {
    src: "/founder-campus.png",
    alt: "Founder outside a technology campus",
    label: "Tech Visit",
  },
  {
    src: "/founder-stage.png",
    alt: "Founder speaking at an AI conference",
    label: "AI Summit",
  },
];

export function FounderNoteSection() {
  return (
  <section className="theme-section bg-[#f3efe3] dark:bg-[#050814] px-5 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[940px]">
        <motion.h2
          className="relative mx-auto max-w-4xl text-center text-[34px] font-semibold leading-tight tracking-normal text-[#171b26] dark:text-white sm:text-[42px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55 }}
        >
          Don't Wait for{" "}
<span className="decoration-[#ff6148] decoration-wavy underline decoration-2 underline-offset-[12px]">
 Tax Season
</span>{" "}
-{" "}
<span className="decoration-[#ff6148] underline decoration-2 underline-offset-[11px]">
  Let's 
</span>{" "}
<span className="relative inline-block text-[#ff6148]">
 Plan Ahead!
  <span className="absolute -right-5 -top-4 h-8 w-7 text-[#ff6148]">
    <span className="absolute left-3 top-0 h-5 w-px rotate-6 bg-current" />
    <span className="absolute left-5 top-2 h-4 w-px rotate-45 bg-current" />
    <span className="absolute left-0 top-1 h-4 w-px -rotate-12 bg-current" />
  </span>
</span>
        </motion.h2>

        <div className="mt-12 grid gap-12 lg:gap-16 lg:grid-cols-[1fr_minmax(350px,0.8fr)] lg:items-center">
        <motion.article
          initial={{ opacity: 0, x: -40, y: 20 }}
         whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
       <div className="max-w-[590px] space-y-5 text-sm sm:text-base leading-relaxed text-[#20242c] dark:text-gray-300">
  <p>
    At SNAP & Associates, we bring over a decade of professional expertise in
    delivering reliable financial, taxation, audit, and advisory services to
    businesses and individuals across diverse industries.
  </p>

  <p>
    Our commitment goes beyond compliance. We help clients make informed
    financial decisions, strengthen internal controls, optimize tax planning,
    and build a strong foundation for sustainable growth.
  </p>

  <p>
    Connect with our experts today
    for personalized financial guidance, strategic advisory, and practical
    solutions tailored to your business needs.
  </p>

  <p>
    With trust, integrity, and excellence at the core of everything we do,
    we aim to be your long-term financial partner.
    <br />
    Your growth is our priority.
  </p>
</div>
          <div className="mt-8">
           <p className="text-base sm:text-lg font-semibold leading-none text-[#171b26] dark:text-white"> CA Sagar Gotawala & CA Aakash Bagrecha</p>
          <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-400">Co-founders</p>
            <a
              className="mt-4 inline-flex text-sm font-semibold text-[#ff6148] hover:underline"
              href="mailto:casagar98@gmail.com"
            >
              casagar98@gmail.com
            </a>
         <div className="mt-4 flex gap-2">
  {[
    { Icon: FaFacebookF, href: "https://facebook.com" },
    { Icon: FaInstagram, href: "https://instagram.com" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com" },
  ].map(({ Icon, href }, index) => (
    <a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social link"
      className="grid size-8 place-items-center rounded-sm border-2 border-[#191919] dark:border-gray-600 bg-white dark:bg-[#111827] text-[#191919] dark:text-white shadow-[2px_2px_0_#191919] dark:shadow-none transition hover:-translate-y-1 hover:bg-[#191919] hover:text-white"
    >
      <Icon size={16} />
    </a>
  ))}
</div>
          </div>
        </motion.article>

    <motion.div
  className="relative mx-auto w-full max-w-[360px] lg:h-[360px] lg:mt-6"
  initial={{ opacity: 0, x: 24 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.35 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  {/* MOBILE */}
<div className="lg:hidden overflow-x-auto scrollbar-hide">
  <div className="flex snap-x snap-mandatory gap-4 px-4">
    {photos.map((photo, index) => (
      <motion.div
        key={photo.src}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="
          w-[calc(100vw-48px)]
          max-w-full
          flex-shrink-0
          snap-center
          overflow-hidden
          rounded-md
          border-[3px]
          border-[#191919]
          bg-white
          shadow-sm
        "
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={800}
          height={800}
          className="h-[420px] w-full object-cover"
        />
      </motion.div>
    ))}
  </div>
</div>
  {/* DESKTOP */}
  <div className="relative hidden h-[360px] lg:block">
    {photos.map((photo, index) => (
      <motion.div
        key={photo.src}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        className="absolute overflow-hidden rounded-md border-[3px] border-[#191919] bg-white shadow-sm transition duration-500 hover:shadow-xl"
        style={{
          width: index === 1 ? 205 : 148,
          height: index === 1 ? 225 : 190,
          left: index === 0 ? 0 : index === 1 ? 138 : 43,
          top: index === 0 ? 0 : index === 1 ? 0 : 198,
          zIndex: index === 1 ? 3 : index === 0 ? 2 : 1,
        }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="180px"
          className="object-cover"
        />
      </motion.div>
    ))}
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}
