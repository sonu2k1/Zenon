"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowDownRight, ArrowRight, Atom, Award, Beaker, Check, ChevronRight, CircleGauge, FlaskConical, Globe2, HeartPulse, Leaf, Microscope, PackageCheck, Pill, ShieldCheck, Sparkles, TestTube2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustSections from "@/components/TrustSections";
import TestimonialsSection from "@/components/TestimonialsSection";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const heroSlides = [
  {
    id: "rnd",
    theme: "emerald",
    accentColor: "#7CA832",
    glowColor: "#15803D",
    tag: "Clinical R&D",
    titlePrefix: "Science-driven nutrition.",
    titleAccent: "Built for better health.",
    description: "Evidence-led molecular formulation and clinical validation.",
    primaryBtn: "Explore Clinical R&D",
    primaryHref: "/rnd",
    secondaryBtn: "Our Services",
    secondaryHref: "/services",
    badgeTitle: "Evidence-led R&D",
    badgeSub: "Clinical trials & molecular validation",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1920&q=85",
    alt: "Modern biotechnology and life sciences laboratory",
    Icon: Atom,
  },
  {
    id: "botanicals",
    theme: "botanical",
    accentColor: "#E8A324",
    glowColor: "#3B592D",
    tag: "Botanical Science",
    titlePrefix: "Nature's purest actives.",
    titleAccent: "Validated by science.",
    description: "Standardized herbal extraction and active phytonutrient preservation.",
    primaryBtn: "Explore Botanicals",
    primaryHref: "/portfolio",
    secondaryBtn: "Our Portfolio",
    secondaryHref: "/portfolio",
    badgeTitle: "Botanical Actives",
    badgeSub: "Standardized herbal & plant extraction",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1920&q=85",
    alt: "Botanical science and natural active formulation",
    Icon: Leaf,
  },
  {
    id: "bioavailability",
    theme: "mint",
    accentColor: "#0D9488",
    glowColor: "#15803D",
    tag: "Bioavailability",
    titlePrefix: "Maximum absorption.",
    titleAccent: "Targeted delivery.",
    description: "Pharma-grade softgels and enteric micro-capsules for cellular uptake.",
    primaryBtn: "Bioactive Formats",
    primaryHref: "/products",
    secondaryBtn: "Absorption Science",
    secondaryHref: "/rnd",
    badgeTitle: "Targeted Delivery",
    badgeSub: "Pharma-grade softgels & capsules",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1920&q=85",
    alt: "Golden nutraceutical softgels and bioavailable capsule delivery formats",
    Icon: Pill,
  },
  {
    id: "formulations",
    theme: "forest",
    accentColor: "#7CA832",
    glowColor: "#2D5A27",
    tag: "Custom Blends",
    titlePrefix: "Your unique formula.",
    titleAccent: "Scaled to perfection.",
    description: "Turn custom concepts into commercially scalable formulations.",
    primaryBtn: "Custom Formulation",
    primaryHref: "/services",
    secondaryBtn: "Formulation Lab",
    secondaryHref: "/rnd",
    badgeTitle: "500+ Formulations",
    badgeSub: "Micro-encapsulation & efficacy testing",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=85",
    alt: "Pharmaceutical research scientist formulation testing",
    Icon: FlaskConical,
  },
  {
    id: "manufacturing",
    theme: "jade",
    accentColor: "#E8A324",
    glowColor: "#1B3626",
    tag: "GMP Scale",
    titlePrefix: "Global manufacturing.",
    titleAccent: "Zero compromise.",
    description: "State-of-the-art cleanroom manufacturing exporting to 30+ countries.",
    primaryBtn: "Partner With Us",
    primaryHref: "/contact",
    secondaryBtn: "About Our Plants",
    secondaryHref: "/about",
    badgeTitle: "Global Scale",
    badgeSub: "WHO-GMP & ISO 22000 certified facilities",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=85",
    alt: "High-tech automated manufacturing facility",
    Icon: ShieldCheck,
  },
];

