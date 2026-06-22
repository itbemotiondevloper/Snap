"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const categories = [
  "General",
  "Alerts",
  "Reports",
  "Exports",
  "API",
  "Media monitoring",
];

const faqs = [
  "What is Determ?",
  "How does Determ differ from other media monitoring tools?",
  "What sources does Determ monitor?",
  "Can I add more sources to monitor?",
  "What languages does Determ monitor?",
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="theme-section border-b border-[#191919]/10 dark:border-white/10 bg-[#f3efe3] dark:bg-[#050814] px-4 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[940px]">
        <motion.h2
          className="text-[34px] sm:text-5xl lg:text-6xl font-semibold leading-none tracking-normal text-[#191919] dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5 }}
        >
          FAQ
        </motion.h2>

        {/* Categories */}
        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-3 py-2 text-[10px] sm:text-[11px] font-semibold uppercase transition-all duration-300 hover:scale-105 ${
                index === 0
                  ? "border-[#191919] bg-[#191919] text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-[#191919] text-[#191919] dark:border-white/30 dark:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ */}
        <div className="mt-8 sm:mt-9">
          {faqs.map((question, index) => (
            <motion.div
              key={question}
              className="border-b border-[#191919]/10 dark:border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <button
                className="flex w-full items-center justify-between gap-4 sm:gap-6 py-5 sm:py-7 text-left text-[16px] sm:text-lg md:text-xl font-medium text-[#191919] dark:text-white"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                type="button"
              >
                <span>{question}</span>

                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid h-8 w-8 sm:size-9 shrink-0 place-items-center rounded-full bg-[#e7f2fb] dark:bg-[#1b2435]"
                >
                  <Plus size={16} className="text-black dark:text-white" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-xl pb-6 sm:pb-7 text-[13px] sm:text-sm leading-6 text-[#706b62] dark:text-gray-400">
                      Determ helps teams track, understand, and respond to
                      important media signals from one organized workspace.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}