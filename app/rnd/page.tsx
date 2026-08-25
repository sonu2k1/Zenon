"use client";
import { motion } from "framer-motion";
import { Atom, Beaker, Check, CheckCircle2, ChevronRight, Dna, FileText, FlaskConical, Gauge, Microscope, ShieldCheck, Sparkles, TestTubes } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const phases = [
  {
    step: "01",
    title: "Molecular Discovery & Target Identification",
    desc: "Computational modeling to identify synergistic bioactive interactions and optimize ligand affinity before entering bench trials.",
    icon: Atom,
  },
  {
    step: "02",
    title: "Bioavailability Matrix Optimization",
    desc: "Micro-encapsulation, liposomal lipid bilayer creation, or cyclodextrin complexation to protect actives from premature metabolic degradation.",
    icon: FlaskConical,
  },
  {
    step: "03",
    title: "In-Vitro Dissolution & Clinical Assays",
    desc: "Simulated gastric and intestinal fluid testing (USP Dissolution Apparatus) to verify release kinetics, absorption rates, and cellular uptake.",
    icon: Microscope,
  },
  {
    step: "04",
    title: "Accelerated Stability & Scaling",
    desc: "ICH-compliant stability chambers (Zone IVb conditions) to prove a 24-36 month shelf life under varying temperature and humidity profiles.",
    icon: TestTubes,
  },
];

const labEquipment = [
  { title: "HPLC & UHPLC-MS/MS", desc: "Ultra-high performance liquid chromatography with tandem mass spectrometry for accurate bioactive quantification and contaminant screening.", icon: Gauge },
  { title: "USP Automated Dissolution Testers", desc: "Multi-vessel real-time spectrophotometric dissolution testing to ensure targeted enteric release within narrow GI transit windows.", icon: Beaker },
  { title: "Particle Size & Zeta Potential Analyzers", desc: "Laser diffraction nano-sizing down to 20nm for colloidal emulsions and liposomal suspension stability verification.", icon: Dna },
  { title: "Accelerated ICH Stability Chambers", desc: "Automated climate-controlled chambers operating at 40°C / 75% RH for stability forecasting and shelf-life certification.", icon: ShieldCheck },
];

const whitepapers = [
  {
    title: "Enhancing Curcuminoid Bioavailability via Self-Emulsifying Drug Delivery Systems (SEDDS)",
    date: "Published Q4 2025",
    pages: "24 Pages",
    tag: "Bioavailability",
  },
  {
    title: "Clinical Efficacy of Spore-Forming Bacillus Coagulans on Intestinal Mucosal Barrier Integrity",
    date: "Published Q2 2025",
    pages: "18 Pages",
    tag: "Microbiome",
  },
  {
    title: "Comparative Cellular Uptake of Low Molecular Weight (500Da) Fish Collagen Tripeptides",
    date: "Published Q1 2026",
    pages: "32 Pages",
    tag: "Peptide Science",
  },
];

