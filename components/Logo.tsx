"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "auto";
  showSubtitle?: boolean;
  clickable?: boolean;
  className?: string;
}

export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      aria-label="Varadaco Logo Mark"
    >
      <defs>
        {/* Outer squircle gradient background */}
        <linearGradient id="vBgGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7CA832" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#15803D" stopOpacity="0.06" />
        </linearGradient>

        {/* Left wing gradient */}
        <linearGradient id="vLeftWing" x1="8" y1="8" x2="20" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2D5A27" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>

        {/* Right wing gradient */}
        <linearGradient id="vRightWing" x1="32" y1="8" x2="20" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7CA832" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>

        {/* Center prism / apex gradient */}
        <linearGradient id="vCenterApex" x1="14" y1="20" x2="26" y2="33" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a3e635" />
          <stop offset="100%" stopColor="#2D5A27" />
        </linearGradient>

        {/* Subtle drop glow */}
        <filter id="vLogoGlow" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#15803D" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Rounded Squircle Container */}
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        fill="url(#vBgGrad)"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1.2"
      />

      {/* Left Wing of V */}
      <path
        d="M 9.5 10.5 C 9.5 9.4 10.4 8.5 11.5 8.5 L 16.5 8.5 C 17.4 8.5 18.2 9.1 18.5 9.9 L 20 15 L 14.5 24 L 9.5 14.5 C 9.5 14 9.5 11.5 9.5 10.5 Z"
        fill="url(#vLeftWing)"
      />

      {/* Right Wing of V */}
      <path
        d="M 30.5 10.5 C 30.5 9.4 29.6 8.5 28.5 8.5 L 23.5 8.5 C 22.6 8.5 21.8 9.1 21.5 9.9 L 20 15 L 25.5 24 L 30.5 14.5 C 30.5 14 30.5 11.5 30.5 10.5 Z"
        fill="url(#vRightWing)"
      />

      {/* Interlocking Dynamic Facet (V Chevron Core) */}
      <path
        d="M 13.5 21.5 L 20 32.5 L 26.5 21.5 L 22.5 18 L 20 22 L 17.5 18 Z"
        fill="url(#vCenterApex)"
        filter="url(#vLogoGlow)"
      />

      {/* Scientific Catalyst / Core Light Accent */}
      <circle cx="20" cy="14" r="2.2" fill="#7CA832" />
      <circle cx="20" cy="14" r="1" fill="#ffffff" />
    </svg>
  );
}

export default function Logo({
  size = "md",
  variant = "auto",
  showSubtitle = true,
  clickable = true,
  className = "",
}: LogoProps) {
  const iconPixelSizes = {
    sm: 26,
    md: 34,
    lg: 42,
  };

  const titleFontSizes = {
    sm: "13px",
    md: "15px",
    lg: "19px",
  };

  const subtitleFontSizes = {
    sm: "9px",
    md: "10.5px",
    lg: "12px",
  };

  const isDark = variant === "dark";
  const primaryTextColor = isDark ? "#ffffff" : "var(--ink, #1E251F)";
  const subtitleColor = isDark ? "#7CA832" : "#15803D";

  const content = (
    <div
      className={`varadaco-brand-logo ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: size === "sm" ? "9px" : "11px",
        textDecoration: "none",
        color: primaryTextColor,
        cursor: clickable ? "pointer" : "default",
        userSelect: "none",
      }}
    >
      <LogoIcon size={iconPixelSizes[size]} />
      
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
        <span
          style={{
            fontFamily: "inherit",
            fontSize: titleFontSizes[size],
            fontWeight: 800,
            letterSpacing: "0.12em",
            color: primaryTextColor,
            textTransform: "uppercase",
          }}
        >
          VARADACO
        </span>
        {showSubtitle && (
          <span
            style={{
              fontSize: subtitleFontSizes[size],
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: subtitleColor,
              textTransform: "uppercase",
              marginTop: "1px",
            }}
          >
            INDUSTRIES
          </span>
        )}
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link href="/" style={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  }

  return content;
}
