"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const testimonialsRow1 = [
  {
    name: "James K.",
    initial: "J",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Fast shipping, beautiful packaging, and the product itself is phenomenal. My whole family is obsessed.",
    stars: 5,
  },
  {
    name: "Priya R.",
    initial: "P",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    text: "I was skeptical at first but after trying it once I'm completely hooked. Customer service was incredible too.",
    stars: 5,
  },
  {
    name: "Lucas D.",
    initial: "L",
    avatar: null,
    text: "Ordered three times already. The consistency is what gets me — every time it's perfect. No complaints.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    initial: "S",
    avatar: null,
    text: "Absolutely blown away by the quality. I've tried dozens of brands and nothing comes close. Worth every penny.",
    stars: 5,
  },
];

const testimonialsRow2 = [
  {
    name: "Omar A.",
    initial: "O",
    avatar: null,
    text: "Premium feel, premium results. I've introduced this to my whole team and everyone is hooked. Highly recommended.",
    stars: 5,
  },
  {
    name: "Emma W.",
    initial: "E",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    text: "Best purchase I've made in years. Feels premium in every way — from the packaging to the product itself.",
    stars: 5,
  },
  {
    name: "Nina B.",
    initial: "N",
    avatar: null,
    text: "I gifted this to my mom and she called me immediately to say thank you. That reaction says everything.",
    stars: 5,
  },
  {
    name: "Yuki S.",
    initial: "Y",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    text: "Everything about this is thoughtful — the details, the experience, the results. Rarely do brands get this right.",
    stars: 5,
  },
];

const fannedMedia = [
  {
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=85",
    name: "Dr. Rakesh Varma",
    tag: "Retail Partner & Formulator",
  },
  {
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=85",
    name: "Elena Rostova",
    tag: "Quality Control Lead",
  },
  {
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=85",
    name: "Marc Dupont",
    tag: "Global Brand Director",
  },
];

export default function TestimonialsSection() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev === 0 ? fannedMedia.length - 1 : prev - 1));
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev === fannedMedia.length - 1 ? 0 : prev + 1));
  };

  // Triplicate arrays for smooth seamless infinite marquees
  const row1Marquee = [...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1];
  const row2Marquee = [...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>Real Experiences</p>
          <h2 className="trust-title">TESTIMONIALS</h2>
          <div className="trust-underline" />
        </motion.div>
      </div>

      {/* Row 1: Right to Left Auto Scroll */}
      <div className="marquee-container" style={{ marginBottom: "18px" }}>
        <div className="marquee-track-left">
          {row1Marquee.map((item, idx) => (
            <div key={`row1-${idx}`} className="testimonial-card">
              <span className="testimonial-quote-icon">”</span>

              <div className="testimonial-user">
                {item.avatar ? (
                  <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                ) : (
                  <div className="testimonial-avatar-fallback">{item.initial}</div>
                )}
                <div className="testimonial-info">
                  <h4>{item.name}</h4>
                  <div className="testimonial-stars">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="testimonial-text">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right Auto Scroll */}
      <div className="marquee-container">
        <div className="marquee-track-right">
          {row2Marquee.map((item, idx) => (
            <div key={`row2-${idx}`} className="testimonial-card">
              <span className="testimonial-quote-icon">”</span>

              <div className="testimonial-user">
                {item.avatar ? (
                  <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                ) : (
                  <div className="testimonial-avatar-fallback">{item.initial}</div>
                )}
                <div className="testimonial-info">
                  <h4>{item.name}</h4>
                  <div className="testimonial-stars">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="testimonial-text">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom 3D Fanned Video/Photo Carousel Deck */}
      <div className="video-carousel-section">
        <button
          onClick={prevMedia}
          className="video-nav-arrow"
          aria-label="Previous story"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="fanned-cards-container">
          {/* Fanned Layer 1 (Left Back) */}
          <div className="fanned-card-layer layer-1" />

          {/* Fanned Layer 2 (Left Mid) */}
          <div className="fanned-card-layer layer-2" />

          {/* Fanned Layer 3 (Right Mid) */}
          <div className="fanned-card-layer layer-3" />

          {/* Main Front Card */}
          <motion.div
            key={currentMediaIndex}
            className="fanned-card-layer layer-main"
            initial={{ opacity: 0.8, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src={fannedMedia[currentMediaIndex].img}
              alt={fannedMedia[currentMediaIndex].name}
            />
            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(0deg, rgba(16, 47, 53, 0.95) 0%, rgba(16, 47, 53, 0.6) 60%, transparent 100%)", color: "white", padding: "20px 22px" }}>
              <div style={{ fontSize: "16px", fontWeight: 800 }}>{fannedMedia[currentMediaIndex].name}</div>
              <div style={{ fontSize: "12px", color: "#a4cbbd", fontWeight: 600 }}>{fannedMedia[currentMediaIndex].tag}</div>
            </div>
          </motion.div>
        </div>

        <button
          onClick={nextMedia}
          className="video-nav-arrow"
          aria-label="Next story"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
