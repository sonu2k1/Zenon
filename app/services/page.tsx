"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Factory,
  FileCheck,
  FlaskConical,
  Layers,
  Package,
  ShieldCheck,
  Sparkles,
  Tag,
  Users,
  Pill,
  Microscope,
  Check,
  Clock,
  Globe2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const serviceList = [
  {
    id: "private-label",
    title: "Private Labelling & Brand Scaling",
    stream: "Service Stream 01",
    tagline: "Turnkey formulation, bespoke flavoring & shelf-ready delivery",
    desc: "We are a leading full-service private label manufacturer. Whether you are an early-stage direct-to-consumer brand or an established multinational health enterprise, we deliver custom dosage forms, compliant labeling, and shelf-ready packaging with fast turnaround.",
    features: [
      "Custom flavor profiling & organoleptic taste masking",
      "Low Minimum Order Quantities (starting from 5,000 units)",
      "Ready-to-launch validated stock formulations",
      "Label artwork regulatory review & global barcoding",
    ],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    icon: Tag,
    badge: "Turnkey Ready",
    cta: "Request Private Label Proposal",
  },
  {
    id: "regulatory",
    title: "Global Regulatory Dossiers & Filings",
    stream: "Service Stream 02",
    tagline: "FSSAI, AYUSH, US FDA 21 CFR 111 & EFSA dossier preparation",
    desc: "Ensure seamless market entry with our in-house regulatory affairs specialists. We work directly with international health authorities to provide comprehensive documentation, stability validation, and nutritional claims compliance.",
    features: [
      "FSSAI, AYUSH, and Legal Metrology licensing support",
      "US FDA 21 CFR Part 111 cGMP documentation dossiers",
      "Free Sale Certificates (FSC) & Certificate of Analysis (CoA)",
      "Technical dossier compilation for EFSA & ASEAN filings",
    ],
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=900&q=80",
    icon: FileCheck,
    badge: "100% Compliant",
    cta: "Consult Regulatory Specialists",
  },
  {
    id: "crams",
    title: "CRAMS (Contract Research & Cleanroom Scaling)",
    stream: "Service Stream 03",
    tagline: "Class 100,000 cleanrooms, UHPLC assay testing & commercial batching",
    desc: "A trusted contract research and manufacturing partner with high-precision cleanroom facilities. From benchtop molecule synthesis to multi-ton commercial production in WHO-GMP cleanrooms, we scale your proprietary formulations with zero compromise.",
    features: [
      "Dedicated Class 100,000 pilot and commercial cleanroom suites",
      "Analytical HPLC, LC-MS/MS & dissolution testing labs",
      "ICH stability testing chambers (Zone IVb real-time & accelerated)",
      "Complete batch manufacturing records (BMR) & full traceability",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    icon: Factory,
    badge: "WHO-GMP Certified",
    cta: "Explore CRAMS Capacity",
  },
  {
    id: "packaging",
    title: "High-Barrier Packaging & Smart Delivery",
    stream: "Service Stream 04",
    tagline: "Alu-Alu blisters, nitrogen-flushed stick packs & child-resistant bottles",
    desc: "With growing consumer demands for health & wellness products, packaging aesthetics and barrier integrity are paramount. We offer pharmaceutical blister packs, HDPE bottles, stick packs, and eco-friendly recyclable cartons.",
    features: [
      "High-barrier Alu-Alu and PVC/PVDC blister packaging lines",
      "Nitrogen-flushed single-serve liquid & powder stick packs",
      "Automated bottle filling with induction foil sealing",
      "Child-resistant and senior-friendly custom closures",
    ],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
    icon: Package,
    badge: "High Barrier Protection",
    cta: "Inquire Packaging Formats",
  },
];

const turnkeySteps = [
  {
    step: "01",
    title: "Discovery & Target Profiling",
    desc: "Ingredient selection, active standardization, and feasibility mapping.",
  },
  {
    step: "02",
    title: "Bioavailability & Formulation",
    desc: "Organoleptic testing, pilot batches, and real-time dissolution assays.",
  },
  {
    step: "03",
    title: "Cleanroom Commercial Scaling",
    desc: "Automated Class 100,000 cleanroom production with zero cross-contamination.",
  },
  {
    step: "04",
    title: "Packaging & Global Dispatch",
    desc: "High-barrier sealing, certified CoAs, and expedited international export.",
  },
];

const capabilities = [
  {
    title: "Softgel Encapsulation",
    desc: "Automated nitrogen-blanketed rotary die encapsulation for fat-soluble vitamins, CoQ10, and algal oils.",
    icon: Pill,
  },
  {
    title: "DRCaps® Enteric Pellets",
    desc: "Delayed release acid-resistant capsules for targeted intestinal delivery of live probiotics and enzymes.",
    icon: Sparkles,
  },
  {
    title: "Effervescent & Soluble Powders",
    desc: "High-speed moisture-controlled cleanrooms for instant hydration and effervescent delivery formats.",
    icon: FlaskConical,
  },
  {
    title: "Pectin & Vegan Gummies",
    desc: "Mogul-line starch-free depositing for sugar-free, gelatin-free nutraceutical gummy supplements.",
    icon: Award,
  },
  {
    title: "Liquid Drops & Herbal Syrups",
    desc: "Ultrasonic extraction, amber glass packaging, and calibrated droppers for high-potency herbal actives.",
    icon: Microscope,
  },
  {
    title: "Protein Blends & Micro-Milling",
    desc: "Instantized whey isolates, plant proteins, and micronized creatine with seamless powder dispersion.",
    icon: Boxes,
  },
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
            <div
              className="hero-tag-pill"
              style={{
                backgroundColor: "rgba(124, 168, 50, 0.15)",
                borderColor: "rgba(124, 168, 50, 0.35)",
                color: "#a3e635",
              }}
            >
              <Layers size={14} />
              <span>Varadaco Full-Service Manufacturing</span>
              <span className="pill-dot" style={{ backgroundColor: "#7CA832" }} />
              <span>Concept to Shelf</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              End-to-end solutions for<br />
              <em style={{ color: "#7CA832" }}>global health leaders.</em>
            </h1>

            <p
              className="hero-text"
              style={{
                maxWidth: "640px",
                fontSize: "16.5px",
                color: "#FAF8F5",
                fontWeight: 500,
                margin: "14px 0 24px",
                lineHeight: "1.7",
              }}
            >
              From private labelling and turnkey batch scaling to international regulatory dossiers and high-barrier smart packaging.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  padding: "8px 14px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  color: "#ffffff",
                  fontWeight: 600,
                }}
              >
                <ShieldCheck size={16} color="#7CA832" />
                WHO-GMP Cleanrooms
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  padding: "8px 14px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  color: "#ffffff",
                  fontWeight: 600,
                }}
              >
                <Sparkles size={16} color="#7CA832" />
                500+ Formulations Scaled
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  padding: "8px 14px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  color: "#ffffff",
                  fontWeight: 600,
                }}
              >
                <Globe2 size={16} color="#7CA832" />
                30+ Export Markets
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed List (Well-Organized Alternating Cards) */}
      <section className="services-container">
        {serviceList.map((service, idx) => {
          const Icon = service.icon;
          const isEven = idx % 2 === 1;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`service-detail-card ${isEven ? "reverse" : ""}`}
            >
              {/* Image Container with Fixed Dimensions and Badge */}
              <div className="service-detail-img">
                <img src={service.image} alt={service.title} />
                <div className="service-detail-badge">
                  <Icon size={16} color="#7CA832" />
                  <span>{service.badge}</span>
                </div>
              </div>

              {/* Content Block */}
              <div className="service-detail-content">
                <span className="service-stream-tag">{service.stream}</span>
                <h3>{service.title}</h3>
                <p className="service-tagline">{service.tagline}</p>
                <p className="service-desc">{service.desc}</p>

                <h4 className="service-deliverables-title">Core Capabilities & Deliverables:</h4>
                <div className="service-deliverables-grid">
                  {service.features.map((feat) => (
                    <div key={feat} className="service-deliverable-item">
                      <CheckCircle2 size={17} color="#15803D" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="button button-dark"
                    style={{
                      background: "#15803D",
                      borderColor: "#15803D",
                      fontWeight: 800,
                      padding: "13px 24px",
                      fontSize: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {service.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Turnkey Process Workflow (How We Partner) */}
      <section
        style={{
          background: "linear-gradient(135deg, #F0F4EF 0%, #F5F8F3 50%, #FAF8F5 100%)",
          padding: "90px 5vw",
          borderTop: "1px solid #E2E8DF",
          borderBottom: "1px solid #E2E8DF",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 55px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Turnkey Production Lifecycle
            </p>
            <h2 style={{ fontSize: "clamp(2.4rem, 3.8vw, 3.2rem)", fontWeight: 900, color: "#1E251F" }}>
              How we take your product to <em>commercial scale.</em>
            </h2>
            <p style={{ marginTop: "14px", color: "#475569", fontSize: "16px", fontWeight: 500 }}>
              A disciplined, stage-gated manufacturing framework engineered to deliver pharmaceutical consistency with rapid time-to-market.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {turnkeySteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #E2E8DF",
                  borderRadius: "20px",
                  padding: "30px 24px",
                  boxShadow: "0 10px 28px rgba(13, 38, 25, 0.05)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "32px",
                      fontWeight: 900,
                      color: "#15803D",
                      fontFamily: "Georgia, serif",
                      display: "block",
                      marginBottom: "12px",
                    }}
                  >
                    {step.step}
                  </span>
                  <h4 style={{ fontSize: "18px", fontWeight: 800, color: "#1E251F", marginBottom: "8px" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.6" }}>
                    {step.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#7CA832",
                  }}
                >
                  <Check size={14} />
                  <span>Quality Validated</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section (6 Delivery Formats Grid) */}
      <section style={{ background: "#FAF8F5", padding: "100px 4.5vw" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 55px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Delivery Formats & Capabilities
            </p>
            <h2 style={{ fontSize: "clamp(2.4rem, 3.8vw, 3.2rem)", fontWeight: 900, color: "#1E251F" }}>
              Precision manufacturing <em>delivery formats.</em>
            </h2>
            <p style={{ marginTop: "14px", color: "#475569", fontSize: "16px", fontWeight: 500 }}>
              Equipped with pharmaceutical-grade automated production machinery operating inside certified ISO Class 8 cleanrooms.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {capabilities.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  className="card-panel"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid #E2E8DF",
                    borderRadius: "20px",
                    padding: "32px 26px",
                    boxShadow: "0 10px 25px rgba(13, 38, 25, 0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(21, 128, 61, 0.1)",
                      color: "#15803D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <CapIcon size={24} />
                  </div>
                  <h4 style={{ fontSize: "19px", fontWeight: 800, color: "#1E251F", marginBottom: "8px" }}>
                    {cap.title}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
                    {cap.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="contact">
        <div className="contact-mark">V</div>
        <p className="eyebrow light">Collaborate With Varadaco</p>
        <h2>
          Ready to engineer your <em>next breakthrough?</em>
        </h2>
        <p style={{ maxWidth: "580px", margin: "14px auto 32px" }}>
          Talk to our contract manufacturing and private label specialists to request technical documentation, formulation feasibility, or pilot batches.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/contact" className="button button-light" style={{ fontWeight: 800 }}>
            Request a Service Proposal
            <ArrowRight size={17} />
          </Link>
          <Link
            href="/portfolio"
            className="button button-dark"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              fontWeight: 800,
            }}
          >
            Explore Our Portfolio
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
