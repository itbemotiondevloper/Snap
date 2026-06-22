"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const footerColumns = [
  {
    title: "Products and solutions",
    links: ["TrialPioneer", "Digital Twins", "Digital Twin Generators"],
  },
  {
    title: "Research",
    links: ["Artificial Intelligence", "Clinical Research"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press"],
  },
];

const socialLinks = [
  {
    label: "X.com",
    href: "https://x.com",
    type: "icon",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/burhanit11/",
    type: "text",
  },
];

function UnlearnMark({ compact = false }: { compact?: boolean }) {
  const rows = compact
    ? [18, 23, 22, 25, 21]
    : [128, 128, 128, 128, 112, 92];

  return (
    <div
      className={`overflow-hidden ${compact ? "h-4 w-5" : "h-32 w-32"}`}
      style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
    >
      <div className={compact ? "space-y-[2px]" : "space-y-[11px]"}>
        {rows.map((width, index) => (
          <span
            key={index}
            className={`block bg-white ${compact ? "h-[2px]" : "h-2"}`}
            style={{
              width,
              marginLeft: index < 4 ? 0 : index === 4 ? 18 : 35,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/42">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="block text-xs text-white/78 transition hover:text-white"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-[#1a061a] text-white">
      <div className="mx-auto max-w-[1214px]">
        {/* Top */}
        <div className="grid border-b border-white/10 lg:min-h-[250px] lg:grid-cols-[170px_296px_1fr_162px]">
          <div className="hidden border-r border-white/10 lg:block" />

          <div className="flex justify-center py-10 lg:items-center lg:border-r lg:border-white/10">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
            >
              <UnlearnMark />
            </motion.div>
          </div>

          <div className="px-6 pb-12 text-center lg:px-[50px] lg:py-12 lg:text-left">
            <h2 className="mx-auto max-w-[520px] text-[26px] leading-[1.2] sm:text-[38px]">
              <span className="text-[#b6a7ff]">The AI partner</span> of choice
              for top pharma and biotechs
            </h2>

            <a
              href="#"
              className="mt-9 inline-flex items-center gap-3 text-xs text-white/90"
            >
              Contact us
              <span className="grid size-8 place-items-center bg-white/10">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          <div className="hidden border-l border-white/10 lg:block" />
        </div>

        {/* Middle */}
        <div className="grid gap-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-[296px_190px_152px_105px_1fr] lg:px-[170px]">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[17px] font-bold uppercase tracking-[-0.04em]"
            >
              <UnlearnMark compact />
              Unlearn
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

          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/42">
              Connect
            </h3>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#1a061a]"
                >
                  {social.type === "icon" ? (
                    <X size={16} />
                  ) : (
                    <span className="text-sm font-bold">in</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 px-6 pb-6 text-[10px] text-white/42 md:flex-row md:justify-between lg:px-[170px]">
          <p>&copy; 2026 Burhan Rabbani, Inc. All rights reserved.</p>

          <div className="flex flex-wrap gap-6 md:gap-12">
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Data Acknowledgements
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}