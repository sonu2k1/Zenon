"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Download,
  Send,
  CheckCircle2,
  RefreshCw,
  Plus,
  Minus,
  Info,
  Package,
  Layers,
  FileText,
  Sliders,
  Award,
  Phone,
  Mail,
  Building2,
  User,
  X
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- DATA STRUCTURES ---

interface IngredientItem {
  id: string;
  name: string;
  botanical: string;
  desc: string;
  image: string;
  baseDosage: number;
  unit: string;
  basePrice: number; // price for base dosage
  dosageStep: number;
  minDosage: number;
  maxDosage: number;
  marketRange: string;
  impact: "High" | "Medium" | "Essential" | "Low";
  selected: boolean;
  dosage: number;
}

interface PackagingOption {
  id: string;
  name: string;
  subtext: string;
  price: number;
  image: string;
  specs: string;
}

interface OuterOption {
  id: string;
  name: string;
  subtext: string;
  price: number;
  image: string;
}

interface LabelOption {
  id: string;
  name: string;
  subtext: string;
  price: number;
  image: string;
}

// Initial default ingredients from the user's screenshot
const INITIAL_INGREDIENTS: IngredientItem[] = [
  {
    id: "ashwagandha",
    name: "Ashwagandha Extract",
    botanical: "Withania somnifera",
    desc: "Helps reduce cortisol, relieve chronic stress, and boost physical stamina.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80",
    baseDosage: 100,
    unit: "mg",
    basePrice: 28.00 / 3, // ~9.33 per 100mg -> at 300mg = 28.00
    dosageStep: 50,
    minDosage: 100,
    maxDosage: 800,
    marketRange: "250 - 600 mg",
    impact: "High",
    selected: true,
    dosage: 300,
  },
  {
    id: "black_pepper",
    name: "Black Pepper Extract",
    botanical: "Piper nigrum (95% Piperine)",
    desc: "Improves gut absorption and maximizes bioavailability of herbal extracts.",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80",
    baseDosage: 10,
    unit: "mg",
    basePrice: 5.00, // 5.00 per 10mg
    dosageStep: 5,
    minDosage: 5,
    maxDosage: 30,
    marketRange: "5 - 20 mg",
    impact: "High",
    selected: true,
    dosage: 10,
  },
  {
    id: "l_theanine",
    name: "L-Theanine",
    botanical: "Natural Amino Acid",
    desc: "Promotes calm relaxation without sedation, synergy with adaptogens.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80",
    baseDosage: 50,
    unit: "mg",
    basePrice: 12.00, // 12.00 per 50mg
    dosageStep: 25,
    minDosage: 25,
    maxDosage: 200,
    marketRange: "25 - 100 mg",
    impact: "Medium",
    selected: true,
    dosage: 50,
  },
  {
    id: "zinc",
    name: "Zinc",
    botanical: "Zinc Citrate / Bisglycinate",
    desc: "Supports immune defense, cellular repair, and hormonal homeostasis.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    baseDosage: 10,
    unit: "mg",
    basePrice: 3.00, // 3.00 per 10mg
    dosageStep: 5,
    minDosage: 5,
    maxDosage: 30,
    marketRange: "5 - 20 mg",
    impact: "Medium",
    selected: true,
    dosage: 10,
  },
  {
    id: "vitamin_d3",
    name: "Vitamin D3",
    botanical: "Cholecalciferol",
    desc: "Supports bone density, neuromuscular integrity, and positive mood.",
    image: "https://images.unsplash.com/photo-1550572017-ed200f5e6343?auto=format&fit=crop&w=400&q=80",
    baseDosage: 600,
    unit: "IU",
    basePrice: 4.00, // 4.00 per 600 IU
    dosageStep: 200,
    minDosage: 200,
    maxDosage: 2000,
    marketRange: "400 - 1000 IU",
    impact: "Medium",
    selected: true,
    dosage: 600,
  },
  {
    id: "excipients",
    name: "Excipients & Others",
    botanical: "Bio-binders & Plant Cellulose",
    desc: "Clean-label vegetable binders, flow glidants, and plant capsule fill.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    baseDosage: 120,
    unit: "mg",
    basePrice: 6.00,
    dosageStep: 10,
    minDosage: 50,
    maxDosage: 200,
    marketRange: "-",
    impact: "Low",
    selected: true,
    dosage: 120,
  },
];

// Step 3: Bottle Packaging options
const BOTTLE_OPTIONS: PackagingOption[] = [
  {
    id: "hdpe_white",
    name: "HDPE White Bottle",
    subtext: "(60 Capsules)",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80",
    specs: "Pharma grade food-safe HDPE, tamper-evident neck",
  },
  {
    id: "hdpe_black",
    name: "HDPE Black Bottle",
    subtext: "(60 Capsules)",
    price: 10.00,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
    specs: "UV-blocking opaque matte finish, sports nutrition aesthetic",
  },
  {
    id: "pet_transparent",
    name: "PET Transparent Bottle",
    subtext: "(60 Capsules)",
    price: 9.50,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    specs: "Crystal-clear visibility for colored capsule formulations",
  },
  {
    id: "amber_glass",
    name: "Amber Glass Bottle",
    subtext: "(60 Capsules)",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80",
    specs: "Luxury heavy apothecary glass, 100% photoprotective",
  },
  {
    id: "alu_blister",
    name: "Alu-Alu Blister Pack",
    subtext: "(60 Capsules / 6 Strips)",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500&q=80",
    specs: "Highest moisture & oxidation barrier, convenient travel format",
  },
];

