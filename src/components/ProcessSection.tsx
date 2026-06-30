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
        rounded-2xl
        bg-white
        p-4
        shadow-sm
        lg:rounded-none
        lg:border-l
        lg:border-t
        lg:border-r-0
        lg:border-b-0
        lg:bg-transparent
        lg:shadow-none
        lg:p-0
        lg:pt-1
        lg:pl-8
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
     <span className="block text-4xl font-normal leading-none tracking-normal text-[#191919] dark:text-white sm:text-5xl">
        {step.number}
      </span>

      <div className="mt-6 sm:mt-12 lg:mt-16">
        <h3 className="text-xs font-semibold text-[#1f1f1f] dark:text-white">
          {step.title}
        </h3>

        <p className="mt-3 min-h-20 text-xs leading-5 text-[#5f5b52] dark:text-gray-300">
          {step.description}
        </p>

        <a
          href="#"
          className="mt-4 inline-flex border-b border-[#191919]/60 dark:border-white/60 text-xs font-semibold leading-5 text-[#191919] dark:text-white transition group-hover:opacity-70"
        >
          Learn more →
        </a>
      </div>

     <div className="mt-6 overflow-hidden rounded-xl bg-white dark:bg-[#111827] shadow-sm dark:shadow-none lg:rounded-none lg:bg-transparent lg:dark:bg-transparent lg:shadow-none">
        <Image
          src={step.image}
          alt={step.alt}
          width={640}
          height={420}
          className="aspect-[1.35/1] sm:aspect-[1.52/1] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
}

export function ProcessSection() {
  return (
   <section className="theme-section relative overflow-hidden border-b border-[#191919]/10 dark:border-white/10 bg-[#f3efe3] dark:bg-[#050814] px-4 py-12 sm:px-8 sm:py-18 lg:px-8" id="process">
      <div className="pointer-events-none absolute inset-y-0 left-[15%] hidden w-px bg-[#191919]/8 dark:bg-white/10 lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[15%] hidden w-px bg-[#191919]/8 dark:bg-white/10 lg:block" />

      <div className="mx-auto max-w-[1240px]">
        <motion.p
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff6148]"
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

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-xs text-center text-xs leading-5 text-[#68645b]"
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