"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Download() {
  const [hover, setHover] = useState(false);
  const [state, setState] = useState<"idle" | "downloading" | "done">("idle");

  const handleClick = () => { setState("downloading"); setTimeout(() => setState("done"), 2000); setTimeout(() => setState("idle"), 4000); };

  return (
    <section id="download" className="section bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-8">
            <motion.div animate={hover ? { y: [-2, -8, -2] } : {}} transition={{ duration: 0.4 }} className="inline-block">
              <div className="w-28 h-28 mx-auto rounded-[28px] bg-gradient-to-br from-accent to-purple-600 p-0.5 shadow-xl shadow-accent/25">
                <div className="w-full h-full rounded-[26px] bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                  <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">Start Remembering Everything</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-subtitle mx-auto mb-8">Download Kapsicum and never lose important information again. Free to try, no account required.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <button onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} disabled={state !== "idle"}
              className={cn("inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg bg-accent text-accent-foreground transition-all hover:scale-105 active:scale-95 disabled:opacity-80", state === "idle" && "animate-breathe")}>
              {state === "idle" && <><svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>Download for macOS</>}
              {state === "downloading" && <><svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Downloading...</>}
              {state === "done" && <><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Download Complete</>}
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>macOS 13+</span><span className="h-4 w-px bg-border" /><span>Apple Silicon optimized</span><span className="h-4 w-px bg-border" /><span>Notarized by Apple</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 pt-12 border-t border-border">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center"><div className="text-3xl font-bold">100%</div><div className="text-sm text-muted-foreground">Local & Private</div></div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center"><div className="text-3xl font-bold">AES-256</div><div className="text-sm text-muted-foreground">Encryption</div></div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center"><div className="text-3xl font-bold">0</div><div className="text-sm text-muted-foreground">Data sent to cloud</div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
