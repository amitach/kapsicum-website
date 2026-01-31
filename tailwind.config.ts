import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
      },
      animation: {
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "typing": "typing 3s steps(40) infinite",
        "waveform": "waveform 1s ease-in-out infinite",
        "dock-bounce": "dock-bounce 0.5s ease-out",
        "breathe": "breathe 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "typing": {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "100%" },
        },
        "waveform": {
          "0%, 100%": { transform: "scaleY(0.5)" },
          "50%": { transform: "scaleY(1)" },
        },
        "dock-bounce": {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-12px)" },
          "50%": { transform: "translateY(-8px)" },
          "70%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        "breathe": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(79, 70, 229, 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(79, 70, 229, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
