"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowDownRight, ArrowRight, Atom, Award, Beaker, Check, ChevronRight, CircleGauge, FlaskConical, Globe2, HeartPulse, Leaf, Microscope, PackageCheck, Pill, ShieldCheck, Sparkles, TestTube2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustSections from "@/components/TrustSections";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const heroSlides = [
  {
    id: "rnd",
    theme: "cyan",
    accentColor: "#0284c7",
    glowColor: "#38bdf8",
    tag: "Clinical R&D",
    titlePrefix: "Science-driven nutrition.",
    titleAccent: "Built for better health.",
    description: "Evidence-led molecular formulation and clinical validation to turn breakthrough biomedical research into market-ready nutraceuticals.",
    primaryBtn: "Explore Clinical R&D",
    primaryHref: "/rnd",
    secondaryBtn: "Our Services",
    secondaryHref: "/services",
    badgeTitle: "Evidence-led R&D",
    badgeSub: "Clinical trials & molecular validation",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1800&q=85",
    alt: "Modern biotechnology and life sciences laboratory",
    Icon: Atom,
  },
  {
    id: "botanicals",
    theme: "emerald",
    accentColor: "#059669",
    glowColor: "#34d399",
    tag: "Botanical Science",
    titlePrefix: "Nature's purest actives.",
    titleAccent: "Validated by science.",
    description: "Standardized phytonutrient extraction and bioactive preservation for premium herbal and plant-powered wellness formulations.",
    primaryBtn: "Explore Botanicals",
    primaryHref: "/portfolio",
    secondaryBtn: "Our Portfolio",
    secondaryHref: "/portfolio",
    badgeTitle: "Botanical Actives",
    badgeSub: "Standardized herbal & plant extraction",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1800&q=85",
    alt: "Botanical science and natural active formulation",
    Icon: Leaf,
  },
  {
    id: "bioavailability",
    theme: "amber",
    accentColor: "#d97706",
    glowColor: "#fbbf24",
    tag: "Bioavailability",
    titlePrefix: "Maximum absorption.",
    titleAccent: "Targeted delivery.",
    description: "Pharmaceutical-grade softgels, liquid suspensions, and enteric micro-capsules designed for optimized cellular release.",
    primaryBtn: "Bioactive Formats",
    primaryHref: "/products",
    secondaryBtn: "Absorption Science",
    secondaryHref: "/rnd",
    badgeTitle: "Targeted Delivery",
    badgeSub: "Pharma-grade softgels & capsules",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=1800&q=85",
    alt: "Pharmaceutical grade capsule and softgel production",
    Icon: Pill,
  },
  {
    id: "formulations",
    theme: "purple",
    accentColor: "#7c3aed",
    glowColor: "#a78bfa",
    tag: "Custom Blends",
    titlePrefix: "Your unique formula.",
    titleAccent: "Scaled to perfection.",
    description: "Turn custom concepts into commercially successful formulations with our dedicated contract formulation and testing team.",
    primaryBtn: "Custom Formulation",
    primaryHref: "/services",
    secondaryBtn: "Formulation Lab",
    secondaryHref: "/rnd",
    badgeTitle: "500+ Formulations",
    badgeSub: "Micro-encapsulation & efficacy testing",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1800&q=85",
    alt: "Pharmaceutical research scientist formulation testing",
    Icon: FlaskConical,
  },
  {
    id: "manufacturing",
    theme: "lime",
    accentColor: "#65a30d",
    glowColor: "#a3e635",
    tag: "GMP Scale",
    titlePrefix: "Global manufacturing.",
    titleAccent: "Zero compromise.",
    description: "State-of-the-art cleanroom manufacturing and automated batch traceability exporting to over 30 countries worldwide.",
    primaryBtn: "Partner With Us",
    primaryHref: "/contact",
    secondaryBtn: "About Our Plants",
    secondaryHref: "/about",
    badgeTitle: "Global Scale",
    badgeSub: "WHO-GMP & ISO 22000 certified facilities",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=85",
    alt: "High-tech automated manufacturing facility",
    Icon: ShieldCheck,
  },
];

