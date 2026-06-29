"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";

const bullets = [
  "Expert guidance for taxation, audit, and compliance.",
  "Personalized financial solutions for individuals and businesses.",
  "Trusted advisory backed by experience and integrity.",
];

type ContactTab = "quote" | "call";

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<ContactTab>("quote");
  const isQuote = activeTab === "quote";

  return (
    <section className="theme-section border-b border-[#191919]/10 dark:border-white/10 bg-[#f3efe3] dark:bg-[#050814] px-4 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
         <h2 className="max-w-md text-[28px] sm:text-3xl lg:text-4xl font-bold leading-tight text-[#191919] dark:text-white">
  Let&apos;s Start a Conversation
</h2>

          <div className="mt-6 space-y-4">
            {bullets.map((bullet) => (
              <motion.div
                key={bullet}
                className="flex gap-3 text-sm leading-6 text-[#191919] dark:text-gray-300"
                whileHover={{ x: 5 }}
              >
                <Sparkles
                  className="mt-1 shrink-0 text-[#315df5]"
                  size={16}
                />
                <span>{bullet}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
    <motion.form
  className="rounded-lg border-2 border-[#191919] dark:border-white/20 bg-white dark:bg-[#0f172a] p-4 sm:p-6 shadow-[6px_6px_0_#191919] dark:shadow-none"
  initial={{ opacity: 0, x: 22 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.35 }}
>
  <div className="space-y-4">
    <input
      className="h-12 w-full border border-[#9da3ad] px-4 text-sm outline-none focus:border-[#315df5]"
      placeholder="Name"
    />

    <input
      className="h-12 w-full border border-[#9da3ad] px-4 text-sm outline-none focus:border-[#315df5]"
      placeholder="Email"
    />

    <input
      className="h-12 w-full border border-[#9da3ad] px-4 text-sm outline-none focus:border-[#315df5]"
      placeholder="Phone Number"
    />

    <select className="h-12 w-full border border-[#9da3ad] px-4 text-sm outline-none focus:border-[#315df5]">
      <option>Select Service</option>
      <option>Audit Services</option>
      <option>GST Services</option>
      <option>Tax Consultation</option>
      <option>Financial Advisory</option>
      <option>Loan Assistance</option>
      <option>Accounting</option>
    </select>

    <textarea
      className="min-h-24 w-full resize-none border border-[#9da3ad] p-4 text-sm outline-none focus:border-[#315df5]"
      placeholder="Message"
    />
  </div>

  <motion.button
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className="mt-5 h-12 w-full rounded-md bg-[#315df5] text-sm font-semibold text-white"
    type="button"
  >
    Send Message
  </motion.button>
</motion.form>
      </div>
    </section>
  );
}