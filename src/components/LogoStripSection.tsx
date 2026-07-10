"use client";

import { motion } from "framer-motion";

type LogoName =
  | "bling"
  | "basis"
  | "e2vc"
  | "better"
  | "designer";

const logos: LogoName[] = [
  "bling",
  "basis",
  "e2vc",
  "better",
  "designer",
  "bling",
  "designer",
];

// duplicate for seamless loop
const scrollingLogos = [...logos, ...logos];

function LogoMark({ name }: { name: LogoName }) {
  if (name === "bling") {
    return (
      <span className="whitespace-nowrap text-[14px] font-medium uppercase tracking-[0.32em] text-[#35322d] dark:text-white">
        Bling Capital
      </span>
    );
  }

  if (name === "basis") {
    return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-[14px] font-black uppercase tracking-[-0.04em] text-[#2f2d29] dark:text-white">
        <span className="relative size-3 border-2 border-current">
          <span className="absolute -right-1 -top-1 size-2 border-r-2 border-t-2 border-current" />
        </span>
        Basis Set
      </span>
    );
  }

  if (name === "e2vc") {
    return (
     <span className="inline-flex items-end gap-0.5 whitespace-nowrap text-[#302e2a] dark:text-white">
        <span className="text-[29px] font-semibold leading-none tracking-[-0.08em]">
          e2
        </span>
        <span className="text-[26px] font-extralight leading-none tracking-[-0.12em]">
          vc
        </span>
      </span>
    );
  }

  if (name === "better") {
    return (
      <span className="inline-flex items-center gap-2 text-left whitespace-nowrap text-[#2f2d29] dark:text-white">
        <span className="grid size-7 place-items-center rounded-full bg-[#34312c] dark:bg-white text-[#f3efe3] dark:text-[#050814]">
          <span className="size-3 rotate-45 border-l-2 border-t-2 border-current" />
        </span>
        <span className="text-[10px] font-semibold leading-[1.05]">
          Better Tomorrow Ventures
        </span>
      </span>
    );
  }

  return (
   <span className="inline-flex items-center gap-2 whitespace-nowrap text-[14px] font-bold text-[#2f2d29] dark:text-white">
      <span className="relative size-5">
        <span className="absolute left-2 top-0 h-5 w-[2px] rotate-45 bg-current" />
        <span className="absolute left-1 top-2 h-[2px] w-4 bg-current" />
        <span className="absolute left-2 top-2 size-2 rounded-full border-2 border-current bg-[#f3efe3]" />
      </span>
      Designer Fund
    </span>
  );
}

export function LogoStripSection() {
  return (
    <motion.section
      className="theme-section overflow-hidden border-y border-[#191919]/10 dark:border-white/10 bg-[#f3efe3] dark:bg-[#050814] py-6 sm:py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {scrollingLogos.map((logo, index) => (
          <div
            key={index}
         className="flex min-w-[180px] sm:min-w-[220px] md:min-w-[250px] h-[60px] items-center justify-center border-r border-[#191919]/10 dark:border-white/10 px-6"
          >
            <LogoMark name={logo} />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}