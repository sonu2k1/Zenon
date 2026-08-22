"use client";
import { motion, useInView } from "framer-motion";
import { ArrowDownRight, ArrowRight, Atom, Award, Beaker, Check, ChevronRight, CircleGauge, FlaskConical, Globe2, HeartPulse, Leaf, Menu, Microscope, PackageCheck, Pill, ShieldCheck, Sparkles, TestTube2, X } from "lucide-react";
import { useRef, useState } from "react";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const navItems = [
  { name: "Home", href: "#top" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "R&D", href: "#rnd" },
  { name: "Contact Us", href: "#contact" },
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
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">
          <i />NOVARA<span>Life Sciences</span>
        </a>
        <div className="navlinks">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={activeNav === item.name ? "active" : ""}
              onClick={() => setActiveNav(item.name)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <Button>Partner with us</Button>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
        {menu && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={activeNav === item.name ? "active" : ""}
                onClick={() => {
                  setActiveNav(item.name);
                  setMenu(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial="hidden" animate="show" variants={fade}>
            Global nutrition partners <span>•</span> Since 2004
          </motion.p>
          <motion.h1 initial="hidden" animate="show" transition={{ delay: 0.1 }} variants={fade}>
            Science-driven nutrition.<br />
            <em>Built for better health.</em>
          </motion.h1>
          <motion.p className="hero-text" initial="hidden" animate="show" transition={{ delay: 0.2 }} variants={fade}>
            Advanced nutraceutical and wellness solutions, from formulation to finished product.
          </motion.p>
          <motion.div className="hero-actions" initial="hidden" animate="show" transition={{ delay: 0.3 }} variants={fade}>
            <Button>Explore products</Button>
            <Button dark={false}>Our capabilities</Button>
          </motion.div>
        </div>
        <div className="hero-image">
          <img src="/hero-lab.png" alt="Nutraceutical science and manufacturing environment" />
          <div className="hero-badge">
            <Atom />
            <span>
              <b>Formulated with purpose</b>
              <small>Research. Precision. Scale.</small>
            </span>
          </div>
        </div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
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

      <footer>
        <a className="brand" href="#top">
          <i />NOVARA<span>Life Sciences</span>
        </a>
        <p>Science-driven nutrition for a world in motion.</p>
        <div className="footer-links">
          {navItems.map((item) => (
            <a href={item.href} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Novara Life Sciences. Concept site.</span>
          <span>LinkedIn &nbsp; / &nbsp; hello@novara.example</span>
        </div>
      </footer>
    </main>
  );
}
