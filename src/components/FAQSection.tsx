"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does SNAP & Associates offer?",
    answer:
      "We offer Audit, Direct & Indirect Taxation, GST services, Financial Advisory, Retail & Project Financing, and Accounting.",
  },
  {
    question: "Who are the partners at the firm?",
    answer:
      "CA Sagar Gotawala and CA Aakash Bagrecha — both qualified Chartered Accountants since 2014 with 10+ years of professional practice.",
  },
  {
    question: "Do you help with GST registration and filing?",
    answer:
      "Yes, we handle end-to-end GST services including registration, return filing, audits, and appeals.",
  },
  {
    question: "Can you assist with home loans or business funding?",
    answer:
      "Absolutely. We assist individuals and businesses in securing loans from nationalized banks, private banks, co-operative banks, and NBFCs.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve Retail, Manufacturing, Real Estate, Pharma, Financial Services, Co-operative Societies, and many more industries.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="theme-section border-b border-[#191919]/10 bg-white dark:bg-[#050814] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[940px]" id="faq">
     <motion.h2
  className="mx-auto mt-4 max-w-xl text-center text-4xl font-semibold leading-[0.95] tracking-normal text-[#191919] dark:text-white sm:text-5xl"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.45 }}
  transition={{ duration: 0.5 }}
>
  FAQ
</motion.h2>

       

        {/* FAQ Items */}
        <div className="mt-12 sm:mt-16 flex flex-col">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="overflow-hidden border-b border-black/10 dark:border-white/10 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left text-base sm:text-lg md:text-xl font-medium text-[#191919] dark:text-white"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                type="button"
              >
                <span>{faq.question}</span>

                <span className="shrink-0 text-[#ff6148]">
                  {openIndex === index ? (
                    <Minus size={20} strokeWidth={2.5} />
                  ) : (
                    <Plus size={20} strokeWidth={2.5} />
                  )}
                </span>
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
                    <p className="max-w-4xl pb-6 sm:pb-8 text-sm sm:text-base leading-relaxed text-[#5e584f] dark:text-gray-300">
                      {faq.answer}
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
