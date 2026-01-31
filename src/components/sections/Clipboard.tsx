"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
  { id: 1, app: "Safari", content: "https://github.com/anthropics/claude-code", time: "2 min ago" },
  { id: 2, app: "Slack", content: "Hey, can you review the PR?", time: "5 min ago" },
  { id: 3, app: "VS Code", content: "const handleSubmit = async (data) => {...}", time: "12 min ago" },
  { id: 4, app: "Notes", content: "Meeting notes: Launch date Nov 15", time: "1 hr ago" },
];

export default function Clipboard() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const q = query ? "" : "github";
      let i = 0;
      const t = setInterval(() => { if (i <= q.length) { setQuery(q.slice(0, i)); i++; } else clearInterval(t); }, 100);
    }, 4000);
    return () => clearInterval(interval);
  }, [query]);

  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              Clipboard History
            </div>
            <h2 className="section-title">Never Lose a Copy</h2>
            <p className="section-subtitle mb-8">Every URL, snippet, and image you copy is automatically saved and encrypted.</p>
            <ul className="space-y-4">
              {["Unlimited clipboard history", "Text, images, files, code", "Search by content or app", "Star important items"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-muted-foreground">{item}</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="glass rounded-2xl p-6">
              <div className="relative mb-4">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="text" value={query} readOnly placeholder="Search clipboard..." className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border text-sm" />
              </div>
              <div className="space-y-2">
                <AnimatePresence>
                  {items.filter(it => !query || it.content.toLowerCase().includes(query.toLowerCase())).map((item) => (
                    <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn("flex items-start gap-3 p-3 rounded-xl bg-card border border-border", query && item.content.toLowerCase().includes(query.toLowerCase()) && "ring-2 ring-accent/50")}>
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium">{item.app.slice(0, 2)}</div>
                      <div className="flex-1 min-w-0"><div className="text-xs text-muted-foreground mb-1">{item.app} • {item.time}</div><p className="text-sm truncate">{item.content}</p></div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex justify-between text-xs text-muted-foreground">
                <span>{items.length} items</span><span className="text-green-500 font-medium">All encrypted locally</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
