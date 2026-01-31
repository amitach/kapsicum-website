"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const captureEvents = [
  { type: "text", content: "Meeting notes for Q4 planning...", app: "Notes" },
  { type: "voice", content: "Remind me to call Sarah at 3pm", app: "KapSay" },
  { type: "clipboard", content: "https://github.com/...", app: "Safari" },
  { type: "text", content: "const handleSubmit = async () => {", app: "VS Code" },
];

export default function Hero() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleEvents((prev) => {
        const next = (prev[prev.length - 1] + 1) % captureEvents.length;
        return [...prev, next].slice(-4);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section min-h-screen flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Your Second<br /><span className="gradient-text">Brain</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Kapsicum silently captures everything you type, say, and copy. Encrypted locally. Searchable instantly.
              <strong className="text-foreground"> Your data never leaves your Mac.</strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#download" className="btn-primary inline-flex items-center gap-2">
                <AppleIcon className="w-5 h-5" /> Download for macOS
              </a>
              <a href="#features" className="px-6 py-3 rounded-xl font-semibold border border-border hover:bg-muted transition-colors">
                See how it works
              </a>
            </div>
            <div className="flex gap-8 mt-12 text-sm text-muted-foreground">
              <div><div className="text-2xl font-bold text-foreground">100%</div>Local & Private</div>
              <div><div className="text-2xl font-bold text-foreground">AES-256</div>Encryption</div>
              <div><div className="text-2xl font-bold text-foreground">&lt;50ms</div>Search Speed</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="glass rounded-2xl p-6 min-h-[400px]">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-sm text-muted-foreground">Kapsicum</span>
                <div className="ml-auto capture-pulse" />
              </div>
              <div className="space-y-3">
                {visibleEvents.map((idx, i) => {
                  const event = captureEvents[idx];
                  const isLatest = i === visibleEvents.length - 1;
                  return (
                    <motion.div key={`${idx}-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: isLatest ? 1 : 0.6, y: 0 }}
                      className={cn("flex items-start gap-3 p-3 rounded-lg", isLatest ? "bg-accent/10" : "bg-muted/50")}>
                      <CaptureIcon type={event.type} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-accent">{event.app}</span>
                          <span className="text-xs text-muted-foreground">just now</span>
                        </div>
                        <p className="text-sm truncate">{event.content}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-muted-foreground text-sm">
                <kbd className="px-2 py-1 rounded bg-muted text-xs font-mono">⌘</kbd>
                <kbd className="px-2 py-1 rounded bg-muted text-xs font-mono">⇧</kbd>
                <kbd className="px-2 py-1 rounded bg-muted text-xs font-mono">K</kbd>
                <span className="ml-2">to search everything</span>
              </div>
            </div>
            <motion.div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-medium"
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>Capturing</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CaptureIcon({ type }: { type: string }) {
  const c = "w-5 h-5 text-accent";
  if (type === "text") return <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
  if (type === "voice") return <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
  return <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
}

function AppleIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>;
}
