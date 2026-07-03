"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const Naukri = ({ className }: { className?: string }) => (
  <img 
    src="/pngwing.png" 
    alt="Naukri" 
    className={`${className} object-contain`} 
  />
);

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  // Derive strokeDashoffset at the top level — hooks cannot be called inside JSX
  const strokeDashoffset = useTransform(scrollYProgress, (value) => 157 - value * 157);

  // Show button after scrolling down 400px
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-background/50 py-12 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12 lg:px-24">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 font-display text-lg font-bold"
        >
          <span className="text-primary animate-pulse">&lt;</span>
          <span>Mahalakshmikumar</span>
          <span className="text-accent">/&gt;</span>
        </motion.div>

        {/* Info & Copyright */}
        <p className="text-center text-sm text-muted">
          © {new Date().getFullYear()} Mahalakshmikumar. Built with Next.js, TypeScript & Framer Motion.
        </p>

        {/* Minimal Social Links */}
        <div className="flex gap-4">
          {[
            { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            { icon: Github, href: "https://github.com/", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mahalakshmi-kumar-23b726304/", label: "LinkedIn" },
            { icon: Naukri, href: "https://www.naukri.com/mnjuser/profile", label: "Naukri" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-white/5 text-muted transition-all hover:bg-white/10 hover:text-primary hover:border-accent/30"
              whileHover={{ rotate: 12, scale: 1.1 }}
              title={item.label}
            >
              <item.icon className="h-4.5 w-4.5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Floating Scroll to Top button with Progress Ring */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <MagneticButton intensity={0.25}>
              <button
                onClick={scrollToTop}
                className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-surface/90 text-primary shadow-2xl backdrop-blur-md transition-colors hover:text-accent hover:border-accent/40"
                aria-label="Scroll to top"
              >
                {/* SVG Progress Ring */}
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="25"
                    className="stroke-white/5"
                    strokeWidth="2"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r="25"
                    className="stroke-accent"
                    strokeWidth="2.5"
                    fill="transparent"
                    strokeDasharray="157"
                    style={{ strokeDashoffset }}
                  />
                </svg>
                <ArrowUp className="h-5 w-5" />
              </button>
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
