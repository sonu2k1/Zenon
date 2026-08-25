"use client";
import Link from "next/link";
import { ArrowRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "./Navbar";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-main-row">
          
          {/* Column 1: Brand & Credentials */}
          <div className="footer-brand-col">
            <Link className="brand" href="/" style={{ color: "#ffffff", fontSize: "16px", textDecoration: "none" }}>
              <i />NOVARA<span style={{ color: "#87d3c7", fontSize: "12px" }}>Life Sciences</span>
            </Link>
            <p className="footer-tagline">
              Pharmaceutical-grade nutraceutical contract manufacturing, advanced clinical R&D, and global regulatory compliance.
            </p>
            
            <div className="footer-badges" style={{ marginBottom: "18px" }}>
              <span>WHO-GMP</span>
              <span>ISO 22000</span>
              <span>US FDA Reg.</span>
            </div>

            <div>
              <span style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#8fa5a0", marginBottom: "8px" }}>
                Follow Us
              </span>
              <SocialIcons size="md" />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-links-col">
            <h5 className="footer-heading">Quick Navigation</h5>
            <div className="footer-nav-grid">
              {navItems.map((item) => (
                <Link href={item.href} key={item.name} className="footer-link">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Global Hub */}
          <div className="footer-contact-col">
            <h5 className="footer-heading">Get in Touch</h5>
            <div className="footer-contact-list">
              <a href="mailto:hello@novara-life.com" className="footer-contact-item">
                <Mail size={14} /> hello@novara-life.com
              </a>
              <a href="tel:+18008459230" className="footer-contact-item">
                <Phone size={14} /> +1 (800) 845-9230
              </a>
              <span className="footer-contact-item">
                <MapPin size={14} /> Global Cleanroom & Innovation Hub
              </span>
            </div>

            <div style={{ marginTop: "16px" }}>
              <Link
                href="/contact"
                style={{
                  background: "#6fae38",
                  color: "#ffffff",
                  padding: "9px 18px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(111, 174, 56, 0.3)",
                  transition: "transform 0.2s ease, background 0.2s ease",
                }}
              >
                Request a Consultation
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <span>© 2026 Novara Life Sciences. All rights reserved.</span>
          <div className="footer-legal-links">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Compliance</Link>
          </div>
          <button onClick={scrollToTop} className="footer-back-top" aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
