"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor glow lag
  const springX = useSpring(mouseX, { damping: 50, stiffness: 150, mass: 0.8 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half width/height of the glow sphere (300px)
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div 
        className="h-[600px] w-[600px] rounded-full opacity-50 bg-[radial-gradient(circle,_rgba(108,99,255,0.06)_0%,_rgba(56,189,248,0.02)_40%,_transparent_70%)]" 
      />
    </motion.div>
  );
}

// React Helper hook/handler to update local CSS variables for card glows
export function useCardGlow() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return { handleMouseMove };
}