const solutions = [
  ["Sports Nutrition", "Performance-led formats engineered for active lives.", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80", CircleGauge],
  ["Women’s Health", "Purposeful nutrition across every life stage.", "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=900&q=80", HeartPulse],
  ["Gut Health", "Precision blends for better daily balance.", "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80", Leaf],
  ["Medical Nutrition", "Clinically informed nutrition for specific needs.", "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80", Microscope],
  ["Botanical Science", "Modern delivery systems for heritage ingredients.", "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80", Sparkles],
  ["Kids Nutrition", "Thoughtfully developed, delightfully simple formats.", "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80", Pill],
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
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    href: "/products",
  },
];

const services = [
  {
    title: "PRIVATE LABELLING",
    desc: "Zeon is a leading full-service private label manufacturer. Whether you are a startup or an established business, we would love to partner with you in..",
    href: "/products",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#2b5292" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 6L38 22L24 36L8 20L22 6Z" />
        <circle cx="18" cy="16" r="2.5" />
        <path d="M20 28C22 30 26 30 28 26C30 22 28 18 24 20" />
        <path d="M26 14C27 12 29 11 31 12" />
      </svg>
    ),
  },
  {
    title: "REGULATORY COMPLIANCES",
    desc: "Ensure all necessary licenses and compliance and Works closely with regulatory bodies like FSSAI, AYUSH, Legal Metrology",
    href: "/about",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#2b5292" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    desc: "Zeon is proud to be a trusted partner in contract manufacturing. We specialize in the production of Nutra and Wellness products..",
    href: "/rnd",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#2b5292" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    desc: "With growing consumer demands for health & wellness products, the nutraceutical industry is seeing tremendous growth.",
    href: "/products",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#2b5292" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
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
              <div
                className="hero-tag-pill"
                style={{
                  backgroundColor: `${activeSlide.accentColor}18`,
                  borderColor: `${activeSlide.accentColor}40`,
                  color: activeSlide.accentColor
                }}
              >
                <ActiveIcon size={14} />
                <span>{activeSlide.tag}</span>
                <span className="pill-dot" style={{ backgroundColor: activeSlide.accentColor }} />
                <span>Since 2004</span>
              </div>

              <h1>
                {activeSlide.titlePrefix}<br />
                <em style={{ color: activeSlide.accentColor }}>{activeSlide.titleAccent}</em>
              </h1>

              <p className="hero-text">
                {activeSlide.description}
              </p>

              <div className="hero-actions">
                <Link href={activeSlide.primaryHref} className="button button-dark" style={{ background: activeSlide.accentColor, borderColor: activeSlide.accentColor }}>
                  {activeSlide.primaryBtn}
                  <ArrowRight size={17} />
                </Link>
                <Link href={activeSlide.secondaryHref} className="button button-light" style={{ background: "rgba(255, 255, 255, 0.12)", color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(8px)" }}>
                  {activeSlide.secondaryBtn}
                  <ArrowRight size={17} />
                </Link>
              </div>
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
        <div>
          <p className="eyebrow">About Novara Life Sciences</p>
          <h2>Your brand.<br /><em>Our science.</em></h2>
          <p>Bring the ambition. We bring the insight, formulation expertise, and operational discipline to take it further.</p>
          <Button>Start a partnership</Button>
        </div>
        <div className="timeline">
          {["Concept", "Formulation", "Manufacturing", "Packaging", "Delivery"].map((x, i) => (
            <div key={x}>
              <span>0{i + 1}</span>
              <b>{x}</b>
              {i < 4 && <i />}
            </div>
          ))}
        </div>
      </section>

      <section className="section process" id="capabilities">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <p className="eyebrow">The Novara difference</p>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
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
          <div>
            <p className="eyebrow">Products & Solutions</p>
            <h2>Nutrition for the<br /><em>way life moves.</em></h2>
          </div>
          <a className="text-link" href="#contact">
            View all products <ArrowRight size={16} />
          </a>
        </div>
        <div className="solution-grid">
          {solutions.map(([title, desc, img, Icon], i) => (
            <motion.a
              href="#contact"
              className="solution-card"
              key={String(title)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              variants={fade}
            >
              <div className="card-image">
                <img src={img as string} alt="" />
              </div>
              <div className="card-body">
                <Icon size={21} />
                <h3>{title as string}</h3>
                <p>{desc as string}</p>
                <span>Explore <ArrowRight size={15} /></span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="science" id="rnd">
        <div className="science-image">
          <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=85" alt="Scientist working in a laboratory" />
        </div>
        <div className="science-copy">
          <p className="eyebrow light">R&D and ingredient innovation</p>
          <h2>Where science<br />meets <em>nutrition.</em></h2>
          <p>Our multidisciplinary teams connect the rigor of research with the human realities of daily wellness.</p>
          <div className="science-points">
            <span><Check />Bioavailability first</span>
            <span><Check />Evidence-led development</span>
            <span><Check />Sensory excellence</span>
          </div>
          <Button dark={false}>Explore our R&D</Button>
        </div>
        <div className="floating-card">
          <Beaker />
          <div>
            <b>R&D 02</b>
            <small>Ingredient interaction study</small>
          </div>
        </div>
      </section>

      <section className="facility">
        <img src="https://images.unsplash.com/photo-1581093458791-9d42e3c3eaa7?auto=format&fit=crop&w=1800&q=85" alt="Modern production facility" />
        <div className="facility-overlay">
          <p className="eyebrow light">Built to perform</p>
          <h2>Manufacturing at<br /><em>global standards.</em></h2>
          <p>Integrated capabilities for dependable quality, fast-moving markets, and brands ready to grow.</p>
          <div>
            {["Scalable production", "Batch traceability", "Smart quality systems"].map((x) => (
              <span key={x}><Check size={16} />{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="quality section" id="quality">
        <div>
          <p className="eyebrow">Quality, made visible</p>
          <h2>Confidence at every<br /><em>checkpoint.</em></h2>
          <p>Certification and compliance status is verified per facility and market. The marks below are representative placeholders pending certification review.</p>
        </div>
        <div className="certs">
          {["GMP", "ISO", "HACCP", "FSSAI", "WHO–GMP"].map((x, i) => (
            <motion.div key={x} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Award />
              <b>{x}</b>
              <small>Placeholder</small>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="global">
        <div>
          <p className="eyebrow">Worldwide perspective</p>
          <h2>Nutrition without<br /><em>borders.</em></h2>
          <p>Trusted by partners across global markets.</p>
          <a href="#contact" className="text-link">
            Discover our reach <ArrowRight size={16} />
          </a>
        </div>
        <div className="map" aria-label="Stylised global network map">
          <Globe2 />
          <span className="pin one" />
          <span className="pin two" />
          <span className="pin three" />
          <span className="pin four" />
          <span className="pin five" />
          <div className="map-note">
            30+<small>countries served</small>
          </div>
        </div>
      </section>

      <section className="section insights" id="insights">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Latest perspectives</p>
            <h2>Ideas that move<br /><em>wellness forward.</em></h2>
          </div>
          <a className="text-link" href="#contact">
            Read all insights <ArrowRight size={16} />
          </a>
        </div>
        <div className="insight-grid">
          {["The Future of Nutraceuticals", "Personalized Nutrition: A More Human Formula", "Gut Health & the New Microbiome Economy"].map((x, i) => (
            <article key={x}>
              <span>Perspective / 0{i + 1}</span>
              <h3>{x}</h3>
              <a href="#contact"><ArrowRight /></a>
            </article>
          ))}
        </div>
      </section>

      {/* OUR VALUABLE CLIENTS & CERTIFICATIONS SECTIONS */}
      <TrustSections />

      <section className="contact" id="contact">
        <div className="contact-mark">N</div>
        <p className="eyebrow light">Start a conversation</p>
        <h2>Let’s build the next<br />generation of <em>wellness.</em></h2>
        <p>Have a product idea? Let’s turn science into a market-ready solution.</p>
        <div>
          <Button dark={false}>Talk to our experts</Button>
          <Button dark={false}>Request a consultation</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
