"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const summaryPoints = [
  { type: "decision", text: "Launch new feature on November 15th" },
  { type: "action", text: "Sarah to send updated specs by Friday" },
  { type: "action", text: "Mike to prepare demo environment" },
  { type: "followup", text: "Schedule check-in for next Tuesday" },
];

export default function KapSum() {
  const [phase, setPhase] = useState<"timeline" | "compressing" | "summary">("timeline");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setPhase("compressing"), 2000);
    const t2 = setTimeout(() => setPhase("summary"), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  return (
    <section className="section bg-muted/30" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
            <div className="glass rounded-2xl p-8 min-h-[400px] flex flex-col justify-center">
              {phase === "timeline" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6"><span>0:00</span><span className="font-medium">Q4 Planning Meeting</span><span>1:00:00</span></div>
                  <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                    <motion.div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} />
                  </div>
                </motion.div>
              )}
              {phase === "compressing" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                  <motion.div className="w-full h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" animate={{ width: ["100%", "20%"] }} transition={{ duration: 0.8 }} />
                  <p className="mt-6 text-sm text-muted-foreground animate-pulse">Analyzing...</p>
                </motion.div>
              )}
              {phase === "summary" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center gap-2 mb-6"><svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-sm font-medium text-blue-500">Summary Generated</span></div>
                  <div className="space-y-4">
                    {summaryPoints.map((p, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${p.type === "decision" ? "bg-green-500/10" : p.type === "action" ? "bg-orange-500/10" : "bg-purple-500/10"}`}>
                          <svg className={`w-4 h-4 ${p.type === "decision" ? "text-green-500" : p.type === "action" ? "text-orange-500" : "text-purple-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p.type === "decision" ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" : p.type === "action" ? "M13 10V3L4 14h7v7l9-11h-7z" : "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"} /></svg>
                        </div>
                        <div><span className="text-xs font-medium text-muted-foreground uppercase">{p.type}</span><p className="text-sm mt-0.5">{p.text}</p></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              KapSum
            </div>
            <h2 className="section-title">Meetings That Remember Themselves</h2>
            <p className="section-subtitle mb-8">Turn hour-long meetings into 30-second summaries with decisions, action items, and key points.</p>
            <ul className="space-y-4">
              {["Automatic meeting detection", "Full transcription saved", "AI-generated summaries", "Action items extracted"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-muted-foreground">{item}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
