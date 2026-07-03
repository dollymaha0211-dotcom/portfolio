"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Check } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const Naukri = ({ className }: { className?: string }) => (
  <img 
    src="/pngwing.png" 
    alt="Naukri" 
    className={`${className} object-contain`} 
  />
);

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    const tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Artificial network delay for submission simulation
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center py-28 md:py-36 bg-gradient-to-t from-black/60 to-transparent"
    >
      {/* Background glow orb */}
      <div className="absolute inset-x-0 bottom-0 h-[450px] w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-transparent pointer-events-none -z-10" />

      <div className="w-full max-w-6xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="text-sm font-mono tracking-widest text-accent uppercase">
              05. Get In Touch
            </span>
            <div className="h-[1px] w-12 bg-accent opacity-50" />
          </div>

          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-7xl font-display font-medium text-foreground">
            Let's work <br />
            <span className="text-gradient font-bold">together</span>.
          </h2>

          <p className="mb-12 max-w-md text-lg text-muted font-light leading-relaxed">
            I'm currently open to new opportunities, collaborations, or just connecting. Drop me a line and I'll get back to you as soon as possible!
          </p>

          {/* Details list */}
          <div className="flex flex-col gap-6">
            <a
              href="mailto:mahalakshmikumar@example.com"
              className="group flex items-center gap-4 text-muted hover:text-primary transition-colors text-base"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-primary/40 transition-colors text-accent">
                <Mail className="h-5 w-5" />
              </div>
              mahalakshmikumar@example.com
            </a>

            <div className="group flex items-center gap-4 text-muted text-base">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              Chennai, Tamil Nadu, India
            </div>

            {/* Social handles */}
            <div className="mt-8 flex gap-4">
              {[
                { icon: Github, href: "https://github.com/", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mahalakshmi-kumar-23b726304/", label: "LinkedIn" },
                { icon: Naukri, href: "https://www.naukri.com/mnjuser/profile", label: "Naukri" },
              ].map((social, i) => (
                <MagneticButton key={i} intensity={0.25}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted transition-colors hover:bg-white/10 hover:text-primary hover:border-accent/40"
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphism relative overflow-hidden rounded-2xl p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-6"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-muted uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full rounded-xl border bg-white/5 px-5 py-3 text-sm text-foreground outline-none transition-colors focus:bg-white/10 ${
                      errors.name ? "border-red-500/60" : "border-white/10 focus:border-accent"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-[11px] text-red-400 font-mono">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono text-muted uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-xl border bg-white/5 px-5 py-3 text-sm text-foreground outline-none transition-colors focus:bg-white/10 ${
                      errors.email ? "border-red-500/60" : "border-white/10 focus:border-accent"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-[11px] text-red-400 font-mono">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono text-muted uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full resize-none rounded-xl border bg-white/5 px-5 py-3 text-sm text-foreground outline-none transition-colors focus:bg-white/10 ${
                      errors.message ? "border-red-500/60" : "border-white/10 focus:border-accent"
                    }`}
                    placeholder="Briefly describe your project or details..."
                  />
                  {errors.message && <span className="text-[11px] text-red-400 font-mono">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <MagneticButton intensity={0.15} className="mt-2 self-start">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-xs font-semibold text-background transition-transform hover:scale-103 disabled:opacity-50"
                  >
                    <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </MagneticButton>
              </motion.form>
            ) : (
              /* Success Animation Container */
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                {/* Animated checkmark ring */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 border border-accent/30 text-accent mb-6">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.polyline
                      points="20 6 9 17 4 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    />
                  </motion.svg>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="mt-3 text-sm text-muted font-light max-w-xs">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>

                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-mono text-muted hover:bg-white/10 hover:text-foreground transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
