"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Lock, User, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder login logic
    alert("Login functionality will be implemented here.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl shadow-2xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
          <Lock className="h-8 w-8 text-accent" />
        </div>
        
        <h1 className="mb-2 text-3xl font-display font-medium text-primary">
          Admin Portal
        </h1>
        <p className="mb-8 text-muted font-sans">
          Sign in to manage your portfolio content.
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5 text-left">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-mono text-muted uppercase tracking-wider pl-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <User className="h-5 w-5 text-muted" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-primary outline-none transition-colors focus:border-accent focus:bg-white/10"
                placeholder="admin@example.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-mono text-muted uppercase tracking-wider pl-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Lock className="h-5 w-5 text-muted" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-primary outline-none transition-colors focus:border-accent focus:bg-white/10"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <MagneticButton intensity={0.1} className="mt-4 w-full">
            <button
              type="submit"
              className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 font-medium text-background transition-transform hover:scale-[1.02]"
            >
              <span>Sign In</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </MagneticButton>
        </form>

        <div className="mt-8 text-sm text-muted">
          <a href="/" className="hover:text-accent transition-colors">
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