export default function RndPage() {
  return (
    <main>
      <Navbar />

      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Research & Development</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-tag-pill" style={{ backgroundColor: "rgba(2, 132, 199, 0.1)", borderColor: "rgba(2, 132, 199, 0.25)", color: "#0284c7" }}>
              <Microscope size={14} />
              <span>Clinical R&D Hub</span>
              <span className="pill-dot" style={{ backgroundColor: "#0284c7" }} />
              <span>Evidence-Led Science</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              Translating molecular biology into<br />
              <em style={{ color: "#0284c7" }}>clinical nutrition.</em>
            </h1>

            <p className="hero-text" style={{ maxWidth: "680px", fontSize: "17px", lineHeight: "1.7" }}>
              Our dedicated research laboratories combine pharmaceutical discipline with nutraceutical innovation. We solve complex formulation challenges: poor solubility, low bioavailability, and active degradation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4-Step R&D Lifecycle */}
      <section className="page-wrapper" style={{ paddingTop: "60px" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>Formulation Lifecycle</p>
          <h2>Our 4-phase clinical R&D <em>framework.</em></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {phases.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.step}
                className="card-panel"
                style={{ position: "relative" }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                variants={fade}
              >
                <div style={{ fontSize: "32px", fontWeight: 900, color: "rgba(2, 132, 199, 0.2)", position: "absolute", top: "20px", right: "24px" }}>
                  {p.step}
                </div>
                <div className="icon-box" style={{ background: "rgba(2, 132, 199, 0.1)", color: "#0284c7" }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", marginBottom: "10px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#546863", lineHeight: "1.6" }}>
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Deep Dive Science Feature */}
      <section style={{ background: "#edf2ee", padding: "90px 4.5vw", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "50px", alignItems: "center" }}>
          <div>
            <p className="eyebrow">Bioavailability Engineering</p>
            <h2>Overcoming the gut-blood <em>barrier.</em></h2>
            <p style={{ color: "#546863", fontSize: "16px", lineHeight: "1.7", margin: "20px 0 24px" }}>
              Most active botanicals (such as curcumin, quercetin, and resveratrol) suffer from less than 1-2% baseline bioavailability due to gastric degradation and rapid hepatic first-pass metabolism.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "30px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 color="#0284c7" size={20} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "var(--ink)" }}><strong>Liposomal Micro-Vesicles:</strong> Protects hydrophilic and lipophilic actives with biomimetic phospholipid bilayer membranes.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 color="#0284c7" size={20} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "var(--ink)" }}><strong>DRCaps® Gastric Acid Bypass:</strong> Guarantees zero release in the stomach (pH 1.2) with complete dissolution in the duodenum (pH 6.8).</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 color="#0284c7" size={20} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "var(--ink)" }}><strong>Self-Emulsifying Nano-Suspensions:</strong> Up to 12.5x greater plasma concentration verified via HPLC blood serum analysis.</span>
              </div>
            </div>

            <Link href="/contact?inquiry=rnd" className="button button-dark">
              Request Clinical Trial Data
              <ArrowRight size={17} />
            </Link>
          </div>

          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: "0 16px 40px rgba(16, 47, 53, 0.12)" }}>
            <img
              src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=85"
              alt="High precision laboratory analysis"
              style={{ width: "100%", height: "480px", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", background: "rgba(16, 47, 53, 0.9)", color: "white", padding: "20px", borderRadius: "16px", backdropFilter: "blur(10px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <Beaker size={18} color="#38bdf8" />
                <strong style={{ fontSize: "15px" }}>Novara BioMatrix™ Technology</strong>
              </div>
              <p style={{ fontSize: "12px", color: "#b8d1cb", margin: 0 }}>
                12.5x higher area-under-the-curve (AUC) bioavailability compared to unformulated reference standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Instrumentation */}
      <section className="page-wrapper">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>Instrumentation & Rigor</p>
          <h2>Analytical testing <em>infrastructure.</em></h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {labEquipment.map((eq, i) => {
            const Icon = eq.icon;
            return (
              <div key={eq.title} className="card-panel">
                <div className="icon-box" style={{ background: "rgba(2, 132, 199, 0.1)", color: "#0284c7" }}>
                  <Icon size={24} />
                </div>
                <h4 style={{ fontSize: "17px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                  {eq.title}
                </h4>
                <p style={{ fontSize: "13px", color: "#546863", lineHeight: "1.6" }}>
                  {eq.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Published Whitepapers / Research */}
      <section style={{ background: "#edf2ee", padding: "80px 4.5vw", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "40px" }}>
            <div>
              <p className="eyebrow">Scientific Publications</p>
              <h2>Recent research <em>whitepapers.</em></h2>
            </div>
            <Link href="/contact?inquiry=whitepaper" className="text-link">
              Request full research access <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {whitepapers.map((doc, idx) => (
              <div
                key={doc.title}
                className="card-panel"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", padding: "24px 30px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(2, 132, 199, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0284c7", flexShrink: 0 }}>
                    <FileText size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#0284c7", letterSpacing: "0.05em" }}>
                      {doc.tag} • {doc.date}
                    </span>
                    <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--ink)", marginTop: "2px" }}>
                      {doc.title}
                    </h4>
                  </div>
                </div>
                <Link
                  href={`/contact?inquiry=whitepaper&title=${encodeURIComponent(doc.title)}`}
                  className="button button-dark"
                  style={{ padding: "8px 18px", fontSize: "12px" }}
                >
                  Download PDF
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="contact">
        <div className="contact-mark">R</div>
        <p className="eyebrow light">Scientific Collaboration</p>
        <h2>Have a clinical hypothesis to <em>validate?</em></h2>
        <p>Partner with our Ph.D. biochemists and formulation pharmacists to bring your clinical concept to life.</p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/contact" className="button button-light">
            Book an R&D Consultation
            <ArrowRight size={17} />
          </Link>
          <Link href="/products" className="button button-dark" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
            View Finished Formulations
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