const solutions = [
  ["KSM-66 Ashwagandha", "Standardized full-spectrum root extract for stress resilience, cortisol balance, and peak vitality.", "/products/ashwagandha_ksm66.jpg", Leaf],
  ["Himalayan Shilajit", "Gold-grade natural mineral resin rich in fulvic acid and 84+ ionic trace minerals for cellular energy.", "/products/himalayan_shilajit.jpg", Sparkles],
  ["Gym & Sports Supplements", "High-performance whey protein isolates, creatine matrix, and rapid-recovery BCAA amino blends.", "/products/gym_supplements.jpg", CircleGauge],
  ["Medical & Clinical Nutrition", "Evidence-led bioactive formulas engineered for targeted metabolic and therapeutic wellness.", "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80", Microscope],
  ["Women’s Vitality & Health", "Purposeful bioavailable nutrition across every stage, supporting hormonal balance and longevity.", "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=900&q=80", HeartPulse],
  ["Gut & Microbiome Health", "DRCaps® delayed-release multi-strain probiotics and prebiotic synbiotics for digestive vitality.", "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80", Pill],
];

const timelineSteps = [
  {
    step: "01",
    name: "Concept",
    desc: "Target profile, molecular mapping & active selection",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    badge: "Stage 01 • Molecular Discovery & Active Selection",
    alt: "Concept research and molecular botanical discovery",
  },
  {
    step: "02",
    name: "Formulation",
    desc: "Bioavailability optimization, assay testing & clean synthesis",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=85",
    badge: "Stage 02 • Bioavailability & Assay Formulation",
    alt: "Formulation laboratory scientist testing bioavailable nutrition",
  },
  {
    step: "03",
    name: "Manufacturing",
    desc: "Class 100,000 cleanroom commercial batch scaling",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
    badge: "Stage 03 • WHO-GMP Cleanroom Precision Scaling",
    alt: "Automated high-speed pharmaceutical manufacturing",
  },
  {
    step: "04",
    name: "Packaging",
    desc: "High-barrier Alu-Alu blister, bottling & nitrogen flushing",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=85",
    badge: "Stage 04 • High-Barrier Automated Blister & Bottling",
    alt: "Automated pharmaceutical bottle filling and packaging line",
  },
  {
    step: "05",
    name: "Delivery",
    desc: "Global regulatory release, cold-chain freight & worldwide export",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    badge: "Stage 05 • Global Distribution & Cold-Chain Logistics",
    alt: "Global freight distribution and worldwide pharmaceutical delivery",
  },
];

const process = [
  ["01", "Research & Development", "Insights that make an idea worth making.", Microscope],
  ["02", "Formulation", "Ingredients calibrated for efficacy and experience.", FlaskConical],
  ["03", "Testing & Quality", "Rigorous controls at every decision point.", ShieldCheck],
  ["04", "Manufacturing", "Repeatable quality at meaningful scale.", PackageCheck]
];

const portfolioItems = [
  {
    title: "Men’s Health",
    desc: "We specialize in a wide range of men’s wellness and health products.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
  {
    title: "Women’s Health",
    desc: "We deliver a range of women’s wellness products that are specifically designed for them.",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
  {
    title: "Kid’s Health",
    desc: "We take into account the specific nutrient requirement for kids.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
  {
    title: "Sports Nutrition",
    desc: "Our sports nutrition products are made with quality ingredients.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
  {
    title: "Medical Nutrition",
    desc: "We bring unique, efficacious solutions to answer your nutritional needs.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
  {
    title: "Phytopharma",
    desc: "All products have proven to be effective in improving overall health.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
  {
    title: "Probiotics",
    desc: "All products have proven to be effective in improving overall health.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
  {
    title: "Ayurvedic",
    desc: "Our array of Ayurvedic nutrition is designed to promote balance, wellness.",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
];

const services = [
  {
    title: "PRIVATE LABELLING",
    desc: "Varadaco is a leading full-service private label manufacturer. Whether you are a startup or an established enterprise, we scale custom formulations for your brand.",
    href: "/products",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 6L38 22L24 36L8 20L22 6Z" />
        <circle cx="18" cy="16" r="2.5" />
        <path d="M20 28C22 30 26 30 28 26C30 22 28 18 24 20" />
        <path d="M26 14C27 12 29 11 31 12" />
      </svg>
    ),
  },
  {
    title: "REGULATORY COMPLIANCES",
    desc: "Ensure all necessary global licensing and compliance, working closely with regulatory authorities like US FDA, FSSAI, AYUSH, and EFSA.",
    href: "/about",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M27 8L36 17L32 21L23 12L27 8Z" />
        <path d="M19 16L30 27" />
        <path d="M24 21L10 35L7 32L21 18" />
        <path d="M12 40H36" />
        <path d="M16 44H32" />
      </svg>
    ),
  },
  {
    title: "CRAMS",
    desc: "Varadaco is a trusted contract research & manufacturing partner, specializing in pharmaceutical-grade cleanroom scaling and active bioactives.",
    href: "/rnd",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6H28V12H20V6Z" />
        <path d="M24 12V20" />
        <path d="M12 28H20V40H12V28Z" />
        <path d="M28 28H36V40H28V28Z" />
        <path d="M6 42H42" />
        <circle cx="10" cy="42" r="2" />
        <circle cx="24" cy="42" r="2" />
        <circle cx="38" cy="42" r="2" />
      </svg>
    ),
  },
  {
    title: "PACKAGING",
    desc: "High-barrier Alu-Alu blister packaging, automated softgel bottling, and nitrogen-flushed single-serve stick pack delivery formats.",
    href: "/products",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 16L24 8L38 16L24 24L10 16Z" />
        <path d="M10 16V34L24 42V24" />
        <path d="M38 16V34L24 42" />
        <path d="M16 12.5L30 20.5" />
        <path d="M34 14L20 22" />
      </svg>
    ),
  },
];

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true });
  const [count] = useState(value);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 12 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </motion.div>
  );
}

