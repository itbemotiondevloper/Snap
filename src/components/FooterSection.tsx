"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, X, Phone, Mail } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      "About Us",
      "Services",
      "Industries",
      "Testimonials",
      "FAQ",
      "Contact Us",
    ],
  },
];
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    type: "text",
  },
  {
    label: "Email",
    href: "mailto:casagar98@gmail.com",
    type: "text",
  },
  {
    label: "Call",
    href: "tel:+919898547188",
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
function ContactColumn() {
  return (
    <div>
      <h3 className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/42">
        Contact
      </h3>

      <div className="mt-5 space-y-4 text-xs leading-6 text-white/78">
        <p>
          2028-2029, World Trade Center,
          Near Udhna Darwaja, Ring Road,
          Surat – 395002
        </p>

        <div className="flex items-center gap-2">
          <Phone size={14} className="text-white" />
          <span>+91 98985 47188</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} className="text-white" />
          <span>casagar98@gmail.com</span>
        </div>
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
  <span className="text-[#b6a7ff]">Trusted financial partner</span> for
  businesses and individuals
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
          SNAP & Associates
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