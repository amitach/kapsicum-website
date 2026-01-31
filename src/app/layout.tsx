import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kapsicum - Your Digital Memory, Owned by You",
  description: "Privacy-first text and audio recall for macOS. Capture everything you type, say, and hear. Encrypted locally. Never in the cloud.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
