"use client";

import { Canvas } from "@react-three/fiber";
import { Particles } from "./Particles";
import { Preload } from "@react-three/drei";

export function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Particles />
        <Preload all />
      </Canvas>
      <div className="absolute inset-0 bg-background/50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/80 to-background" />
    </div>
  );
}
