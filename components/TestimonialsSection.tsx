"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const fannedCards = [
  {
    id: 1,
    video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-drinking-a-green-smoothie-42884-large.mp4",
    poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    name: "Ananya Sharma",
    role: "Wellness Consultant & Creator",
  },
  {
    id: 2,
    video: "https://assets.mixkit.co/videos/preview/mixkit-scientist-working-in-a-laboratory-40615-large.mp4",
    poster: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=85",
    name: "Dr. Rohan Patel",
    role: "Clinical R&D Specialist",
  },
  {
    id: 3,
    video: "https://assets.mixkit.co/videos/preview/mixkit-athlete-drinking-from-a-water-bottle-after-training-41457-large.mp4",
    poster: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=85",
    name: "Meera Sen",
    role: "Sports Nutrition Coach",
  },
  {
    id: 4,
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-facial-cream-in-a-spa-41484-large.mp4",
    poster: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=85",
    name: "David Miller",
    role: "Brand Founder & Partner",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => {
    setActiveIndex((prev) => (prev === 0 ? fannedCards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev === fannedCards.length - 1 ? 0 : prev + 1));
  };

  // Triplicate arrays for smooth seamless infinite marquees
  const row1Marquee = [...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1];
  const row2Marquee = [...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2];

  // Helper to get card style based on relative offset from activeIndex
  const getCardTransform = (index: number) => {
    const total = fannedCards.length;
    let diff = (index - activeIndex) % total;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    if (diff === 0) {
      return {
        rotate: 0,
        x: 0,
        y: 0,
        scale: 1,
        zIndex: 5,
        opacity: 1,
      };
    } else if (diff === -1) {
      return {
        rotate: -7,
        x: -45,
        y: 8,
        scale: 0.94,
        zIndex: 4,
        opacity: 0.88,
      };
    } else if (diff === 1) {
      return {
        rotate: 7,
        x: 45,
        y: 8,
        scale: 0.94,
        zIndex: 4,
        opacity: 0.88,
      };
    } else if (diff === -2 || diff < -1) {
      return {
        rotate: -14,
        x: -85,
        y: 18,
        scale: 0.88,
        zIndex: 2,
        opacity: 0.72,
      };
    } else {
      return {
        rotate: 14,
        x: 85,
        y: 18,
        scale: 0.88,
        zIndex: 2,
        opacity: 0.72,
      };
    }
  };

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

      {/* Interactive 3D Fanned Card Deck */}
      <div className="video-carousel-section">
        <button
          onClick={prevCard}
          className="video-nav-arrow"
          aria-label="Previous story"
          style={{ borderColor: "#c8b982", color: "#8a7536" }}
        >
          <ChevronLeft size={22} />
        </button>

        <div className="fanned-deck-wrapper" style={{ position: "relative", width: "340px", height: "460px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {fannedCards.map((card, idx) => {
            const transform = getCardTransform(idx);
            const isCenter = idx === activeIndex;
            return (
              <motion.div
                key={card.id}
                className="fanned-deck-card"
                animate={{
                  rotate: transform.rotate,
                  x: transform.x,
                  y: transform.y,
                  scale: transform.scale,
                  zIndex: transform.zIndex,
                  opacity: transform.opacity,
                }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "380px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: isCenter ? "0 22px 55px rgba(16, 47, 53, 0.28)" : "0 12px 30px rgba(16, 47, 53, 0.15)",
                  border: isCenter ? "3px solid #ffffff" : "1.5px solid rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                }}
                onClick={() => setActiveIndex(idx)}
              >
                <video
                  src={card.video}
                  poster={card.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isCenter
                      ? "linear-gradient(0deg, rgba(16, 47, 53, 0.85) 0%, rgba(16, 47, 53, 0.2) 50%, transparent 80%)"
                      : "rgba(0, 0, 0, 0.25)",
                    transition: "background 0.3s ease",
                    pointerEvents: "none",
                  }}
                />
                {isCenter && (
                  <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", color: "white", pointerEvents: "none" }}>
                    <div style={{ fontSize: "15px", fontWeight: 800 }}>{card.name}</div>
                    <div style={{ fontSize: "12px", color: "#a4cbbd", fontWeight: 600 }}>{card.role}</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={nextCard}
          className="video-nav-arrow"
          aria-label="Next story"
          style={{ borderColor: "#c8b982", color: "#8a7536" }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom Pagination Dots */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginTop: "24px" }}>
        {fannedCards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              height: "6px",
              width: activeIndex === idx ? "20px" : "6px",
              borderRadius: "10px",
              backgroundColor: activeIndex === idx ? "#c5a059" : "#dcd7ce",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
