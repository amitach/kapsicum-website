"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  { id: "kapsay", title: "KapSay", tagline: "Speak instead of type", description: "Voice-to-text anywhere. Dictate emails, notes, code comments.", color: "text-purple-500", bg: "bg-purple-500/10" },
  { id: "kapsum", title: "KapSum", tagline: "Meeting notes on autopilot", description: "Captures meeting audio, transcribes, generates smart summaries.", color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: "clipboard", title: "Clipboard", tagline: "Everything you copy, forever", description: "Every URL, snippet, image you copy is saved and searchable.", color: "text-green-500", bg: "bg-green-500/10" },
  { id: "search", title: "Search", tagline: "Find anything, instantly", description: "Cmd+Shift+K opens Spotlight-style search. Fuzzy matching, filters.", color: "text-orange-500", bg: "bg-orange-500/10" },
];

export default function FeatureCards() {
  return (
    <section id="features" className="section bg-muted/30">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title">Four Ways to Remember</h2>
          <p className="section-subtitle mx-auto">Kapsicum captures your digital life through multiple channels, all encrypted and searchable.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div key={f.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="group">
              <div className="h-full p-6 rounded-2xl bg-card border border-border card-hover">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", f.bg)}>
                  <FeatureIcon id={f.id} className={cn("w-6 h-6", f.color)} />
                </div>
                <h3 className="text-xl font-semibold mb-1">{f.title}</h3>
                <p className={cn("text-sm font-medium mb-3", f.color)}>{f.tagline}</p>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureIcon({ id, className }: { id: string; className?: string }) {
  if (id === "kapsay") return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
  if (id === "kapsum") return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
  if (id === "clipboard") return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
}
