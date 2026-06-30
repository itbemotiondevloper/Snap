"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Ms_Madi } from "next/font/google";

const msMadi = Ms_Madi({
  weight: "400",
  subsets: ["latin"],
});
function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
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
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

const metrics = [
  { value: 10, suffix: "+", label: "Years in Practice" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 2, suffix: "", label: "Expert CA Partners" },
];

const cards = [
  {
    title: "Founder-led. Built with operators.",
    name: "CA Sagar Gotawala",
    role: "Co-Founder",
    image: "/sagar.png",
    desc:
      "SNAP & Associates was founded by CA Sagar Gotawala & CA Aakash Bagrecha...",
  },
  {
    title: "Strategic vision. Trusted advice.",
    name: "CA Aakash Bagrecha",
    role: "Co-Founder",
    image: "/aakash.png",
    desc:
      "SNAP & Associates was founded by CA Sagar Gotawala & CA Aakash Bagrecha...",
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
    <section className="theme-section relative overflow-hidden border-y border-[#191919]/10 bg-[#f3efe3] px-4 pb-12 pt-8 sm:px-8 sm:pb-20 lg:px-10" id="about">
      <div className="mx-auto max-w-[900px]">
        <motion.h2
       className="max-w-[560px] text-4xl sm:text-5xl font-semibold leading-[1.08] tracking-tight text-[#171717] dark:text-white"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Financial Clarity. Strategic Growth.
        </motion.h2>

        <motion.div
          className="mt-10 grid grid-cols-3 gap-3 sm:mt-[68px] sm:grid-cols-[1.05fr_1.05fr_0.8fr] sm:gap-[108px]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong className="block text-[28px] sm:text-[62px]">
                <Counter target={metric.value} suffix={metric.suffix} />
              </strong>

              <span className="mt-1 block text-[9px] sm:text-[11px]">
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
    className="rounded-3xl bg-white shadow-xl p-4 sm:p-6 md:p-8"
  >
   

    <div className="grid gap-8 md:grid-cols-[350px_1fr] md:gap-[64px]">
      
      {/* Dynamic Image */}
      <div className="mx-auto w-full max-w-[287px] overflow-hidden rounded-2xl bg-[#c7a78e] shadow-lg">
        <Image
          src={cards[activeCard].image}
          alt={cards[activeCard].name}
          width={360}
          height={420}
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <article className="rounded-2xl p-4 sm:p-8">
        <h3 className="text-[24px] sm:text-[30px] font-semibold">
          {cards[activeCard].title}
        </h3>

        <p className="mt-6 text-[12px] sm:text-[14px] leading-7 text-gray-600">
          {cards[activeCard].desc}
        </p>

        <div className="mt-11 text-right">
       <p
  className={`${msMadi.className} text-[20px] sm:text-[40px] leading-none`}
>
  {cards[activeCard].name}
</p>
          <p className="mt-4 text-[9px] uppercase tracking-[3px] text-gray-500">
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
        className={`transition-all ${
          activeCard === index
            ? "h-3 w-8 rounded-full bg-black"
            : "h-3 w-3 rounded-full bg-gray-400"
        }`}
      />
    ))}
  </div>
</div>
      </div>
    </section>
  );
}