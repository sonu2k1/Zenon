import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#102f35", moss: "#106e63", cloud: "#f7f8f4", lime: "#d6ed64" }, fontFamily: { sans: ["var(--font-manrope)", "sans-serif"] } } }, plugins: [] } satisfies Config;
