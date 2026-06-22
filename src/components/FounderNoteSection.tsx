"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link, Mail, X } from "lucide-react";

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
          className="relative mx-auto max-w-4xl text-center text-[34px] font-bold leading-tight tracking-normal text-[#171b26] dark:text-white sm:text-[42px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55 }}
        >
          Don&apos;t Just{" "}
          <span className="decoration-[#1464ff] decoration-wavy underline decoration-2 underline-offset-[12px]">
            Dream Big
          </span>{" "}
          -{" "}
          <span className="decoration-[#1464ff] underline decoration-2 underline-offset-[11px]">
            Let&apos;s
          </span>{" "}
          <span className="relative inline-block text-[#1464ff]">
            Make It Happen!
            <span className="absolute -right-5 -top-4 h-8 w-7 text-[#1464ff]">
              <span className="absolute left-3 top-0 h-5 w-px rotate-6 bg-current" />
              <span className="absolute left-5 top-2 h-4 w-px rotate-45 bg-current" />
              <span className="absolute left-0 top-1 h-4 w-px -rotate-12 bg-current" />
            </span>
          </span>
        </motion.h2>

        <div className="mt-9 grid gap-10 lg:grid-cols-[610px_1fr] lg:items-start">
        <motion.article
          initial={{ opacity: 0, x: -40, y: 20 }}
         whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
        <div className="max-w-[590px] space-y-5 text-[13px] leading-[1.6] text-[#20242c] dark:text-gray-300">
            <p>
              For over a decade, I&apos;ve been at the forefront of turning bold,
              ambitious ideas into groundbreaking solutions. As the CEO of
              SolGuruz, I&apos;ve had the privilege of helping startups and
              businesses scale to new heights with products that do not just
              compete - they dominate.
            </p>
            <p>
              Every meeting with me isn&apos;t just a conversation; it&apos;s a launchpad
              for ideas that can catapult into great products and services.
              Leaders who&apos;ve taken the step to connect with me have walked away with
              actionable strategies that made their products unforgettable.
            </p>
            <p>
              <span className="text-[#f1b400]">👉</span> Book a free strategy call with me now and experience the
              difference. This isn&apos;t just advice - it&apos;s the spark you need to
              ignite your next big breakthrough.
            </p>
            <p>
              In a world full of ordinary, let&apos;s create the AI-extraordinary.
              <br />
              Your moment is now - don&apos;t let it pass by.
            </p>
          </div>
          <div className="mt-6">
           <p className="text-[15px] font-extrabold leading-none text-[#171b26] dark:text-white">anand dkfdf</p>
          <p className="mt-2 text-[11px] text-gray-700 dark:text-gray-400">ABs</p>
            <a
              className="mt-3 inline-flex text-xs font-semibold text-[#1164ff]"
              href="mailto:Abs@gmail.com"
            >
              Abs@gmail.com
            </a>
            <div className="mt-4 flex gap-2">
              {[Link, X, Mail].map((Icon, index) => (
                <a
className="grid size-8 place-items-center rounded-sm border-2 border-[#191919] dark:border-gray-600 bg-white dark:bg-[#111827] text-[#191919] dark:text-white shadow-[2px_2px_0_#191919] dark:shadow-none transition hover:-translate-y-1 hover:bg-[#191919] hover:text-white"
                  href="#"
                  key={index}
                  aria-label="Social link"
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
  <div className="flex flex-col gap-4 lg:hidden">
    {photos.map((photo, index) => (
      <motion.div
        key={photo.src}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.03, y: -5 }}
        className="overflow-hidden rounded-md border-[3px] border-[#191919] bg-white shadow-sm"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </motion.div>
    ))}
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
