"use client";
import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, ChevronRight, Compass, Eye, Globe2, HeartHandshake, Lightbulb, MapPin, Medal, Microscope, PackageCheck, ShieldCheck, Sparkles, Target, Trophy, Users, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClientsSection, CertificationsSection } from "@/components/TrustSections";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const awards = [
  {
    year: "2025",
    title: "Excellence in Contract Manufacturing",
    issuer: "Global Nutraceutical & Life Sciences Forum",
    desc: "Awarded for exceptional batch uniformity, automated cleanroom scaling, and zero-defect quality control across 500+ formulations.",
    badge: "Winner 2025",
    color: "#2b5292",
  },
  {
    year: "2024",
    title: "Best Bioavailability Innovation Award",
    issuer: "CPhI World Formulation Summit",
    desc: "Recognized for breakthrough research in self-emulsifying liposomal delivery and targeted enteric acid-resistant capsule technology.",
    badge: "Gold Trophy",
    color: "#6fae38",
  },
  {
    year: "2024",
    title: "Top Global Health Science Exporter",
    issuer: "International Trade & Commerce Council",
    desc: "Honoring consistent export quality, regulatory dossier approval speed, and supply chain reliability across 30+ international markets.",
    badge: "Global Honor",
    color: "#d97706",
  },
  {
    year: "2023",
    title: "National WHO-GMP Quality Benchmark",
    issuer: "Pharmaceutical Standards Confederation",
    desc: "Certified for maintaining strict adherence to Class 100,000 cleanroom environments, ICH stability assays, and ISO 22000 hygiene standards.",
    badge: "Excellence Mark",
    color: "#7c3aed",
  },
];

const globalRegions = [
  {
    region: "North America",
    countries: "United States, Canada",
    focus: "Dietary Supplements, Sports Performance, Active Peptides",
    stat: "12+ Partner Brands",
  },
  {
    region: "Europe & UK",
    countries: "Switzerland, Germany, United Kingdom, Netherlands",
    focus: "Clinical Microbiome Blends, Botanical Extracts, Clean-label Gummies",
    stat: "18+ Partner Brands",
  },
  {
    region: "Asia Pacific",
    countries: "India, Japan, Singapore, Australia, Vietnam",
    focus: "Ayurvedic Nutrition, Women's Health, Effervescent Electrolytes",
    stat: "40+ Partner Brands",
  },
  {
    region: "Middle East & Africa",
    countries: "UAE, Saudi Arabia, South Africa, Egypt",
    focus: "Immunity Boosters, Halal Certified Nutrition, Micronutrient Drops",
    stat: "15+ Partner Brands",
  },
];

