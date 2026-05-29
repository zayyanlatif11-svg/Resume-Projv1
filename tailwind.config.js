/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f172a", // slate-900 navy/charcoal
          soft: "#1e293b",
          muted: "#475569",
        },
        accent: {
          DEFAULT: "#1d4ed8", // refined blue
          soft: "#3b82f6",
          wash: "#eff4ff",
        },
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#f8fafc",
          line: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)",
        lift: "0 2px 4px rgba(15, 23, 42, 0.05), 0 18px 40px -18px rgba(15, 23, 42, 0.22)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
