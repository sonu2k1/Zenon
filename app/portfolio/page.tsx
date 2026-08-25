"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, CircleGauge, Droplets, Filter, HeartPulse, Leaf, Microscope, Pill, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const portfolioCategories = [
  {
    id: "mens-health",
    title: "Men’s Health",
    shortDesc: "We specialize in a wide range of men’s wellness and health products.",
    desc: "Targeted formulations supporting vitality, testosterone optimization, cardiovascular resilience, and prostate health using clinically validated botanical extracts and bioavailable chelated minerals.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    formats: ["Softgels", "Tablets", "Effervescent"],
    keyIngredients: ["KSM-66® Ashwagandha", "Zinc Monomethionine", "Tongkat Ali Extract", "Saw Palmetto 85% Fatty Acids"],
    icon: Zap,
  },
  {
    id: "womens-health",
    title: "Women’s Health",
    shortDesc: "We deliver a range of women’s wellness products that are specifically designed for them.",
    desc: "Precision nutritional support spanning menstrual cycle balance, prenatal micronutrient methylation, bone density, dermal elasticity, and menopausal comfort.",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=80",
    formats: ["Beadlet-in-Oil Capsules", "Gummies", "Stick Packs"],
    keyIngredients: ["Quatrefolic® (5-MTHF)", "Marine Collagen Tripeptides", "Evening Primrose Oil", "Myo-Inositol & D-Chiro"],
    icon: HeartPulse,
  },
  {
    id: "kids-health",
    title: "Kid’s Health",
    shortDesc: "We take into account the specific nutrient requirement for kids.",
    desc: "Delicious, clean-label, low-sugar gummies and micro-encapsulated chewables engineered for optimal pediatric brain development, immune defense, and healthy physical growth.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80",
    formats: ["Pectin Gummies", "Chewables", "Liquid Drops"],
    keyIngredients: ["Algal DHA (Omega-3)", "Vitamin D3 + Elderberry", "Zinc Gluconate", "Prebiotic FOS"],
    icon: Sparkles,
  },
  {
    id: "sports-nutrition",
    title: "Sports Nutrition",
    shortDesc: "Our sports nutrition products are made with quality ingredients.",
    desc: "High-performance hydration, intra-workout nitric oxide precursors, and rapid muscle recovery peptides formulated for athletes and active lifestyles.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
    formats: ["Micro-granulated Powder", "Ready-to-Drink", "Capsules"],
    keyIngredients: ["L-Citrulline Malate", "Aquamin® Marine Electrolytes", "Creatine Monohydrate (Creapure®)", "Tart Cherry 50:1"],
    icon: CircleGauge,
  },
  {
    id: "medical-nutrition",
    title: "Medical Nutrition",
    shortDesc: "We bring unique, efficacious solutions to answer your nutritional needs.",
    desc: "Clinically informed clinical nutrition blends for disease-specific dietary management, sarcopenia prevention, glycemic support, and post-operative recovery.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    formats: ["Soluble Powder", "Enteric Capsules", "Oral Suspensions"],
    keyIngredients: ["Hydrolyzed Whey Peptides", "HMB Calcium", "L-Glutamine USP", "Alpha Lipoic Acid"],
    icon: Microscope,
  },
  {
    id: "phytopharma",
    title: "Phytopharma",
    shortDesc: "All products have proven to be effective in improving overall health.",
    desc: "Standardized herbal actives utilizing green solvent extraction and chromatographic finger-printing for unmatched active phytochemical purity.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80",
    formats: ["Standardized Extracts", "Softgels", "Tinctures"],
    keyIngredients: ["Curcumin C3 Complex® 95%", "Boswellia Serrata 65%", "Green Tea EGCG 98%", "Milk Thistle Silymarin"],
    icon: Leaf,
  },
  {
    id: "probiotics",
    title: "Probiotics",
    shortDesc: "All products have proven to be effective in improving overall health.",
    desc: "Spore-forming and enteric-protected synbiotic formulations designed to survive gastric acid and colonize the human gut microbiome.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
    formats: ["DRCaps® Acid Resistant", "Sachets", "Beadlets"],
    keyIngredients: ["Bacillus coagulans (2 Billion CFU)", "Bifidobacterium lactis", "PreticX® XOS", "Zinc Carnosine"],
    icon: Droplets,
  },
  {
    id: "ayurvedic",
    title: "Ayurvedic",
    shortDesc: "Our array of Ayurvedic nutrition is designed to promote balance, wellness.",
    desc: "Bridging classical 5,000-year Ayurvedic wisdom with modern clinical validation. Pure botanical rasayanas formulated for dosha equilibrium and holistic vigor.",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1000&q=80",
    formats: ["Herbal Decoctions", "Vegetarian Vcaps", "Cold-Pressed Oils"],
    keyIngredients: ["Triphala Standardized Extract", "Shilajit 50% Fulvic Acid", "Brahmi (Bacopa 50% Bacosides)", "Tulsi Bioactive Fraction"],
    icon: Pill,
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />

      {/* Subpage Hero with Full Background Image */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1920&q=85"
            alt="Botanical herbs and nutraceutical ingredients"
          />
        </div>

        <div className="subpage-hero-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Our Portfolio</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-tag-pill" style={{ backgroundColor: "rgba(56, 189, 248, 0.15)", borderColor: "rgba(56, 189, 248, 0.35)", color: "#38bdf8" }}>
              <Sparkles size={14} />
              <span>Nutraceutical Portfolio</span>
              <span className="pill-dot" style={{ backgroundColor: "#38bdf8" }} />
              <span>8 Specialized Categories</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              Formulations engineered for<br />
              <em style={{ color: "#38bdf8" }}>human vitality & longevity.</em>
            </h1>

            <p className="hero-text" style={{ maxWidth: "620px", fontSize: "16px", color: "#d1e2f2", margin: "14px 0 0" }}>
              Evidence-based nutritional ranges spanning active sports, pediatric growth, microbiome, and standardized phytopharma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="page-wrapper" style={{ paddingTop: "60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "30px" }}>
          {portfolioCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                className="card-panel"
                style={{ padding: "0", display: "flex", flexDirection: "column", overflow: "hidden" }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                variants={fade}
              >
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: "14px", left: "14px", background: "rgba(7, 30, 51, 0.85)", color: "white", padding: "6px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px", backdropFilter: "blur(6px)" }}>
                    <Icon size={14} color="#38bdf8" />
                    <span>{cat.title}</span>
                  </div>
                </div>

                <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                    {cat.title}
                  </h3>

                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#0066cc", marginBottom: "12px", lineHeight: "1.5" }}>
                    {cat.shortDesc}
                  </p>

                  <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", marginBottom: "20px" }}>
                    {cat.desc}
                  </p>

                  <div style={{ background: "#f0f7ff", padding: "12px 14px", borderRadius: "10px", fontSize: "12px", marginBottom: "20px" }}>
                    <div style={{ fontWeight: 700, color: "var(--ink)", marginBottom: "4px" }}>Key Actives:</div>
                    <div style={{ color: "#334155" }}>{cat.keyIngredients.join(", ")}</div>
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                      {cat.formats.map((fmt) => (
                        <span key={fmt} style={{ background: "rgba(0, 102, 204, 0.1)", color: "#0066cc", padding: "3px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: 600 }}>
                          {fmt}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/contact?category=${encodeURIComponent(cat.title)}`}
                      className="button button-dark"
                      style={{ width: "100%", justifyContent: "center", padding: "10px 16px", fontSize: "12px" }}
                    >
                      Request Category Catalog & Samples
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="contact">
        <div className="contact-mark">P</div>
        <p className="eyebrow light">Expand Your Product Line</p>
        <h2>Need formulation samples or <em>custom specs?</em></h2>
        <p>Our team provides laboratory testing batches and Certificates of Analysis for all portfolio categories.</p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/contact" className="button button-light">
            Contact Product Team
            <ArrowRight size={17} />
          </Link>
          <Link href="/services" className="button button-dark" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
            Explore Manufacturing Services
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
