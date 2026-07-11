"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Ms_Madi } from "next/font/google";

const msMadi = Ms_Madi({
  weight: "400",
  subsets: ["latin"],
});
function Counter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let start = 0;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isInView, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 10, suffix: "+", label: "Years in Practice", duration: 800 },
  { value: 500, suffix: "+", label: "Clients Served", duration: 800 },
  { value: 2, suffix: "", label: "Expert CA Partners", duration: 800 },
];

const cards = [
  {
    title: "Founder-led. Built with operators.",
    name: "CA Sagar Gotawala",
    role: "Co-Founder",
    image: "/sagar.png",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Strategic vision. Trusted advice.",
    name: "CA Aakash Bagrecha",
    role: "Co-Founder",
    image: "/aakash.png",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export function CommunitySection() {
  const [activeCard, setActiveCard] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 10000); // changes every 4 sec

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="theme-section relative overflow-hidden border-y border-[#191919]/10 dark:border-white/10 bg-[#ffffff] dark:bg-[#050814] px-4 pb-12 pt-8 sm:px-8 sm:pb-20 lg:px-10" id="about">
      <div className="mx-auto max-w-[900px]">
        <motion.h2
          className="max-w-[560px] text-4xl sm:text-5xl font-semibold leading-[1.08] tracking-tight text-[#171717] dark:text-white"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Financial Clarity. Strategic Growth.
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-3 gap-4 sm:mt-20 sm:grid-cols-3 sm:gap-12 md:gap-16 lg:grid-cols-[1.05fr_1.05fr_0.8fr]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong className="block text-3xl sm:text-5xl md:text-6xl text-[#191919] dark:text-white">
                <Counter target={metric.value} suffix={metric.suffix} duration={metric.duration} />
              </strong>

              <span className="mt-2 block text-xs sm:text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="rounded-3xl bg-white dark:bg-[#0f172a] shadow-xl p-4 sm:p-6 md:p-8 border border-black/5 dark:border-white/10"
            >


              <div className="grid gap-8 md:grid-cols-[minmax(280px,350px)_1fr] md:gap-[64px]">

                {/* Dynamic Image */}
                <div className="mx-auto w-full sm:max-w-sm md:max-w-none overflow-hidden rounded-2xl bg-[#c7a78e] shadow-lg">
                  <Image
                    src={cards[activeCard].image}
                    alt={cards[activeCard].name}
                    width={360}
                    height={420}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Content */}
                <article className="rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col h-full">
                  <h3 className="text-[24px] sm:text-[30px] font-semibold text-[#191919] dark:text-white">
                    {cards[activeCard].title}
                  </h3>

                  <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#191919]/80 dark:text-gray-300 line-clamp-4 sm:line-clamp-5">
                    {cards[activeCard].desc}
                  </p>

                  <div className="mt-auto pt-8 sm:pt-12 text-right">
                    <p
                      className={`${msMadi.className} text-3xl sm:text-4xl text-[#191919] dark:text-white leading-none`}
                    >
                      {cards[activeCard].name}
                    </p>
                    <p className="mt-2 sm:mt-4 text-[10px] sm:text-[11px] font-medium uppercase tracking-[3px] text-[#191919]/60 dark:text-gray-400">
                      {cards[activeCard].role}
                    </p>
                  </div>
                </article>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`transition-all ${activeCard === index
                  ? "h-3 w-8 rounded-full bg-black dark:bg-white"
                  : "h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
