import { CalendarDays, SearchCheck, Target } from "lucide-react";

export const UPI_ID = "9001402531@pthdfc";

export const analysisPlans = [
  {
    id: "free-social-media-analysis",
    name: "Free Social Media Analysis",
    price: "Free",
    amount: 0,
    note: "One-time",
    icon: SearchCheck,
    description:
      "Users answer a few questions so NexDiff can review the account and share practical improvement points.",
    features: [
      "Account start date, niche, platform, content type, and goals review",
      "What is working and where the account has friction",
      "Suggested improvements and actionable recommendations",
    ],
  },
  {
    id: "premium-social-media-analysis",
    name: "Premium Social Media Analysis",
    price: "Rs 499 / Rs 799",
    amount: 499,
    note: "1-month or 2-month calendar",
    icon: CalendarDays,
    description:
      "Includes everything from the free analysis plus a ready content calendar for consistent posting.",
    features: [
      "Complete social media analysis",
      "1-month content calendar for Rs 499",
      "2-month content calendar option for Rs 799",
    ],
    options: [
      { label: "1-month content calendar", amount: 499 },
      { label: "2-month content calendar", amount: 799 },
    ],
  },
  {
    id: "startup-marketing-strategy",
    name: "Marketing Strategy for Startups",
    price: "Rs 999",
    amount: 999,
    note: "Startup roadmap",
    icon: Target,
    description:
      "A startup-focused marketing strategy built around the right platforms, channels, and growth path.",
    features: [
      "Suitable online platforms for your niche",
      "Online and offline marketing strategy",
      "Influencer marketing strategy and growth roadmap",
    ],
  },
];

export const getAnalysisPlanById = (planId) =>
  analysisPlans.find((plan) => plan.id === planId) || analysisPlans[0];
