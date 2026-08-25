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
    email: "rnd-europe@novara-life.com",
  },
  {
    city: "Boston Biomedical Hub",
    region: "United States (Americas Commercial Office)",
    address: "750 Atlantic Avenue, Boston, MA 02111, USA",
    phone: "+1 (800) 845-9230",
    email: "usa-sales@novara-life.com",
  },
  {
    city: "Global Manufacturing Plant",
    region: "Cleanroom Facility & Export Operations",
    address: "Life Sciences Industrial Zone, WHO-GMP Campus",
    phone: "+91 22 6890 1200",
    email: "manufacturing@novara-life.com",
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

      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Contact Us</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-tag-pill" style={{ backgroundColor: "rgba(16, 110, 99, 0.1)", borderColor: "rgba(16, 110, 99, 0.25)", color: "var(--moss)" }}>
              <MessageSquare size={14} />
              <span>Partner With Novara</span>
              <span className="pill-dot" style={{ backgroundColor: "var(--moss)" }} />
              <span>Global Client Inquiries</span>
            </div>

            <h1 style={{ maxWidth: "880px" }}>
              Let’s engineer the next<br />
              <em style={{ color: "var(--moss)" }}>breakthrough in nutrition.</em>
            </h1>

            <p className="hero-text" style={{ maxWidth: "680px", fontSize: "17px", lineHeight: "1.7" }}>
              Whether you are looking to scale commercial manufacturing, create a proprietary clinical formulation, or request product samples, our specialists are here to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="page-wrapper" style={{ paddingTop: "60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "50px", alignItems: "start" }}>
          
          {/* Left: Contact Form */}
          <div className="card-panel" style={{ padding: "40px" }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 10px" }}
              >
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(16, 110, 99, 0.12)", color: "var(--moss)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--ink)", marginBottom: "12px" }}>
                  Inquiry Received Successfully!
                </h3>
                <p style={{ color: "#546863", fontSize: "15px", lineHeight: "1.7", maxWidth: "420px", margin: "0 auto 24px" }}>
                  Thank you, <strong>{formData.name}</strong>. A dedicated formulation and commercial specialist from Novara Life Sciences will review your requirements and respond within 24 business hours.
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
                  <p style={{ fontSize: "13px", color: "#647772" }}>
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

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px", fontSize: "12px", color: "#748883" }}>
                  <ShieldCheck size={14} color="var(--moss)" />
                  <span>Strict NDA and data confidentiality guaranteed.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right: Quick Contacts & Direct Channels */}
          <div>
            <div style={{ marginBottom: "36px" }}>
              <p className="eyebrow">Direct Contact</p>
              <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
                Global locations & <em>representation.</em>
              </h2>
              <p style={{ color: "#546863", lineHeight: "1.7", fontSize: "15px" }}>
                Our international team operates across European, North American, and Asian time zones to support rapid turnaround on inquiries and project milestones.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {offices.map((office) => (
                <div key={office.city} className="card-panel" style={{ padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <MapPin size={18} color="var(--moss)" />
                    <h4 style={{ fontSize: "17px", fontWeight: 700, color: "var(--ink)" }}>{office.city}</h4>
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--moss)", marginBottom: "8px" }}>
                    {office.region}
                  </div>
                  <p style={{ fontSize: "13px", color: "#5a706b", marginBottom: "12px" }}>
                    {office.address}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", color: "var(--ink)", fontWeight: 600 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Phone size={14} color="var(--moss)" />
                      {office.phone}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Mail size={14} color="var(--moss)" />
                      {office.email}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: "#edf2ee", padding: "90px 4.5vw", borderTop: "1px solid var(--line)" }}>
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
                  className="card-panel"
                  style={{ padding: "20px 28px", cursor: "pointer" }}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                    <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--ink)" }}>
                      {faq.q}
                    </h4>
                    <ChevronDown
                      size={18}
                      color="var(--moss)"
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
                      style={{ fontSize: "14px", color: "#546863", lineHeight: "1.7", marginTop: "14px", borderTop: "1px solid #e0eae3", paddingTop: "14px" }}
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
