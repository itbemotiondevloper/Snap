"use client";

import { motion } from "framer-motion";
import { Check, Clock3, Menu, Megaphone, RefreshCw } from "lucide-react";

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
      <div className="grid grid-cols-[0.35fr_0.8fr_1fr_1.45fr] px-4 py-3 text-[9px] text-[#b0aca5]">
        <span />
        <span>Guardian</span>
        <span>Lead stage</span>
        <span>Email</span>
      </div>
      {leads.map(([name, stage, email]) => (
        <div
          className="grid grid-cols-[0.35fr_0.8fr_1fr_1.45fr] items-center border-t border-[#eee9df] px-4 py-3 text-[10px]"
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
      <h3 className="text-[16px] font-semibold leading-tight">
        Predictive Enrollment
      </h3>
      <p className="mt-4 max-w-[250px] text-[13px] leading-5 text-[#706b62]">
        Forecast future openings and maximize capacity with smart planning
        tools.
      </p>

      <div className="mx-auto mt-11 max-w-[190px]">
        <div className="mb-3 flex items-center gap-3 opacity-45">
          <div className="size-7 rounded-full bg-[#d6b39a]" />
          <div>
            <p className="text-[10px] font-semibold">Ariel Pinal</p>
            <p className="text-[9px] text-[#8b857c]">4 yr 9 mo</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-md border border-[#ddd7cc] bg-white p-2 shadow-sm">
          <div className="size-8 rounded-full bg-[#f1c28f]" />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold">Adrian Moore</p>
            <p className="text-[9px] text-[#8b857c]">2 yr 2 mo</p>
          </div>
          <RefreshCw size={13} className="text-[#ff684d]" />
        </div>

        <p className="mt-4 flex items-center gap-2 text-[12px] font-semibold">
          <RefreshCw size={14} className="text-[#1ba6da]" />
          2 upcoming spots
        </p>
        {[["Upcoming spot", "From Jul 3, 2025"], ["Upcoming spot", "From Aug 4, 2025"]].map(
          ([title, date]) => (
            <div
              className="mt-2 flex items-center gap-3 rounded-md border border-[#ddd7cc] bg-white p-3"
              key={date}
            >
              <span className="grid size-7 place-items-center rounded-full bg-[#f3f0e8]">
                <Clock3 size={13} />
              </span>
              <div>
                <p className="text-[11px] font-semibold">{title}</p>
                <p className="text-[9px] text-[#706b62]">{date}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </motion.article>
  );
}

function WebsitePreview() {
  return (
    <div className="mx-auto mt-9 w-[205px] overflow-hidden rounded-t-[14px] border-[6px] border-[#e7e1d6] bg-white">
      <div className="flex items-center justify-between px-4 py-3 text-[12px] font-bold">
        <span className="font-serif italic">Robin Nest</span>
        <Menu size={14} />
      </div>
      <div className="px-4 pb-6 text-center">
        <span className="rounded-full border border-[#ff9a78] px-3 py-1 text-[9px] font-semibold text-[#ff684d]">
          Enrollment is open
        </span>
        <h4 className="mt-4 text-[18px] font-semibold leading-tight">
          Welcome to
          <br />
          The Robin Nest
        </h4>
        <p className="mt-3 text-[9px] leading-4 text-[#8b857c]">
          We create and maintain a safe, supportive, and nurturing learning
          environment for all children and families.
        </p>
        <div className="mx-auto mt-5 h-24 w-32 rounded-t-full bg-[#ffe1b8]" />
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

export function MarketingSection() {
  return (
    <section className="theme-section border-b border-[#191919]/10 bg-[#f3efe3] px-5 py-16 sm:px-8 sm:py-20">
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
            Marketing
          </p>
          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold leading-[0.95] tracking-normal sm:text-5xl">
            Make your marketing as good as the big brands
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-5 text-[#706b62]">
            Easy marketing automations right on your website. Capture more
            leads, grow your enrollment.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 lg:grid-cols-[1fr_1fr_0.98fr]">
          <motion.article
            className="overflow-hidden rounded-[10px] bg-white shadow-sm lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid min-h-[306px] gap-8 p-7 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <h3 className="max-w-[235px] text-[16px] font-semibold leading-tight">
                  Don&apos;t let another lead slip through the cracks
                </h3>
                <p className="mt-4 max-w-[260px] text-[13px] leading-5 text-[#706b62]">
                  Capture interested families, track all interactions, and scale
                  enrollment - at one location or across 100s
                </p>
                <div className="mt-10">
                  <PaperNote
                    quote="I no longer worry about not getting back to interested families in time"
                    author="Jermaine Rucker, Owner at Little Minds Universe"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <LeadTable />
              </div>
            </div>
          </motion.article>

          <PredictiveCard />

          <motion.article
            className="rounded-[10px] bg-white p-7 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="max-w-[220px] text-[16px] font-semibold leading-tight">
              Child care websites built for enrollment
            </h3>
            <p className="mt-4 max-w-[250px] text-[13px] leading-5 text-[#706b62]">
              Playground builds your website to drive enrollment. Our proven
              design grows Google traffic, and beats your competition.
            </p>
            <WebsitePreview />
          </motion.article>

          <motion.article
            className="overflow-hidden rounded-[10px] bg-white shadow-sm lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="grid gap-7 p-7 lg:grid-cols-[0.92fr_1fr]">
              <div>
                <h3 className="text-[16px] font-semibold">Less paper, less work</h3>
                <p className="mt-4 max-w-[300px] text-[13px] leading-5 text-[#706b62]">
                  Say goodbye to paper - and much of the work - with fully
                  digital registration packets that autofill repetitive
                  information.
                </p>
                <div className="mt-7">
                  <PaperNote
                    quote="Our parents jumped for joy when they saw the online paperwork packet."
                    author="Carrie Hoffman, Office Manager at The Acorn"
                  />
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-end">
                <EnrollmentForm />
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
