"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    desc:
      "SNAP & Associates was founded by CA Sagar Gotawala & CA Aakash Bagrecha, both qualified Chartered Accountants since 2014. Over the past decade, the firm has built a reputation for delivering honest, expert, and personalized financial services to businesses across Surat.",
  },
  {
   title: "Strategic vision. Trusted advice.",
    name: "CA Aakash Bagrecha",
    role: "Co-Founder",
    desc:
      "SNAP & Associates was founded by CA Sagar Gotawala & CA Aakash Bagrecha, both qualified Chartered Accountants since 2014. Over the past decade, the firm has built a reputation for delivering honest, expert, and personalized financial services to businesses across Surat.",
  },
];

export function CommunitySection() {
  const [activeCard, setActiveCard] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  }, 1000); // changes every 4 sec

  return () => clearInterval(interval);
}, []);
  return (
    <section className="theme-section relative overflow-hidden border-y border-[#191919]/10 bg-[#f3efe3] px-4 pb-12 pt-8 sm:px-8 sm:pb-20 lg:px-10">
      <div className="mx-auto max-w-[900px]">
        <motion.h2
       className="max-w-[560px] text-[30px] sm:text-[42px] md:text-[52px] font-semibold leading-[1.08] tracking-tight text-[#171717] dark:text-white"
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
          <div className="grid gap-8 md:grid-cols-[350px_1fr] md:gap-[64px]">
            <div className="mx-auto w-full max-w-[287px] overflow-hidden rounded-md bg-[#c7a78e]">
              <Image
                src="/founder-portrait.png"
                alt="Founder"
                width={360}
                height={360}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <article className="rounded-2xl p-8">
              <h3 className="text-[24px] sm:text-[30px]">
                {cards[activeCard].title}
              </h3>

              <p className="mt-6 text-[12px] leading-6">
                {cards[activeCard].desc}
              </p>

              <div className="mt-11 text-right">
                <p className="font-serif text-[42px] italic">
                  {cards[activeCard].name}
                </p>
                <p className="mt-4 text-[9px] uppercase">
                  {cards[activeCard].role}
                </p>
              </div>
            </article>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`h-3 w-3 rounded-full ${
                  activeCard === index ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}