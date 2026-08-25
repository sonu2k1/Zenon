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
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    icon: Tag,
    color: "#0066cc",
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
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80",
    icon: FileCheck,
    color: "#0284c7",
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    icon: Factory,
    color: "#2563eb",
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
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",
    icon: Package,
    color: "#0284c7",
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

      {/* Subpage Hero with Full Background Image */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=85"
            alt="Pharmaceutical formulation laboratory and cleanroom manufacturing"
          />
        </div>

        <div className="subpage-hero-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Our Services</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-tag-pill" style={{ backgroundColor: "rgba(56, 189, 248, 0.15)", borderColor: "rgba(56, 189, 248, 0.35)", color: "#38bdf8" }}>
              <Layers size={14} />
              <span>Full-Service Contract Manufacturing</span>
              <span className="pill-dot" style={{ backgroundColor: "#38bdf8" }} />
              <span>Concept to Shelf</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              End-to-end solutions for<br />
              <em style={{ color: "#38bdf8" }}>global health leaders.</em>
            </h1>

            <p className="hero-text" style={{ maxWidth: "620px", fontSize: "16px", color: "#d1e2f2", margin: "14px 0 0" }}>
              Private labelling, WHO-GMP CRAMS manufacturing, regulatory dossiers, and smart dosage packaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="page-wrapper" style={{ paddingTop: "60px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {serviceList.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`service-detail-card ${isEven ? "reverse" : ""}`}
              >
                <div className="service-detail-img">
                  <img src={service.image} alt={service.title} />
                  <div className="service-detail-badge">
                    <Icon size={16} />
                    <span>0{idx + 1}</span>
                  </div>
                </div>

                <div className="service-detail-content">
                  <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0066cc" }}>
                    Service Stream 0{idx + 1}
                  </span>
                  <h3 style={{ fontSize: "28px", fontWeight: 700, color: "var(--ink)", margin: "8px 0 12px" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.65", marginBottom: "20px" }}>
                    {service.desc}
                  </p>

                  <h4 style={{ fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", marginBottom: "14px" }}>
                    Core Capabilities & Deliverables:
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {service.features.map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={18} color="#0066cc" style={{ marginTop: "2px", flexShrink: 0 }} />
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
      <section style={{ background: "#f0f7ff", padding: "90px 4.5vw", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>Facility Strengths</p>
            <h2>Precision manufacturing <em>capabilities.</em></h2>
            <p style={{ marginTop: "14px", color: "#475569", fontSize: "15px" }}>
              Equipped with pharmaceutical-grade automated production machinery operating inside certified ISO Class 8 cleanroom environments.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="card-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <div className="icon-box" style={{ background: "rgba(0, 102, 204, 0.12)", color: "#0066cc" }}>
                  <Sparkles size={24} />
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                  {cap.title}
                </h4>
                <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6" }}>
                  {cap.desc}
                </p>
              </motion.div>
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
