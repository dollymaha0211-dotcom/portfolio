"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Target, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center py-28 md:py-36 bg-background bg-dot-pattern"
    >
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Split Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 lg:grid-cols-12"
        >
          {/* Left Column: Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center lg:col-span-5"
          >
            <div className="group relative h-72 w-72 md:h-80 md:w-80 rounded-2xl p-[1.5px] bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl transition-transform duration-500 hover:scale-103 hover:rotate-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-[20px] transition-opacity group-hover:opacity-60" />
              
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-surface">
                {/* Profile Image with zoom-on-hover */}
                <img
                  src="/profile.png"
                  alt="Mahalakshmikumar Avatar"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Details */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center lg:col-span-7">
            {/* Tag */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-sm font-mono tracking-widest text-accent uppercase">
                01. About Me
              </span>
              <div className="h-[1px] w-12 bg-accent opacity-50" />
            </div>

            {/* Title / Big Intro */}
            <h2 className="text-3xl font-display font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
              Crafting fluid, high-performance interfaces with <span className="text-gradient">precision</span>.
            </h2>

            {/* Paragraphs */}
            <p className="mt-8 text-lg leading-relaxed text-muted font-light">
              I am a Front-End Developer with 2 years of experience building modern, highly interactive, and performant user interfaces. I specialize in turning complex requirements into simple, beautiful, and accessible web experiences.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted/80 font-light">
              My expertise lies in blending cutting-edge tools like React.js, Next.js, and TypeScript with fluid animations (using Framer Motion) to craft award-worthy digital designs. I believe in writing modular, highly-performant, and clean code that scales seamlessly.
            </p>

            {/* Meta Details Grid */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-y border-white/5 py-8 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">Location</p>
                  <p className="font-medium text-foreground">Taramani, Chennai</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-accent">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">Current Focus</p>
                  <p className="font-medium text-foreground">Creative Engineering & WebGL</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <MagneticButton intensity={0.2}>
                <a
                  href="/Mahalakshmi_Resume.pdf"
                  download
                  target="_blank"
                  className="group relative flex h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 font-medium text-foreground transition-all hover:bg-white/10"
                >
                  <span>Download CV</span>
                  <Download className="h-4.5 w-4.5 text-accent group-hover:translate-y-0.5" />
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
