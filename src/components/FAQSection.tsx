"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

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
    <section className="theme-section border-b border-[#191919]/10 bg-[#f8f4eb] dark:bg-[#050814] px-4 py-12 sm:px-8 sm:py-20">
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
        <div className="mt-8 sm:mt-9">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
             className="mb-4 overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-7 sm:py-6 text-left text-[16px] sm:text-lg md:text-xl font-medium text-[#191919] dark:text-white"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                type="button"
              >
                <span>{faq.question}</span>

                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ede7ff] dark:bg-[#2a2340]"
                >
                  <Plus size={16} className="text-black" />
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
                  <p className="max-w-3xl px-5 pb-6 sm:px-7 sm:pb-7 text-[13px] sm:text-sm leading-7 text-[#5e584f] dark:text-gray-300">
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