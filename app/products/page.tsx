"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Star,
  ShieldCheck,
  Sparkles,
  Leaf,
  FlaskConical,
  HeartPulse,
  Truck,
  ShoppingBag,
  X,
  Lock,
  CheckCircle,
  Ban,
  Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data structures for 4 Powerful Ingredients per product
interface Ingredient {
  id: string;
  name: string;
  scientificName: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  dosage: string;
  benefits: string[];
}

interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  badge: string;
  image: string;
  keyHighlights: string[];
  badges: { label: string; icon: string }[];
  ingredients: Ingredient[];
  understandBenefits: string[];
}

const products: Record<string, Product> = {
  ashwagandha: {
    id: "ashwagandha",
    name: "Ashwagandha",
    category: "Botanical Adaptogen",
    tagline: "Natural Stress Relief & Strength Booster",
    subtitle: "Pure & Natural Root Extract • Standardized 5% Withanolides",
    price: 699,
    originalPrice: 1299,
    rating: 4.9,
    reviewCount: 1842,
    badge: "Top Seller",
    image: "/products/ashwagandha.jpg",
    keyHighlights: [
      "Reduces Stress & Anxiety (Lowers cortisol by up to 32%)",
      "Improves Stamina & Cardiorespiratory Output",
      "Enhances Strength & Muscle Recovery",
      "Supports Overall Wellness & Deep Restorative Sleep",
    ],
    badges: [
      { label: "100% Natural", icon: "leaf" },
      { label: "Lab Tested", icon: "flask" },
      { label: "No Added Sugar", icon: "ban" },
      { label: "Vegetarian", icon: "veg" },
    ],
    understandBenefits: [
      "Reduces Stress & Anxiety",
      "Improves Stamina",
      "Enhances Strength",
      "Supports Hormonal Balance",
      "Boosts Immunity",
    ],
    ingredients: [
      {
        id: "withania",
        name: "Withania Somnifera",
        scientificName: "Withania Somnifera Dunal",
        shortDesc: "Helps body adapt to stress and improves energy.",
        fullDesc:
          "A powerful adaptogen that helps the body manage stress, improves stamina, supports hormonal balance and promotes overall well-being.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        dosage: "600mg Standardized Extract",
        benefits: ["Reduces Stress & Anxiety", "Improves Sleep Quality", "Enhances Strength", "Supports Immune System"],
      },
      {
        id: "alkaloids",
        name: "Alkaloids",
        scientificName: "Bioactive Withanine & Somniferine",
        shortDesc: "Supports brain function and reduces anxiety.",
        fullDesc:
          "Natural nitrogenous active plant compounds that soothe neurological hyperactivity, promote calm cognitive clarity, and eliminate mental stress.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        dosage: "120mg Active Complex",
        benefits: ["Calms Nervous Overactivity", "Sharpens Cognitive Focus", "Promotes Emotional Stability", "Protects Brain Cells from Fatigue"],
      },
      {
        id: "saponins",
        name: "Saponins",
        scientificName: "Sitoindosides VII - X",
        shortDesc: "Boosts immunity and improves physical performance.",
        fullDesc:
          "High-potency botanical glycosides that stimulate immune phagocytosis, support cardiovascular blood flow, and enhance physical stamina under exertion.",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
        dosage: "85mg Active Glycosides",
        benefits: ["Elevates Macrophage Activity", "Increases Physical Endurance", "Accelerates Post-Exercise Recovery", "Fights Chronic Exhaustion"],
      },
      {
        id: "flavonoids",
        name: "Flavonoids",
        scientificName: "Plant Polyphenolic Antioxidants",
        shortDesc: "Powerful antioxidants that protect cells from damage.",
        fullDesc:
          "Potent botanical polyphenols that scavenge reactive oxygen species, shield mitochondrial membranes, and reduce systemic micro-inflammation.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        dosage: "45mg Plant Polyphenols",
        benefits: ["Scavenges Free Radicals", "Reduces Muscle Soreness", "Supports Cardiovascular Health", "Promotes Youthful Vitality"],
      },
    ],
  },
  shilajit: {
    id: "shilajit",
    name: "Shilajit",
    category: "Mineral Resin",
    tagline: "Boosts Energy & Stamina",
    subtitle: "Pure Himalayan Resin • >75% Fulvic Acid + 84 Ionic Trace Minerals",
    price: 899,
    originalPrice: 1599,
    rating: 4.95,
    reviewCount: 2410,
    badge: "Gold Grade",
    image: "/products/shilajit.jpg",
    keyHighlights: [
      "Boosts Cellular ATP Energy & Peak Physical Power",
      "Improves Stamina & Muscle Endurance",
      "Rich in 75%+ Active Fulvic Acid for Instant Absorption",
      "Replenishes 84+ Essential Ionic Minerals",
    ],
    badges: [
      { label: "100% Natural", icon: "leaf" },
      { label: "Lab Tested", icon: "flask" },
      { label: "No Added Sugar", icon: "ban" },
      { label: "Vegetarian", icon: "veg" },
    ],
    understandBenefits: [
      "Supercharges Cellular Energy",
      "Improves Stamina & Endurance",
      "Enhances Physical Strength",
      "Supports Hormonal Balance",
      "Boosts Natural Immunity",
    ],
    ingredients: [
      {
        id: "fulvic",
        name: "Fulvic Acid (75%+)",
        scientificName: "Bioactive Humic Substance",
        shortDesc: "Supercharges cellular nutrient transport and energy.",
        fullDesc:
          "A powerful organic electrolyte that penetrates mitochondrial membranes, transporting vital minerals directly into cells for explosive energy.",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
        dosage: "500mg Purified Himalayan Extract",
        benefits: ["Boosts Mitochondrial ATP Energy", "Accelerates Deep Nutrient Uptake", "Promotes Cellular Detoxification", "Reduces Physical & Mental Fatigue"],
      },
      {
        id: "minerals",
        name: "84+ Ionic Minerals",
        scientificName: "Macro & Micro Trace Spectrum",
        shortDesc: "Restores electrolyte balance and muscular endurance.",
        fullDesc: "Full spectrum of ionic zinc, magnesium, selenium, iron, and silica in micro-chelated bioavailable form.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        dosage: "Natural Ionic Blend",
        benefits: ["Prevents Muscle Cramping & Fatigue", "Strengthens Bones & Connective Tissue", "Promotes Restorative Sleep", "Restores Daily Electrolyte Balance"],
      },
      {
        id: "humic",
        name: "Humic Compounds",
        scientificName: "High Molecular Humic Matrix",
        shortDesc: "Potent natural detoxifier and gut protector.",
        fullDesc: "Natural botanical humic matrix that binds to environmental toxins, supports digestion, and enhances nutrient absorption in the gut.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        dosage: "150mg Purified Humates",
        benefits: ["Strengthens Digestive Mucosa", "Neutralizes Heavy Metal Residues", "Protects Beneficial Microflora", "Supports Metabolic Balance"],
      },
      {
        id: "dbp",
        name: "Dibenzo-Alpha-Pyrones",
        scientificName: "DBPs & Chromoproteins",
        shortDesc: "Protects and restores cellular CoQ10 levels.",
        fullDesc: "Rare bioactive compounds that shield muscle tissues against oxidative breakdown and sustain high-intensity physical performance.",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
        dosage: "65mg Bioactive Complex",
        benefits: ["Elevates Muscle CoQ10 Levels", "Accelerates Workout Recovery", "Supports Healthy Testosterone", "Enhances Cardiovascular Stamina"],
      },
    ],
  },
  mulethi: {
    id: "mulethi",
    name: "Mulethi",
    category: "Respiratory Medicine",
    tagline: "Good for Throat & Respiratory Health",
    subtitle: "Standardized Licorice Root Extract • Soothing Vocal & Gut Relief",
    price: 499,
    originalPrice: 899,
    rating: 4.85,
    reviewCount: 930,
    badge: "Throat Soothe",
    image: "/products/mulethi.jpg",
    keyHighlights: [
      "Soothes Sore Throat, Cough & Vocal Strain",
      "Clears Respiratory Airways of Sticky Phlegm",
      "Protects Stomach Mucosa from Hyper-Acidity",
      "Potent Botanical Antimicrobial & Expectorant Action",
    ],
    badges: [
      { label: "100% Natural", icon: "leaf" },
      { label: "Lab Tested", icon: "flask" },
      { label: "No Added Sugar", icon: "ban" },
      { label: "Vegetarian", icon: "veg" },
    ],
    understandBenefits: [
      "Soothes Sore Throat & Cough",
      "Clears Respiratory Airways",
      "Protects Stomach Mucosa",
      "Balances Digestive Acidity",
      "Boosts Natural Immunity",
    ],
    ingredients: [
      {
        id: "glycyrrhizin",
        name: "Glycyrrhizin (20%+)",
        scientificName: "Glycyrrhiza Glabra Extract",
        shortDesc: "Coats mucous membranes and eases throat discomfort.",
        fullDesc: "A natural botanical saponin that coats irritated vocal membranes, breaks up phlegm, and eases chronic dry coughing.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        dosage: "450mg Standardized Extract",
        benefits: ["Relieves Sore Throat & Hoarseness", "Soothes Acid Reflux & Gastritis", "Calms Persistent Coughing", "Strengthens Mucosal Barrier"],
      },
      {
        id: "liquiritin",
        name: "Liquiritin & Isoliquiritin",
        scientificName: "Flavonoid Glycosides",
        shortDesc: "Relaxes bronchial airways and soothes spasms.",
        fullDesc: "Natural flavonoid glycosides with strong spasmolytic and anti-inflammatory properties that open bronchial airways.",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
        dosage: "80mg Bioactive Matrix",
        benefits: ["Opens Constricted Airways", "Relieves Chest Tightness", "Eases Seasonal Allergy Symptoms", "Promotes Clear Breathing"],
      },
      {
        id: "glabridin",
        name: "Glabridin Bio-flavonoid",
        scientificName: "Polyphenolic Isoflavane",
        shortDesc: "Protects against throat & digestive inflammation.",
        fullDesc: "One of the most potent plant-derived antioxidants that protects pharyngeal and esophageal tissues from acid wear.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        dosage: "35mg Glabridin Extract",
        benefits: ["Neutralizes Gastric Acid Damage", "Calms Systemic Inflammation", "Protects Cellular DNA", "Supports Liver Health"],
      },
      {
        id: "mucilage",
        name: "Plant Mucilage",
        scientificName: "Natural Polysaccharides",
        shortDesc: "Creates a gentle protective shield over tissues.",
        fullDesc: "Water-soluble plant fibers that form an instant protective liquid barrier along the throat and stomach lining.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        dosage: "120mg Plant Polysaccharides",
        benefits: ["Immediate Soothing Coating", "Eases Painful Swallowing", "Balances Stomach Acid", "Nourishes Gut Flora"],
      },
    ],
  },
  supplements: {
    id: "supplements",
    name: "Multivitamin & Zinc",
    category: "Clinical Micronutrient Medicine",
    tagline: "Immunity, Vitality & Cellular Defense",
    subtitle: "24 Bioactive Vitamins & Chelated Minerals • High Potency Zinc & Methylated B-Complex",
    price: 649,
    originalPrice: 1199,
    rating: 4.9,
    reviewCount: 1120,
    badge: "Immune Shield",
    image: "/products/supplements.jpg",
    keyHighlights: [
      "24 Essential Bioavailable Vitamins & Chelated Zinc",
      "Sustained All-Day Cellular Energy & Immune Defense",
      "Zinc Bisglycinate + Active Vitamin C & Vegan D3",
      "Zero Artificial Fillers, Heavy Metals or Synthetic Colors",
    ],
    badges: [
      { label: "100% Natural", icon: "leaf" },
      { label: "Lab Tested", icon: "flask" },
      { label: "No Added Sugar", icon: "ban" },
      { label: "Vegetarian", icon: "veg" },
    ],
    understandBenefits: [
      "Supercharges Cellular Immunity",
      "Eliminates Daytime Fatigue",
      "Sharpens Cognitive Clarity",
      "Accelerates Muscle Recovery",
      "Fortifies Bone & Joint Health",
    ],
    ingredients: [
      {
        id: "zinc",
        name: "Zinc Bisglycinate Complex",
        scientificName: "Chelated Amino Acid Complex",
        shortDesc: "Highly absorbable chelated mineral for peak immunity.",
        fullDesc: "Gentle amino-acid bound zinc that fuels testosterone synthesis, white blood cell activity, and rapid tissue healing.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        dosage: "25mg Elemental Zinc",
        benefits: ["Strengthens Innate Immune Defense", "Accelerates Muscle Recovery", "Supports Healthy Hormone Levels", "Prevents Daily Nutrient Depletion"],
      },
      {
        id: "bcomplex",
        name: "Methylated B-Complex",
        scientificName: "Bioactive Coenzyme Vitamins",
        shortDesc: "Fuels cellular energy and eliminates mental fatigue.",
        fullDesc: "Pre-methylated folate (5-MTHF) and methylcobalamin B12 that convert carbohydrates and proteins directly into cellular ATP.",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
        dosage: "High Potency B-Spectrum",
        benefits: ["Eliminates Afternoon Energy Crashes", "Sharpens Mental Alertness", "Enhances Red Blood Cell Oxygenation", "Nurtures Healthy Nervous System"],
      },
      {
        id: "vitd3k2",
        name: "Vegan Vitamin D3 + K2",
        scientificName: "Lichen D3 + MK-7 Menaquinone",
        shortDesc: "Synergistic duo for strong bones and heart health.",
        fullDesc: "Plant-derived cholecalciferol combined with natural fermented Menaquinone-7 to direct calcium into bones, not arteries.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        dosage: "2000 IU D3 + 55mcg K2",
        benefits: ["Maximizes Calcium Bone Deposition", "Elevates Mood and Vitality", "Supports Immune Cell Signaling", "Promotes Vascular Flexibility"],
      },
      {
        id: "adaptogens",
        name: "Botanical Adaptogen Blend",
        scientificName: "Piperine & Bio-enhancers",
        shortDesc: "Combats daily oxidative stress & athletic fatigue.",
        fullDesc: "Standardized herbal actives including Piperine for 2000% increased nutrient absorption and sustained daily physical endurance.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        dosage: "100mg Bioactive Matrix",
        benefits: ["Multiplies Micronutrient Uptake", "Fights Exercise-Induced Soreness", "Balances Adrenal Response", "Promotes Longevity & Vigor"],
      },
    ],
  },
  triphala: {
    id: "triphala",
    name: "Triphala Guggulu",
    category: "Clinical Detox Medicine",
    tagline: "Natural Detox & Cholesterol Control",
    subtitle: "Classical Ayurvedic Formulation for Deep Colon Cleanse & Lipid Regulation",
    price: 549,
    originalPrice: 999,
    rating: 4.92,
    reviewCount: 1460,
    badge: "Colon Cleanse",
    image: "/products/triphala.jpg",
    keyHighlights: [
      "Promotes Deep Colon Cleansing & Healthy Regularity",
      "Helps Regulate LDL Cholesterol & Serum Lipids",
      "Relieves Joint Stiffness & Systemic Inflammation",
      "Stimulates Metabolic Digestive Fire (Agni)",
    ],
    badges: [
      { label: "100% Natural", icon: "leaf" },
      { label: "Lab Tested", icon: "flask" },
      { label: "No Added Sugar", icon: "ban" },
      { label: "Vegetarian", icon: "veg" },
    ],
    understandBenefits: [
      "Deep Colon Detoxification",
      "Regulates Lipid & Cholesterol",
      "Relieves Joint Stiffness",
      "Boosts Metabolic Digestion",
      "Supports Healthy Liver",
    ],
    ingredients: [
      {
        id: "amalaki",
        name: "Amalaki Extract",
        scientificName: "Emblica Officinalis",
        shortDesc: "Richest botanical source of Vitamin C and antioxidants.",
        fullDesc: "Potent rejuvenating rasayana that protects gut mucosal membranes, supports cellular immunity, and neutralizes free radicals.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        dosage: "250mg Pure Extract",
        benefits: ["High Vitamin C Immune Shield", "Enhances Digestive Absorption", "Rejuvenates Liver Tissue", "Promotes Longevity"],
      },
      {
        id: "bibhitaki",
        name: "Bibhitaki Extract",
        scientificName: "Terminalia Bellirica",
        shortDesc: "Clears excess mucus, toxins, and internal congestion.",
        fullDesc: "Detoxifying fruit extract with powerful astringent qualities that breaks down stubborn mucosal toxins in the respiratory and GI tract.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        dosage: "250mg Pure Extract",
        benefits: ["Clears Respiratory Phlegm", "Detoxifies Blood Vessels", "Eliminates Internal Toxins", "Supports Gut Flora"],
      },
      {
        id: "haritaki",
        name: "Haritaki Extract",
        scientificName: "Terminalia Chebula",
        shortDesc: "The King of Medicines for complete colon harmony.",
        fullDesc: "Gentle natural bowel regulator that stimulates peristalsis without causing dependency, cramping, or loose stools.",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
        dosage: "250mg Pure Extract",
        benefits: ["Stimulates Healthy Peristalsis", "Balances Stomach Acidity", "Promotes Nutrient Assimilation", "Soothes Gut Spasms"],
      },
      {
        id: "guggulu",
        name: "Shuddha Guggulu",
        scientificName: "Commiphora Mukul Resin",
        shortDesc: "Standardized guggulsterones for healthy lipid metabolism.",
        fullDesc: "Purified resin rich in E- and Z-Guggulsterones that optimize cholesterol binding and alleviate joint swelling.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        dosage: "250mg Purified Resin",
        benefits: ["Optimizes HDL/LDL Balance", "Relieves Arthritis Pain", "Supports Thyroid Metabolism", "Cleanses Arterial Channels"],
      },
    ],
  },
  brahmi: {
    id: "brahmi",
    name: "Brahmi Shankhpushpi",
    category: "Neuro-Cognitive Medicine",
    tagline: "Brain Vitality, Memory & Calm Focus",
    subtitle: "Standardized Medhya Rasayana • 50% Bacosides for Cognitive Sharpness",
    price: 649,
    originalPrice: 1199,
    rating: 4.96,
    reviewCount: 1890,
    badge: "Brain Focus",
    image: "/products/brahmi.jpg",
    keyHighlights: [
      "Enhances Memory Retention & Rapid Recall",
      "Calms Mental Anxiety & Nervous Exhaustion",
      "Sharpens Concentration During Long Cognitive Tasks",
      "Protects Neural Synapses Against Oxidative Fatigue",
    ],
    badges: [
      { label: "100% Natural", icon: "leaf" },
      { label: "Lab Tested", icon: "flask" },
      { label: "No Added Sugar", icon: "ban" },
      { label: "Vegetarian", icon: "veg" },
    ],
    understandBenefits: [
      "Enhances Memory & Recall",
      "Calms Nervous Anxiety",
      "Sharpens Brain Focus",
      "Protects Synaptic Transmitters",
      "Promotes Deep Mental Calm",
    ],
    ingredients: [
      {
        id: "bacopa",
        name: "Bacopa Monnieri (50% Bacosides)",
        scientificName: "Bacopa Monnieri Leaf Extract",
        shortDesc: "Crosses blood-brain barrier to repair neural synapses.",
        fullDesc: "Standardized Bacosides A & B that stimulate kinase activity, accelerating synaptic impulse transmission for swift mental processing.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        dosage: "300mg Standardized Extract",
        benefits: ["Sharpens Memory Retention", "Repairs Damaged Neurons", "Enhances Verbal Recall", "Suppresses Mental Fog"],
      },
      {
        id: "shankhpushpi",
        name: "Shankhpushpi Extract",
        scientificName: "Convolvulus Pluricaulis",
        shortDesc: "Classical Ayurvedic brain tonic that quiets mental chatter.",
        fullDesc: "Potent medhya herb that normalizes cortisol spikes and stimulates calm alpha brain waves for tranquil focus.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        dosage: "200mg Botanical Extract",
        benefits: ["Calms Mental Restlessness", "Supports Sound Sleep Quality", "Relieves Work Stress & Tension", "Nourishes Nervous Tissue"],
      },
      {
        id: "gotukola",
        name: "Gotu Kola Extract",
        scientificName: "Centella Asiatica",
        shortDesc: "Known as the Herb of Longevity for cerebral micro-circulation.",
        fullDesc: "Triterpenoid asiaticosides that expand cerebral capillary oxygenation, preventing mental fatigue during intensive tasks.",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
        dosage: "150mg Triterpene Complex",
        benefits: ["Increases Cerebral Blood Flow", "Reduces Mental Burnout", "Supports Collagen in Vessels", "Enhances Alertness"],
      },
      {
        id: "jyotishmati",
        name: "Jyotishmati Extract",
        scientificName: "Celastrus Paniculatus",
        shortDesc: "The Intellect Tree extract for lightning-fast memory.",
        fullDesc: "Rare seed bioactives that elevate acetylcholine levels in the hippocampus, boosting processing speed and cognitive stamina.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        dosage: "100mg Active Seed Extract",
        benefits: ["Elevates Acetylcholine Levels", "Improves Critical Reasoning", "Protects Brain Cells", "Enhances Cognitive Endurance"],
      },
    ],
  },
  karela: {
    id: "karela",
    name: "Karela Jamun & Giloy",
    category: "Glucose & Pancreas Medicine",
    tagline: "Blood Sugar Balance & Pancreatic Health",
    subtitle: "Standardized Botanical Formula • Charantin + Polypeptide-P Complex",
    price: 599,
    originalPrice: 1099,
    rating: 4.88,
    reviewCount: 1620,
    badge: "Glucose Control",
    image: "/products/karela.jpg",
    keyHighlights: [
      "Regulates Fasting & Postprandial Blood Glucose",
      "Supports Pancreatic Beta-Cell Insulin Sensitivity",
      "Suppresses Stubborn Carbohydrate & Sugar Cravings",
      "Purifies Blood Toxins & Boosts Metabolic Stamina",
    ],
    badges: [
      { label: "100% Natural", icon: "leaf" },
      { label: "Lab Tested", icon: "flask" },
      { label: "No Added Sugar", icon: "ban" },
      { label: "Vegetarian", icon: "veg" },
    ],
    understandBenefits: [
      "Balances Healthy Glucose",
      "Enhances Insulin Sensitivity",
      "Curbs Sugar Cravings",
      "Detoxifies Blood & Liver",
      "Prevents Diabetic Fatigue",
    ],
    ingredients: [
      {
        id: "charantin",
        name: "Momordica Charantia (Charantin)",
        scientificName: "Bitter Melon Fruit Extract",
        shortDesc: "Plant insulin analog that drives glucose uptake into cells.",
        fullDesc: "Bioactive Charantin and Polypeptide-P act like natural insulin, facilitating glucose transport into muscular tissue.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        dosage: "300mg Standardized Charantin",
        benefits: ["Lowers High Blood Glucose", "Facilitates Cellular Glycogen", "Supports Healthy Weight", "Reduces Sugar Spikes"],
      },
      {
        id: "jamun",
        name: "Jamun Seed Extract",
        scientificName: "Syzygium Cumini Seed",
        shortDesc: "Jamboline converts starch into energy instead of sugar.",
        fullDesc: "Natural glycoside Jamboline slows down the enzymatic conversion of dietary starches into free sugars in the bloodstream.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        dosage: "250mg Active Seed Extract",
        benefits: ["Prevents Post-Meal Sugar Surges", "Protects Kidney & Liver Health", "Rich in Ellagic Acid", "Reduces Frequent Urination"],
      },
      {
        id: "giloy",
        name: "Giloy (Tinospora Cordifolia)",
        scientificName: "Guduchi Stem Extract",
        shortDesc: "Rasayana herb that protects organs against diabetic fatigue.",
        fullDesc: "Immuno-modulatory cordifolioside that rejuvenates pancreatic islet cells and shields blood vessels from oxidative glycation.",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
        dosage: "200mg Stem Extract",
        benefits: ["Rejuvenates Pancreatic Tissue", "Purifies Blood Toxins", "Strengthens Immunity", "Relieves Chronic Lethargy"],
      },
      {
        id: "gurmar",
        name: "Gurmar (Gymnema Sylvestre)",
        scientificName: "Gymnemic Acid Complex",
        shortDesc: "The Sugar Destroyer that blocks intestinal sugar absorption.",
        fullDesc: "Gymnemic acids occupy glucose receptors on the tongue and intestinal wall, eliminating sugar cravings instantly.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        dosage: "150mg Standardized Leaves",
        benefits: ["Blocks Intestinal Sugar Absorption", "Suppresses Sweet Food Cravings", "Supports Healthy HbA1c", "Regulates Lipid Profiles"],
      },
    ],
  },
  curcumin: {
    id: "curcumin",
    name: "Curcumin & Boswellia",
    category: "Joint & Pain Medicine",
    tagline: "Joint Flexibility & Rapid Pain Relief",
    subtitle: "Standardized 95% Curcuminoids + AKBA 30% for Natural Anti-Inflammatory Action",
    price: 749,
    originalPrice: 1399,
    rating: 4.94,
    reviewCount: 2150,
    badge: "Pain Relief",
    image: "/products/curcumin.jpg",
    keyHighlights: [
      "Fast Relief from Knee, Back & Joint Inflammation",
      "Standardized 95% Curcuminoids + AKBA 30% Boswellia",
      "Rebuilds Joint Synovial Fluid & Cartilage Cushion",
      "Zero Stomach Irritation or NSAID Side-Effects",
    ],
    badges: [
      { label: "100% Natural", icon: "leaf" },
      { label: "Lab Tested", icon: "flask" },
      { label: "No Added Sugar", icon: "ban" },
      { label: "Vegetarian", icon: "veg" },
    ],
    understandBenefits: [
      "Relieves Chronic Joint Pain",
      "Restores Knee Flexibility",
      "Inhibits COX-2 & 5-LOX",
      "Rebuilds Joint Cartilage",
      "100% Safe on Stomach & Heart",
    ],
    ingredients: [
      {
        id: "curcumin95",
        name: "Curcuma Longa (95% Curcuminoids)",
        scientificName: "Standardized Turmeric Extract",
        shortDesc: "Gold-standard plant antioxidant for joint inflammation.",
        fullDesc: "Standardized to 95% Curcumin, Demethoxycurcumin & Bisdemethoxycurcumin to inhibit NF-kB inflammatory cytokines.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        dosage: "450mg Standardized Extract",
        benefits: ["Inhibits Inflammatory Pathways", "Soothes Swollen Arthritic Joints", "Protects Cartilage Tissue", "Potent Antioxidant Shield"],
      },
      {
        id: "boswellia",
        name: "Boswellia Serrata (AKBA 30%)",
        scientificName: "Shallaki Frankincense Gum Resin",
        shortDesc: "Fast-acting frankincense resin that halts joint degeneration.",
        fullDesc: "Standardized Acetyl-11-Keto-Beta-Boswellic Acid (AKBA) selectively inhibits 5-LOX enzyme without mucosal damage.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        dosage: "250mg Purified Resin",
        benefits: ["Inhibits 5-LOX Inflammatory Enzyme", "Prevents Cartilage Breakdown", "Increases Walking Distance", "Rapid Pain Reduction"],
      },
      {
        id: "piperine",
        name: "Black Pepper Extract (Piperine 95%)",
        scientificName: "Piper Nigrum Extract",
        shortDesc: "Increases Curcumin absorption by over 2000%.",
        fullDesc: "Thermogenic alkaloid that inhibits hepatic glucuronidation, enabling maximum systemic bioavailability of joint bioactives.",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
        dosage: "10mg Bio-Enhancer",
        benefits: ["Multiplies Curcumin Absorption 20x", "Enhances Cellular Bioavailability", "Aids Thermogenic Metabolism", "Prevents Liver Clearance"],
      },
      {
        id: "gingerol",
        name: "Zingiber Officinale (Gingerol 5%)",
        scientificName: "Sunthi Dried Ginger Extract",
        shortDesc: "Natural circulatory stimulant that eases morning stiffness.",
        fullDesc: "Active gingerols provide synergistic analgesic relief, boosting blood supply to cold, stiff cartilage and joints.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
        dosage: "100mg Standardized Extract",
        benefits: ["Relieves Morning Joint Stiffness", "Improves Synovial Blood Flow", "Soothes Digestion", "Aids Musculoskeletal Comfort"],
      },
    ],
  },
};