function Button({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a href="#contact" className={dark ? "button button-dark" : "button button-light"}>
      {children}
      <ArrowRight size={17} />
    </a>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveTimelineStep((prev) => (prev + 1) % timelineSteps.length);
    }, 4000);
    return () => clearInterval(stepTimer);
  }, []);

  const activeSlide = heroSlides[currentSlide];
  const ActiveIcon = activeSlide.Icon;

  return (
    <main>
      <Navbar />

      <section className="hero" id="top">
        <div className="hero-copy">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="hero-copy-inner"
            >

              <h1>
                {activeSlide.titlePrefix}<br />
                <em style={{ color: activeSlide.accentColor }}>{activeSlide.titleAccent}</em>
              </h1>

              <p className="hero-text">
                {activeSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Colored Carousel Category Switcher */}
          <div className="hero-carousel-pills">
            {heroSlides.map((slide, idx) => {
              const Icon = slide.Icon;
              const isActive = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  className={`carousel-tab ${isActive ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    borderColor: isActive ? slide.accentColor : "rgba(255, 255, 255, 0.15)",
                    backgroundColor: isActive ? `${slide.accentColor}30` : "rgba(10, 28, 32, 0.65)",
                    color: isActive ? "#ffffff" : "#b6cbc6",
                  }}
                >
                  <span
                    className="tab-indicator"
                    style={{
                      backgroundColor: slide.accentColor,
                      boxShadow: isActive ? `0 0 10px ${slide.accentColor}` : "none",
                    }}
                  />
                  <Icon size={13} />
                  <span>{slide.tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="hero-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.image}
              src={activeSlide.image}
              alt={activeSlide.alt}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="hero-carousel-img"
            />
          </AnimatePresence>

          <div className="hero-dots">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                aria-label={`Go to slide ${idx + 1}`}
                className={`hero-dot ${currentSlide === idx ? "active" : ""}`}
                style={{
                  backgroundColor: currentSlide === idx ? slide.accentColor : "rgba(255, 255, 255, 0.45)",
                  boxShadow: currentSlide === idx ? `0 0 10px ${slide.accentColor}` : "none",
                }}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="orb orb-one"
          animate={{
            backgroundColor: activeSlide.glowColor,
          }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="orb orb-two"
          animate={{
            backgroundColor: activeSlide.accentColor,
          }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="stats" aria-label="Company statistics">
        <Counter value={20} suffix="+" label="Years of innovation" />
        <Counter value={100} suffix="+" label="Global brands" />
        <Counter value={500} suffix="+" label="Formulations" />
        <Counter value={30} suffix="+" label="Countries served" />
      </section>

      <section className="section partnership" id="about">
        <motion.div
          className="partnership-copy"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">About Varadaco Industries</p>
          <h2>Your brand.<br /><em>Our science.</em></h2>
          <p>Bring the ambition. We bring the insight, formulation expertise, and operational discipline to take it further.</p>
          <Link href="/contact" className="button button-dark" style={{ background: "#15803D", borderColor: "#15803D", fontWeight: 800, padding: "14px 28px", fontSize: "15px" }}>
            Start a partnership
            <ArrowRight size={17} />
          </Link>
        </motion.div>

        <div className="partnership-image-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={timelineSteps[activeTimelineStep].name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <img
                src={timelineSteps[activeTimelineStep].image}
                alt={timelineSteps[activeTimelineStep].alt}
              />
              <div className="partnership-image-badge">
                <ShieldCheck size={18} color="#7CA832" />
                <span>{timelineSteps[activeTimelineStep].badge}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="timeline">
          {timelineSteps.map((item, i) => {
            const isActive = activeTimelineStep === i;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={isActive ? "active" : ""}
                onMouseEnter={() => setActiveTimelineStep(i)}
                onClick={() => setActiveTimelineStep(i)}
                style={{ cursor: "pointer" }}
              >
                <span>{item.step}</span>
                <div>
                  <b>{item.name}</b>
                  <small>{item.desc}</small>
                </div>
                <i />
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section process" id="capabilities">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <p className="eyebrow">The Varadaco difference</p>
          <h2>From scientific idea to<br /><em>market-ready product.</em></h2>
        </motion.div>
        <div className="process-grid">
          {process.map(([num, title, desc, Icon], i) => (
            <motion.article
              key={String(num)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              variants={fade}
            >
              <span>{num as string}</span>
              <Icon size={27} />
              <h3>{title as string}</h3>
              <p>{desc as string}</p>
              <ArrowDownRight />
            </motion.article>
          ))}
        </div>
        <div className="process-line">
          <span>Discovery</span>
          <i />
          <span>Development</span>
          <i />
          <span>Delivery</span>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="services-header">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <h2 className="services-title">Our Services</h2>
            <div className="services-underline" />
          </motion.div>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.a
              key={service.title}
              href={service.href}
              className="service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <div className="service-corner-blob" />
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="service-read-more">
                Read More
                <ChevronRight size={16} />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* OUR PORTFOLIO SECTION */}
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-header">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <h2 className="portfolio-title">OUR PORTFOLIO</h2>
            <div className="portfolio-underline" />
          </motion.div>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, idx) => (
            <motion.a
              key={item.title}
              href="/products"
              className="portfolio-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-card-bg"
              />
              <div className="portfolio-card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="section solutions" id="products">
        <div className="section-heading">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="eyebrow">Explore Our Products</p>
            <h2>Nutrition for the<br /><em>way life moves.</em></h2>
          </motion.div>
          <Link className="text-link" href="/products">
            View all products <ArrowRight size={16} />
          </Link>
        </div>
        <div className="solution-grid">
          {solutions.map(([title, desc, img, Icon], i) => (
            <motion.div
              key={String(title)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              variants={fade}
              whileHover={{ y: -5 }}
            >
              <Link href="/products" className="solution-card" style={{ display: "block", textDecoration: "none" }}>
                <div className="card-image">
                  <img src={img as string} alt={title as string} />
                </div>
                <div className="card-body">
                  <Icon size={21} />
                  <h3>{title as string}</h3>
                  <p>{desc as string}</p>
                  <span>Explore <ArrowRight size={15} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="quality section" id="quality">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">Quality, made visible</p>
          <h2>Confidence at every<br /><em>checkpoint.</em></h2>
          <p>Certification and compliance status is verified per facility and market across our global pharmaceutical and nutraceutical cleanroom suites.</p>
        </motion.div>
        <div className="certs">
          {[
            { title: "GMP", label: "c-GMP Certified", icon: Award },
            { title: "ISO", label: "ISO 22000:2018", icon: ShieldCheck },
            { title: "HACCP", label: "Hazard Analysis", icon: Check },
            { title: "FSSAI", label: "Central License", icon: Award },
            { title: "WHO–GMP", label: "Global Standard", icon: Sparkles },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ scale: 1.08, y: -8 }}
              >
                <div className="cert-icon-wrap">
                  <Icon size={20} />
                </div>
                <b>{item.title}</b>
                <small>{item.label}</small>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="global" id="global">
        <div className="global-bg-grid" />
        <div className="global-glow-orb" />

        <motion.div
          className="global-copy"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Global Reach & Export Standards</p>
          <h2>Nutrition without<br /><em>borders.</em></h2>
          <p>
            Trusted by healthcare leaders and innovative nutraceutical brands worldwide. We formulate, manufacture, and clear global regulatory dossiers for seamless delivery to over 30+ international markets.
          </p>

          <div className="global-features-list">
            <div className="global-feature-item">
              <ShieldCheck size={18} color="#a3e635" />
              <span>Full Regulatory Dossier Support (FDA, EFSA, TGA, AYUSH)</span>
            </div>
            <div className="global-feature-item">
              <Globe2 size={18} color="#a3e635" />
              <span>Worldwide Cold-Chain Logistics & Maritime Freight</span>
            </div>
            <div className="global-feature-item">
              <Check size={18} color="#a3e635" />
              <span>100% Batch Traceability with Certified CoA & Lab Reports</span>
            </div>
          </div>

          <Link href="/contact" className="button button-dark" style={{ background: "#15803D", borderColor: "#15803D", fontWeight: 800, padding: "14px 28px", fontSize: "15px", marginTop: "24px", display: "inline-flex" }}>
            Inquire About Global Export
            <ArrowRight size={17} />
          </Link>
        </motion.div>

        <motion.div
          className="global-visual-container"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* 3D Photorealistic Illuminated Globe with Atmosphere */}
          <div className="globe-sphere-wrapper">
            <div className="globe-atmosphere-glow" />
            <img
              src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=85"
              alt="Global nutraceutical supply network"
              className="globe-image"
            />
            <div className="globe-inner-shadow" />

            {/* Glowing Hub Radar Markers */}
            <div className="global-hub-pin pin-us" title="North America: US FDA Registered">
              <span className="radar-pulse" />
              <span className="hub-dot" />
              <span className="hub-label">North America</span>
            </div>

            <div className="global-hub-pin pin-eu" title="Europe: EFSA Standard">
              <span className="radar-pulse" />
              <span className="hub-dot" />
              <span className="hub-label">Europe</span>
            </div>

            <div className="global-hub-pin pin-me" title="Middle East: GCC & Halal Hub">
              <span className="radar-pulse" />
              <span className="hub-dot" />
              <span className="hub-label">Middle East</span>
            </div>

            <div className="global-hub-pin pin-asia" title="Asia-Pacific: GMP Manufacturing">
              <span className="radar-pulse" />
              <span className="hub-dot" />
              <span className="hub-label">Asia-Pacific</span>
            </div>

            <div className="global-hub-pin pin-aus" title="Oceania: TGA Standards">
              <span className="radar-pulse" />
              <span className="hub-dot" />
              <span className="hub-label">Australia</span>
            </div>
          </div>

          {/* Floating Metric Badges */}
          <div className="global-stat-card stat-top-right anim-float">
            <b>30+</b>
            <small>Countries Served Worldwide</small>
          </div>

          <div className="global-stat-card stat-bottom-left anim-float-delay">
            <div className="stat-pill-row">
              <ShieldCheck size={16} color="#7CA832" />
              <span>100% Export Clearance</span>
            </div>
            <small>WHO-GMP • CoAs • Halal • Kosher</small>
          </div>
        </motion.div>
      </section>



      {/* OUR VALUABLE CLIENTS & CERTIFICATIONS SECTIONS */}
      <TrustSections />

      {/* TESTIMONIALS SECTION (Dual-Row Marquee + 3D Fanned Deck) */}
      <TestimonialsSection />

      {/* COMPACT CTA BANNER */}
      <section className="cta-banner-section">
        <motion.div
          className="cta-banner-card"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-banner-content">
            <span className="cta-banner-pill">Ready to Collaborate?</span>
            <h3 className="cta-banner-title">Let’s engineer your next formulation breakthrough.</h3>
            <p className="cta-banner-desc">From initial molecular discovery to full WHO-GMP commercial scale.</p>
          </div>
          <div className="cta-banner-actions">
            <Link href="/contact" className="button button-dark" style={{ background: "#15803D", borderColor: "#15803D" }}>
              Request Formulation Consultation
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
