"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Scene } from "@/components/canvas/Scene";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  const titles = [
    "React Developer",
    "Frontend Engineer",
    "TypeScript Developer",
    "UI Engineer",
  ];

  // Typing animation
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(40);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        // Pause at the end
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-32"
    >
      {/* ThreeJS Background Particles */}
      <Scene />

      {/* Custom Gradient Mesh Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/80 opacity-10 blur-[150px]"
        />
      </div>

      <div className="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:px-24">
        {/* Hero Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8,
              },
            },
          }}
          className="flex flex-col items-start lg:col-span-7"
        >
          {/* Tag */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            className="mb-4 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-mono tracking-widest text-primary uppercase"
          >
            Senior Frontend Architect
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } },
            }}
            className="text-4xl font-display font-black leading-tight tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Mahalakshmi</span>.
            <br />
            <span className="relative inline-block min-h-[1.2em] font-light text-foreground/90">
              {text}
              <span className="ml-1 inline-block w-[3px] bg-accent animate-pulse">|</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-6 max-w-xl text-lg font-normal text-muted sm:text-xl leading-relaxed"
          >
            Building modern, scalable, and high-performance web applications. I design responsive, elegant, and interactive digital interfaces.
          </motion.p>

          {/* Buttons CTA Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton intensity={0.15}>
              <a
                href="#works"
                onClick={(e) => handleScrollTo(e, "works")}
                className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 font-medium text-background transition-transform hover:scale-103"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={0.15}>
              <a
                href="/Mahalakshmi_Resume.pdf"
                download
                target="_blank"
                className="group relative flex h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 font-medium text-foreground backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <span>Download Resume</span>
                <Download className="h-4.5 w-4.5 text-accent group-hover:animate-bounce" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={0.15}>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="group relative flex h-14 items-center justify-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-8 font-medium text-accent backdrop-blur-md transition-colors hover:bg-accent/15"
              >
                <span>Contact Me</span>
                <Mail className="h-4.5 w-4.5" />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Hero Right Content (Floating shapes / geometric art) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="hidden justify-center lg:col-span-5 lg:flex"
        >
          <div className="relative flex h-[400px] w-[400px] items-center justify-center">
            {/* Background glowing circle */}
            <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-[60px]" />

            {/* Float 1 (Core Cube Frame) */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotateX: [0, 180, 360],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute z-10 h-48 w-48 border border-primary/30 bg-primary/5 rounded-3xl backdrop-blur-sm shadow-[0_0_40px_rgba(108,99,255,0.15)] flex items-center justify-center"
            >
              <div className="h-24 w-24 border border-accent/40 bg-accent/5 rounded-2xl flex items-center justify-center">
                <div className="h-10 w-10 bg-secondary/50 rounded-lg animate-pulse" />
              </div>
            </motion.div>

            {/* Float 2 (Sphere) */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [10, -20, 10],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-12 right-12 h-20 w-20 rounded-full bg-gradient-to-br from-accent/40 to-secondary/10 border border-accent/20 backdrop-blur-xs"
            />

            {/* Float 3 (Torus Shape SVG) */}
            <motion.div
              animate={{
                y: [20, -20, 20],
                x: [-15, 15, -15],
                rotate: [0, -360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-8"
            >
              <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-60">
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="url(#svg-gradient)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="120"
                />
                <defs>
                  <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Scroll</span>
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-7 w-4.5 rounded-full border border-white/20 p-1 flex justify-center"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
