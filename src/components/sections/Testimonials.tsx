"use client";
import { motion } from "framer-motion";

const testimonials = [
  { quote: "I used to spend hours searching through emails and notes. Now I just press Cmd+Shift+K and find anything in seconds.", author: "Sarah Chen", role: "Product Manager" },
  { quote: "The meeting summaries alone are worth it. I actually remember what was decided now.", author: "Marcus Johnson", role: "Engineering Lead" },
  { quote: "Finally, a productivity tool that respects my privacy. Everything stays on my Mac.", author: "Elena Rodriguez", role: "Security Consultant" },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title">Trusted by Memory Keepers</h2>
          <p className="section-subtitle mx-auto">Join thousands who never lose important information again.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative">
              <div className="h-full p-6 rounded-2xl bg-card border border-border">
                <svg className="w-8 h-8 text-accent/20 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><span className="text-sm font-semibold text-accent">{t.author.split(" ").map(n => n[0]).join("")}</span></div>
                  <div><p className="font-medium">{t.author}</p><p className="text-sm text-muted-foreground">{t.role}</p></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}<span className="ml-2 text-muted-foreground">5.0 on Product Hunt</span></div>
            <div className="h-6 w-px bg-border" /><span className="text-muted-foreground">Used by 10,000+ professionals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
