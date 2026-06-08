/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a1a1a", // near-black
          soft: "#44423d",
          muted: "#8c877d", // warm muted gray
        },
        accent: {
          DEFAULT: "#9a5b3b", // single muted clay accent, used sparingly
          soft: "#b9794f",
          wash: "#f1e9e1",
        },
        surface: {
          DEFAULT: "#fffdf9", // raised cards (warm white)
          subtle: "#faf8f4", // page background (cream)
          line: "#e8e2d6", // warm hairline
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
        card: "0 1px 2px rgba(26, 26, 26, 0.03), 0 10px 30px -16px rgba(26, 26, 26, 0.10)",
        lift: "0 2px 4px rgba(26, 26, 26, 0.04), 0 20px 44px -22px rgba(26, 26, 26, 0.18)",
      },
      maxWidth: {
        content: "1080px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
