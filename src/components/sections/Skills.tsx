"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { useCardGlow } from "@/components/ui/MouseGlow";

export function Skills() {
  const { handleMouseMove } = useCardGlow();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="skills"
      className="relative flex w-full flex-col items-center justify-center py-28 md:py-36 bg-background"
    >
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="text-sm font-mono tracking-widest text-accent uppercase">
                02. Expertise
              </span>
              <div className="h-[1px] w-12 bg-accent opacity-50" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-foreground">
              Technical Stack
            </h2>
          </div>
          <p className="max-w-md text-muted font-sans text-lg font-light leading-relaxed">
            A curated list of my specialized technologies, tools, and workflows for crafting modern digital experiences.
          </p>
        </div>

        {/* Reorganized Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              onMouseMove={handleMouseMove}
              className="card-glow-wrapper animated-gradient-border group overflow-hidden rounded-2xl border border-white/5 bg-surface/50 p-8 backdrop-blur-md transition-all duration-300"
            >
              {/* Radial Mouse Spotlight overlay */}
              <div className="card-glow-overlay" />

              <h3 className="mb-8 font-display text-2xl font-semibold text-foreground relative z-20">
                {category.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 relative z-20">
                {category.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <div className="mb-2 flex justify-between font-mono text-sm">
                      <span className="text-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/40">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent origin-left"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
