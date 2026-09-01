import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#062419",
        moss: "#059669",
        forest: "#047857",
        mint: "#10b981",
        cloud: "#ffffff",
        ice: "#f0fdf4",
        lime: "#84cc16",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
