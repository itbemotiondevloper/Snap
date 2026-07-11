"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Our Advantage", href: "#advantage" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function InteractiveConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    interface Particle {
      angle: number;
      distance: number;
      angularSpeed: number;
      wobbleSpeed: number;
      wobbleRange: number;
      wobblePhase: number;
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      size: number;
      depth: number;
      baseOpacity: number;
    }

    let particles: Particle[] = [];

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      targetX: null as number | null,
      targetY: null as number | null,
    };

    const isTouch = typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const getParticleCount = (w: number) => {
      if (isTouch) return 90;
      if (w < 640) return 90;
      if (w < 1024) return 180;
      return 300;
    };

    const getInteractionRadius = (w: number) => {
      if (isTouch) return 0;
      if (w < 640) return 80;
      return 130;
    };

    const initParticles = (w: number, h: number) => {
      const count = getParticleCount(w);
      particles = [];
      const cx = w / 2;
      const cy = h / 2;
      const maxDistance = Math.sqrt(cx * cx + cy * cy) * 1.1;

      for (let i = 0; i < count; i++) {
        let depth = 0.8;
        let size = 1.8;
        let baseOpacity = 0.55;
        const layerRand = Math.random();

        if (layerRand < 0.3) {
          depth = 0.4;
          size = Math.random() * 0.6 + 0.8;
          baseOpacity = 0.35;
        } else if (layerRand < 0.85) {
          depth = 0.8;
          size = Math.random() * 0.6 + 1.5;
          baseOpacity = 0.55;
        } else {
          depth = 1.25;
          size = Math.random() * 0.8 + 2.4;
          baseOpacity = 0.75;
        }

        const distance = Math.sqrt(Math.random()) * maxDistance;
        const angle = Math.random() * Math.PI * 2;
        const angularSpeed = (0.00002 + Math.random() * 0.00005) * depth;

        particles.push({
          angle,
          distance,
          angularSpeed,
          wobbleSpeed: 0.005 + Math.random() * 0.01,
          wobbleRange: 5 + Math.random() * 15,
          wobblePhase: Math.random() * Math.PI * 2,
          baseX: 0,
          baseY: 0,
          x: 0,
          y: 0,
          size,
          depth,
          baseOpacity,
        });
      }

      particles.forEach(p => {
        const currentDist = p.distance + Math.sin(p.wobblePhase) * p.wobbleRange;
        p.baseX = cx + Math.cos(p.angle) * currentDist;
        p.baseY = cy + Math.sin(p.angle) * currentDist;
        p.x = p.baseX;
        p.y = p.baseY;
      });
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initParticles(width, height);
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    let clickImpact = 0;
    let clickX = 0;
    let clickY = 0;

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      clickX = e.clientX - rect.left;
      clickY = e.clientY - rect.top;
      clickImpact = 1.0;
    };

    const section = container.closest("section");
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);
      section.addEventListener("click", handleClick);
    }

    const easeMouse = () => {
      if (mouse.targetX !== null && mouse.targetY !== null) {
        if (mouse.x === null || mouse.y === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.12;
          mouse.y += (mouse.targetY - mouse.y) * 0.12;
        }
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");
      
      const particleColor = isDark ? "rgba(255, 255, 255, " : "rgba(80, 80, 80, ";
      const glowColor = isDark ? "rgba(59, 130, 246, " : "rgba(100, 100, 100, ";
      const lineColor = isDark ? "rgba(255, 255, 255, " : "rgba(80, 80, 80, ";

      easeMouse();

      if (clickImpact > 0.01) {
        clickImpact *= 0.93;
      } else {
        clickImpact = 0;
      }

      const radius = getInteractionRadius(width);
      const cx = width / 2;
      const cy = height / 2;

      particles.forEach(p => {
        p.angle += p.angularSpeed;
        p.wobblePhase += p.wobbleSpeed;

        const currentDist = p.distance + Math.sin(p.wobblePhase) * p.wobbleRange;
        p.baseX = cx + Math.cos(p.angle) * currentDist;
        p.baseY = cy + Math.sin(p.angle) * currentDist;

        let targetX = p.baseX;
        let targetY = p.baseY;
        let hoverForce = 0;

        if (mouse.x !== null && mouse.y !== null && radius > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < radius) {
            hoverForce = (radius - dist) / radius;
            const maxRepel = 24 * p.depth;
            const angleX = dist > 0 ? dx / dist : 0;
            const angleY = dist > 0 ? dy / dist : 0;
            
            targetX += angleX * hoverForce * maxRepel;
            targetY += angleY * hoverForce * maxRepel;
          }
        }

        if (clickImpact > 0) {
          const dx = p.x - clickX;
          const dy = p.y - clickY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const clickRadius = 260;

          if (dist < clickRadius) {
            const clickForce = (clickRadius - dist) / clickRadius;
            const angleX = dist > 0 ? dx / dist : 0;
            const angleY = dist > 0 ? dy / dist : 0;
            
            targetX += angleX * clickForce * 42 * p.depth * clickImpact;
            targetY += angleY * clickForce * 42 * p.depth * clickImpact;
          }
        }

        const easeFactor = hoverForce > 0 || clickImpact > 0 ? 0.09 : 0.04;
        p.x += (targetX - p.x) * easeFactor;
        p.y += (targetY - p.y) * easeFactor;
      });

      if (mouse.x !== null && mouse.y !== null && radius > 0) {
        const closeParticles = particles.filter(p => {
          const dx = p.x - mouse.x!;
          const dy = p.y - mouse.y!;
          return dx * dx + dy * dy < radius * radius;
        });

        for (let i = 0; i < closeParticles.length; i++) {
          const p1 = closeParticles[i];
          const dMouse1 = Math.sqrt((p1.x - mouse.x) ** 2 + (p1.y - mouse.y) ** 2);
          const f1 = (radius - dMouse1) / radius;

          for (let j = i + 1; j < closeParticles.length; j++) {
            const p2 = closeParticles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxLineDist = 80;

            if (dist < maxLineDist) {
              const dMouse2 = Math.sqrt((p2.x - mouse.x) ** 2 + (p2.y - mouse.y) ** 2);
              const f2 = (radius - dMouse2) / radius;
              const combinedForce = f1 * f2;
              const proximityOpacity = (1 - dist / maxLineDist) * 0.12 * combinedForce;

              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `${lineColor}${proximityOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      particles.forEach(p => {
        let hoverForce = 0;
        if (mouse.x !== null && mouse.y !== null && radius > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius) {
            hoverForce = (radius - dist) / radius;
          }
        }

        const size = p.size * (1 + hoverForce * 0.5);
        const opacity = p.baseOpacity + (1 - p.baseOpacity) * hoverForce * 0.4;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

        if (hoverForce > 0.05) {
          ctx.save();
          ctx.shadowBlur = hoverForce * 10 * p.depth;
          ctx.shadowColor = `${glowColor}${hoverForce * 0.8})`;
          ctx.fillStyle = `${particleColor}${opacity})`;
          ctx.fill();
          ctx.restore();
        } else {
          ctx.fillStyle = `${particleColor}${opacity})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
        section.removeEventListener("click", handleClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Track scroll position so the fixed header can pick up a background
  // once it's no longer sitting over the hero image
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden">
      <InteractiveConstellation />

      {/* Header — fixed so logo + menu stay sticky on top across the whole page */}
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-start justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-14 transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-[#0f1115]/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-black/10 dark:border-white/10" : "bg-transparent"
        }`}
      >
        <motion.a
          href="#home"
          className="flex items-center"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          aria-label="SNAP home"
        >
          <Image
            src="/snap-logo-light.png"
            alt="SNAP Logo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain sm:h-12 dark:hidden"
          />
          <Image
            src="/snap-logo-dark.png"
            alt="SNAP Logo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain sm:h-12 hidden dark:block"
          />
        </motion.a>

        {/* Menu toggle — swaps icon between Menu and X in place */}
        <motion.button
          className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-md text-[#191919] dark:text-white/85 transition hover:bg-black/5 dark:hover:bg-white/10 dark:hover:text-white relative z-[60]"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                <X size={22} strokeWidth={1.4} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                <Menu size={22} strokeWidth={1.4} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </header>

      {/* Full-page overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff] dark:bg-[#111111]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Close button — fixed top-right, same spot as the trigger */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-4 sm:right-6 sm:top-4 md:right-10 md:top-4 lg:right-14 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-md text-[#191919] dark:text-white/85 transition hover:bg-black/5 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X size={22} strokeWidth={1.4} />
            </button>

            {/* Centered menu items */}
            <nav className="flex flex-col items-center gap-6 sm:gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl sm:text-5xl font-semibold text-[#191919] dark:text-white/90 transition hover:text-black dark:hover:text-white"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-20 pb-10 text-center">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#191919]/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-medium text-[#191919] dark:text-white backdrop-blur-md shadow-sm"
        >
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#ff6148] text-[10px] text-white">
            ✦
          </span>
          <span>Surat's Premier Chartered Accountants</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="
            max-w-4xl
            text-[38px]
            sm:text-5xl
            md:text-6xl
            lg:text-[72px]
            font-light
            tracking-tight
            text-[#191919]
            dark:text-white
            leading-[1.05]
          "
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="font-medium block">Your Trusted Financial</span>
          <span className="inline-block mt-1 border-b border-[#191919]/40 text-[#191919]/80 dark:border-white/70 dark:text-white/80 pb-1">
            Partners in Surat
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="
            mt-6
            max-w-2xl
            text-sm
            sm:text-base
            md:text-lg
            leading-relaxed
            text-[#5f5b52]
            dark:text-gray-300
          "
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          SNAP & Associates handles tax, audit, and advisory — powered by deep expertise and proactive strategies. Grow your business with clarity and confidence.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#191919] dark:bg-white px-8 text-sm sm:text-base font-semibold text-white dark:text-[#191919] transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            Book a Meeting
          </a>
          <a
            href="#process"
            className="flex h-12 sm:h-14 items-center justify-center rounded-full border border-[#191919]/20 dark:border-white/20 bg-white/50 dark:bg-white/5 px-8 text-sm sm:text-base font-semibold text-[#191919] dark:text-white transition-colors hover:bg-black/5 dark:hover:bg-white/10 backdrop-blur-md"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
