"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Sparkles, Loader2, CheckCircle2 } from "lucide-react";

const bullets = [
  "Expert guidance for taxation, audit, and compliance.",
  "Personalized financial solutions for individuals and businesses.",
  "Trusted advisory backed by experience and integrity.",
];

type ContactTab = "quote" | "call";

const GOOGLE_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwi7qZ5wXfB2sRwtDFcJYP0L8XcoNBIUwB0z-gPXhtGl1PZq1aEVVT36Qr8eqUU-sCK/exec";

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

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<ContactTab>("quote");
  const isQuote = activeTab === "quote";

  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
        mode: "no-cors", // Apps Script doesn't return CORS headers; no-cors lets the request go through
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });

      setStatus("success");
      setForm(initialForm);

      // reset back to idle after a few seconds so the form is reusable
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="theme-section border-b border-[#191919]/10 dark:border-white/10 bg-[#f3efe3] dark:bg-[#050814] px-4 py-12 sm:px-8 sm:py-20">
      <div
        className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        id="contact"
      >
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
                <Sparkles className="mt-1 shrink-0 text-[#315df5]" size={16} />
                <span>{bullet}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="rounded-lg border-2 border-[#191919] dark:border-white/20 bg-white dark:bg-[#0f172a] p-4 sm:p-6 shadow-[6px_6px_0_#191919] dark:shadow-none"
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="h-12 w-full border border-[#9da3ad] px-4 text-sm outline-none focus:border-[#315df5]"
              placeholder="Name"
              required
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="h-12 w-full border border-[#9da3ad] px-4 text-sm outline-none focus:border-[#315df5]"
              placeholder="Email"
              required
            />

            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="h-12 w-full border border-[#9da3ad] px-4 text-sm outline-none focus:border-[#315df5]"
              placeholder="Phone Number"
              required
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="h-12 w-full border border-[#9da3ad] px-4 text-sm outline-none focus:border-[#315df5]"
            >
              <option value="">Select Service</option>
              <option>Audit Services</option>
              <option>GST Services</option>
              <option>Tax Consultation</option>
              <option>Financial Advisory</option>
              <option>Loan Assistance</option>
              <option>Accounting</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="min-h-24 w-full resize-none border border-[#9da3ad] p-4 text-sm outline-none focus:border-[#315df5]"
              placeholder="Message"
            />
          </div>

          <motion.button
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#315df5] text-sm font-semibold text-white disabled:opacity-70"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle2 size={16} />
                Message Sent!
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>

          {status === "error" && (
            <p className="mt-3 text-center text-xs text-red-500">
              Please fill in all required fields, or try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}