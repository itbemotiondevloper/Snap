"use client";

import { motion } from "framer-motion";
import { Check, Clock3, Menu, Megaphone, RefreshCw } from "lucide-react";
import TaxCalculator from "./TaxCalculator";
const leads = [
  ["Paul", "Contacted", "paul.bj@gmail.com"],
  ["Mike", "Tour Complete", "mike.t90@hotmail.com"],
  ["Anna", "Contacted", "anna.jones@gmail.com"],
  ["Jane", "Enrolled", "jane.martin@outlook.com"],
  ["Nora", "Contacted", "nora1231@gmail.com"],
  ["Autumn", "Contacted", "autumn_sct@gmail.com"],
];

function PaperNote({ quote, author }: { quote: string; author: string }) {
  return (
    <motion.div
      whileHover={{
        rotate: 0,
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.35 }}
      className="group relative h-auto min-h-[180px] w-full max-w-[240px] rotate-[-2deg] rounded-[3px] bg-[#f8f5ef] p-5 sm:p-6 shadow-[0_18px_35px_rgba(28,22,12,0.12)] cursor-pointer"
    >
      <div className="absolute -left-2 -top-2 grid size-7 place-items-center rounded-full bg-[#ff6b57] text-xs text-white">
        +
      </div>

      <p
        className="
          relative
          z-10
          rounded-md
          px-3
          py-2
          text-[15px]
          sm:text-[16px]
          font-semibold
          italic
          leading-[1.25]
          text-[#111111]
          transition-all
          duration-500
          group-hover:bg-[#ffe082]
          group-hover:text-[#111111]
          group-hover:shadow-md
        "
      >
        &quot;{quote}&quot;
      </p>
      <p
        className="
          mt-4
          text-[11px]
          leading-4
          text-[#7f776b]
          transition-all
          duration-500
          group-hover:text-black
        "
      >
        {author}
      </p>

      <div className="absolute bottom-0 right-0 h-16 w-24 rounded-tl-[60px] bg-gradient-to-br from-transparent via-[#ded8cd] to-[#bfb7aa] opacity-70" />
    </motion.div>
  );
}
function LeadTable() {
  return (
    <div className="w-full overflow-hidden rounded-[6px] bg-white shadow-[0_14px_28px_rgba(28,22,12,0.10)]">
      <div className="grid grid-cols-[0.35fr_0.8fr_1fr_1.45fr] px-4 py-3 text-xs text-[#b0aca5]">
        <span />
        <span>Guardian</span>
        <span>Lead stage</span>
        <span>Email</span>
      </div>
      {leads.map(([name, stage, email]) => (
        <div
          className="grid grid-cols-[0.35fr_0.8fr_1fr_1.45fr] items-center border-t border-[#eee9df] px-4 py-3 text-xs"
          key={name}
        >
          <span className="size-3 rounded-[3px] border border-[#d9d4ca]" />
          <span className="text-[#7c776f]">{name}</span>
          <span
            className={`w-fit rounded px-2 py-1 font-medium ${
              stage === "Enrolled"
                ? "bg-[#e6f8ed] text-[#27a867]"
                : stage === "Tour Complete"
                  ? "bg-[#fff0e8] text-[#ff684d]"
                  : "bg-[#f0eee9] text-[#8b857c]"
            }`}
          >
            {stage}
          </span>
          <span className="truncate text-[#aaa49b]">{email}</span>
        </div>
      ))}
    </div>
  );
}

function PredictiveCard() {
  return (
    <motion.article
      className="rounded-[10px] bg-white p-7 shadow-sm"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.12 }}
    >
      <h3 className="text-lg font-semibold leading-tight">
        Predictive Tax Planning
      </h3>
      <p className="mt-4 max-w-[250px] text-sm sm:text-base leading-relaxed text-[#706b62]">
        Plan your taxes before the year ends, not after. We forecast your liability and maximize savings with smart, proactive strategies.
      </p>

      <TaxCalculator />
    </motion.article>
  );
}
function WebsitePreview() {
  const checklist = [
    "Invest in 80C",
    "Health Insurance",
    "Claim HRA",
    "NPS Benefits",
  ];

  return (
    <div className="mx-auto mt-9 w-full max-w-[250px] overflow-hidden rounded-[14px] border-[6px] border-[#e7e1d6] bg-white">
      <div className="px-4 py-4">
        <h4 className="text-base font-bold leading-tight">
          Tax Planning Checklist
        </h4>

        <p className="mt-2 text-xs leading-5 text-[#8b857c]">
          Complete these steps to maximize your tax savings.
        </p>

        <div className="mt-4 space-y-3">
          {checklist.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-md border border-[#ece7dd] px-3 py-2"
            >
              <input type="checkbox" className="h-3 w-3" />
              <span className="text-xs font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function EnrollmentForm() {
  return (
    <div className="rounded-[6px] bg-white p-6 shadow-[0_10px_24px_rgba(28,22,12,0.08)] lg:w-[250px]">
      <div className="flex items-center justify-between">
        <h4 className="text-[13px] font-semibold text-[#706b62]">Enrollment Form</h4>
        <span className="rounded bg-[#fff0e8] px-2 py-1 text-[10px] font-semibold text-[#ff684d]">
          Editing
        </span>
      </div>
      <label className="mt-7 block text-[11px] font-semibold text-[#8b857c]">
        Child&apos;s full name
      </label>
      <div className="mt-2 h-10 rounded-md bg-[#faf8f3] px-4 py-3 text-[11px] text-[#c2beb7]">
        Enter child&apos;s name...
      </div>
      <p className="mt-5 text-[11px] font-semibold text-[#8b857c]">
        Select care schedule
      </p>
      <div className="mt-3 space-y-3 text-[12px] text-[#706b62]">
        <div className="flex items-center gap-2">
          <span className="grid size-5 place-items-center rounded bg-[#ff684d] text-white">
            <Check size={12} />
          </span>
          5 days / week
        </div>
        <div className="flex items-center gap-2">
          <span className="size-5 rounded border border-[#ded8ce]" />3 days / week
        </div>
      </div>
      <p className="mt-6 text-[11px] font-semibold text-[#8b857c]">
        Guardian signature
      </p>
    </div>
  );
}
function TaxChecklistCard() {
  const items = [
    "Invest in 80C",
    "Claim HRA",
    "Health Insurance",
    "NPS Benefits",
  ];

  return (
    <div className="rounded-[6px] bg-white p-5 shadow-[0_10px_24px_rgba(28,22,12,0.08)] w-full max-w-[280px] lg:w-[280px]">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-[#706b62]">
          Tax Checklist
        </h4>

        <span className="rounded bg-[#e8fff1] px-2 py-1 text-[11px] font-semibold text-green-600">
          Active
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm">
            <span className="grid size-5 shrink-0 place-items-center rounded bg-green-500 text-white">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded bg-gray-100 p-3 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-200">
        3 / 4 tasks completed
      </div>
    </div>
  );
}

export function MarketingSection() {
  return (
    <section className="theme-section border-b border-[#191919]/10 bg-[#ffffff] px-5 py-16 sm:px-8 sm:py-20" id="advantage">
      <div className="mx-auto max-w-[940px]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55 }}
        >
          <p className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff6148]">
            <Megaphone size={14} />
            Our Advantage
          </p>
          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold leading-[0.95] tracking-normal sm:text-5xl">
            Never let a tax deadline or compliance gap hurt your business
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-5 text-[#706b62]">
            Complete financial management right at your fingertips from GST filings to audit reports, all handled by experts.
          </p>
        </motion.div>

        {/*
          MOBILE: horizontal scroll (flex row, snap, no-wrap)
          DESKTOP (lg+): original 3-column grid layout, scroll disabled
        */}
        <div
          className="
            mt-10
            flex
            gap-4
            overflow-x-auto
            snap-x
            snap-mandatory
            pb-4
            -mx-5
            px-5
            sm:-mx-8
            sm:px-8
            scrollbar-hide
            lg:mx-0
            lg:px-0
            lg:grid
            lg:grid-cols-[1fr_1fr_0.98fr]
            lg:gap-3
            lg:overflow-visible
            lg:pb-0
          "
        >
          <motion.article
            className="
              shrink-0
              w-[88vw]
              max-w-[420px]
              snap-center
              overflow-hidden
              rounded-[10px]
              bg-white
              shadow-sm
              lg:w-auto
              lg:max-w-none
              lg:col-span-2
            "
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid min-h-[306px] gap-8 p-7 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <h3 className="max-w-[260px] text-lg font-semibold leading-tight">
                  Don&apos;t let a compliance deadline slip through the cracks
                </h3>
                <p className="mt-4 max-w-[260px] text-sm sm:text-base leading-relaxed text-[#706b62]">
                  We track all your GST, Income Tax, and audit deadlines — so you never face penalties or last-minute stress.
                </p>
                <div className="mt-10">
                  <PaperNote
                    quote="I no longer worry about missing deadlines. SNAP & Associates handles everything on time, every time."
                    author="-Business Owner, Retail Firm, Surat"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <LeadTable />
              </div>
            </div>
          </motion.article>

          <div className="shrink-0 w-[88vw] max-w-[420px] snap-center lg:w-auto lg:max-w-none lg:contents">
            <PredictiveCard />
          </div>

          <motion.article
            className="
              shrink-0
              w-[88vw]
              max-w-[420px]
              snap-center
              rounded-[10px]
              bg-white
              p-7
              shadow-sm
              lg:w-auto
              lg:max-w-none
            "
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="max-w-[240px] text-lg font-semibold leading-tight">
              Financial advisory built for business growth
            </h3>
            <p className="mt-4 max-w-[280px] text-sm sm:text-base leading-relaxed text-[#706b62]">
              Plan your taxes before the year ends, not after. We forecast your liability and maximize savings with smart, proactive strategies.
            </p>
            <WebsitePreview />
          </motion.article>

          <motion.article
            className="
              shrink-0
              w-[88vw]
              max-w-[420px]
              snap-center
              overflow-hidden
              rounded-[10px]
              bg-white
              shadow-sm
              lg:w-auto
              lg:max-w-none
              lg:col-span-2
            "
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="grid gap-7 p-7 lg:grid-cols-[0.92fr_1fr]">
              <div>
                <h3 className="text-lg font-semibold">Smart tax planning made simple</h3>

                <p className="mt-4 max-w-[300px] text-sm sm:text-base leading-relaxed text-[#706b62]">
                  Stay ahead of deadlines and maximize deductions with a simple tax planning
                  checklist designed for individuals and businesses.
                </p>

                <div className="mt-7">
                  <PaperNote
                    quote="I reduced last-minute tax stress and saved more with structured planning."
                    author="Rahul Sharma, Business Owner"
                  />
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-end">
                <TaxChecklistCard />
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
