"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, X, Phone, Mail } from "lucide-react";
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
    icon: <FaLinkedinIn size={18} />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebookF size={18} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram size={18} />,
  },
];


function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#191919]/50 dark:text-white/42">
        {title}
      </h3>

      <div className="mt-5 space-y-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block text-sm font-medium text-[#191919]/80 dark:text-white/80 transition hover:text-[#ff6148] dark:hover:text-white"
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
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#191919]/50 dark:text-white/42">
        Contact
      </h3>

      <div className="mt-5 space-y-4 text-sm font-medium leading-relaxed text-[#191919]/80 dark:text-white/80">
        <p>
          2028-2029, World Trade Center,
          Near Udhna Darwaja, Ring Road,
          Surat – 395002
        </p>

        <div className="flex items-center gap-2">
          <Phone size={14} className="text-[#ff6148]" />
          <span>+91 98985 47188</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} className="text-[#ff6148]" />
          <span>casagar98@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
export function FooterSection() {
  return (
    <footer className="theme-section bg-[#f3efe3] dark:bg-[#050814] text-[#191919] dark:text-white border-t border-[#191919]/10 dark:border-white/10">
      <div className="mx-auto max-w-[1214px]">
        {/* Top */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between border-b border-[#191919]/10 dark:border-white/10 py-12 lg:py-20 px-6 lg:px-16 xl:px-[170px] gap-12">


          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              <span className="text-[#ff6148]">Trusted financial partner</span> for
              businesses and individuals
            </h2>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 text-sm sm:text-base font-medium text-[#191919] dark:text-white transition hover:opacity-80"
            >
              Contact us
              <span className="grid size-8 place-items-center rounded-full bg-[#191919]/5 dark:bg-white/10">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>

        {/* Middle */}
        <div className="grid gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-16 xl:px-[170px]">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-[17px] font-bold uppercase tracking-[-0.04em]"
            >
              <Image src="/snap-logo-light.png" alt="SNAP Logo" width={80} height={32} className="object-contain dark:hidden" />
              <Image src="/snap-logo-dark.png" alt="SNAP Logo" width={80} height={32} className="object-contain hidden dark:block" />
            </a>
          </div>

          {footerColumns.map((column) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <FooterColumn
                title={column.title}
                links={column.links}
              />
              
            </motion.div>
            
          ))}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
>
  <ContactColumn />
</motion.div>
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#191919]/50 dark:text-white/42">
              Connect
            </h3>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="grid size-11 place-items-center rounded-full bg-[#191919]/5 hover:bg-[#ff6148] hover:text-white dark:bg-white/10 dark:hover:bg-[#ff6148] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 px-6 pb-8 pt-4 text-[11px] font-medium text-[#191919]/50 dark:text-white/42 md:flex-row md:justify-between lg:px-16 xl:px-[170px]">
          <p>&copy; 2026 SNAP & Associates. All rights reserved.</p>

          <div className="flex flex-wrap gap-6 md:gap-12">
            {/* <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Data Acknowledgements
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}