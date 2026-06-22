"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";

const bullets = [
  "Once we commit, we deliver it no matter what happens.",
  "Either we do quality engineering or we don't do it at all.",
  "We don't want to waste your nor ours time.",
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
            By Working With SolGuruz, You Will Get a Combo of Technology +
            Management.
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
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {/* Tabs */}
          <div
            className="mb-5 grid grid-cols-2 text-center text-sm font-semibold"
            role="tablist"
          >
            <button
              className={`border-b pb-3 transition ${
                isQuote
                  ? "border-b-2 border-[#191919] dark:border-white text-[#191919] dark:text-white"
                  : "border-[#191919]/30 dark:border-white/20 text-[#191919]/60 dark:text-gray-400"
              }`}
              type="button"
              onClick={() => setActiveTab("quote")}
            >
              Get A Quote
            </button>

            <button
              className={`border-b pb-3 transition ${
                !isQuote
                  ? "border-b-2 border-[#191919] dark:border-white text-[#191919] dark:text-white"
                  : "border-[#191919]/30 dark:border-white/20 text-[#191919]/60 dark:text-gray-400"
              }`}
              type="button"
              onClick={() => setActiveTab("call")}
            >
              Book A Call
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <input
              className="h-12 w-full border border-[#9da3ad] dark:border-gray-700 dark:bg-[#111827] dark:text-white px-4 text-sm outline-none focus:border-[#315df5]"
              placeholder="Name"
            />

            <input
              className="h-12 w-full border border-[#9da3ad] dark:border-gray-700 dark:bg-[#111827] dark:text-white px-4 text-sm outline-none focus:border-[#315df5]"
              placeholder="Email"
            />

            <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[0.35fr_1fr]">
              <select className="h-12 border border-r-0 border-[#9da3ad] dark:border-gray-700 dark:bg-[#111827] dark:text-white px-3 text-sm">
                <option>+44</option>
                <option>+1</option>
                <option>+92</option>
              </select>

              <input
                className="h-12 border border-[#9da3ad] dark:border-gray-700 dark:bg-[#111827] dark:text-white px-4 text-sm outline-none focus:border-[#315df5]"
                placeholder="Phone Number"
              />
            </div>

            {isQuote ? (
              <>
                <textarea
                  className="min-h-24 w-full resize-none border border-[#9da3ad] dark:border-gray-700 dark:bg-[#111827] dark:text-white p-4 text-sm outline-none focus:border-[#315df5]"
                  placeholder="How can we help?"
                />

                <label className="flex items-center gap-3 text-sm text-[#191919] dark:text-gray-300">
                  <span>I&apos;d like to sign an NDA</span>
                  <input type="checkbox" className="size-5 accent-[#315df5]" />
                </label>
              </>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="mb-2 block text-xs font-semibold text-[#6d7280] dark:text-gray-400">
                      Preferred Date
                    </span>
                    <input
                      className="h-12 w-full border border-[#9da3ad] dark:border-gray-700 dark:bg-[#111827] dark:text-white px-4 text-sm"
                      type="date"
                    />
                  </label>

                  <label>
                    <span className="mb-2 block text-xs font-semibold text-[#6d7280] dark:text-gray-400">
                      Preferred Time
                    </span>
                    <input
                      className="h-12 w-full border border-[#9da3ad] dark:border-gray-700 dark:bg-[#111827] dark:text-white px-4 text-sm"
                      type="time"
                    />
                  </label>
                </div>

                <textarea
                  className="min-h-20 w-full resize-none border border-[#9da3ad] dark:border-gray-700 dark:bg-[#111827] dark:text-white p-4 text-sm"
                  placeholder="What would you like to discuss?"
                />

                <div className="flex items-center gap-3 rounded-md bg-[#eef3ff] dark:bg-[#1e293b] p-3 text-xs text-[#315df5]">
                  <CalendarDays size={16} />
                  We will confirm the meeting slot by email.
                </div>
              </>
            )}
          </motion.div>

          <p className="mt-4 text-xs leading-5 text-[#191919] dark:text-gray-400">
            <strong>Note:</strong> This form is for project inquiries. For jobs,
            visit our <span className="text-[#315df5]">Career Page</span>.
          </p>

          <motion.button
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 h-12 w-full rounded-md bg-[#315df5] text-sm font-semibold text-white shadow-sm hover:bg-[#2449cc]"
            type="button"
          >
            {isQuote ? "Get Free Consultation" : "Schedule Free Call"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}