// Step 4: Outer Packaging options
const OUTER_OPTIONS: OuterOption[] = [
  {
    id: "shrink_wrap",
    name: "Shrink Wrap",
    subtext: "(with Heat Seal)",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "paper_box",
    name: "Paper Box",
    subtext: "(Premium Finish Mono Carton)",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "tin_box",
    name: "Tin Box",
    subtext: "(Metal Keepsake Container)",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "pouch_pack",
    name: "Pouch Pack",
    subtext: "(Stand-up Zipper Pouch)",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "kraft_box",
    name: "Eco Kraft Box",
    subtext: "(Recycled Sustainable Fiber)",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=500&q=80",
  },
];

// Step 5: Label Design options
const LABEL_OPTIONS: LabelOption[] = [
  {
    id: "basic_label",
    name: "Basic Label",
    subtext: "(Standard Vinyl Sticker)",
    price: 1.00,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "premium_label",
    name: "Premium Label",
    subtext: "(Glossy Water-Resistant Finish)",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "matte_label",
    name: "Matte Label",
    subtext: "(Soft-Touch Velvet Feel)",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "embossed_label",
    name: "Embossed Label",
    subtext: "(Metallic Gold/Silver Foil Stamp)",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "custom_design",
    name: "Custom Design",
    subtext: "(Zenon In-House Design Team)",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1542744094-3a31727221eb?auto=format&fit=crop&w=500&q=80",
  },
];

const STEPS = [
  { id: 1, name: "Ingredients", label: "Choose Ingredients" },
  { id: 2, name: "Formulation", label: "Formulation & Cost" },
  { id: 3, name: "Packaging", label: "Bottle Packaging" },
  { id: 4, name: "Labeling", label: "Outer Packaging" },
  { id: 5, name: "MOQ & Pricing", label: "Label Design" },
  { id: 6, name: "Summary", label: "Final Pricing & Quote" },
];

