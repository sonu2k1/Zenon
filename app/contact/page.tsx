"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight, Clock, Globe2, Mail, MapPin, MessageSquare, Phone, Send, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inquiryTypes = [
  "Contract Manufacturing (Scale)",
  "Custom R&D Formulation",
  "Product Sample & Spec Request",
  "Global Export & Distribution",
  "Regulatory & Clinical Dossier",
];

const faqs = [
  {
    q: "What is your typical Minimum Order Quantity (MOQ)?",
    a: "For standard catalog formulations, MOQs start as low as 5,000 units/bottles. For bespoke custom formulations with proprietary active sourcing, MOQs typically range from 10,000 to 25,000 units.",
  },
  {
    q: "How fast can you provide laboratory prototype samples?",
    a: "Bench prototype batches (including organoleptic flavor profiling and dissolution testing) are delivered within 10 to 14 business days from formulation spec sign-off.",
  },
  {
    q: "Do you assist with international regulatory filings?",
    a: "Yes. Our regulatory affairs department provides full documentation support including Certificate of Analysis (CoA), Free Sale Certificates (FSC), stability reports, and dossier filings for US FDA, EU EFSA, FSSAI, and ASEAN jurisdictions.",
  },
  {
    q: "What dosage delivery formats do you manufacture?",
    a: "We manufacture softgels, liquid-filled vegetarian capsules, enteric-coated DRCaps®, pectin gummies, effervescent tablets, stick-pack soluble powders, and sub-micron liposomal liquids.",
  },
];

const offices = [
  {
    city: "Basel Innovation Center",
    region: "Switzerland (R&D & Science HQ)",
    address: "BioTechnopark 42, 4057 Basel, Switzerland",
    phone: "+41 61 205 8890",
    email: "rnd-europe@varadaco.com",
  },
  {
    city: "Boston Biomedical Hub",
    region: "United States (Americas Commercial Office)",
    address: "750 Atlantic Avenue, Boston, MA 02111, USA",
    phone: "+1 (800) 845-9230",
    email: "usa-sales@varadaco.com",
  },
  {
    city: "Global Manufacturing Plant",
    region: "Cleanroom Facility & Export Operations",
    address: "Life Sciences Industrial Zone, WHO-GMP Campus",
    phone: "+91 22 6890 1200",
    email: "manufacturing@varadaco.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    inquiryType: inquiryTypes[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      {/* Subpage Hero with Full Background Image */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1920&q=85"
            alt="Life Sciences corporate headquarters and cleanroom facility"
          />
        </div>

        <div className="subpage-hero-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Contact Us</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-tag-pill" style={{ backgroundColor: "rgba(124, 168, 50, 0.15)", borderColor: "rgba(124, 168, 50, 0.35)", color: "#7CA832" }}>
              <MessageSquare size={14} />
              <span>Partner With Varadaco</span>
              <span className="pill-dot" style={{ backgroundColor: "#7CA832" }} />
              <span>Global Client Inquiries</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              Let’s engineer your next<br />
              <em style={{ color: "#7CA832" }}>breakthrough formulation.</em>
            </h1>

            <p className="hero-text" style={{ maxWidth: "620px", fontSize: "16px", color: "#d1e8b0", margin: "14px 0 0" }}>
              Scale contract manufacturing, request batch pilot samples, or explore regulatory partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="page-wrapper" style={{ paddingTop: "60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "50px", alignItems: "start" }}>
          
          {/* Left: Contact Form */}
          <motion.div
            className="card-panel"
            style={{ padding: "40px" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 10px" }}
              >
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(21, 128, 61, 0.12)", color: "#15803D", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--ink)", marginBottom: "12px" }}>
                  Inquiry Received Successfully!
                </h3>
                <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", maxWidth: "420px", margin: "0 auto 24px" }}>
                  Thank you, <strong>{formData.name}</strong>. A dedicated formulation and commercial specialist from Varadaco Industries will review your requirements and respond within 24 business hours.
                </p>
                <button
                  className="button button-dark"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      country: "",
                      inquiryType: inquiryTypes[0],
                      message: "",
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "26px" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>
                    Send Us an Inquiry
                  </h3>
                  <p style={{ fontSize: "13px", color: "#64748b" }}>
                    Fill out the parameters below to connect with our science and contract manufacturing team.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "18px" }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Morgan"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "18px" }}>
                  <div>
                    <label className="form-label">Company / Brand Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health Corp"
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">Country / Target Market</label>
                    <input
                      type="text"
                      placeholder="e.g. United States, Germany, India"
                      className="form-input"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label className="form-label">Inquiry Purpose</label>
                  <select
                    className="form-select"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label className="form-label">Project Details or Active Ingredients</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your dosage format preference, estimated annual volume, timeline, or key active requirements..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="button button-dark"
                  style={{ width: "100%", justifyContent: "center", padding: "14px 20px", fontSize: "14px" }}
                >
                  <Send size={16} />
                  Submit Partnership Request
                </button>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px", fontSize: "12px", color: "#64748b" }}>
                  <ShieldCheck size={14} color="#15803D" />
                  <span>Strict NDA and data confidentiality guaranteed.</span>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right: Quick Contacts & Direct Channels */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "36px" }}>
              <p className="eyebrow">Direct Contact</p>
              <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
                Global locations & <em>representation.</em>
              </h2>
              <p style={{ color: "#475569", lineHeight: "1.7", fontSize: "15px" }}>
                Our international team operates across European, North American, and Asian time zones to support rapid turnaround on inquiries and project milestones.
              </p>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {offices.map((office, idx) => (
                <motion.div
                  key={office.city}
                  className="card-panel"
                  style={{ padding: "24px" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.45 }}
                  whileHover={{ y: -5 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <MapPin size={18} color="#15803D" />
                    <h4 style={{ fontSize: "17px", fontWeight: 700, color: "var(--ink)" }}>{office.city}</h4>
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#15803D", marginBottom: "8px" }}>
                    {office.region}
                  </div>
                  <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "12px" }}>
                    {office.address}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", color: "var(--ink)", fontWeight: 600 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Phone size={14} color="#15803D" />
                      {office.phone}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Mail size={14} color="#15803D" />
                      {office.email}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: "linear-gradient(135deg, #FAF8F5 0%, #F0F4EF 50%, #F5F2EB 100%)", padding: "90px 4.5vw", borderTop: "1px solid #E2E8DF", borderBottom: "1px solid #E2E8DF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>Frequently Asked Questions</p>
            <h2>Everything you need to <em>know.</em></h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  style={{
                    padding: "22px 28px",
                    cursor: "pointer",
                    background: "#ffffff",
                    border: isOpen ? "1.5px solid #15803D" : "1.5px solid #D5E0D5",
                    borderRadius: "16px",
                    boxShadow: isOpen ? "0 10px 28px rgba(21, 128, 61, 0.12)" : "0 4px 16px rgba(21, 128, 61, 0.04)",
                    transition: "all 0.25s ease",
                  }}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                    <h4 style={{ fontSize: "16px", fontWeight: 700, color: isOpen ? "#15803D" : "var(--ink)", transition: "color 0.2s ease" }}>
                      {faq.q}
                    </h4>
                    <ChevronDown
                      size={18}
                      color={isOpen ? "#15803D" : "#7CA832"}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      style={{ fontSize: "14px", color: "#475569", lineHeight: "1.7", marginTop: "14px", borderTop: "1px solid #E2E8DF", paddingTop: "14px" }}
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
