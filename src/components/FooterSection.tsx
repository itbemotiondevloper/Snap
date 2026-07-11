"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Our Advantage", href: "#advantage" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedinIn size={16} />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebookF size={16} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram size={16} />,
  },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#191919] dark:text-white mb-6">
        {title}
      </h3>
      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block text-[14px] font-medium text-[#191919]/70 dark:text-white/60 transition hover:text-[#191919] dark:hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactColumn() {
  return (
    <div>
      <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#191919] dark:text-white mb-6">
        Contact
      </h3>
      <div className="space-y-4 text-[14px] font-medium text-[#191919]/70 dark:text-white/60">
        <a href="#contact" className="block transition hover:text-[#191919] dark:hover:text-white">
          Book a Consultation
        </a>
        <a href="mailto:casagar98@gmail.com" className="block transition hover:text-[#191919] dark:hover:text-white">
          casagar98@gmail.com
        </a>
        <a href="tel:+919898547188" className="block transition hover:text-[#191919] dark:hover:text-white">
          +91 98985 47188
        </a>
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="theme-section bg-[#ffffff] dark:bg-[#050814] text-[#191919] dark:text-white border-t border-[#191919]/10 dark:border-white/10 pt-20 pb-8">
      <div className="mx-auto max-w-[1214px] px-6 lg:px-16 xl:px-[170px]">
        <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-6">
          {/* Logo & Description Column */}
          <div className="max-w-[280px] flex-shrink-0">
            <a href="#home" className="inline-block mb-6">
              <Image src="/snap-logo-light.png" alt="SNAP Logo" width={90} height={36} className="object-contain dark:hidden" />
              <Image src="/snap-logo-dark.png" alt="SNAP Logo" width={90} height={36} className="object-contain hidden dark:block" />
            </a>
            <p className="text-[14px] font-medium leading-relaxed text-[#191919]/70 dark:text-white/60 mb-8">
              The trusted financial partner for modern businesses and individuals. From chaos to clarity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="grid size-10 place-items-center rounded-[8px] bg-[#191919]/5 hover:bg-[#191919]/10 text-[#191919]/70 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/60 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns wrapper */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-32">
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <FooterColumn title={footerColumns[0].title} links={footerColumns[0].links} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <ContactColumn />
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-medium text-[#191919]/40 dark:text-white/40">
          <p>&copy; 2026 SNAP & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
