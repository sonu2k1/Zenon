"use client";
import { motion } from "framer-motion";
import { ArrowRight, Award, Boxes, CheckCircle2, ChevronRight, Factory, FileCheck, FlaskConical, Layers, Package, ShieldCheck, Sparkles, Tag, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const serviceList = [
  {
    id: "private-label",
    title: "Private Labelling",
    tagline: "End-to-end turnkey formulation, branding & finished goods",
    desc: "We are a leading full-service private label manufacturer. Whether you are an early-stage direct-to-consumer brand or an established multinational health enterprise, we deliver custom dosage forms, compliant labeling, and shelf-ready packaging.",
    features: [
      "Custom flavor profiling and organoleptic testing",
      "Low Minimum Order Quantities (starting at 5,000 units)",
      "Ready-to-launch validated stock formulations",
      "Label artwork regulatory review and barcoding",
    ],
    icon: Tag,
    color: "#2b5292",
    badge: "Turnkey Ready",
  },
  {
    id: "regulatory",
    title: "Regulatory Compliances",
    tagline: "Global licensing, registration, and dossier preparation",
    desc: "Ensure seamless market entry with our in-house regulatory affairs team. We work closely with leading health authorities worldwide to ensure complete adherence to legal standards and nutritional claims.",
    features: [
      "FSSAI, AYUSH, and Legal Metrology licensing support",
      "US FDA 21 CFR Part 111 cGMP compliance documentation",
      "Free Sale Certificates (FSC) and Certificate of Analysis (CoA)",
      "Clinical dossier compilation for EFSA & ASEAN filings",
    ],
    icon: FileCheck,
    color: "#059669",
    badge: "100% Compliant",
  },
  {
    id: "crams",
    title: "CRAMS (Contract Research & Manufacturing)",
    tagline: "Advanced contract R&D and pharmaceutical-grade batch scaling",
    desc: "We are a trusted partner in contract research and manufacturing services. From benchtop molecule synthesis to multi-ton commercial production in WHO-GMP cleanrooms, we scale your proprietary formulations with zero compromise.",
    features: [
      "Dedicated cleanroom pilot scale suites (Class 100,000)",
      "Analytical HPLC, LC-MS/MS, and dissolution testing",
      "ICH stability testing chambers (Zone IVb conditions)",
      "Complete batch manufacturing records (BMR) & traceability",
    ],
    icon: Factory,
    color: "#7c3aed",
    badge: "WHO-GMP Certified",
  },
  {
    id: "packaging",
    title: "Packaging & Smart Delivery Formats",
    tagline: "High-barrier protective packaging & custom container design",
    desc: "With growing consumer demands for health & wellness products, packaging aesthetics and barrier integrity are paramount. We offer pharmaceutical blister packs, HDPE bottles, stick packs, and eco-friendly recyclable cartons.",
    features: [
      "Child-resistant and senior-friendly closure systems",
      "Alu-Alu and PVC/PVDC blister packaging lines",
      "Nitrogen-flushed single-serve liquid & powder stick packs",
      "Tamper-evident induction sealing and custom labeling",
    ],
    icon: Package,
    color: "#d97706",
    badge: "High Barrier Protection",
  },
];

const capabilities = [
  { title: "Softgel Encapsulation", desc: "Automated nitrogen-blanketed rotary die encapsulation for fat-soluble vitamins and algal oils." },
  { title: "DRCaps® Enteric Pellets", desc: "Delayed release acid-resistant capsules for targeted intestinal delivery of probiotics and live enzymes." },
  { title: "Effervescent & Soluble Powders", desc: "High-speed sachet packing with moisture-controlled environments for instant effervescence." },
  { title: "Pectin & Vegan Gummies", desc: "Mogul-line starch-free depositing for sugar-free, gelatin-free nutraceutical gummy supplements." },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Our Services</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-tag-pill" style={{ backgroundColor: "rgba(43, 82, 146, 0.1)", borderColor: "rgba(43, 82, 146, 0.25)", color: "#2b5292" }}>
              <Layers size={14} />
              <span>Full-Service Manufacturing</span>
              <span className="pill-dot" style={{ backgroundColor: "#2b5292" }} />
              <span>Concept to Shelf</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              Comprehensive services for<br />
              <em style={{ color: "#2b5292" }}>visionary health brands.</em>
            </h1>

            <p className="hero-text" style={{ maxWidth: "680px", fontSize: "17px", lineHeight: "1.7" }}>
              From initial molecular formulation and clinical licensing to high-volume cleanroom manufacturing and high-barrier packaging, discover our complete service suite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="page-wrapper" style={{ paddingTop: "60px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {serviceList.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.id}
                className="card-panel"
                style={{ padding: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                variants={fade}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${service.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: service.color }}>
                      <Icon size={24} />
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: service.color, background: `${service.color}10`, padding: "4px 10px", borderRadius: "100px" }}>
                      {service.badge}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "28px", fontWeight: 800, color: "var(--ink)", marginBottom: "8px" }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: service.color, marginBottom: "14px" }}>
                    {service.tagline}
                  </p>
                  <p style={{ fontSize: "14px", color: "#546863", lineHeight: "1.7", marginBottom: "24px" }}>
                    {service.desc}
                  </p>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="button button-dark"
                    style={{ fontSize: "13px", padding: "10px 20px" }}
                  >
                    Inquire About {service.title}
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <div style={{ background: "#f6f8f5", borderRadius: "16px", padding: "30px", border: "1px solid #e2eae4" }}>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "var(--ink)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Core Capabilities & Deliverables:
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {service.features.map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={18} color="#6fae38" style={{ marginTop: "2px", flexShrink: 0 }} />
                        <span style={{ fontSize: "13px", color: "var(--ink)", lineHeight: "1.5", fontWeight: 500 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Capabilities Section */}
      <section style={{ background: "#edf2ee", padding: "90px 4.5vw", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>Facility Strengths</p>
            <h2>Precision manufacturing <em>capabilities.</em></h2>
            <p style={{ marginTop: "14px", color: "#546863", fontSize: "15px" }}>
              Equipped with pharmaceutical-grade automated production machinery operating inside certified ISO Class 8 cleanroom environments.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {capabilities.map((cap) => (
              <div key={cap.title} className="card-panel">
                <div className="icon-box" style={{ background: "rgba(111, 174, 56, 0.15)", color: "#559024" }}>
                  <Sparkles size={24} />
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                  {cap.title}
                </h4>
                <p style={{ fontSize: "13px", color: "#546863", lineHeight: "1.6" }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="contact">
        <div className="contact-mark">S</div>
        <p className="eyebrow light">Collaborate With Us</p>
        <h2>Ready to start your <em>custom project?</em></h2>
        <p>Talk to our contract manufacturing and private label specialists to request a quote or pilot batch.</p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/contact" className="button button-light">
            Request a Service Proposal
            <ArrowRight size={17} />
          </Link>
          <Link href="/portfolio" className="button button-dark" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
            Explore Our Portfolio
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
