"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "SNAP & Associates made our GST compliance completely stress-free. Their team is always available and extremely knowledgeable.",
    name: "Rajesh Mehta",
    role: "Director",
    company: "Retail Manufacturing Firm",
    avatar: "/avatar-1.png",
  },
  {
    quote:
      "CA Aakash helped us restructure our internal controls. The difference in our audit results was remarkable.",
    name: "Nisha Shah",
    role: "CFO",
    company: "Co-operative Society",
    avatar: "/avatar-2.png",
  },
  {
    quote:
      "We got our home loan approved quickly thanks to their banking connections and paperwork support.",
    name: "Amit Patel",
    role: "Individual Client",
    company: "Home Loan Customer",
    avatar: "/avatar-3.png",
  },
  {
    quote:
      "Their audit team identified critical financial gaps and helped us strengthen compliance across departments.",
    name: "Kunal Desai",
    role: "Finance Head",
    company: "Pharma Solutions",
    avatar: "/avatar-4.png",
  },
  {
    quote:
      "From tax planning to annual filings, SNAP & Associates has been a trusted advisor for our growing business.",
    name: "Priya Jain",
    role: "Founder",
    company: "Jain Realty",
    avatar: "/avatar-5.png",
  },
  {
    quote:
      "Their financial advisory team helped us navigate our recent merger smoothly, ensuring strict regulatory compliance.",
    name: "Vikram Singh",
    role: "Managing Director",
    company: "Singh Logistics",
    avatar: "/avatar-6.png",
  },
  {
    quote:
      "Unmatched expertise in direct taxation. They've optimized our tax structure and saved us significant resources over the years.",
    name: "Ananya Gupta",
    role: "CEO",
    company: "TechFlow",
    avatar: "/avatar-7.png",
  },
  {
    quote:
      "SNAP & Associates has been instrumental in our company's accounting automation process. Excellent support and dedication.",
    name: "Rohan Mehta",
    role: "Operations Head",
    company: "Innovate Inc",
    avatar: "/avatar-8.png",
  },
  {
    quote:
      "Highly recommended for their profound knowledge in retail financing and cooperative structuring. Very dependable partners.",
    name: "Meera Joshi",
    role: "Chairperson",
    company: "Apex Society",
    avatar: "/avatar-9.png",
  },
  {
    quote:
      "A highly professional and responsive team. Our GST audits and appeals have never been handled so seamlessly before.",
    name: "Arjun Reddy",
    role: "Finance Manager",
    company: "BuildRight Construction",
    avatar: "/avatar-10.png",
  },
];

const mobileTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section className="theme-section mt-10 overflow-hidden bg-[#ffffff] dark:bg-[#050814]" id="testimonials">
      {/* MOBILE AUTO SCROLL */}
      <div className="md:hidden overflow-hidden py-10">
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
              className="mx-3 flex w-[320px] flex-col justify-between rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-sm"
            >
              <p className="text-sm sm:text-base leading-relaxed text-[#191919] dark:text-gray-200">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 border-t border-[#191919]/10 dark:border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#191919]/5 dark:bg-white/10 text-lg font-bold text-[#191919] dark:text-white">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#191919] dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#5f5b52] dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-lg font-bold text-[#191919] dark:text-white">
                  {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      {/* TABLET & DESKTOP SCROLL */}
      <div className="hidden md:flex w-full overflow-x-auto snap-x snap-mandatory px-5 xl:px-8 py-16 gap-6 scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={`${testimonial.name}-${testimonial.company}-${index}`}
            className="flex flex-col justify-between rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 xl:p-8 shadow-sm transition-shadow hover:shadow-lg shrink-0 w-[340px] lg:w-[380px] xl:w-[calc((100%_-_10rem)_/_5)] snap-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <p className="text-sm xl:text-base leading-relaxed text-[#191919] dark:text-gray-200">
              "{testimonial.quote}"
            </p>

            <div className="mt-10 border-t border-[#191919]/10 dark:border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#191919]/5 dark:bg-white/10 text-lg font-bold text-[#191919] dark:text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#191919] dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#5f5b52] dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-lg xl:text-xl font-bold text-[#191919] dark:text-white">
                {testimonial.company}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