const values = [
  {
    icon: Microscope,
    title: "Evidence-Led Formulation",
    desc: "Every single formulation, active concentration, and mineral chelate is guided by peer-reviewed clinical studies and pharmacokinetic validation.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Compromise Purity",
    desc: "Comprehensive UHPLC-MS/MS chromatography assays for heavy metal clearance, botanical active assay standardization, and microbial sterility.",
  },
  {
    icon: Globe2,
    title: "Global Regulatory Integrity",
    desc: "Formulations engineered from ground zero to meet stringent FDA, EFSA, FSSAI, AYUSH, and international health authority guidelines.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Partnership",
    desc: "We act as an agile, dedicated extension of your brand’s science, R&D, and supply chain teams from early bench concepts to commercial scale.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Subpage Hero with Full Background Image */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=85"
            alt="WHO-GMP Cleanroom pharmaceutical facility"
          />
        </div>

        <div className="subpage-hero-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>About Us</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-tag-pill" style={{ backgroundColor: "rgba(111, 174, 56, 0.2)", borderColor: "rgba(111, 174, 56, 0.4)", color: "#74d4c0" }}>
              <Users size={14} />
              <span>About Novara Life Sciences</span>
              <span className="pill-dot" style={{ backgroundColor: "#74d4c0" }} />
              <span>Since 2004</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              Pioneering science-led<br />
              <em style={{ color: "#74d4c0" }}>health & nutraceuticals.</em>
            </h1>

            <p className="hero-text" style={{ maxWidth: "620px", fontSize: "16px", color: "#b8d1cb", margin: "14px 0 0" }}>
              Two decades of excellence in evidence-based formulations, molecular bioavailability, and global WHO-GMP manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. WHO ARE WE? */}
      <section className="page-wrapper" id="who-we-are" style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "50px", alignItems: "center" }}>
          <div>
            <p className="eyebrow">1. Introduction</p>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3rem)", marginBottom: "20px" }}>
              WHO ARE <em>WE?</em>
            </h2>
            <p style={{ color: "#546863", fontSize: "16px", lineHeight: "1.75", marginBottom: "18px" }}>
              Novara Life Sciences is a full-service pharmaceutical-grade contract manufacturer and formulation innovator. Founded in 2004, we have dedicated over two decades to decoding the relationship between bioavailable phytonutrients, micro-encapsulated actives, and human cellular vitality.
            </p>
            <p style={{ color: "#546863", fontSize: "15px", lineHeight: "1.75", marginBottom: "26px" }}>
              From initial molecular formulation, organoleptic sensory optimization, and clinical assay testing to high-speed WHO-GMP cleanroom packaging, we empower the world’s leading healthcare brands to bring safe, compliant, and efficacious products to market.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginBottom: "30px" }}>
              <div style={{ background: "#f6f8f5", padding: "16px 20px", borderRadius: "12px", border: "1px solid #e0eae3" }}>
                <strong style={{ display: "block", fontSize: "28px", color: "var(--ink)", fontWeight: 900 }}>20+</strong>
                <span style={{ fontSize: "12px", color: "#647772", fontWeight: 600 }}>Years of Innovation</span>
              </div>
              <div style={{ background: "#f6f8f5", padding: "16px 20px", borderRadius: "12px", border: "1px solid #e0eae3" }}>
                <strong style={{ display: "block", fontSize: "28px", color: "#6fae38", fontWeight: 900 }}>500+</strong>
                <span style={{ fontSize: "12px", color: "#647772", fontWeight: 600 }}>Proven Formulations</span>
              </div>
              <div style={{ background: "#f6f8f5", padding: "16px 20px", borderRadius: "12px", border: "1px solid #e0eae3" }}>
                <strong style={{ display: "block", fontSize: "28px", color: "#2b5292", fontWeight: 900 }}>30+</strong>
                <span style={{ fontSize: "12px", color: "#647772", fontWeight: 600 }}>Countries Exported</span>
              </div>
              <div style={{ background: "#f6f8f5", padding: "16px 20px", borderRadius: "12px", border: "1px solid #e0eae3" }}>
                <strong style={{ display: "block", fontSize: "28px", color: "var(--ink)", fontWeight: 900 }}>100+</strong>
                <span style={{ fontSize: "12px", color: "#647772", fontWeight: 600 }}>Global Brand Clients</span>
              </div>
            </div>

            <Link href="/services" className="button button-dark">
              Explore Our Capabilities
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: "0 16px 40px rgba(16, 47, 53, 0.12)" }}>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"
              alt="High-tech life sciences manufacturing facility"
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", background: "rgba(16, 47, 53, 0.92)", color: "white", padding: "20px 24px", borderRadius: "16px", backdropFilter: "blur(10px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <ShieldCheck size={20} color="#6fae38" />
                <strong style={{ fontSize: "16px" }}>WHO-GMP & ISO 22000 Certified Plant</strong>
              </div>
              <p style={{ fontSize: "12px", color: "#b8d1cb", margin: 0, lineHeight: "1.5" }}>
                Operating automated continuous rotary die softgel encapsulation, acid-resistant capsule lines, and computerized batch traceability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR VALUABLE CLIENTS */}
      <ClientsSection />

      {/* 3. CERTIFICATIONS */}
      <CertificationsSection />

      {/* 4. AWARDS */}
      <section className="page-wrapper" id="awards" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 50px" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>4. Recognition & Honors</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3rem)" }}>
            HONORS & <em>AWARDS</em>
          </h2>
          <div className="trust-underline" />
          <p style={{ color: "#546863", fontSize: "15px", marginTop: "16px", lineHeight: "1.6" }}>
            Our relentless commitment to clinical quality, advanced bioavailability delivery, and regulatory compliance has been recognized across global industry forums.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {awards.map((award, idx) => (
            <motion.div
              key={award.title}
              className="card-panel"
              style={{ display: "flex", flexDirection: "column", position: "relative" }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              variants={fade}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: `${award.color}15`, color: award.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Trophy size={22} />
                </div>
                <span style={{ fontSize: "11px", fontWeight: 800, background: `${award.color}12`, color: award.color, padding: "4px 10px", borderRadius: "100px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  {award.badge}
                </span>
              </div>

              <div style={{ fontSize: "13px", fontWeight: 800, color: award.color, marginBottom: "4px" }}>
                {award.year} • {award.issuer}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", marginBottom: "10px", lineHeight: "1.3" }}>
                {award.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#546863", lineHeight: "1.6", marginTop: "auto" }}>
                {award.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. VISION */}
      <section style={{ background: "#edf2ee", padding: "85px 4.5vw", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} id="vision">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>5. Long-Term Benchmark</p>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3rem)" }}>
              OUR <em>VISION</em>
            </h2>
            <div className="trust-underline" />
          </div>

          <div className="card-panel" style={{ background: "linear-gradient(135deg, #102f35 0%, #092025 100%)", color: "white", padding: "48px 42px", boxShadow: "0 16px 40px rgba(16, 47, 53, 0.15)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
              <div>
                <div className="icon-box" style={{ background: "rgba(255,255,255,0.12)", color: "#74d4c0", width: "60px", height: "60px", marginBottom: "18px" }}>
                  <Eye size={30} />
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "14px", color: "#ffffff" }}>
                  Pioneering Tomorrow’s Bioactive Nutrition
                </h3>
                <p style={{ color: "#b6cbc6", lineHeight: "1.75", fontSize: "16px" }}>
                  To be recognized globally as the gold-standard life science co-creator, establishing new frontiers in cellular absorption, standardized natural bioactives, and clinical nutrition that enhances longevity worldwide.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.06)", padding: "30px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <h4 style={{ fontSize: "15px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#74d4c0", marginBottom: "16px" }}>
                  Key Strategic Benchmarks:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#d2e3df" }}>
                  <span style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#74d4c0" style={{ flexShrink: 0, marginTop: "2px" }} />
                    Pioneer next-generation liposomal, sub-micron, and enteric delivery systems.
                  </span>
                  <span style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#74d4c0" style={{ flexShrink: 0, marginTop: "2px" }} />
                    Empower 200+ global brands with clinically validated turnkey science.
                  </span>
                  <span style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#74d4c0" style={{ flexShrink: 0, marginTop: "2px" }} />
                    Promote zero-carbon green manufacturing across all production suites.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR GLOBAL PRESENCE */}
      <section className="page-wrapper" id="global-presence" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>6. Worldwide Reach</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3rem)" }}>
            OUR GLOBAL <em>PRESENCE</em>
          </h2>
          <div className="trust-underline" />
          <p style={{ color: "#546863", fontSize: "15px", marginTop: "16px" }}>
            Exporting pharmaceutical and nutraceutical formulations to leading healthcare brand partners across over 30 countries.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {globalRegions.map((reg, idx) => (
            <motion.div
              key={reg.region}
              className="card-panel"
              style={{ padding: "30px 26px" }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              variants={fade}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <MapPin size={20} color="var(--moss)" />
                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "var(--ink)" }}>{reg.region}</h3>
              </div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--moss)", marginBottom: "8px" }}>
                {reg.countries}
              </div>
              <p style={{ fontSize: "13px", color: "#546863", lineHeight: "1.6", marginBottom: "14px" }}>
                <strong>Key Focus:</strong> {reg.focus}
              </p>
              <div style={{ background: "#f5f8f6", padding: "6px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 700, color: "var(--ink)", width: "fit-content" }}>
                {reg.stat}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, #102f35 0%, #0d272c 100%)", borderRadius: "20px", padding: "40px 6vw", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>
              Expanding into New International Territories?
            </h3>
            <p style={{ color: "#b8cbc7", fontSize: "14px", maxWidth: "600px" }}>
              Our dedicated export and regulatory compliance department prepares full country dossiers (CoA, FSC, GMP Certificates) for seamless local health ministry approval.
            </p>
          </div>
          <Link href="/contact?inquiry=export" className="button button-light" style={{ background: "white", color: "var(--ink)" }}>
            Inquire About Export
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 7. MISSION */}
      <section style={{ background: "#edf2ee", padding: "85px 4.5vw", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }} id="mission">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>7. Operational Commitment</p>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3rem)" }}>
              OUR <em>MISSION</em>
            </h2>
            <div className="trust-underline" />
          </div>

          <div className="card-panel" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f4f8f5 100%)", border: "2px solid #6fae38", padding: "48px 42px", boxShadow: "0 16px 40px rgba(111, 174, 56, 0.12)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
              <div>
                <div className="icon-box" style={{ background: "#6fae38", color: "white", width: "60px", height: "60px", marginBottom: "18px" }}>
                  <Target size={30} />
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "14px", color: "var(--ink)" }}>
                  Translating Scientific Rigor Into Safe Products
                </h3>
                <p style={{ color: "#475e58", lineHeight: "1.75", fontSize: "16px" }}>
                  To transform validated biomedical insights and pure botanical extracts into commercially scalable, stable, and highly bioavailable formulations through zero-compromise manufacturing rigor and absolute regulatory adherence.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "30px", borderRadius: "16px", border: "1px solid #dce6e0" }}>
                <h4 style={{ fontSize: "15px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#559024", marginBottom: "16px" }}>
                  Core Operational Commitments:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#3d544f" }}>
                  <span style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#6fae38" style={{ flexShrink: 0, marginTop: "2px" }} />
                    100% computerized batch traceability and active standardization.
                  </span>
                  <span style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#6fae38" style={{ flexShrink: 0, marginTop: "2px" }} />
                    Comprehensive end-to-end partnership from molecule to finished shelf.
                  </span>
                  <span style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#6fae38" style={{ flexShrink: 0, marginTop: "2px" }} />
                    Rigorous third-party lab validation for safety, dissolution & stability.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VALUES */}
      <section className="page-wrapper" id="values" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>8. Operating Philosophy</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3rem)" }}>
            OUR CORE <em>VALUES</em>
          </h2>
          <div className="trust-underline" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                className="card-panel"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                variants={fade}
              >
                <div className="icon-box" style={{ background: "rgba(16, 110, 99, 0.12)", color: "var(--moss)" }}>
                  <Icon size={24} />
                </div>
                <h4 style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", marginBottom: "10px" }}>
                  {v.title}
                </h4>
                <p style={{ fontSize: "14px", lineHeight: "1.65", color: "#5a706b" }}>
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="contact">
        <div className="contact-mark">N</div>
        <p className="eyebrow light">Collaborate with us</p>
        <h2>Ready to build something <em>extraordinary?</em></h2>
        <p>Let’s discuss your formula concept, scaling requirements, or regulatory roadmap.</p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/contact" className="button button-light">
            Contact Our Science Team
            <ArrowRight size={17} />
          </Link>
          <Link href="/products" className="button button-dark" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
            Browse Product Solutions
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
