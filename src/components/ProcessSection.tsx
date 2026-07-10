"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Clock3, Menu, Megaphone, RefreshCw } from "lucide-react";
type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your business, financials, and goals in depth.",
    image: "/process-pre-concept.png",
    alt: "Understand",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We design a tailored strategy tax, audit, or advisory suited to your needs.",
    image: "/process-concept-design.png",
    alt: "Concept design architectural sketch",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our team handles filings, audits, and advisory with precision and compliance.",
    image: "/process-schematic-design.png",
    alt: "Schematic design architectural model",
  },
  {
    number: "04",
    title: "Review",
    description:
      "We monitor outcomes and keep you updated with proactive guidance year-round.",
    image: "/process-detail-design.png",
    alt: "Detailed architectural drawing sheet",
  },
];

function ProcessCard({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  return (
    <motion.article
      className="
        group
        relative
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-3xl
        bg-white
        p-6
        sm:p-8
        shadow-sm
        border border-black/5
        transition-all
        duration-300
        hover:shadow-lg
        dark:bg-[#0f172a]
        dark:border-white/10
      "
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      // whileHover={{
      //   y: -8,
      // }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="block text-4xl font-normal leading-none tracking-normal text-[#191919] dark:text-white sm:text-5xl">
          {step.number}
        </span>
        <div className="h-px flex-1 ml-6 bg-black/5 dark:bg-white/10"></div>
      </div>

      <div className="mt-12 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-semibold text-[#1f1f1f] dark:text-white">
          {step.title}
        </h3>

        <p className="mt-3 min-h-20 text-xs sm:text-sm leading-relaxed text-[#5f5b52] dark:text-gray-300">
          {step.description}
        </p>

        <a
          href="#"
          className="mt-4 inline-flex border-b border-[#191919]/60 dark:border-white/60 text-xs sm:text-sm font-semibold leading-5 text-[#191919] dark:text-white transition group-hover:opacity-70"
        >
          Learn more →
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-black/5 dark:border-white/10">
        <Image
          src={step.image}
          alt={step.alt}
          width={640}
          height={420}
          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
}

export function ProcessSection() {
  return (
    <section className="theme-section relative overflow-hidden border-b border-[#191919]/10 dark:border-white/10 bg-[#f3efe3] dark:bg-[#050814] px-5 py-16 sm:px-8 sm:py-24" id="process">

      <div className="mx-auto max-w-[1240px]">
        <motion.p
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff6148]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
         <Megaphone size={16} />
            Our Process
        </motion.p>

        <motion.h2
         className="mt-1 max-w-5xl text-4xl font-semibold leading-tight tracking-normal text-[#242424] dark:text-white sm:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
         Our work follows a clear and structured approach, balancing innovation with commercial and technical excellence.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-sm text-center text-sm leading-relaxed text-[#68645b]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join 1000+ business owners, directors, and families who trust us.
        </motion.p>
      </div>
    </section>
  );
}