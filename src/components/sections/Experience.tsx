"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Plenome Technologies Pvt. Ltd.",
    period: "2024 - Present",
    description:
      "Progressed from an intern to a Frontend Developer, taking ownership of key modules in healthcare and enterprise applications while enhancing expertise in React.js, TypeScript, Redux, and modern UI development.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Plenome Technologies Pvt. Ltd.",
    period: "June 2024 - August 2024",
    description:
      "Learned industry-standard frontend development practices, contributed to real-world projects, and gained hands-on experience in React.js, API integration, debugging, and responsive web design.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative flex w-full flex-col items-center justify-center py-28 md:py-36 bg-background"
    >
      <div className="w-full max-w-5xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-accent opacity-50" />
            <span className="text-sm font-mono tracking-widest text-accent uppercase">
              03. Experience
            </span>
            <div className="h-[1px] w-8 bg-accent opacity-50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground">
            Career Journey
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 md:gap-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row w-full ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot (Node) */}
                  <div className="absolute left-[-42px] top-6 h-5 w-5 rounded-full border-4 border-background bg-accent md:left-1/2 md:-translate-x-1/2 md:top-6 z-10 shadow-[0_0_15px_rgba(56,189,248,0.4)]" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -60 : 60,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className={`w-full md:w-[45%] ${
                      isEven ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="glassmorphism group relative rounded-2xl p-6 md:p-8 hover:border-accent/30 hover:bg-white/5 transition-all duration-300">
                      {/* Gradient Hover Corner Light */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                      <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                        <span className="flex items-center gap-2 font-mono text-xs text-accent">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] text-muted border border-white/5">
                          <Briefcase className="h-3 w-3" /> Full-time
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-medium text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="mt-1 text-base text-muted font-medium">
                        {exp.company}
                      </h4>

                      <p className="mt-4 text-sm leading-relaxed text-muted font-light">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
