"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Highnote is far more than a technology provider; they are a partner that accelerates our growth.",
    name: "Vlad Sadovskiy",
    role: "CEO",
    company: "NETEVIA",
    avatar: "/avatar-vlad.png",
  },
  {
    quote:
      "Highnote is far more than a technology provider; they are a partner that accelerates our growth.",
    name: "Vlad Sadovskiy",
    role: "CEO",
    company: "NETEVIA",
    avatar: "/avatar-vlad.png",
  },
  {
    quote:
      "Every single person we worked with was just a total rock star.",
    name: "Maurice Harary",
    role: "CEO",
    company: "fluz",
    avatar: "/avatar-maurice.png",
  },
  {
    quote:
      "Highnote's infrastructure for money movement across financial accounts made it a perfect fit.",
    name: "Trista Kempa",
    role: "COO",
    company: "ferry",
    avatar: "/avatar-trista.png",
  },
  {
    quote:
      "Highnote's infrastructure for money movement across financial accounts made it a perfect fit.",
    name: "Trista Kempa",
    role: "COO",
    company: "ferry",
    avatar: "/avatar-trista.png",
  },
];

const mobileTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section className="theme-section mt-10 overflow-hidden bg-[#f3efe3] dark:bg-[#050814]">
      {/* MOBILE AUTO SCROLL */}
      <div className="lg:hidden overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {mobileTestimonials.map((testimonial, index) => (
            <article
              key={index}
              className="mx-2 w-[300px] min-h-[300px] rounded-xl border border-[#191919]/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm"
            >
              <p className="px-5 pt-10 pb-6 text-[14px] leading-[1.45] text-[#111] dark:text-gray-200">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-[#191919]/10 dark:border-white/10 px-5 py-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />

                  <div>
                    <p className="text-xs text-[#5f5b52] dark:text-gray-300">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#5f5b52] dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-2xl font-black text-[#111] dark:text-white">
                  {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      {/* DESKTOP GRID (UNCHANGED) */}
      <div className="hidden lg:grid lg:grid-cols-5">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={`${testimonial.name}-${testimonial.company}-${index}`}
            className="grid min-h-[330px] grid-rows-[1fr_auto] border-b border-r border-[#191919]/10 dark:border-white/10"
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <p className="px-8 pt-24 pb-8 text-[15px] leading-[1.45] text-[#111] dark:text-gray-200">
              "{testimonial.quote}"
            </p>

            <div className="border-t border-[#191919]/10 dark:border-white/10 px-8 py-5">
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div>
                  <p className="text-xs text-[#5f5b52] dark:text-gray-300">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#5f5b52] dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[26px] font-black text-[#111] dark:text-white">
                {testimonial.company}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}