export default function NutraBuilderPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [ingredients, setIngredients] = useState<IngredientItem[]>(INITIAL_INGREDIENTS);
  const [selectedBottle, setSelectedBottle] = useState<PackagingOption>(BOTTLE_OPTIONS[0]);
  const [selectedOuter, setSelectedOuter] = useState<OuterOption>(OUTER_OPTIONS[0]);
  const [selectedLabel, setSelectedLabel] = useState<LabelOption>(LABEL_OPTIONS[1]);
  const [selectedMoq, setSelectedMoq] = useState<number>(500);

  // Quote Request Modal State
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    brandName: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Calculate live ingredient costs
  const calculateIngredientCost = (item: IngredientItem) => {
    if (!item.selected) return 0;
    return (item.dosage / item.baseDosage) * item.basePrice;
  };

  // Calculations
  const calculations = useMemo(() => {
    const activeSelected = ingredients.filter((i) => i.selected);
    const totalWeightMg = activeSelected.reduce((acc, curr) => {
      // rough unit conversion for IU vs mg
      const mgVal = curr.unit === "IU" ? curr.dosage / 40 : curr.dosage;
      return acc + mgVal;
    }, 0);

    const totalActiveCost = activeSelected.reduce((acc, curr) => {
      return acc + calculateIngredientCost(curr);
    }, 0);

    // Bottle, Outer, Label
    const bottleCost = selectedBottle ? selectedBottle.price : 0;
    const outerCost = selectedOuter ? selectedOuter.price : 0;
    const labelCost = selectedLabel ? selectedLabel.price : 0;

    // Base manufacturing & excipients overhead per unit
    const baseUnitCost = totalActiveCost + bottleCost + outerCost + labelCost;

    // Suggested retail markup (typically 2.5x to 3x)
    const suggestedSellingPrice = Math.round((baseUnitCost + 60) * 1.5);

    // MOQ Pricing Tiers
    const moqTiers = [
      {
        units: 200,
        unitCost: Math.round(baseUnitCost + 12),
        sellingPrice: 179.0,
        profitPerUnit: 179.0 - Math.round(baseUnitCost + 12),
        marginPercent: Math.round(((179.0 - (baseUnitCost + 12)) / 179.0) * 100),
        estProfit: (179.0 - Math.round(baseUnitCost + 12)) * 200,
      },
      {
        units: 500,
        unitCost: Math.round(baseUnitCost),
        sellingPrice: 179.0,
        profitPerUnit: 179.0 - Math.round(baseUnitCost),
        marginPercent: Math.round(((179.0 - baseUnitCost) / 179.0) * 100),
        estProfit: (179.0 - Math.round(baseUnitCost)) * 500,
      },
      {
        units: 1000,
        unitCost: Math.max(35, Math.round(baseUnitCost - 4)),
        sellingPrice: 179.0,
        profitPerUnit: 179.0 - Math.max(35, Math.round(baseUnitCost - 4)),
        marginPercent: Math.round(((179.0 - (baseUnitCost - 4)) / 179.0) * 100),
        estProfit: (179.0 - Math.max(35, Math.round(baseUnitCost - 4))) * 1000,
      },
      {
        units: 2000,
        unitCost: Math.max(30, Math.round(baseUnitCost - 8)),
        sellingPrice: 179.0,
        profitPerUnit: 179.0 - Math.max(30, Math.round(baseUnitCost - 8)),
        marginPercent: Math.round(((179.0 - (baseUnitCost - 8)) / 179.0) * 100),
        estProfit: "Contact Us",
      },
    ];

    const currentTier = moqTiers.find((t) => t.units === selectedMoq) || moqTiers[1];
    const totalInvestment = typeof currentTier.unitCost === "number" ? currentTier.unitCost * selectedMoq : 0;

    return {
      activeCount: activeSelected.length,
      totalWeightMg: Math.round(totalWeightMg),
      totalActiveCost: Math.round(totalActiveCost * 100) / 100,
      bottleCost,
      outerCost,
      labelCost,
      baseUnitCost: Math.round(baseUnitCost * 100) / 100,
      suggestedSellingPrice,
      profitPerUnit: Math.round((suggestedSellingPrice - baseUnitCost) * 100) / 100,
      profitMarginPercent: Math.round(((suggestedSellingPrice - baseUnitCost) / suggestedSellingPrice) * 100),
      moqTiers,
      currentTier,
      totalInvestment,
    };
  }, [ingredients, selectedBottle, selectedOuter, selectedLabel, selectedMoq]);

  // Handlers
  const toggleIngredient = (id: string) => {
    setIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  const updateDosage = (id: string, delta: number) => {
    setIngredients((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newDosage = Math.max(item.minDosage, Math.min(item.maxDosage, item.dosage + delta));
          return { ...item, dosage: newDosage };
        }
        return item;
      })
    );
  };

  const setDosageDirect = (id: string, value: number) => {
    setIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, dosage: value } : item))
    );
  };

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="builder-root" style={{ background: "#F6F8F5", minHeight: "100vh", color: "#1E251F" }}>
      <Navbar />

      {/* SUB-HEADER / BUILDER APP BAR */}
      <div style={{ paddingTop: "76px" }}>
        <div
          style={{
            background: "#0D2619",
            color: "#ffffff",
            padding: "18px 4.5vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "#15803D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              🌿
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontWeight: 700, fontSize: "19px", letterSpacing: "-0.02em" }}>NutraBuild</span>
                <span style={{ fontSize: "11px", background: "rgba(21,128,61,0.3)", color: "#86EFAC", padding: "2px 8px", borderRadius: "12px", border: "1px solid rgba(134,239,172,0.3)" }}>Zenon Studio</span>
              </div>
              <p style={{ fontSize: "13px", color: "#A7F3D0", marginTop: "2px" }}>Custom Formulation & Instant Quotation Engine</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ background: "rgba(255,255,255,0.08)", padding: "6px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", fontSize: "13px" }}>
              Product Archetype: <strong style={{ color: "#34D399" }}>Ashwagandha Stress & Stamina Formula</strong>
            </div>
            <div style={{ background: "#15803D", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>
              Step {currentStep} of 6
            </div>
          </div>
        </div>

        {/* STEPPER PROGRESS BAR */}
        <div style={{ background: "#ffffff", borderBottom: "1px solid #E2E8DF", padding: "16px 4.5vw", overflowX: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minWidth: "680px", maxWidth: "980px", margin: "0 auto" }}>
            {STEPS.map((step, idx) => {
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;
              return (
                <div key={step.id} style={{ display: "flex", alignItems: "center", flex: idx === STEPS.length - 1 ? "none" : 1 }}>
                  <button
                    onClick={() => setCurrentStep(step.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                      padding: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: 700,
                        transition: "all 0.2s ease",
                        background: isCompleted ? "#15803D" : isCurrent ? "#0D2619" : "#F0F4EF",
                        color: isCompleted || isCurrent ? "#ffffff" : "#6B7280",
                        border: isCurrent ? "2px solid #15803D" : "1px solid transparent",
                        boxShadow: isCurrent ? "0 0 0 4px rgba(21, 128, 61, 0.15)" : "none",
                      }}
                    >
                      {isCompleted ? <Check size={16} strokeWidth={3} /> : step.id}
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: isCurrent ? 700 : 500,
                        color: isCurrent ? "#0D2619" : isCompleted ? "#15803D" : "#6B7280",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {step.name}
                    </span>
                  </button>

                  {idx < STEPS.length - 1 && (
                    <div
                      style={{
                        height: "2px",
                        flex: 1,
                        margin: "0 10px",
                        marginBottom: "18px",
                        background: isCompleted ? "#15803D" : "#E2E8DF",
                        transition: "background 0.3s ease",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN BUILDER BODY CONTAINER */}
      <div style={{ maxWidth: "1140px", margin: "32px auto 80px", padding: "0 20px" }}>
        <AnimatePresence mode="wait">
          {/* ========================================================
              STEP 1: CHOOSE INGREDIENTS
             ======================================================== */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #E2E8DF", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
            >
              <div style={{ borderBottom: "1px solid #F0F4EF", paddingBottom: "20px", marginBottom: "24px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#15803D" }}>Step 1 of 6</span>
                <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#0D2619", marginTop: "4px", letterSpacing: "-0.02em" }}>Step 1: Choose Ingredients</h1>
                <p style={{ color: "#4B5563", fontSize: "15px", marginTop: "4px" }}>Select your active raw nutraceutical ingredients and adjust their initial dosages for optimal synergy.</p>
              </div>

              {/* Ingredient List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {ingredients.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 20px",
                      borderRadius: "14px",
                      border: item.selected ? "1.5px solid #15803D" : "1px solid #E5E7EB",
                      background: item.selected ? "rgba(21, 128, 61, 0.02)" : "#FAFAFA",
                      transition: "all 0.2s ease",
                      gap: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Left: Checkbox + Image + Info */}
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: "1 1 340px" }}>
                      <button
                        type="button"
                        onClick={() => toggleIngredient(item.id)}
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "6px",
                          border: item.selected ? "none" : "2px solid #9CA3AF",
                          background: item.selected ? "#15803D" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "#ffffff",
                          flexShrink: 0,
                        }}
                      >
                        {item.selected && <Check size={16} strokeWidth={3} />}
                      </button>

                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "10px",
                          objectFit: "cover",
                          flexShrink: 0,
                          border: "1px solid #E5E7EB",
                        }}
                      />

                      <div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827" }}>{item.name}</h3>
                          <span style={{ fontSize: "13px", fontStyle: "italic", color: "#6B7280" }}>({item.botanical})</span>
                        </div>
                        <p style={{ fontSize: "13px", color: "#4B5563", marginTop: "3px", lineHeight: "1.4" }}>{item.desc}</p>
                      </div>
                    </div>

                    {/* Middle: Benchmark Price */}
                    <div style={{ minWidth: "120px", textAlign: "right" }}>
                      <span style={{ fontSize: "12px", color: "#6B7280", display: "block" }}>Benchmark Rate</span>
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#15803D" }}>
                        ₹{(item.basePrice * (item.dosage / item.baseDosage)).toFixed(2)}
                      </span>
                      <small style={{ display: "block", fontSize: "11px", color: "#9CA3AF" }}>
                        (₹{item.basePrice.toFixed(2)} / {item.baseDosage}{item.unit})
                      </small>
                    </div>

                    {/* Right: Dosage Stepper */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          background: "#ffffff",
                          border: "1px solid #D1D5DB",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => updateDosage(item.id, -item.dosageStep)}
                          disabled={!item.selected || item.dosage <= item.minDosage}
                          style={{
                            padding: "8px 12px",
                            border: "none",
                            background: "transparent",
                            cursor: item.selected && item.dosage > item.minDosage ? "pointer" : "not-allowed",
                            color: item.selected ? "#111827" : "#D1D5DB",
                          }}
                        >
                          <Minus size={15} />
                        </button>
                        <span
                          style={{
                            padding: "8px 14px",
                            fontSize: "14px",
                            fontWeight: 700,
                            minWidth: "75px",
                            textAlign: "center",
                            background: "#F9FAFB",
                            borderLeft: "1px solid #E5E7EB",
                            borderRight: "1px solid #E5E7EB",
                          }}
                        >
                          {item.dosage} {item.unit}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateDosage(item.id, item.dosageStep)}
                          disabled={!item.selected || item.dosage >= item.maxDosage}
                          style={{
                            padding: "8px 12px",
                            border: "none",
                            background: "transparent",
                            cursor: item.selected && item.dosage < item.maxDosage ? "pointer" : "not-allowed",
                            color: item.selected ? "#111827" : "#D1D5DB",
                          }}
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Next Bar */}
              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "24px",
                  borderTop: "1px solid #F0F4EF",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <div style={{ fontSize: "14px", color: "#4B5563" }}>
                  Selected: <strong style={{ color: "#0D2619" }}>{calculations.activeCount} active ingredients</strong> (~{calculations.totalWeightMg}mg active matrix)
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="button"
                  style={{
                    background: "#15803D",
                    color: "#ffffff",
                    padding: "14px 28px",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(21, 128, 61, 0.3)",
                  }}
                >
                  Next: Formulation & Cost
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              STEP 2: FORMULATION & COST SIMULATOR
             ======================================================== */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #E2E8DF", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
            >
              <div style={{ borderBottom: "1px solid #F0F4EF", paddingBottom: "20px", marginBottom: "24px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#15803D" }}>Step 2 of 6</span>
                <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#0D2619", marginTop: "4px", letterSpacing: "-0.02em" }}>Step 2: Formulation & Cost Simulator</h1>
                <p style={{ color: "#4B5563", fontSize: "15px", marginTop: "4px" }}>Adjust quantities dynamically using the sliders to see real-time unit cost, suggested selling price, and profit margins.</p>
              </div>

              {/* Side-by-Side Image 1 Layout */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 340px",
                  gap: "28px",
                  alignItems: "start",
                }}
                className="formulation-grid"
              >
                {/* Left: Table / Sliders */}
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
                    <thead>
                      <tr style={{ color: "#6B7280", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "left" }}>
                        <th style={{ padding: "8px 12px" }}>Ingredient</th>
                        <th style={{ padding: "8px 12px", minWidth: "220px" }}>Your Amount</th>
                        <th style={{ padding: "8px 12px" }}>Market Range</th>
                        <th style={{ padding: "8px 12px" }}>Impact</th>
                        <th style={{ padding: "8px 12px", textAlign: "right" }}>Cost Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.filter((i) => i.selected).map((item) => {
                        const cost = calculateIngredientCost(item);
                        return (
                          <tr
                            key={item.id}
                            style={{
                              background: "#FAFAF9",
                              borderRadius: "10px",
                              boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                            }}
                          >
                            {/* Name */}
                            <td style={{ padding: "12px", fontWeight: 700, color: "#111827", fontSize: "14px", borderRadius: "8px 0 0 8px" }}>
                              {item.name}
                            </td>

                            {/* Slider */}
                            <td style={{ padding: "12px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <input
                                  type="range"
                                  min={item.minDosage}
                                  max={item.maxDosage}
                                  step={item.dosageStep}
                                  value={item.dosage}
                                  onChange={(e) => setDosageDirect(item.id, Number(e.target.value))}
                                  style={{
                                    flex: 1,
                                    accentColor: "#15803D",
                                    cursor: "pointer",
                                    height: "5px",
                                  }}
                                />
                                <span
                                  style={{
                                    minWidth: "65px",
                                    textAlign: "right",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    color: "#0D2619",
                                  }}
                                >
                                  {item.dosage} {item.unit}
                                </span>
                              </div>
                            </td>

                            {/* Market Range */}
                            <td style={{ padding: "12px", fontSize: "13px", color: "#4B5563" }}>
                              {item.marketRange}
                            </td>

                            {/* Impact Pill */}
                            <td style={{ padding: "12px" }}>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "3px",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  color: item.impact === "High" ? "#166534" : item.impact === "Medium" ? "#B45309" : "#15803D",
                                }}
                              >
                                {item.impact}
                                {item.impact === "High" && <span style={{ fontSize: "10px" }}>▲</span>}
                                {item.impact === "Medium" && <span style={{ fontSize: "10px" }}>▲</span>}
                                {item.impact === "Low" && <span style={{ fontSize: "10px" }}>●</span>}
                              </span>
                            </td>

                            {/* Cost Impact */}
                            <td style={{ padding: "12px", textAlign: "right", fontWeight: 700, fontSize: "14px", color: "#111827", borderRadius: "0 8px 8px 0" }}>
                              ₹{cost.toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Right: Exact Image 1 Economics Card */}
                <div
                  style={{
                    background: "#FBF9F5",
                    borderRadius: "16px",
                    border: "1px solid #EDE8E1",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#4B5563", display: "block" }}>
                    Total Cost per Capsule
                  </span>
                  <div style={{ fontSize: "36px", fontWeight: 800, color: "#15803D", marginTop: "2px", letterSpacing: "-0.02em" }}>
                    ₹{calculations.totalActiveCost.toFixed(2)}
                  </div>

                  <div style={{ height: "1px", background: "#E5E0D8", margin: "16px 0" }} />

                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#4B5563", display: "block" }}>
                    Suggested Selling Price
                  </span>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#111827", marginTop: "2px" }}>
                    ₹149.00
                  </div>

                  <div style={{ height: "1px", background: "#E5E0D8", margin: "16px 0" }} />

                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#4B5563", display: "block" }}>
                    Your Profit per Unit
                  </span>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#15803D", marginTop: "2px" }}>
                    ₹{(149.0 - calculations.totalActiveCost).toFixed(2)}{" "}
                    <span style={{ fontSize: "16px", fontWeight: 700 }}>
                      ({Math.round(((149.0 - calculations.totalActiveCost) / 149.0) * 100)}%)
                    </span>
                  </div>

                  {/* Callout toast from Image 1 */}
                  <div
                    style={{
                      marginTop: "24px",
                      background: "#FEF9C3",
                      border: "1px solid #FDE047",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      fontSize: "13px",
                      color: "#854D0E",
                      lineHeight: 1.4,
                    }}
                  >
                    <strong>🎉 Great Choice!</strong>
                    <br />
                    High demand formula!
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div style={{ marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    background: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "#374151",
                  }}
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    background: "#15803D",
                    color: "#ffffff",
                    padding: "14px 28px",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(21, 128, 61, 0.3)",
                  }}
                >
                  Next: Packaging
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              STEP 3: CHOOSE BOTTLE PACKAGING (PRIMARY)
             ======================================================== */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #E2E8DF", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
            >
              <div style={{ borderBottom: "1px solid #F0F4EF", paddingBottom: "20px", marginBottom: "24px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#15803D" }}>Step 3 of 6</span>
                <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#0D2619", marginTop: "4px", letterSpacing: "-0.02em" }}>Step 3: Choose Bottle Packaging</h1>
                <p style={{ color: "#4B5563", fontSize: "15px", marginTop: "4px" }}>Select the primary container best suited for your formulation, brand positioning, and shelf stability.</p>
              </div>

              {/* Grid of 5 Bottle Options */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px" }}>
                {BOTTLE_OPTIONS.map((bottle) => {
                  const isSelected = selectedBottle.id === bottle.id;
                  return (
                    <div
                      key={bottle.id}
                      onClick={() => setSelectedBottle(bottle)}
                      style={{
                        position: "relative",
                        border: isSelected ? "2px solid #15803D" : "1px solid #E5E7EB",
                        borderRadius: "14px",
                        padding: "16px",
                        textAlign: "center",
                        cursor: "pointer",
                        background: isSelected ? "#F0FDF4" : "#ffffff",
                        boxShadow: isSelected ? "0 4px 16px rgba(21, 128, 61, 0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {/* Check badge */}
                      {isSelected && (
                        <div
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: "#15803D",
                            color: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </div>
                      )}

                      <div style={{ height: "140px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                        <img
                          src={bottle.image}
                          alt={bottle.name}
                          style={{
                            maxHeight: "120px",
                            maxWidth: "100%",
                            objectFit: "contain",
                            borderRadius: "8px",
                          }}
                        />
                      </div>

                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "4px 0" }}>{bottle.name}</h4>
                      <span style={{ fontSize: "12px", color: "#6B7280", display: "block" }}>{bottle.subtext}</span>
                      <div style={{ marginTop: "8px", fontSize: "15px", fontWeight: 700, color: "#15803D" }}>
                        ₹{bottle.price.toFixed(2)} <span style={{ fontSize: "11px", fontWeight: 400, color: "#6B7280" }}>/ Unit</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Cost Bar */}
              <div
                style={{
                  marginTop: "28px",
                  padding: "16px 20px",
                  background: "#FAFAF9",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>Bottle Cost Impact:</span>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>
                    Selected Bottle: <span style={{ color: "#15803D" }}>{selectedBottle.name}</span>
                  </div>
                </div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#15803D" }}>
                  ₹{selectedBottle.price.toFixed(2)} / Unit
                </div>
              </div>

              {/* Navigation */}
              <div style={{ marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    background: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "#374151",
                  }}
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    background: "#15803D",
                    color: "#ffffff",
                    padding: "14px 28px",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(21, 128, 61, 0.3)",
                  }}
                >
                  Next: Outer Packaging
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              STEP 4: CHOOSE OUTER PACKAGING (SECONDARY)
             ======================================================== */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #E2E8DF", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
            >
              <div style={{ borderBottom: "1px solid #F0F4EF", paddingBottom: "20px", marginBottom: "24px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#15803D" }}>Step 4 of 6</span>
                <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#0D2619", marginTop: "4px", letterSpacing: "-0.02em" }}>Step 4: Choose Outer Packaging</h1>
                <p style={{ color: "#4B5563", fontSize: "15px", marginTop: "4px" }}>Select outer retail packaging, mono-carton, or protective tamper seal for shelf-presence.</p>
              </div>

              {/* 5 Outer Packaging Options */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px" }}>
                {OUTER_OPTIONS.map((outer) => {
                  const isSelected = selectedOuter.id === outer.id;
                  return (
                    <div
                      key={outer.id}
                      onClick={() => setSelectedOuter(outer)}
                      style={{
                        position: "relative",
                        border: isSelected ? "2px solid #15803D" : "1px solid #E5E7EB",
                        borderRadius: "14px",
                        padding: "16px",
                        textAlign: "center",
                        cursor: "pointer",
                        background: isSelected ? "#F0FDF4" : "#ffffff",
                        boxShadow: isSelected ? "0 4px 16px rgba(21, 128, 61, 0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: "#15803D",
                            color: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </div>
                      )}

                      <div style={{ height: "130px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                        <img
                          src={outer.image}
                          alt={outer.name}
                          style={{
                            maxHeight: "110px",
                            maxWidth: "100%",
                            objectFit: "contain",
                            borderRadius: "8px",
                          }}
                        />
                      </div>

                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "4px 0" }}>{outer.name}</h4>
                      <span style={{ fontSize: "12px", color: "#6B7280", display: "block" }}>{outer.subtext}</span>
                      <div style={{ marginTop: "8px", fontSize: "15px", fontWeight: 700, color: "#15803D" }}>
                        ₹{outer.price.toFixed(2)} <span style={{ fontSize: "11px", fontWeight: 400, color: "#6B7280" }}>/ Unit</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Cost Bar */}
              <div
                style={{
                  marginTop: "28px",
                  padding: "16px 20px",
                  background: "#FAFAF9",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>Packaging Cost Impact:</span>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>
                    Selected Packaging: <span style={{ color: "#15803D" }}>{selectedOuter.name}</span>
                  </div>
                </div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#15803D" }}>
                  ₹{selectedOuter.price.toFixed(2)} / Unit
                </div>
              </div>

              {/* Navigation */}
              <div style={{ marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    background: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "#374151",
                  }}
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    background: "#15803D",
                    color: "#ffffff",
                    padding: "14px 28px",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(21, 128, 61, 0.3)",
                  }}
                >
                  Next: Label Design
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              STEP 5: CHOOSE LABEL DESIGN
             ======================================================== */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #E2E8DF", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
            >
              <div style={{ borderBottom: "1px solid #F0F4EF", paddingBottom: "20px", marginBottom: "24px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#15803D" }}>Step 5 of 6</span>
                <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#0D2619", marginTop: "4px", letterSpacing: "-0.02em" }}>Step 5: Choose Label Design</h1>
                <p style={{ color: "#4B5563", fontSize: "15px", marginTop: "4px" }}>Select label texture, premium metallic finish, and printing specifications.</p>
              </div>

              {/* 5 Label Options */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px" }}>
                {LABEL_OPTIONS.map((lbl) => {
                  const isSelected = selectedLabel.id === lbl.id;
                  return (
                    <div
                      key={lbl.id}
                      onClick={() => setSelectedLabel(lbl)}
                      style={{
                        position: "relative",
                        border: isSelected ? "2px solid #15803D" : "1px solid #E5E7EB",
                        borderRadius: "14px",
                        padding: "16px",
                        textAlign: "center",
                        cursor: "pointer",
                        background: isSelected ? "#F0FDF4" : "#ffffff",
                        boxShadow: isSelected ? "0 4px 16px rgba(21, 128, 61, 0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: "#15803D",
                            color: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </div>
                      )}

                      <div style={{ height: "130px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                        <img
                          src={lbl.image}
                          alt={lbl.name}
                          style={{
                            maxHeight: "110px",
                            maxWidth: "100%",
                            objectFit: "contain",
                            borderRadius: "8px",
                          }}
                        />
                      </div>

                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "4px 0" }}>{lbl.name}</h4>
                      <span style={{ fontSize: "12px", color: "#6B7280", display: "block" }}>{lbl.subtext}</span>
                      <div style={{ marginTop: "8px", fontSize: "15px", fontWeight: 700, color: "#15803D" }}>
                        ₹{lbl.price.toFixed(2)} <span style={{ fontSize: "11px", fontWeight: 400, color: "#6B7280" }}>/ Unit</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Cost Bar */}
              <div
                style={{
                  marginTop: "28px",
                  padding: "16px 20px",
                  background: "#FAFAF9",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>Label Cost Impact:</span>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>
                    Selected Label: <span style={{ color: "#15803D" }}>{selectedLabel.name}</span>
                  </div>
                </div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#15803D" }}>
                  ₹{selectedLabel.price.toFixed(2)} / Unit
                </div>
              </div>

              {/* Navigation */}
              <div style={{ marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    background: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "#374151",
                  }}
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    background: "#15803D",
                    color: "#ffffff",
                    padding: "14px 28px",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 14px rgba(21, 128, 61, 0.3)",
                  }}
                >
                  Next: MOQ & Pricing
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              STEP 6: MOQ & PRICING (FINAL SUMMARY)
             ======================================================== */}
          {currentStep === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #E2E8DF", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
            >
              <div style={{ borderBottom: "1px solid #F0F4EF", paddingBottom: "20px", marginBottom: "24px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#15803D" }}>Step 6 of 6</span>
                <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#0D2619", marginTop: "4px", letterSpacing: "-0.02em" }}>Step 6: MOQ, Pricing & Summary</h1>
                <p style={{ color: "#4B5563", fontSize: "15px", marginTop: "4px" }}>Choose your target production quantity slab to unlock volume economies of scale and finalize your batch quotation.</p>
              </div>

              {/* MOQ Table */}
              <div style={{ overflowX: "auto", marginBottom: "30px" }}>
                <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
                  <thead>
                    <tr style={{ color: "#6B7280", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "left" }}>
                      <th style={{ padding: "10px 16px" }}>Select MOQ (Units)</th>
                      <th style={{ padding: "10px 16px" }}>Total Cost per Unit</th>
                      <th style={{ padding: "10px 16px" }}>Selling Price per Unit</th>
                      <th style={{ padding: "10px 16px" }}>Profit per Unit</th>
                      <th style={{ padding: "10px 16px", textAlign: "right" }}>Est. Batch Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculations.moqTiers.map((tier) => {
                      const isSelected = selectedMoq === tier.units;
                      return (
                        <tr
                          key={tier.units}
                          onClick={() => setSelectedMoq(tier.units)}
                          style={{
                            background: isSelected ? "#15803D" : "#FAFAF9",
                            color: isSelected ? "#ffffff" : "#111827",
                            cursor: "pointer",
                            borderRadius: "10px",
                            transition: "all 0.2s ease",
                            boxShadow: isSelected ? "0 4px 16px rgba(21, 128, 61, 0.25)" : "none",
                          }}
                        >
                          <td style={{ padding: "16px", fontWeight: 700, fontSize: "15px", borderRadius: "10px 0 0 10px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <div
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  borderRadius: "50%",
                                  border: isSelected ? "2px solid #ffffff" : "2px solid #9CA3AF",
                                  background: isSelected ? "#ffffff" : "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {isSelected && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#15803D" }} />}
                              </div>
                              {tier.units >= 2000 ? "2000+ Units" : `${tier.units} Units`}
                            </div>
                          </td>

                          <td style={{ padding: "16px", fontWeight: 600 }}>
                            ₹{tier.unitCost.toFixed(2)}
                          </td>

                          <td style={{ padding: "16px", color: isSelected ? "rgba(255,255,255,0.9)" : "#4B5563" }}>
                            ₹{tier.sellingPrice.toFixed(2)}
                          </td>

                          <td style={{ padding: "16px", fontWeight: 700 }}>
                            ₹{tier.profitPerUnit.toFixed(2)}{" "}
                            <span style={{ fontSize: "12px", color: isSelected ? "#86EFAC" : "#16A34A" }}>
                              ({tier.marginPercent}%)
                            </span>
                          </td>

                          <td style={{ padding: "16px", textAlign: "right", fontWeight: 700, borderRadius: "0 10px 10px 0" }}>
                            {typeof tier.estProfit === "number" ? `₹${tier.estProfit.toLocaleString("en-IN")}` : tier.estProfit}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Exact Image 2: Step 7 Summary & Launch Bar */}
              <div
                style={{
                  marginTop: "20px",
                  display: "grid",
                  gridTemplateColumns: "220px 1fr 280px",
                  gap: "16px",
                  alignItems: "stretch",
                }}
                className="summary-launch-grid"
              >
                {/* Left Pill: Step 7 Summary */}
                <div
                  style={{
                    background: "#0D2619",
                    borderRadius: "18px",
                    padding: "22px 20px",
                    color: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#15803D",
                        color: "#FFFFFF",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "6px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "8px",
                      }}
                    >
                      STEP 7
                    </span>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", margin: "2px 0 4px" }}>
                      Summary
                    </h3>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                      Review your product and proceed.
                    </p>
                  </div>

                  <div style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "56px",
                        background: "#C29B38",
                        borderRadius: "6px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      }}
                    >
                      <div style={{ width: "24px", height: "6px", background: "#E5E7EB", borderRadius: "3px", position: "absolute", top: "-3px" }} />
                      <div style={{ width: "28px", height: "2px", background: "#78350F", margin: "2px 0" }} />
                      <div style={{ width: "28px", height: "2px", background: "#78350F", margin: "2px 0" }} />
                      <div style={{ width: "20px", height: "2px", background: "#78350F", margin: "2px 0" }} />
                    </div>
                  </div>
                </div>

                {/* Middle Panel: Your Product Summary */}
                <div
                  style={{
                    background: "#FAF8F5",
                    borderRadius: "18px",
                    border: "1px solid #E8E3DA",
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "16px" }}>
                      Your Product Summary
                    </h4>

                    {/* Selected Components Row */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      {/* Product */}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", color: "#15803D" }}>
                          🌿
                        </div>
                        <div>
                          <span style={{ fontSize: "11px", color: "#6B7280", display: "block" }}>Product</span>
                          <strong style={{ fontSize: "13px", color: "#111827" }}>Ashwagandha Capsules</strong>
                        </div>
                      </div>

                      {/* Formulation Cost */}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", color: "#15803D" }}>
                          ⏱️
                        </div>
                        <div>
                          <span style={{ fontSize: "11px", color: "#6B7280", display: "block" }}>Formulation Cost</span>
                          <strong style={{ fontSize: "13px", color: "#15803D" }}>₹{calculations.totalActiveCost.toFixed(2)} / Capsule</strong>
                        </div>
                      </div>

                      {/* Bottle */}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                          src={selectedBottle.image}
                          alt={selectedBottle.name}
                          style={{ width: "32px", height: "38px", objectFit: "contain", borderRadius: "4px" }}
                        />
                        <div>
                          <span style={{ fontSize: "11px", color: "#6B7280", display: "block" }}>Bottle</span>
                          <strong style={{ fontSize: "13px", color: "#111827" }}>{selectedBottle.name}</strong>
                        </div>
                      </div>

                      {/* Packaging */}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                          src={selectedOuter.image}
                          alt={selectedOuter.name}
                          style={{ width: "32px", height: "38px", objectFit: "contain", borderRadius: "4px" }}
                        />
                        <div>
                          <span style={{ fontSize: "11px", color: "#6B7280", display: "block" }}>Packaging</span>
                          <strong style={{ fontSize: "13px", color: "#111827" }}>{selectedOuter.name}</strong>
                        </div>
                      </div>

                      {/* Label */}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                          src={selectedLabel.image}
                          alt={selectedLabel.name}
                          style={{ width: "32px", height: "38px", objectFit: "contain", borderRadius: "4px" }}
                        />
                        <div>
                          <span style={{ fontSize: "11px", color: "#6B7280", display: "block" }}>Label</span>
                          <strong style={{ fontSize: "13px", color: "#111827" }}>{selectedLabel.name}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-card Bottom Financials */}
                  <div
                    style={{
                      marginTop: "16px",
                      paddingTop: "14px",
                      borderTop: "1px solid #E5E0D8",
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "28px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "11px", color: "#6B7280", display: "block" }}>Your Profit per Unit</span>
                      <strong style={{ fontSize: "17px", color: "#15803D" }}>
                        ₹{calculations.currentTier.profitPerUnit.toFixed(2)} ({calculations.currentTier.marginPercent}%)
                      </strong>
                    </div>
                    <div>
                      <span style={{ fontSize: "11px", color: "#6B7280", display: "block" }}>Total Investment</span>
                      <strong style={{ fontSize: "18px", color: "#15803D" }}>
                        ₹{calculations.totalInvestment.toLocaleString("en-IN")}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Ready to Launch? */}
                <div
                  style={{
                    background: "#FAF8F5",
                    borderRadius: "18px",
                    border: "1px solid #E8E3DA",
                    padding: "22px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", margin: 0 }}>
                          Ready to Launch?
                        </h4>
                        <p style={{ fontSize: "12px", color: "#4B5563", marginTop: "4px", lineHeight: 1.4 }}>
                          Get your free sample & start your brand
                        </p>
                      </div>

                      <div style={{ fontSize: "36px", lineHeight: 1 }}>
                        🚀
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setQuoteModalOpen(true)}
                    style={{
                      marginTop: "16px",
                      background: "#15803D",
                      color: "#FFFFFF",
                      border: "none",
                      borderRadius: "10px",
                      padding: "13px 20px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxShadow: "0 4px 14px rgba(21, 128, 61, 0.3)",
                    }}
                  >
                    Order Sample Now
                  </button>
                </div>
              </div>

              {/* Navigation & Primary CTA */}
              <div style={{ marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    border: "1px solid #D1D5DB",
                    background: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "#374151",
                  }}
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  style={{
                    background: "#15803D",
                    color: "#ffffff",
                    padding: "16px 32px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 6px 20px rgba(21, 128, 61, 0.35)",
                  }}
                >
                  Request Sample / Get Quote
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================
          QUOTE / SAMPLE REQUEST MODAL
         ======================================================== */}
      {quoteModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(13, 38, 25, 0.75)",
            backdropFilter: "blur(6px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              maxWidth: "560px",
              width: "100%",
              padding: "32px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => {
                setQuoteModalOpen(false);
                setQuoteSubmitted(false);
              }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "#F3F4F6",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#4B5563",
              }}
            >
              <X size={18} />
            </button>

            {!quoteSubmitted ? (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#15803D", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Sparkles size={18} />
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0D2619" }}>Get Custom Quote & Free Sample</h3>
                </div>
                <p style={{ fontSize: "14px", color: "#4B5563", marginBottom: "20px" }}>
                  Our formulation team at Zenon will review your formula, verify bioavailability, and courier a lab sample within 7 working days.
                </p>

                {/* Formulation Snapshot Pill */}
                <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "10px", padding: "12px 16px", marginBottom: "20px", fontSize: "13px", color: "#166534" }}>
                  <strong>Batch Order:</strong> {selectedMoq} Units • <strong>Unit Cost:</strong> ₹{calculations.currentTier.unitCost} • <strong>Container:</strong> {selectedBottle.name}
                </div>

                <form onSubmit={handleQuoteSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #D1D5DB",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                      Brand / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ZenHealth Wellness Labs"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #D1D5DB",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="founder@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #D1D5DB",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          border: "1px solid #D1D5DB",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                      Special Customization Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Vegetarian pullulan capsule shell, COA requirements, or delivery deadline."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #D1D5DB",
                        fontSize: "14px",
                        outline: "none",
                        resize: "none",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      marginTop: "10px",
                      background: "#15803D",
                      color: "#ffffff",
                      padding: "14px",
                      borderRadius: "10px",
                      fontSize: "15px",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxShadow: "0 4px 14px rgba(21, 128, 61, 0.3)",
                    }}
                  >
                    Submit Quotation & Sample Request
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 10px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#DCFCE7",
                    color: "#15803D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0D2619" }}>
                  Quotation & Sample Request Received!
                </h3>
                <p style={{ color: "#4B5563", fontSize: "14px", marginTop: "8px", lineHeight: "1.5" }}>
                  Thank you, <strong>{formData.fullName}</strong>. We have registered your custom formulation request for <strong>{formData.brandName}</strong>. Our chief formulation chemist will contact you on WhatsApp / email within 2 hours with the formal proforma invoice and sample tracking link.
                </p>

                <div style={{ marginTop: "24px", display: "flex", gap: "12px", justifyContent: "center" }}>
                  <button
                    onClick={() => {
                      setQuoteModalOpen(false);
                      setQuoteSubmitted(false);
                    }}
                    style={{
                      background: "#0D2619",
                      color: "#ffffff",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      border: "none",
                      fontWeight: 600,
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Close Builder
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
