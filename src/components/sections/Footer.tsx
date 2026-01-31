"use client";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <span className="font-bold text-xl">Kapsicum</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Your digital memory, owned by you. Privacy-first text and audio recall for macOS.</p>
          </div>
          {[{ title: "Product", links: ["Features", "Download", "Changelog"] }, { title: "Resources", links: ["Documentation", "FAQ", "Support"] }, { title: "Company", links: ["About", "Privacy", "Terms"] }].map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-3">{col.links.map((link) => <li key={link}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Kapsicum. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Made with care for your privacy.</p>
        </div>
      </div>
    </footer>
  );
}
