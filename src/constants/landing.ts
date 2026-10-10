import type {
    FeatureItem,
    NavItem,
  } from "@/infrastructure/services/interface/common.types";
  
  export const LANDING_NAV_ITEMS: NavItem[] = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Pricing", href: "/#pricing" },
  ];
  
  export const FEATURES: FeatureItem[] = [
    {
      id: "lightning-fast",
      title: "Lightning Fast",
      description:
        "Same-day delivery available in major cities across Africa. Get your packages delivered in hours, not days.",
      icon: "zap",
      tone: "violet",
    },
    {
      id: "secure-insured",
      title: "Secure & Insured",
      description:
        "Every package is insured and tracked. Your deliveries are protected from pickup to dropoff.",
      icon: "shield",
      tone: "blue",
    },
    {
      id: "real-time-tracking",
      title: "Real-time Tracking",
      description:
        "Track your packages in real-time with GPS. Know exactly where your delivery is at all times.",
      icon: "mapPin",
      tone: "pink",
    },
    {
      id: "affordable-rates",
      title: "Affordable Rates",
      description:
        "Competitive pricing tailored for African markets. No hidden fees, transparent pricing always.",
      icon: "dollar",
      tone: "green",
    },
    {
      id: "support",
      title: "24/7 Support",
      description:
        "Round-the-clock customer support in multiple languages. We're here whenever you need us.",
      icon: "clock",
      tone: "orange",
    },
    {
      id: "easy-to-use",
      title: "Easy to Use",
      description:
        "Simple mobile app for booking and tracking. Schedule pickups in just a few taps.",
      icon: "smartphone",
      tone: "red",
    },
  ];
  