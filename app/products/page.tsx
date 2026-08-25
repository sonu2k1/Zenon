"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, CircleGauge, Droplets, Filter, FlaskConical, HeartPulse, Layers, Leaf, Microscope, Package, Pill, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", label: "All Categories" },
  { id: "sports", label: "Sports & Performance" },
  { id: "women", label: "Women's Wellness" },
  { id: "gut", label: "Gut & Microbiome" },
  { id: "medical", label: "Medical Nutrition" },
  { id: "botanical", label: "Botanical Extracts" },
  { id: "longevity", label: "Longevity & Cellular" },
];

const productList = [
  {
    id: "prod-1",
    category: "sports",
    title: "Hydro-Electrolyte & Intra-Workout Complex",
    tagline: "Cellular hydration & muscle fatigue recovery",
    formats: ["Effervescent Tabs", "Micro-granulated Powder"],
    keyActives: "Aquamin® Marine Minerals, L-Citrulline Malate, Tart Cherry Extract",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    badge: "Fast Dissolution",
    icon: CircleGauge,
  },
  {
    id: "prod-2",
    category: "women",
    title: "Liposomal Prenatal & Bioactive Folate",
    tagline: "Gentle iron & active methylated micronutrients",
    formats: ["Beadlet-in-Oil Capsule", "Liquid Drops"],
    keyActives: "Quatrefolic® (5-MTHF), SunActive® Fe, DHA Algal Oil",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=900&q=80",
    badge: "Non-Nausea Formula",
    icon: HeartPulse,
  },
  {
    id: "prod-3",
    category: "gut",
    title: "Synbiotic Spore-Forming Probiotic + PreticX",
    tagline: "Enteric targeted release for colonic microbiome flora",
    formats: ["Delayed Release DRCaps®", "Sachets"],
    keyActives: "Bacillus coagulans, Bacillus subtilis, XOS Prebiotic, Zinc Carnosine",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    badge: "Room Temp Stable",
    icon: Leaf,
  },
  {
    id: "prod-4",
    category: "medical",
    title: "Clinical Sarcopenia & Whey Isolate Peptide Blend",
    tagline: "High-leucine recovery nutrition for clinical support",
    formats: ["Ready-to-Drink Suspension", "Soluble Powder"],
    keyActives: "Hydrolyzed Whey Peptides, HMB (Beta-hydroxy), Vitamin D3+K2",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    badge: "Clinical Assay",
    icon: Microscope,
  },
  {
    id: "prod-5",
    category: "botanical",
    title: "Full-Spectrum Ashwagandha (KSM-66) + Saffron",
    tagline: "Standardized withanolide complex for stress response & sleep",
    formats: ["Softgels", "Pectin Gummies"],
    keyActives: "KSM-66® Ashwagandha (5% Withanolides), Affron® Saffron Extract",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80",
    badge: "Standardized >5%",
    icon: Sparkles,
  },
  {
    id: "prod-6",
    category: "longevity",
    title: "NAD+ Precursor NMN + Liposomal Resveratrol",
    tagline: "Cellular mitochondrial energy & sirtuin pathway activator",
    formats: ["Sublingual Strips", "Liquid Softgels"],
    keyActives: "Ultra-pure Beta-NMN 99.8%, Liposomal Trans-Resveratrol, Piperine",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    badge: "Bio-Enhanced",
    icon: Zap,
  },
  {
    id: "prod-7",
    category: "sports",
    title: "Nitric Oxide Bio-Precursor Matrix",
    tagline: "Vasodilation & mitochondrial oxygenation system",
    formats: ["Shot Bottles", "Powder"],
    keyActives: "Red Beet Root Nitrate (10%), S7® Plant Polyphenols, Citrulline",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=900&q=80",
    badge: "Pump & Stamina",
    icon: CircleGauge,
  },
  {
    id: "prod-8",
    category: "women",
    title: "Collagen Tripeptide & Phytoceramide Radiance",
    tagline: "Low molecular weight dermal elasticity peptides",
    formats: ["Liquid Stick Packs", "Gummies"],
    keyActives: "Korean Fish Collagen Tripeptides (CTP 500Da), Rice Ceramides, Hyaluronic Acid",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    badge: "500 Da Absorption",
    icon: HeartPulse,
  },
];

