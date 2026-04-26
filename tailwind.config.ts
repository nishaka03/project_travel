import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-deep": "#1a3c2a",
        "green-forest": "#2d5a3f",
        "green-moss": "#4a7c5c",
        "green-leaf": "#6b9e7a",
        "green-pale": "#8fbf9a",
        "beige-sand": "#f5e6c8",
        "beige-light": "#faf3e3",
        "beige-warm": "#e8d5b0",
        "beige-cream": "#f0e4cc",
        "gold-accent": "#c9a96e",
        "gold-dark": "#a88a4e",
        "gold-light": "#dfc291",
        charcoal: "#2c2c2c",
        "charcoal-light": "#4a4a4a",
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        organic: "0 4px 20px rgba(26, 60, 42, 0.08)",
        "organic-lg": "0 8px 40px rgba(26, 60, 42, 0.12)",
        "organic-xl": "0 12px 60px rgba(26, 60, 42, 0.16)",
        "card-hover": "0 16px 48px rgba(26, 60, 42, 0.2)",
        gold: "0 4px 24px rgba(201, 169, 110, 0.3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
