"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const local = [{ name: "WhisperKit", desc: "Apple Silicon optimized" }, { name: "Ollama", desc: "Run any open model" }, { name: "MLX", desc: "Apple's ML framework" }];
const cloud = [{ name: "OpenAI", desc: "GPT-4, Whisper" }, { name: "Anthropic", desc: "Claude models" }, { name: "Deepgram", desc: "Fast transcription" }];

export default function AIFlexibility() {
  const [mode, setMode] = useState<"local" | "cloud">("local");
  const providers = mode === "local" ? local : cloud;

  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="glass rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  <span className="font-semibold text-accent">Kapsicum Core</span>
                </div>
              </div>
              <div className="flex justify-center mb-8">
                <div className="inline-flex p-1 rounded-xl bg-muted">
                  <button onClick={() => setMode("local")} className={cn("px-6 py-2 rounded-lg font-medium transition-all", mode === "local" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground")}>Local AI</button>
                  <button onClick={() => setMode("cloud")} className={cn("px-6 py-2 rounded-lg font-medium transition-all", mode === "cloud" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground")}>Cloud API</button>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={mode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-3">
                  {providers.map((p, i) => (
                    <motion.div key={p.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs font-bold">{p.name.slice(0, 2)}</div>
                      <div className="flex-1"><p className="font-medium">{p.name}</p><p className="text-sm text-muted-foreground">{p.desc}</p></div>
                      {mode === "cloud" && <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-600">BYOK</span>}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 pt-4 border-t border-border text-center text-sm text-muted-foreground">{mode === "local" ? "100% private - all processing on your Mac" : "Bring Your Own Key - we never store your API keys"}</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              AI Flexibility
            </div>
            <h2 className="section-title">Your AI, Your Choice</h2>
            <p className="section-subtitle mb-8">We don&apos;t provide AI &mdash; we support YOUR choice. Run local or use cloud APIs with your own keys.</p>
            <ul className="space-y-4">
              {["Local transcription with WhisperKit", "Run Ollama or MLX models on-device", "Connect cloud APIs with BYOK", "Switch providers anytime"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-muted-foreground">{item}</span></li>
              ))}
            </ul>
            <div className="mt-8 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                <div><p className="font-medium text-orange-600 mb-1">Bring Your Own Key (BYOK)</p><p className="text-sm text-muted-foreground">API keys stored in macOS Keychain. We never see them.</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