const dosageFormats = [
  { title: "Softgel Encapsulation", desc: "Nitrogen-blanketed encapsulation for sensitive oils, omega fatty acids, and fat-soluble antioxidants.", icon: Droplets },
  { title: "DRCaps® & Enteric Capsules", desc: "Acid-resistant technology ensuring probiotics and enzymes survive stomach acid for targeted intestinal delivery.", icon: Pill },
  { title: "Micro-Pellet / Beadlet Tech", desc: "Dual-phase sustained release with visual floating beads in translucent liquid capsules.", icon: Layers },
  { title: "Pectin & Agar Gummies", desc: "Clean-label, gelatin-free, zero-sugar gummy confection with standardized active vitamin dispersion.", icon: Sparkles },
  { title: "Effervescent & Soluble Powders", desc: "Rapid dissolution with calibrated citric buffers, pleasant natural flavor systems, and zero chalky residue.", icon: Zap },
  { title: "Liquid Suspensions & Liposomes", desc: "Sub-micron phospholipid vesicles protecting delicate biomolecules from enzymatic degradation.", icon: FlaskConical },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all"
    ? productList
    : productList.filter((p) => p.category === selectedCategory);

  return (
    <main>
      <Navbar />

      {/* Subpage Hero with Full Background Image */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=1920&q=85"
            alt="Nutraceutical softgels and pharmaceutical capsules"
          />
        </div>

        <div className="subpage-hero-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Products & Formulations</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-tag-pill" style={{ backgroundColor: "rgba(56, 189, 248, 0.15)", borderColor: "rgba(56, 189, 248, 0.35)", color: "#38bdf8" }}>
              <Package size={14} />
              <span>Catalog & Capabilities</span>
              <span className="pill-dot" style={{ backgroundColor: "#38bdf8" }} />
              <span>500+ Market Ready Formulas</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              Engineered for efficacy.<br />
              <em style={{ color: "#38bdf8" }}>Formulated for market leaders.</em>
            </h1>

            <p className="hero-text" style={{ maxWidth: "620px", fontSize: "16px", color: "#d1e2f2", margin: "14px 0 0" }}>
              Turnkey clinical formulations, targeted delivery systems, and patent-protected custom nutraceuticals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid var(--line)", padding: "18px 4.5vw", position: "sticky", top: "76px", zIndex: 40, backdropFilter: "blur(12px)", backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "10px", overflowX: "auto", paddingBottom: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--ink)", fontWeight: 700, fontSize: "13px", marginRight: "8px" }}>
            <Filter size={15} color="#0066cc" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  border: isActive ? "1px solid #0066cc" : "1px solid #e2e8f0",
                  backgroundColor: isActive ? "#0066cc" : "#f8fafc",
                  color: isActive ? "#ffffff" : "#475569",
                  transition: "all 0.2s ease",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section className="page-wrapper" style={{ paddingTop: "50px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "28px" }}>
            Showing <em>{filteredProducts.length} product formulations</em>
          </h2>
          <span style={{ fontSize: "13px", color: "#647772" }}>
            White-label ready & customizable
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "30px" }}>
          <AnimatePresence>
            {filteredProducts.map((prod, i) => {
              const Icon = prod.icon;
              return (
                <motion.div
                  key={prod.id}
                  className="card-panel"
                  style={{ padding: "0", display: "flex", flexDirection: "column", overflow: "hidden" }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", top: "14px", right: "14px", background: "rgba(7, 21, 38, 0.9)", color: "white", border: "1px solid rgba(56, 189, 248, 0.3)", padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", backdropFilter: "blur(6px)" }}>
                      {prod.badge}
                    </div>
                  </div>

                  <div style={{ padding: "26px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066cc", marginBottom: "8px" }}>
                      <Icon size={18} />
                      <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {prod.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px", lineHeight: "1.3" }}>
                      {prod.title}
                    </h3>

                    <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", marginBottom: "16px" }}>
                      {prod.tagline}
                    </p>

                    <div style={{ background: "#f0f7ff", border: "1px solid #dbeafe", padding: "12px 14px", borderRadius: "10px", fontSize: "12px", marginBottom: "18px" }}>
                      <div style={{ fontWeight: 700, color: "var(--ink)", marginBottom: "4px" }}>Key Actives:</div>
                      <div style={{ color: "#0066cc", fontWeight: 600 }}>{prod.keyActives}</div>
                    </div>

                    <div style={{ marginTop: "auto" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                        {prod.formats.map((fmt) => (
                          <span key={fmt} style={{ background: "rgba(0, 102, 204, 0.08)", color: "#0066cc", padding: "3px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: 700 }}>
                            {fmt}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/contact?inquiry=product&item=${encodeURIComponent(prod.title)}`}
                        className="button button-dark"
                        style={{ width: "100%", justifyContent: "center", padding: "10px 16px", fontSize: "12px" }}
                      >
                        Request Sample & Tech Spec
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Dosage Delivery Technologies */}
      <section style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 50%, #f8fafc 100%)", padding: "90px 4.5vw", borderTop: "1px solid #d0e1f9", borderBottom: "1px solid #d0e1f9" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 50px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>Delivery Science</p>
            <h2>Advanced dosage <em>delivery systems.</em></h2>
            <p style={{ marginTop: "14px", color: "#475569", fontSize: "16px", lineHeight: "1.7" }}>
              Bioavailability is everything. We engineer proprietary formats to ensure maximum active stability, stomach survival, and targeted cellular uptake.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {dosageFormats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="card-panel"
                  style={{ border: "1.5px solid #dbeafe", boxShadow: "0 4px 18px rgba(0, 102, 204, 0.05)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="icon-box" style={{ background: "rgba(0, 102, 204, 0.1)", color: "#0066cc" }}>
                    <Icon size={24} />
                  </div>
                  <h4 style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Formulation CTA */}
      <section className="contact">
        <div className="contact-mark">N</div>
        <p className="eyebrow light">Custom Formulation Lab</p>
        <h2>Need a custom proprietary <em>formulation?</em></h2>
        <p>Our formulation scientists can create custom blends tailored to your exact active dosage, flavor profile, and target market regulations.</p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/contact?type=custom" className="button button-light">
            Start Custom Formulation
            <ArrowRight size={17} />
          </Link>
          <Link href="/rnd" className="button button-dark" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
            Explore Our R&D Lab
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
