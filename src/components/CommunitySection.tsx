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
  {
    value: 100,
    suffix: "M+",
    label: "Monthly open source downloads",
  },
  {
    value: 6,
    suffix: "K+",
    label: "Active LangSmith customers",
  },
  {
    value: 5,
    suffix: "",
    label: "Of the Fortune 10",
  },
];

export function CommunitySection() {
  return (
   <section className="theme-section relative overflow-hidden border-y border-[#191919]/10 dark:border-white/10 bg-[#f3efe3] dark:bg-[#050814] px-4 pb-12 pt-8 sm:px-8 sm:pb-20 lg:px-10">
      <div className="pointer-events-none absolute inset-y-0 left-[15.5%] hidden w-px bg-[#191919]/8 dark:bg-white/10 lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[18.5%] hidden w-px bg-[#191919]/8 dark:bg-white/10 lg:block" />
      <div className="pointer-events-none absolute left-0 right-0 top-[205px] hidden h-px bg-[#191919]/8 dark:bg-white/10 lg:block" />

      <div className="mx-auto max-w-[900px]">
        <motion.h2
          className="max-w-[560px] text-[30px] leading-tight font-normal tracking-normal text-[#171717] dark:text-white sm:text-[42px] md:text-[52px]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by the largest builder community in AI
        </motion.h2>

        <motion.div
          className="mt-10 grid grid-cols-3 gap-3 sm:mt-[68px] sm:grid-cols-[1.05fr_1.05fr_0.8fr] sm:gap-[108px]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {metrics.map((metric) => (
            <div
              className="group transition duration-300 hover:-translate-y-1"
              key={metric.label}
            >
            <strong className="block text-[28px] leading-none font-normal text-[#111] dark:text-white sm:text-[62px]">
                <Counter target={metric.value} suffix={metric.suffix} />
              </strong>

             <span className="mt-1 block text-[9px] leading-tight text-[#62605a] dark:text-gray-400 sm:max-w-36 sm:text-[11px]">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-8 pt-7 md:grid-cols-[350px_1fr] md:gap-[64px]">
          <motion.div
           className="mx-auto w-full max-w-[287px] overflow-hidden rounded-md bg-[#c7a78e] dark:bg-[#111827] md:ml-[48px] md:w-[287px]"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            whileHover={{ scale: 1.015 }}
          >
            <Image
              src="/founder-portrait.png"
              alt="Founder portrait"
              width={360}
              height={360}
           className="h-full w-full object-cover object-top"
            />
          </motion.div>

          <motion.article
            className="max-w-full md:max-w-[430px]"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <h3 className="text-[24px] font-medium leading-[1.18] tracking-normal text-[#242424] dark:text-white sm:text-[30px]">
              Founder-led. Built with operators. Backed by the best.
            </h3>

            <div className="mt-6 space-y-5 text-[12px] leading-[1.55] text-[#62605a] dark:text-gray-300">
              <p>
                Reflow is built by a team of operators, product leaders, and
                partners, led by repeat founder Ugur Kaner. He previously
                co-founded Collective, a category-defining startup backed by
                General Catalyst, Google&apos;s Gradient Ventures, Expa, and
                Ashton Kutcher.
              </p>

              <p>
                Today, we&apos;re building the system of record for enterprise
                operations, giving teams the visibility, automation, and
                measurable ROI needed to operate with leverage in the age of AI.
              </p>

              <p>
                We&apos;re building Reflow with operators and partners from
                Collective, Boundless, Proper, alongside world-class investors,
                including Bling, Basis Set, BTV, E2 and more.
              </p>
            </div>

            <div className="mt-11 flex justify-start md:justify-end">
              <div className="text-left md:text-right">
                <p className="font-serif text-[32px] italic leading-none text-[#2b2b2b] dark:text-white sm:text-[42px]">
                  Ugur Kaner
                </p>

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77736a] dark:text-gray-400">
                  Founder, Reflow
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}