"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const results = [
  { id: 1, type: "kapsum", title: "Q4 roadmap meeting with Sarah", subtitle: "Meeting summary from Oct 15" },
  { id: 2, type: "clipboard", title: "Sarah's budget spreadsheet", subtitle: "Copied from Excel" },
  { id: 3, type: "kapsay", title: "Call Sarah about specs", subtitle: "Voice note transcription" },
  { id: 4, type: "text", title: "Email to Sarah: Launch timeline", subtitle: "Typed in Mail app" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [sel, setSel] = useState(0);

  useEffect(() => {
    const run = () => {
      setQuery(""); setShow(false); setSel(0);
      const target = "meeting notes sarah q4";
      let i = 0;
      const t = setInterval(() => {
        if (i <= target.length) { setQuery(target.slice(0, i)); i++; }
        else { clearInterval(t); setShow(true); let r = 0; const c = setInterval(() => { r = (r + 1) % results.length; setSel(r); }, 800); setTimeout(() => clearInterval(c), 4000); }
      }, 80);
    };
    run();
    const interval = setInterval(run, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-muted/30">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="section-title">Find Anything. Instantly.</h2>
          <p className="section-subtitle mx-auto">Press <kbd className="px-2 py-1 rounded bg-card border border-border text-sm font-mono">⌘⇧K</kbd> to search your entire memory.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <div className="spotlight-box bg-card">
            <div className="p-4 border-b border-border flex items-center gap-3">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <div className="flex-1 text-lg">{query}<span className="typing-cursor" /></div>
              <kbd className="px-2 py-1 rounded bg-muted text-xs text-muted-foreground">esc</kbd>
            </div>
            <AnimatePresence>
              {show && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="overflow-hidden">
                  <div className="p-2">
                    {results.map((r, i) => (
                      <motion.div key={r.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                        className={cn("flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors", sel === i ? "bg-accent text-accent-foreground" : "hover:bg-muted")}>
                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", sel === i ? "bg-accent-foreground/20" : "bg-muted")}>
                          <svg className={cn("w-4 h-4", sel === i ? "text-accent-foreground" : "text-muted-foreground")} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <div className="flex-1 min-w-0"><p className="font-medium truncate">{r.title}</p><p className={cn("text-sm truncate", sel === i ? "text-accent-foreground/70" : "text-muted-foreground")}>{r.subtitle}</p></div>
                        <span className={cn("text-xs px-2 py-0.5 rounded-full capitalize", sel === i ? "bg-accent-foreground/20 text-accent-foreground" : "bg-muted text-muted-foreground")}>{r.type}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-border bg-muted/50 flex items-center justify-between text-xs text-muted-foreground">
                    <span><kbd className="px-1.5 py-0.5 rounded bg-card border border-border">↑↓</kbd> navigate <kbd className="px-1.5 py-0.5 rounded bg-card border border-border ml-2">↵</kbd> open</span>
                    <span>{results.length} results</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 max-w-3xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-4">Power up with filter operators</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[{ k: "app:", d: "Filter by app" }, { k: "date:", d: "Filter by date" }, { k: "is:", d: "Show starred" }, { k: "type:", d: "Filter by type" }].map((op) => (
              <div key={op.k} className="p-3 rounded-xl bg-card border border-border text-center"><code className="text-accent font-mono text-sm">{op.k}</code><p className="text-xs text-muted-foreground mt-1">{op.d}</p></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
