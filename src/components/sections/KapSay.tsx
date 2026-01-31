"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = ["Schedule a meeting with Sarah for 3pm tomorrow", "Remind me to review the Q4 budget proposal", "Note to self: update the API documentation"];

export default function KapSay() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    if (!animating) return;
    let i = 0;
    const t = setInterval(() => {
      if (i <= texts[idx].length) { setText(texts[idx].slice(0, i)); i++; }
      else { clearInterval(t); setTimeout(() => { setAnimating(false); setTimeout(() => { setIdx((p) => (p + 1) % texts.length); setText(""); setAnimating(true); }, 500); }, 2000); }
    }, 50);
    return () => clearInterval(t);
  }, [idx, animating]);

  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              KapSay
            </div>
            <h2 className="section-title">Speak, Don&apos;t Type</h2>
            <p className="section-subtitle mb-8">Your voice becomes perfectly transcribed text, anywhere on your Mac.</p>
            <ul className="space-y-4">
              {["Works in any app", "Local transcription with WhisperKit", "Optional cloud (BYOK)", "Automatic punctuation"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-purple-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-muted-foreground">{item}</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center justify-center gap-1 h-16 mb-8">
                {animating ? Array.from({ length: 12 }).map((_, i) => <motion.div key={i} className="waveform-bar" style={{ animationDelay: `${i * 0.08}s` }} />) : Array.from({ length: 12 }).map((_, i) => <div key={i} className="w-1 h-2 bg-accent/30 rounded-full" />)}
              </div>
              <div className="flex justify-center mb-8">
                <motion.svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></motion.svg>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border min-h-[80px]">
                <p className="text-lg">{text}{animating && <span className="typing-cursor" />}</p>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <div className={`w-2 h-2 rounded-full ${animating ? "bg-purple-500 animate-pulse" : "bg-green-500"}`} />
                {animating ? "Transcribing..." : "Complete"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
