"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Privacy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [locked, setLocked] = useState(false);

  useEffect(() => { if (inView) setTimeout(() => setLocked(true), 2000); }, [inView]);

  return (
    <section className="section bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title">Your Data Never Leaves Your Mac</h2>
          <p className="section-subtitle mx-auto">Everything encrypted with AES-256, stored in SQLCipher. No cloud sync. No server uploads.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <div className="relative py-16">
            <div className="flex justify-center gap-8 mb-8">
              {["Text", "Audio", "Clips"].map((s, i) => (
                <motion.div key={s} initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s === "Text" ? "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" : s === "Audio" ? "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" : "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"} /></svg>
                  </div>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-16 mb-4">{[0, 1, 2].map((i) => <motion.svg key={i} className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" animate={inView && !locked ? { y: [0, 8, 0] } : {}} transition={{ delay: 0.5 + i * 0.1, y: { duration: 1, repeat: Infinity } }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></motion.svg>)}</div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.8 }} className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-48 h-32 rounded-xl bg-gradient-to-b from-gray-700 to-gray-800 p-3 shadow-xl">
                  <div className="w-full h-full rounded-lg bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
                    <motion.svg className={`w-8 h-8 ${locked ? "text-green-400" : "text-accent"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" animate={locked ? { scale: [1, 1.1, 1] } : {}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={locked ? "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" : "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"} /></motion.svg>
                  </div>
                </div>
                <div className="w-16 h-3 mx-auto bg-gray-700 rounded-b-lg" /><div className="w-24 h-1 mx-auto bg-gray-600 rounded-full" />
                {locked && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"><span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">Encrypted & Protected</span></motion.div>}
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mt-12">
          {[{ title: "AES-256 Encryption", desc: "Military-grade encryption" }, { title: "SQLCipher Database", desc: "Encrypted SQLite storage" }, { title: "macOS Keychain", desc: "Keys stored securely" }].map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