export default function ProductsPage() {
  const [selectedProdId, setSelectedProdId] = useState<string>("ashwagandha");
  const currentProduct = products[selectedProdId] || products.ashwagandha;

  const [activeIngredientIdx, setActiveIngredientIdx] = useState(0);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Cart & Checkout
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout" | "success">("cart");
  const [quantity, setQuantity] = useState(1);
  const [couponApplied, setCouponApplied] = useState(false);

  // State for inline modal checkout & cart
  const [inlineModalPaid, setInlineModalPaid] = useState(false);
  const [inlineAddedToCart, setInlineAddedToCart] = useState(false);

  const [deliveryForm, setDeliveryForm] = useState({
    name: "Aditya Sharma",
    mobile: "98765 43210",
    address: "Flat 402, Green Glen Layout, Bellandur",
    pincode: "560103",
    paymentMethod: "razorpay",
  });

  const modalScrollRef = useRef<HTMLDivElement>(null);
  const deepDiveSectionRef = useRef<HTMLDivElement>(null);
  const productsGridRef = useRef<HTMLDivElement>(null);

  const handleOpenProductModal = (productId: string) => {
    setSelectedProdId(productId);
    setActiveIngredientIdx(0);
    setInlineModalPaid(false);
    setInlineAddedToCart(false);
    setIsProductModalOpen(true);
  };

  const handleExploreIngredientInModal = (idx: number) => {
    setActiveIngredientIdx(idx);
    deepDiveSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNextIngredient = () => {
    setActiveIngredientIdx((prev) => (prev + 1) % currentProduct.ingredients.length);
  };

  const handlePrevIngredient = () => {
    setActiveIngredientIdx((prev) =>
      prev === 0 ? currentProduct.ingredients.length - 1 : prev - 1
    );
  };

  const basePrice = currentProduct.price * quantity;
  const discountAmount = couponApplied ? Math.round(basePrice * 0.15) : 0;
  const finalPrice = basePrice - discountAmount;

  const currentIngredient = currentProduct.ingredients[activeIngredientIdx] || currentProduct.ingredients[0];

  return (
    <main style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #ffffff 40%, #f8fafc 100%)", minHeight: "100vh", color: "#071e33", fontFamily: "var(--font-manrope), sans-serif" }}>
      <Navbar />

      <div style={{ paddingTop: "76px" }}>
        
        {/* ======================================================== */}
        {/* HERO BANNER - Sleek Bluish Clinical Science Theme        */}
        {/* ======================================================== */}
        <section style={{ maxWidth: "1240px", margin: "20px auto 0", padding: "0 4.5vw" }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              padding: "clamp(32px, 6vw, 64px)",
              background: "linear-gradient(135deg, #071e33 0%, #0c2b4d 50%, #0066cc 100%)",
              boxShadow: "0 20px 45px rgba(0, 102, 204, 0.18)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
            }}
          >
            {/* Ambient Radial Blue Glowing Orbs */}
            <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(0, 102, 204, 0) 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-60px", left: "25%", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, rgba(0, 102, 204, 0) 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 2, maxWidth: "620px" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(56, 189, 248, 0.12)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  color: "#38bdf8",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: 800,
                  marginBottom: "18px",
                  letterSpacing: "0.05em",
                }}
              >
                <Sparkles size={14} color="#38bdf8" />
                <span>CLINICAL AYURVEDA & MOLECULAR SCIENCE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(34px, 5.5vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "16px",
                }}
              >
                Nourish.<br />
                Strengthen.<br />
                <span style={{ background: "linear-gradient(90deg, #38bdf8 0%, #93c5fd 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Thrive Clinically.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  color: "#e0f2fe",
                  fontSize: "clamp(15px, 2vw, 17px)",
                  lineHeight: 1.6,
                  marginBottom: "28px",
                  maxWidth: "480px",
                }}
              >
                Standardized herbal medicines and active bio-extracts validated for cellular absorption, longevity, and clinical efficacy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}
              >
                <button
                  onClick={() => productsGridRef.current?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    padding: "14px 34px",
                    background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "100px",
                    fontSize: "15px",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 10px 25px rgba(2, 132, 199, 0.35)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px) scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
                >
                  <span>Explore Formulations</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => handleOpenProductModal("ashwagandha")}
                  style={{
                    padding: "13px 26px",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: "100px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)")}
                >
                  Featured Medicine: Ashwagandha
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* CIRCULAR CATEGORIES ROW - Real Photos in Bluish Rings    */}
        {/* ======================================================== */}
        <section style={{ maxWidth: "1240px", margin: "40px auto 0", padding: "0 4.5vw" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#0066cc", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Quick Formula Select
            </span>
            <span style={{ fontSize: "12px", color: "#64748b" }}>
              8 Formulations
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
              overflowX: "auto",
              paddingBottom: "12px",
              paddingTop: "6px",
            }}
          >
            {Object.values(products).map((prod) => {
              const isSelected = prod.id === selectedProdId;
              return (
                <motion.div
                  key={prod.id}
                  onClick={() => handleOpenProductModal(prod.id)}
                  whileHover={{ y: -6, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                    minWidth: "95px",
                  }}
                >
                  <div
                    style={{
                      width: "82px",
                      height: "82px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: isSelected ? "3px solid #0066cc" : "2px solid #dbeafe",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isSelected
                        ? "0 8px 22px rgba(0, 102, 204, 0.25)"
                        : "0 4px 14px rgba(7, 30, 51, 0.06)",
                      position: "relative",
                      transition: "all 0.2s",
                    }}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <span
                    style={{
                      marginTop: "8px",
                      fontSize: "12.5px",
                      fontWeight: isSelected ? 800 : 700,
                      color: isSelected ? "#0066cc" : "#1e293b",
                      textAlign: "center",
                    }}
                  >
                    {prod.name.split(" ")[0]}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* TRUST STRIP                                              */}
        {/* ======================================================== */}
        <section style={{ maxWidth: "1240px", margin: "30px auto 0", padding: "0 4.5vw" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dbeafe",
              borderRadius: "24px",
              padding: "26px 30px",
              boxShadow: "0 6px 25px rgba(0, 102, 204, 0.05)",
              textAlign: "center",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0066cc", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
              <ShieldCheck size={15} />
              <span>Pharma-Grade Guarantee</span>
            </div>
            <h3
              style={{
                fontSize: "clamp(20px, 2.8vw, 25px)",
                fontWeight: 800,
                color: "#071e33",
                marginBottom: "22px",
                letterSpacing: "-0.01em",
              }}
            >
              Nature&apos;s Purest Actives. Proven by Molecular Science.
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", border: "1.5px solid #bae6fd", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f9ff" }}>
                  <Leaf size={22} />
                </div>
                <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#071e33" }}>100% Bioactive</span>
                <span style={{ fontSize: "11px", color: "#64748b" }}>Zero synthetic additives</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", border: "1.5px solid #bae6fd", color: "#0066cc", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f9ff" }}>
                  <FlaskConical size={22} />
                </div>
                <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#071e33" }}>Clinical Lab Tested</span>
                <span style={{ fontSize: "11px", color: "#64748b" }}>HPLC verified potency</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", border: "1.5px solid #bae6fd", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f9ff" }}>
                  <ShieldCheck size={22} />
                </div>
                <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#071e33" }}>GMP Certified</span>
                <span style={{ fontSize: "11px", color: "#64748b" }}>Pharma facility safety</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", border: "1.5px solid #bae6fd", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f9ff" }}>
                  <Truck size={22} />
                </div>
                <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#071e33" }}>Cold-Chain Delivery</span>
                <span style={{ fontSize: "11px", color: "#64748b" }}>Dispatched in 24 Hours</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* "OUR PRODUCTS" 8-CARD MEDICINE CATALOG                   */}
        {/* Real Commercial Photography + Bluish UI & Animations     */}
        {/* ======================================================== */}
        <section ref={productsGridRef} style={{ maxWidth: "1240px", margin: "65px auto 90px", padding: "0 4.5vw" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#e0f2fe", color: "#0284c7", padding: "4px 14px", borderRadius: "100px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
              <Sparkles size={13} />
              <span>Evidence-Led Pharmacy</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: "#071e33",
                marginBottom: "8px",
                letterSpacing: "-0.02em",
              }}
            >
              Our Clinical Products
            </h2>
            <p style={{ fontSize: "16px", color: "#475569", maxWidth: "600px", margin: "0 auto" }}>
              Backed by Nature, Proven by Science • Click any product to launch the interactive journey modal
            </p>
          </div>

          {/* Responsive 8-Product Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "26px",
            }}
          >
            {Object.values(products).map((prod, index) => (
              <motion.div
                key={prod.id}
                onClick={() => handleOpenProductModal(prod.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "#ffffff",
                  borderRadius: "26px",
                  border: "1.5px solid #dbeafe",
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(0, 102, 204, 0.05)",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0066cc";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 102, 204, 0.16)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#dbeafe";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 102, 204, 0.05)";
                }}
              >
                {/* Top Badge: Best Seller / Clinical */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(2, 132, 199, 0.1)",
                    color: "#0284c7",
                    border: "1px solid rgba(2, 132, 199, 0.25)",
                    padding: "3px 10px",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    zIndex: 2,
                  }}
                >
                  {prod.badge}
                </div>

                {/* Rating Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#071e33",
                    background: "#ffffff",
                    padding: "3px 8px",
                    borderRadius: "100px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    zIndex: 2,
                  }}
                >
                  <Star size={12} fill="#eab308" color="#eab308" />
                  <span>{prod.rating}</span>
                </div>

                {/* Real Commercial Product Photography Container */}
                <div
                  style={{
                    height: "210px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "6px 0 16px",
                    borderRadius: "18px",
                    overflow: "hidden",
                    background: "#f8fafc",
                    position: "relative",
                  }}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </div>

                {/* Category tag */}
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#0066cc",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                  }}
                >
                  {prod.category}
                </span>

                {/* Product Title */}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#071e33",
                    marginBottom: "6px",
                    lineHeight: 1.25,
                  }}
                >
                  {prod.name}
                </h3>

                {/* Tagline */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "#475569",
                    lineHeight: 1.45,
                    marginBottom: "18px",
                    minHeight: "38px",
                  }}
                >
                  {prod.tagline}
                </p>

                {/* Price block */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "22px", fontWeight: 900, color: "#071e33" }}>
                    ₹{prod.price}
                  </span>
                  <span style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "line-through" }}>
                    ₹{prod.originalPrice}
                  </span>
                  <span style={{ background: "#e0f2fe", color: "#0284c7", fontSize: "11px", fontWeight: 800, padding: "2px 8px", borderRadius: "100px" }}>
                    SAVE 46%
                  </span>
                </div>

                {/* Bluish Gradient "View Details" Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)",
                    color: "#ffffff",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 6px 18px rgba(0, 102, 204, 0.25)",
                  }}
                >
                  <span>View Details & Journey</span>
                  <ArrowRight size={15} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* FULL PRODUCT JOURNEY MODAL                               */}
        {/* ======================================================== */}
        <AnimatePresence>
          {isProductModalOpen && (
            <div style={{ position: "fixed", inset: 0, zIndex: 110, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(10px, 2.5vw, 24px)" }}>
              {/* Backdrop with Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsProductModalOpen(false)}
                style={{ position: "absolute", inset: 0, background: "rgba(7, 21, 38, 0.75)", backdropFilter: "blur(10px)" }}
              />

              {/* Modal Card */}
              <motion.div
                ref={modalScrollRef}
                initial={{ opacity: 0, scale: 0.94, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 25 }}
                transition={{ type: "spring", damping: 26, stiffness: 280 }}
                style={{
                  position: "relative",
                  background: "linear-gradient(180deg, #f0f7ff 0%, #ffffff 25%, #f8fafc 100%)",
                  borderRadius: "30px",
                  maxWidth: "980px",
                  width: "100%",
                  maxHeight: "92vh",
                  overflowY: "auto",
                  boxShadow: "0 25px 80px rgba(0, 50, 120, 0.4)",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  border: "1.5px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                {/* Sticky Header with Bluish Glass Bar */}
                <div
                  style={{
                    position: "sticky",
                    top: 0,
                    background: "rgba(255, 255, 255, 0.96)",
                    backdropFilter: "blur(16px)",
                    borderBottom: "1px solid #dbeafe",
                    padding: "14px 26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    zIndex: 10,
                    borderRadius: "30px 30px 0 0",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#e0f2fe", color: "#0066cc", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Activity size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: "16px", fontWeight: 800, color: "#071e33" }}>
                        {currentProduct.name}
                      </span>
                      <span style={{ fontSize: "12px", color: "#0284c7", fontWeight: 700, marginLeft: "8px" }}>
                        ₹{currentProduct.price}.00
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      onClick={() => {
                        setCheckoutStep("checkout");
                        setIsCartOpen(true);
                      }}
                      style={{
                        padding: "8px 20px",
                        background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontWeight: 800,
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0, 102, 204, 0.25)",
                      }}
                    >
                      Instant Buy Now
                    </button>

                    <button
                      onClick={() => setIsProductModalOpen(false)}
                      style={{
                        background: "#f1f5f9",
                        border: "none",
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: "#475569",
                      }}
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div style={{ padding: "clamp(20px, 4vw, 40px)", display: "flex", flexDirection: "column", gap: "45px" }}>
                  
                  {/* ==================================================== */}
                  {/* PRODUCT OVERVIEW SECTION                             */}
                  {/* ==================================================== */}
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "24px",
                      border: "1px solid #dbeafe",
                      padding: "clamp(22px, 4vw, 38px)",
                      boxShadow: "0 6px 20px rgba(0, 102, 204, 0.04)",
                    }}
                  >
                    <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "22px" }}>
                      <span>Home</span> &gt; <span style={{ color: "#0066cc", fontWeight: 700 }}>{currentProduct.name}</span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "36px", alignItems: "center" }}>
                      {/* Real Image Container */}
                      <div
                        style={{
                          borderRadius: "22px",
                          background: "#f0f7ff",
                          border: "1.5px solid #bae6fd",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minHeight: "330px",
                          maxHeight: "380px",
                        }}
                      >
                        <img
                          src={currentProduct.image}
                          alt={currentProduct.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            maxHeight: "380px",
                          }}
                        />
                      </div>

                      {/* Details */}
                      <div>
                        <div style={{ display: "inline-block", background: "#e0f2fe", color: "#0284c7", padding: "4px 12px", borderRadius: "100px", fontSize: "11.5px", fontWeight: 800, textTransform: "uppercase", marginBottom: "8px" }}>
                          {currentProduct.category}
                        </div>

                        <h2 style={{ fontSize: "clamp(28px, 3.8vw, 38px)", fontWeight: 900, color: "#071e33", marginBottom: "6px", lineHeight: 1.15 }}>
                          {currentProduct.name}
                        </h2>

                        <p style={{ fontSize: "16px", color: "#0066cc", fontWeight: 700, marginBottom: "18px" }}>
                          {currentProduct.tagline}
                        </p>

                        {/* 4 Bluish Checkmarks */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "22px" }}>
                          {currentProduct.keyHighlights.map((hl, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#1e293b", fontWeight: 600 }}>
                              <div style={{ background: "#0066cc", color: "#ffffff", borderRadius: "50%", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Check size={11} strokeWidth={3} />
                              </div>
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                          <span style={{ fontSize: "34px", fontWeight: 900, color: "#071e33" }}>
                            ₹{currentProduct.price}.00
                          </span>
                          <span style={{ fontSize: "16px", color: "#94a3b8", textDecoration: "line-through" }}>
                            ₹{currentProduct.originalPrice}.00
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            setCheckoutStep("checkout");
                            setIsCartOpen(true);
                          }}
                          style={{
                            padding: "14px 44px",
                            background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "15px",
                            fontWeight: 800,
                            cursor: "pointer",
                            boxShadow: "0 8px 24px rgba(0, 102, 204, 0.3)",
                          }}
                        >
                          Buy Now — ₹{currentProduct.price}
                        </button>
                      </div>
                    </div>

                    {/* Bottom Badges */}
                    <div
                      style={{
                        marginTop: "36px",
                        paddingTop: "22px",
                        borderTop: "1px solid #f1f5f9",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                        gap: "14px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #bae6fd", color: "#0066cc", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f9ff" }}>
                          <Leaf size={18} />
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 800, color: "#071e33" }}>100% Natural</span>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #bae6fd", color: "#0066cc", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f9ff" }}>
                          <FlaskConical size={18} />
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 800, color: "#071e33" }}>Lab Tested</span>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #bae6fd", color: "#0066cc", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f9ff" }}>
                          <Ban size={18} />
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 800, color: "#071e33" }}>No Added Sugar</span>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #bae6fd", color: "#0066cc", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f9ff" }}>
                          <HeartPulse size={18} />
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 800, color: "#071e33" }}>Vegetarian</span>
                      </div>
                    </div>
                  </div>

                  {/* ==================================================== */}
                  {/* INTERACTIVE JOURNEY SECTION                          */}
                  {/* ==================================================== */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
                      borderRadius: "24px",
                      border: "1.5px solid #bae6fd",
                      padding: "clamp(24px, 4vw, 40px)",
                      boxShadow: "0 6px 25px rgba(0, 102, 204, 0.05)",
                    }}
                  >
                    <div style={{ textAlign: "center", marginBottom: "32px" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#e0f2fe", color: "#0066cc", padding: "4px 14px", borderRadius: "100px", fontSize: "11.5px", fontWeight: 800, textTransform: "uppercase", marginBottom: "8px" }}>
                        <Sparkles size={13} />
                        <span>Interactive Active Matrix</span>
                      </div>
                      <h3 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 900, color: "#071e33", margin: "0 0 6px" }}>
                        Discover What&apos;s Inside
                      </h3>
                      <p style={{ fontSize: "15px", color: "#475569" }}>
                        Know the power of {currentProduct.name} — 4 Standardized Bioactives
                      </p>
                    </div>

                    {/* 4 Cards + Center Circle Layout */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "22px",
                        alignItems: "center",
                      }}
                    >
                      {/* Left Column: 2 Ingredient Cards */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                        {currentProduct.ingredients[0] && (
                          <motion.div
                            whileHover={{ y: -4, borderColor: "#0066cc" }}
                            style={{ background: "#ffffff", border: "1.5px solid #dbeafe", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 14px rgba(0, 102, 204, 0.04)" }}
                          >
                            <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#071e33", margin: "0 0 4px" }}>
                              {currentProduct.ingredients[0].name}
                            </h4>
                            <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.45, margin: "0 0 14px", minHeight: "36px" }}>
                              {currentProduct.ingredients[0].shortDesc}
                            </p>
                            <button
                              onClick={() => handleExploreIngredientInModal(0)}
                              style={{ padding: "7px 18px", background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)", color: "#ffffff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: 800, cursor: "pointer" }}
                            >
                              Explore
                            </button>
                          </motion.div>
                        )}

                        {currentProduct.ingredients[2] && (
                          <motion.div
                            whileHover={{ y: -4, borderColor: "#0066cc" }}
                            style={{ background: "#ffffff", border: "1.5px solid #dbeafe", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 14px rgba(0, 102, 204, 0.04)" }}
                          >
                            <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#071e33", margin: "0 0 4px" }}>
                              {currentProduct.ingredients[2].name}
                            </h4>
                            <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.45, margin: "0 0 14px", minHeight: "36px" }}>
                              {currentProduct.ingredients[2].shortDesc}
                            </p>
                            <button
                              onClick={() => handleExploreIngredientInModal(2)}
                              style={{ padding: "7px 18px", background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)", color: "#ffffff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: 800, cursor: "pointer" }}
                            >
                              Explore
                            </button>
                          </motion.div>
                        )}
                      </div>

                      {/* Center Circle Hub with Real Product Photo */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "10px" }}>
                        <div
                          style={{
                            width: "220px",
                            height: "220px",
                            borderRadius: "50%",
                            background: "#ffffff",
                            border: "3px solid #0066cc",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "16px",
                            boxShadow: "0 0 35px rgba(0, 102, 204, 0.2)",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ width: "95px", height: "95px", borderRadius: "50%", overflow: "hidden", border: "2px solid #bae6fd", marginBottom: "8px" }}>
                            <img
                              src={currentProduct.image}
                              alt={currentProduct.name}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          </div>
                          <div style={{ fontWeight: 900, fontSize: "13px", color: "#071e33", letterSpacing: "0.04em" }}>
                            {currentProduct.name.toUpperCase()}
                          </div>
                          <div style={{ fontSize: "10.5px", fontWeight: 800, color: "#0066cc", marginTop: "2px" }}>
                            4 POWERFUL BIOACTIVES
                          </div>
                        </div>
                      </div>

                      {/* Right Column: 2 Ingredient Cards */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                        {currentProduct.ingredients[1] && (
                          <motion.div
                            whileHover={{ y: -4, borderColor: "#0066cc" }}
                            style={{ background: "#ffffff", border: "1.5px solid #dbeafe", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 14px rgba(0, 102, 204, 0.04)" }}
                          >
                            <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#071e33", margin: "0 0 4px" }}>
                              {currentProduct.ingredients[1].name}
                            </h4>
                            <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.45, margin: "0 0 14px", minHeight: "36px" }}>
                              {currentProduct.ingredients[1].shortDesc}
                            </p>
                            <button
                              onClick={() => handleExploreIngredientInModal(1)}
                              style={{ padding: "7px 18px", background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)", color: "#ffffff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: 800, cursor: "pointer" }}
                            >
                              Explore
                            </button>
                          </motion.div>
                        )}

                        {currentProduct.ingredients[3] && (
                          <motion.div
                            whileHover={{ y: -4, borderColor: "#0066cc" }}
                            style={{ background: "#ffffff", border: "1.5px solid #dbeafe", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 14px rgba(0, 102, 204, 0.04)" }}
                          >
                            <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#071e33", margin: "0 0 4px" }}>
                              {currentProduct.ingredients[3].name}
                            </h4>
                            <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.45, margin: "0 0 14px", minHeight: "36px" }}>
                              {currentProduct.ingredients[3].shortDesc}
                            </p>
                            <button
                              onClick={() => handleExploreIngredientInModal(3)}
                              style={{ padding: "7px 18px", background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)", color: "#ffffff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: 800, cursor: "pointer" }}
                            >
                              Explore
                            </button>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "24px", fontSize: "13px", color: "#64748b" }}>
                      Click on any ingredient button to view full pharmacological profile
                    </div>
                  </div>

                  {/* ==================================================== */}
                  {/* INGREDIENT DEEP DIVE SECTION                         */}
                  {/* ==================================================== */}
                  <div
                    ref={deepDiveSectionRef}
                    style={{
                      background: "#ffffff",
                      borderRadius: "24px",
                      border: "1px solid #dbeafe",
                      padding: "clamp(22px, 4vw, 38px)",
                      boxShadow: "0 6px 20px rgba(0, 102, 204, 0.04)",
                    }}
                  >
                    {/* Ingredient Selector Pills */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "22px", flexWrap: "wrap", gap: "8px" }}>
                      {currentProduct.ingredients.map((ing, idx) => (
                        <button
                          key={ing.id}
                          onClick={() => setActiveIngredientIdx(idx)}
                          style={{
                            padding: "6px 14px",
                            borderRadius: "100px",
                            border: activeIngredientIdx === idx ? "1.5px solid #0066cc" : "1px solid #e2e8f0",
                            background: activeIngredientIdx === idx ? "#e0f2fe" : "#ffffff",
                            color: activeIngredientIdx === idx ? "#0066cc" : "#475569",
                            fontSize: "12px",
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                        >
                          {ing.name}
                        </button>
                      ))}
                    </div>

                    <div style={{ textAlign: "center", marginBottom: "24px" }}>
                      <h3 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 900, color: "#071e33", margin: 0 }}>
                        {currentIngredient.name}
                      </h3>
                      <div style={{ fontSize: "13px", color: "#0066cc", fontWeight: 700, marginTop: "4px" }}>
                        {currentIngredient.scientificName}
                      </div>
                    </div>

                    {/* Image Left + Description Right */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "28px", alignItems: "center", marginBottom: "28px" }}>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <div
                          style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "200px",
                            borderRadius: "18px",
                            background: "#f0f7ff",
                            border: "1.5px solid #bae6fd",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={currentIngredient.image}
                            alt={currentIngredient.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                      </div>

                      <div>
                        <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.7, margin: 0 }}>
                          {currentIngredient.fullDesc}
                        </p>
                        <div style={{ marginTop: "12px", background: "#f0f7ff", border: "1px solid #bae6fd", display: "inline-block", padding: "6px 12px", borderRadius: "8px", fontSize: "12px", color: "#0066cc", fontWeight: 800 }}>
                          Standardized Dose: {currentIngredient.dosage}
                        </div>
                      </div>
                    </div>

                    {/* Clinical Benefits */}
                    <div style={{ marginBottom: "28px", background: "#f8fafc", borderRadius: "18px", padding: "22px", border: "1px solid #e2e8f0" }}>
                      <div style={{ fontSize: "15px", fontWeight: 800, color: "#071e33", marginBottom: "12px" }}>
                        Clinical Evidenced Benefits:
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
                        {currentIngredient.benefits.map((b, bIdx) => (
                          <div key={bIdx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", color: "#1e293b", fontWeight: 600 }}>
                            <div style={{ background: "#0066cc", color: "#ffffff", borderRadius: "50%", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <Check size={10} strokeWidth={3} />
                            </div>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Controls */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid #f1f5f9", flexWrap: "wrap", gap: "10px" }}>
                      <button
                        onClick={handlePrevIngredient}
                        style={{
                          background: "#f1f5f9",
                          border: "none",
                          borderRadius: "8px",
                          padding: "8px 16px",
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "#334155",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <ChevronLeft size={16} />
                        <span>Previous Active</span>
                      </button>

                      <button
                        onClick={handleNextIngredient}
                        style={{
                          padding: "9px 24px",
                          background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)",
                          color: "#ffffff",
                          borderRadius: "8px",
                          border: "none",
                          fontSize: "13px",
                          fontWeight: 800,
                          cursor: "pointer",
                        }}
                      >
                        Next Ingredient →
                      </button>
                    </div>
                  </div>

                  {/* ==================================================== */}
                  {/* UNDERSTAND PRODUCT + ADD TO CART + CHECKOUT CARDS    */}
                  {/* ==================================================== */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                      gap: "22px",
                      alignItems: "stretch",
                    }}
                  >
                    {/* Card 1: Understand Product */}
                    <div
                      style={{
                        background: "#ffffff",
                        borderRadius: "22px",
                        border: "1.5px solid #dbeafe",
                        padding: "26px 22px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 6px 20px rgba(0, 102, 204, 0.05)",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "#071e33",
                            marginBottom: "16px",
                            textAlign: "center",
                            lineHeight: 1.3,
                          }}
                        >
                          Why {currentProduct.name}<br />is Good for You?
                        </h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                          {currentProduct.understandBenefits.map((b, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13.5px", color: "#1e293b", fontWeight: 600 }}>
                              <div style={{ background: "#0066cc", color: "#ffffff", borderRadius: "50%", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Check size={10} strokeWidth={3} />
                              </div>
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Fitness Athlete Pointing Graphic */}
                      <div style={{ textAlign: "center", marginTop: "auto", paddingTop: "8px" }}>
                        <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto", display: "block" }}>
                          <circle cx="100" cy="115" r="68" fill="#f0f7ff" />
                          <path d="M72 150 L88 108 L112 108 L128 150 Z" fill="#0066cc" />
                          <path d="M88 108 L100 122 L112 108 Z" fill="#fbd38d" />
                          <circle cx="100" cy="72" r="22" fill="#fbd38d" />
                          <path d="M78 68 C78 48, 122 48, 122 68 C114 56, 86 56, 78 68 Z" fill="#071e33" />
                          <circle cx="93" cy="70" r="2.5" fill="#071e33" />
                          <circle cx="107" cy="70" r="2.5" fill="#071e33" />
                          <path d="M95 79 Q100 85 105 79" stroke="#071e33" strokeWidth="2" strokeLinecap="round" fill="none" />
                          <path d="M72 150 C54 140 50 120 58 105 C66 94 76 102 88 108" stroke="#fbd38d" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M128 150 C142 135 148 112 144 88 L140 60" stroke="#fbd38d" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="140" cy="56" r="6" fill="#fbd38d" />
                          <path d="M140 56 L140 40" stroke="#fbd38d" strokeWidth="5.5" strokeLinecap="round" />
                          <path d="M152 38 L158 32 M162 44 L168 44" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
                          <path d="M44 94 L38 88" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card 2: Add to Cart */}
                    <div
                      style={{
                        background: "#ffffff",
                        borderRadius: "22px",
                        border: "1.5px solid #dbeafe",
                        padding: "26px 22px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 6px 20px rgba(0, 102, 204, 0.05)",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
                          <div style={{ width: "80px", height: "80px", background: "#f0f7ff", borderRadius: "14px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #dbeafe" }}>
                            <img src={currentProduct.image} alt={currentProduct.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </div>
                          <div style={{ textAlign: "left" }}>
                            <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#071e33", margin: "0 0 4px" }}>
                              {currentProduct.name}
                            </h4>
                            <div style={{ fontSize: "20px", fontWeight: 900, color: "#0066cc" }}>
                              ₹{currentProduct.price}.00
                            </div>
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "22px" }}>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "#071e33" }}>Qty:</span>
                          <div style={{ display: "flex", alignItems: "center", border: "1.5px solid #cbd5e1", borderRadius: "10px", background: "#ffffff" }}>
                            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} style={{ border: "none", background: "none", padding: "6px 12px", cursor: "pointer", fontSize: "14px" }}>-</button>
                            <span style={{ fontSize: "14px", fontWeight: 800, padding: "0 8px" }}>{quantity}</span>
                            <button onClick={() => setQuantity((q) => q + 1)} style={{ border: "none", background: "none", padding: "6px 12px", cursor: "pointer", fontSize: "14px" }}>+</button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={() => {
                            setInlineAddedToCart(true);
                            setTimeout(() => setInlineAddedToCart(false), 2500);
                          }}
                          style={{
                            width: "100%",
                            padding: "13px",
                            background: inlineAddedToCart ? "#16a34a" : "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "14px",
                            fontWeight: 800,
                            cursor: "pointer",
                            transition: "all 0.2s",
                            boxShadow: "0 6px 18px rgba(0, 102, 204, 0.25)",
                          }}
                        >
                          {inlineAddedToCart ? "Added to Cart ✓" : "Add to Cart"}
                        </button>
                        {inlineAddedToCart && (
                          <div style={{ fontSize: "12px", color: "#16a34a", fontWeight: 700, marginTop: "8px", textAlign: "center" }}>
                            Item added! Ready for checkout.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card 3: Checkout & Payment */}
                    <div
                      style={{
                        background: "#ffffff",
                        borderRadius: "22px",
                        border: "1.5px solid #dbeafe",
                        padding: "26px 22px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 6px 20px rgba(0, 102, 204, 0.05)",
                      }}
                    >
                      {inlineModalPaid ? (
                        <div style={{ textAlign: "center", padding: "20px 8px", margin: "auto 0" }}>
                          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#dcfce7", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                            <CheckCircle size={32} />
                          </div>
                          <h4 style={{ fontSize: "18px", fontWeight: 900, color: "#071e33", marginBottom: "6px" }}>
                            Payment Successful!
                          </h4>
                          <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.4, marginBottom: "16px" }}>
                            Order #AGY-82910 confirmed. Dispatching in 24 hours.
                          </p>
                          <button
                            onClick={() => setInlineModalPaid(false)}
                            style={{ padding: "8px 18px", background: "#f1f5f9", color: "#334155", borderRadius: "8px", border: "none", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}
                          >
                            Done
                          </button>
                        </div>
                      ) : (
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 800, color: "#071e33", marginBottom: "10px" }}>
                            Delivery Details
                          </div>

                          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                            <input
                              type="text"
                              placeholder="Name"
                              value={deliveryForm.name}
                              onChange={(e) => setDeliveryForm({ ...deliveryForm, name: e.target.value })}
                              style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12.5px" }}
                            />
                            <input
                              type="text"
                              placeholder="Mobile Number"
                              value={deliveryForm.mobile}
                              onChange={(e) => setDeliveryForm({ ...deliveryForm, mobile: e.target.value })}
                              style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12.5px" }}
                            />
                            <input
                              type="text"
                              placeholder="Delivery Address"
                              value={deliveryForm.address}
                              onChange={(e) => setDeliveryForm({ ...deliveryForm, address: e.target.value })}
                              style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12.5px" }}
                            />
                            <input
                              type="text"
                              placeholder="Pincode"
                              value={deliveryForm.pincode}
                              onChange={(e) => setDeliveryForm({ ...deliveryForm, pincode: e.target.value })}
                              style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12.5px" }}
                            />
                          </div>

                          <div style={{ fontSize: "13px", fontWeight: 800, color: "#071e33", marginBottom: "8px" }}>
                            Payment Method
                          </div>

                          <label
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "12px",
                              fontWeight: 600,
                              color: "#1e293b",
                              marginBottom: "16px",
                              cursor: "pointer",
                              background: "#f0f7ff",
                              padding: "9px 12px",
                              borderRadius: "8px",
                              border: "1px solid #bae6fd",
                            }}
                          >
                            <input type="checkbox" checked={true} readOnly style={{ accentColor: "#0066cc" }} />
                            <span>Razorpay (UPI / Card / Netbanking)</span>
                          </label>

                          <button
                            onClick={() => setInlineModalPaid(true)}
                            style={{
                              width: "100%",
                              padding: "13px",
                              background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)",
                              color: "#ffffff",
                              border: "none",
                              borderRadius: "10px",
                              fontSize: "14px",
                              fontWeight: 800,
                              cursor: "pointer",
                              marginBottom: "10px",
                              boxShadow: "0 6px 18px rgba(0, 102, 204, 0.25)",
                            }}
                          >
                            Proceed to Pay
                          </button>

                          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", fontSize: "11px", color: "#64748b" }}>
                            <Lock size={12} color="#0066cc" />
                            <span>Secured by <strong>Razorpay</strong></span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* SLIDE-OVER CART & CHECKOUT DRAWER                        */}
        {/* ======================================================== */}
        <AnimatePresence>
          {isCartOpen && (
            <div style={{ position: "fixed", inset: 0, zIndex: 130 }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                style={{ position: "absolute", inset: 0, background: "rgba(7, 21, 38, 0.65)", backdropFilter: "blur(6px)" }}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  maxWidth: "440px",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 2,
                  boxShadow: "-8px 0 30px rgba(0,0,0,0.15)",
                }}
              >
                <div style={{ padding: "18px 22px", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ShoppingBag size={18} color="#0066cc" />
                    <span style={{ fontSize: "16px", fontWeight: 800, color: "#071e33" }}>
                      {checkoutStep === "cart" && "Shopping Cart"}
                      {checkoutStep === "checkout" && "Delivery & Payment"}
                      {checkoutStep === "success" && "Order Placed!"}
                    </span>
                  </div>
                  <button onClick={() => setIsCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b" }}>
                    <X size={18} />
                  </button>
                </div>

                <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
                  {checkoutStep === "cart" && (
                    <div>
                      <div style={{ display: "flex", gap: "14px", padding: "14px", background: "#f0f7ff", borderRadius: "16px", border: "1px solid #dbeafe", marginBottom: "18px" }}>
                        <div style={{ width: "64px", height: "64px", background: "#ffffff", borderRadius: "10px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #dbeafe" }}>
                          <img src={currentProduct.image} alt={currentProduct.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#071e33", margin: 0 }}>
                            {currentProduct.name}
                          </h4>
                          <div style={{ fontSize: "11px", color: "#64748b", margin: "2px 0 6px" }}>
                            {currentProduct.tagline}
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: "16px", fontWeight: 900, color: "#0066cc" }}>
                              ₹{currentProduct.price}.00
                            </span>
                            <div style={{ display: "flex", alignItems: "center", border: "1px solid #cbd5e1", borderRadius: "6px", background: "#ffffff" }}>
                              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} style={{ border: "none", background: "none", padding: "3px 6px", cursor: "pointer" }}>-</button>
                              <span style={{ fontSize: "12px", fontWeight: 700, padding: "0 4px" }}>{quantity}</span>
                              <button onClick={() => setQuantity((q) => q + 1)} style={{ border: "none", background: "none", padding: "3px 6px", cursor: "pointer" }}>+</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
                        <input
                          type="text"
                          placeholder="Coupon: CLINICAL15"
                          value={couponApplied ? "CLINICAL15 (15% Applied)" : ""}
                          readOnly={couponApplied}
                          style={{ flex: 1, padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12px" }}
                        />
                        <button
                          onClick={() => setCouponApplied(!couponApplied)}
                          style={{ padding: "10px 16px", background: couponApplied ? "#16a34a" : "#0066cc", color: "#ffffff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: 800, cursor: "pointer" }}
                        >
                          {couponApplied ? "Remove" : "Apply"}
                        </button>
                      </div>

                      <div style={{ background: "#f8fafc", borderRadius: "14px", padding: "16px", border: "1px solid #e2e8f0" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#475569", marginBottom: "6px" }}>
                          <span>Subtotal</span>
                          <span>₹{basePrice}.00</span>
                        </div>
                        {couponApplied && (
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#16a34a", marginBottom: "6px" }}>
                            <span>Discount (15% OFF)</span>
                            <span>-₹{discountAmount}.00</span>
                          </div>
                        )}
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#475569", marginBottom: "6px" }}>
                          <span>Delivery</span>
                          <span style={{ color: "#16a34a", fontWeight: 700 }}>FREE</span>
                        </div>
                        <div style={{ borderTop: "1px dashed #cbd5e1", paddingTop: "10px", marginTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: 900, color: "#071e33" }}>
                          <span>Total Amount</span>
                          <span>₹{finalPrice}.00</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {checkoutStep === "checkout" && (
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 800, color: "#071e33", marginBottom: "12px" }}>
                        Delivery Details
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={deliveryForm.name}
                          onChange={(e) => setDeliveryForm({ ...deliveryForm, name: e.target.value })}
                          style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                        />
                        <input
                          type="text"
                          placeholder="Mobile Number"
                          value={deliveryForm.mobile}
                          onChange={(e) => setDeliveryForm({ ...deliveryForm, mobile: e.target.value })}
                          style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                        />
                        <input
                          type="text"
                          placeholder="Complete Delivery Address"
                          value={deliveryForm.address}
                          onChange={(e) => setDeliveryForm({ ...deliveryForm, address: e.target.value })}
                          style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                        />
                        <input
                          type="text"
                          placeholder="Pincode"
                          value={deliveryForm.pincode}
                          onChange={(e) => setDeliveryForm({ ...deliveryForm, pincode: e.target.value })}
                          style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                        />
                      </div>

                      <div style={{ fontSize: "13px", fontWeight: 800, color: "#071e33", marginBottom: "10px" }}>
                        Payment Method
                      </div>

                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 14px",
                          borderRadius: "10px",
                          border: "1.5px solid #0066cc",
                          background: "#f0f7ff",
                          cursor: "pointer",
                          marginBottom: "16px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <input type="radio" checked={true} readOnly style={{ accentColor: "#0066cc" }} />
                          <div>
                            <div style={{ fontSize: "13px", fontWeight: 800, color: "#071e33" }}>Razorpay (UPI / Card / Netbanking)</div>
                            <div style={{ fontSize: "11px", color: "#64748b" }}>Instant Google Pay, PhonePe & Cards</div>
                          </div>
                        </div>
                        <span style={{ fontSize: "9px", fontWeight: 900, background: "#0c2340", color: "#ffffff", padding: "3px 6px", borderRadius: "4px" }}>
                          RAZORPAY
                        </span>
                      </label>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11.5px", color: "#64748b", background: "#f8fafc", padding: "10px", borderRadius: "8px" }}>
                        <Lock size={13} color="#0066cc" />
                        <span>Secured by Razorpay • 256-Bit SSL Protection</span>
                      </div>
                    </div>
                  )}

                  {checkoutStep === "success" && (
                    <div style={{ textAlign: "center", padding: "30px 10px" }}>
                      <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#dcfce7", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                        <CheckCircle size={36} />
                      </div>
                      <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#071e33", marginBottom: "8px" }}>
                        Order Confirmed!
                      </h3>
                      <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.5, marginBottom: "20px" }}>
                        Thank you, {deliveryForm.name}! Order <strong>#AGY-82910</strong> for {currentProduct.name} will be dispatched within 24 hours.
                      </p>

                      <button
                        onClick={() => {
                          setCheckoutStep("cart");
                          setIsCartOpen(false);
                          setIsProductModalOpen(false);
                        }}
                        style={{ width: "100%", padding: "12px", background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)", color: "#ffffff", borderRadius: "10px", border: "none", fontSize: "14px", fontWeight: 800, cursor: "pointer" }}
                      >
                        Continue Shopping
                      </button>
                    </div>
                  )}
                </div>

                <div style={{ padding: "16px 20px", borderTop: "1px solid #e2e8f0", background: "#ffffff" }}>
                  {checkoutStep === "cart" ? (
                    <button
                      onClick={() => setCheckoutStep("checkout")}
                      style={{ width: "100%", padding: "14px", background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)", color: "#ffffff", borderRadius: "12px", border: "none", fontWeight: 800, fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", boxShadow: "0 6px 20px rgba(0, 102, 204, 0.25)" }}
                    >
                      <span>Proceed to Checkout</span>
                      <span>•</span>
                      <span>₹{finalPrice}.00</span>
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => setCheckoutStep("cart")}
                        style={{ padding: "12px 18px", background: "#f1f5f9", color: "#334155", borderRadius: "10px", border: "none", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setCheckoutStep("success")}
                        style={{ flex: 1, padding: "14px", background: "linear-gradient(135deg, #0066cc 0%, #2563eb 100%)", color: "#ffffff", borderRadius: "12px", border: "none", fontWeight: 800, fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", boxShadow: "0 6px 20px rgba(0, 102, 204, 0.25)" }}
                      >
                        <Lock size={15} />
                        <span>Proceed to Pay ₹{finalPrice}.00</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>

      <Footer />
    </main>
  );
}
