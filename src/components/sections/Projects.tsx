"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

/* ─── Types ─────────────────────────────────────────── */
type Project = (typeof projects)[0];

/* ─── Shared tilt hook ───────────────────────────────── */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`,
      transition: "transform 0.12s ease-out",
    });
  };

  const onLeave = () =>
    setStyle({ transform: "perspective(900px) rotateX(0) rotateY(0) scale(1)", transition: "transform 0.5s ease-out" });

  return { ref, style, onMove, onLeave };
}

/* ─── Featured Card (first/largest) ─────────────────── */
function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const { ref, style, onMove, onLeave } = useTilt();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      ref={ref}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={() => { onLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      className="relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-white/10 bg-surface/60 backdrop-blur-xl group cursor-pointer"
    >
      {/* Ghost number */}
      <span className="pointer-events-none absolute -right-4 -top-6 z-0 select-none font-display text-[10rem] font-black leading-none text-white/[0.03]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image side */}
        <div className="relative h-64 md:h-auto overflow-hidden">
          <motion.img
            src={typeof project.image === "string" ? project.image : project.image.src}
            alt={project.title}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="h-full w-full object-cover object-top"
          />
          {/* Gradient fade right on md+ */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-surface/60 hidden md:block" />
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.categories.map((cat) => (
                <span key={cat} className="rounded-full border border-accent/25 bg-accent/10 px-3 py-0.5 font-mono text-[10px] text-accent tracking-widest uppercase">
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted font-light">
              {project.description}
            </p>
          </div>

          <div className="mt-8">
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full bg-white/5 border border-white/5 px-3 py-1 font-mono text-[10px] text-muted/80">
                  {t}
                </span>
              ))}
            </div>
            {/* <div className="flex items-center gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-mono text-xs text-muted hover:bg-white/10 hover:text-foreground transition-all">
                <Github className="h-3.5 w-3.5" /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 font-mono text-xs text-background hover:bg-primary/80 transition-all">
                <ArrowUpRight className="h-3.5 w-3.5" /> Live Demo
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Standard Card with slide-up overlay ────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, style, onMove, onLeave } = useTilt();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" as const }}
      ref={ref}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={() => { onLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 backdrop-blur-xl cursor-pointer group"
    >
      {/* Ghost number */}
      <span className="pointer-events-none absolute -right-3 -top-5 z-0 select-none font-display text-[8rem] font-black leading-none text-white/[0.04]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Thumbnail */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={typeof project.image === "string" ? project.image : project.image.src}
          alt={project.title}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="h-full w-full object-cover object-top"
        />
        {/* Dim overlay */}
        <motion.div
          animate={{ opacity: hovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-background"
        />

        {/* Slide-up detail overlay */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: hovered ? "0%" : "100%" }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/90 to-transparent p-6"
        >
          <p className="text-sm leading-relaxed text-muted/90 font-light line-clamp-3">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[9px] text-muted/80">
                {t}
              </span>
            ))}
          </div>
          {/* <div className="mt-5 flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-foreground transition-colors">
              <Github className="h-3.5 w-3.5" /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-accent hover:text-primary transition-colors">
              <ExternalLink className="h-3.5 w-3.5" /> Demo
            </a>
          </div> */}
        </motion.div>
      </div>

      {/* Card footer */}
      <div className="relative z-10 flex items-center justify-between p-5">
        <div>
          <div className="mb-1 flex flex-wrap gap-1.5">
            {project.categories.map((cat) => (
              <span key={cat} className="rounded-full bg-accent/10 border border-accent/20 px-2 py-0.5 font-mono text-[9px] text-accent tracking-widest uppercase">
                {cat}
              </span>
            ))}
          </div>
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted group-hover:border-accent/40 group-hover:text-accent transition-colors"
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────── */
const FILTERS = ["All", "React", "Next.js", "AI", "Healthcare"] as const;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = projects.filter((p) =>
    activeFilter === "All" ? true : p.categories.includes(activeFilter)
  );

  // First item is "featured", rest are standard grid
  const [featured, ...rest] = filtered;

  return (
    <section id="works" className="relative w-full py-28 md:py-36 bg-background">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">

        {/* ── Header ── */}
        <div className="mb-16 flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-accent/60" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                04. Selected Works
              </span>
            </div>
            <h2 className="font-display text-5xl font-black tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 self-end">
            <div className="flex flex-wrap gap-2 rounded-2xl border border-white/5 bg-white/[0.03] p-1.5">
              {FILTERS.map((f) => {
                const active = f === activeFilter;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`relative rounded-xl px-4 py-2 font-mono text-xs tracking-wide transition-colors ${
                      active ? "text-foreground" : "text-muted hover:text-foreground/80"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="filter-bg"
                        className="absolute inset-0 rounded-xl bg-white/8 border border-white/10"
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{f}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Grid ── */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {/* Featured card — always first, spans 2 cols */}
              {featured && <FeaturedCard key={`feat-${featured.id}`} project={featured} index={0} />}

              {/* Rest in 2-col grid */}
              {rest.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 1} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <p className="font-mono text-sm text-muted">No projects in this category yet.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
