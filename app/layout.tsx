import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Veradaco Industries | Science-driven nutrition & manufacturing", description: "Advanced nutraceutical, health and wellness solutions, from formulation to finished product." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body style={{ fontFamily: 'Inter, Manrope, Helvetica Neue, Arial, sans-serif' }}>{children}</body></html>; }
