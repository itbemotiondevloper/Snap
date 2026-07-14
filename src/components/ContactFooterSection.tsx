"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const GOOGLE_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwi7qZ5wXfB2sRwtDFcJYP0L8XcoNBIUwB0z-gPXhtGl1PZq1aEVVT36Qr8eqUU-sCK/exec";

const servicesList = [
  "GST Registration & Filing",
  "Income Tax Planning",
  "Audit & Assurance",
  "Accounting & Bookkeeping",
  "Financial Advisory",
  "Loan & Project Finance"
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedinIn size={14} />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebookF size={14} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram size={14} />,
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactFooterSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) => {
      const updated = prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service];
      setForm((f) => ({ ...f, service: updated.join(", ") }));
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });

      setStatus("success");
      setForm(initialForm);
      setSelectedServices([]);

      // Reset status back to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="theme-section border-t border-[#191919]/10 dark:border-white/10 bg-[#ffffff] dark:bg-[#050814] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-[1100px]" id="contact">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold leading-tight text-[#191919] dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let&apos;s Build Your Financial Success Together
          </motion.h2>
          <motion.p
            className="mt-3 text-sm sm:text-base text-[#706b62] dark:text-white/60 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you need tax planning, GST compliance, audit support, business advisory, or funding assistance, our experts are here to guide you with practical solutions tailored to your goals.
          </motion.p>
        </div>

        {/* Unified Card Container */}
        <div className="rounded-[28px] border border-[#191919]/10 dark:border-white/10 bg-white dark:bg-[#121620] p-4 sm:p-6 md:p-8 shadow-sm transition-all hover:shadow-md flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Contact details */}
          <div className="flex-1 flex flex-col justify-between p-2 min-h-[350px]">
            <div>
              {/* Contact List */}
              <div className="space-y-8">
                {/* Email Us */}
                <div className="flex gap-4 items-start">
                  <div className="grid size-10 place-items-center rounded-full border border-[#191919]/10 dark:border-white/10 bg-[#191919]/5 dark:bg-white/5 text-[#ff6148] shrink-0 mt-1">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-[#191919] dark:text-white leading-none">Email Us</h3>
                    <p className="text-xs text-[#706b62] dark:text-white/60 leading-relaxed">Have a question or need professional advice? Our team is ready to assist you.</p>
                    <a
                      href="mailto:casagar98@gmail.com"
                      className="inline-block text-sm font-semibold text-[#ff6148] hover:underline"
                    >
                      casagar98@gmail.com
                    </a>
                  </div>
                </div>

                {/* Visit Our Office */}
                <div className="flex gap-4 items-start">
                  <div className="grid size-10 place-items-center rounded-full border border-[#191919]/10 dark:border-white/10 bg-[#191919]/5 dark:bg-white/5 text-[#ff6148] shrink-0 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-[#191919] dark:text-white leading-none">Visit Our Office</h3>
                    <p className="text-xs text-[#706b62] dark:text-white/60 leading-relaxed">Meet our experts for a personalized financial consultation.</p>
                    <span className="inline-block text-sm font-semibold text-[#191919] dark:text-white leading-relaxed pt-0.5">
                      304, Zion Prime, Thaltej,<br />
                      Ahmedabad, Gujarat 380054
                    </span>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex gap-4 items-start">
                  <div className="grid size-10 place-items-center rounded-full border border-[#191919]/10 dark:border-white/10 bg-[#191919]/5 dark:bg-white/5 text-[#ff6148] shrink-0 mt-1">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-[#191919] dark:text-white leading-none">Call Us</h3>
                    <p className="text-xs text-[#706b62] dark:text-white/60 leading-relaxed">Speak directly with our advisors.</p>
                    <span className="block text-[11px] font-medium text-[#706b62] dark:text-white/50 pt-0.5">
                      Monday – Friday | 9:00 AM – 6:00 PM
                    </span>
                    <a
                      href="tel:+919898547188"
                      className="inline-block text-sm font-semibold text-[#ff6148] hover:underline"
                    >
                      +91 98985 47188
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Copyright at bottom */}
            <div className="mt-12 pt-6 border-t border-[#191919]/10 dark:border-white/10 flex flex-row items-center justify-between gap-4">
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-8 place-items-center rounded-lg border border-[#191919]/10 hover:bg-[#191919]/5 text-[#191919]/70 dark:border-white/10 dark:hover:bg-white/5 dark:text-white/60 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-[11px] font-medium text-[#191919]/50 dark:text-white/40">
                &copy; 2026 SNAP & Associates.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form Card (Theme-Adaptive) */}
          <div className="flex-[1.2] bg-[#fafafa] dark:bg-[#161a23] text-[#191919] dark:text-[#f5efe3] p-6 sm:p-8 rounded-[24px] border border-[#191919]/5 dark:border-white/5 flex flex-col justify-between shadow-inner">
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full justify-between">
              
              <div>
                {/* Title & Subtitle */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#191919] dark:text-white leading-tight">
                    Let&apos;s Discuss Your Financial Goals
                  </h2>
                  <p className="mt-2 text-xs text-[#706b62] dark:text-white/60 leading-relaxed">
                    Tell us about your business or financial requirements, and we&apos;ll recommend the right solution to help you move forward with confidence.
                  </p>
                </div>

                {/* Text Fields with explicit transparent backgrounds & bottom borders */}
                <div className="mt-8 space-y-5">
                  <div>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border-t-0 border-l-0 border-r-0 border-b border-[#191919]/20 dark:border-white/20 bg-transparent !bg-transparent py-2 px-0 text-sm text-[#191919] dark:text-white placeholder-[#191919]/45 dark:placeholder-white/45 outline-none rounded-none focus:border-[#ff6148] dark:focus:border-[#ff6148] focus:ring-0 transition-colors"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border-t-0 border-l-0 border-r-0 border-b border-[#191919]/20 dark:border-white/20 bg-transparent !bg-transparent py-2 px-0 text-sm text-[#191919] dark:text-white placeholder-[#191919]/45 dark:placeholder-white/45 outline-none rounded-none focus:border-[#ff6148] dark:focus:border-[#ff6148] focus:ring-0 transition-colors"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border-t-0 border-l-0 border-r-0 border-b border-[#191919]/20 dark:border-white/20 bg-transparent !bg-transparent py-2 px-0 text-sm text-[#191919] dark:text-white placeholder-[#191919]/45 dark:placeholder-white/45 outline-none rounded-none focus:border-[#ff6148] dark:focus:border-[#ff6148] focus:ring-0 transition-colors"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={2}
                      className="w-full border-t-0 border-l-0 border-r-0 border-b border-[#191919]/20 dark:border-white/20 bg-transparent !bg-transparent py-2 px-0 resize-none text-sm text-[#191919] dark:text-white placeholder-[#191919]/45 dark:placeholder-white/45 outline-none rounded-none focus:border-[#ff6148] dark:focus:border-[#ff6148] focus:ring-0 transition-colors"
                      placeholder="Tell us about your requirement..."
                    />
                  </div>
                </div>

                {/* Checkboxes "How can we help?" */}
                <div className="mt-8">
                  <h4 className="text-xs font-semibold text-[#191919] dark:text-white mb-4">How can we help?</h4>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {servicesList.map((service) => {
                      const isChecked = selectedServices.includes(service);
                      return (
                        <label
                          key={service}
                          className="flex items-center gap-3 text-xs text-[#191919]/80 dark:text-white/80 cursor-pointer select-none group"
                        >
                          <div className="relative flex items-center justify-center shrink-0">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleServiceChange(service)}
                              className="peer sr-only"
                            />
                            <div
                              className={`size-5 rounded border-2 flex items-center justify-center transition-all ${
                                isChecked
                                  ? "bg-[#ff6148] border-[#ff6148]"
                                  : "border-[#191919]/20 dark:border-white/30 bg-transparent group-hover:border-[#ff6148]/60"
                              }`}
                            >
                              <svg
                                className={`size-3 text-white stroke-[3.5px] transition-opacity duration-150 ${
                                  isChecked ? "opacity-100" : "opacity-0"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </div>
                          </div>
                          <span className="group-hover:text-[#ff6148] dark:group-hover:text-white transition-colors">
                            {service}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Submit Button & Status Messages */}
              <div className="mt-8">
                <motion.button
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#ff6148] hover:bg-[#ff4f33] text-sm font-semibold text-white shadow-sm transition-all disabled:opacity-75"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={15} />
                      Message Sent!
                    </>
                  ) : (
                    "Book a Free Consultation"
                  )}
                </motion.button>

                {status === "error" && (
                  <p className="mt-2 text-center text-xs text-red-500 font-semibold">
                    Please fill in all required fields, or try again.
                  </p>
                )}
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
