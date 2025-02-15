import icons1 from "@/public/hero/icons1.png";
import icons2 from "@/public/hero/icons2.png";
import icons3 from "@/public/hero/icons3.png";
import icons4 from "@/public/hero/icons4.png";
import icons5 from "@/public/hero/icons5.png";
import feature1 from "@/public/feature/card1.png";
import feature2 from "@/public/feature/card2.png";
import feature3 from "@/public/feature/card3.png";
import free from "@/public/creator/free.svg";
import earn from "@/public/creator/earn.svg";
import autonomy from "@/public/creator/autonomy.svg";
import engagement from "@/public/creator/engagement.svg";
export const navItems = [
  { title: "Explore", id: 1, path: "/explore" },
  { title: "Company", id: 2, path: "/company" },
  { title: "Support", id: 3, path: "/support" },
];
export const heroItems = [
  { id: 4, image: icons1 },
  { id: 5, image: icons2 },
  { id: 6, image: icons3 },
  { id: 7, image: icons4 },
  { id: 8, image: icons5 },
];
export const featureItems = [
  { id: 9, image: feature1, username: "im.rehn" },
  { id: 10, image: feature2, username: "@xiufang" },
  { id: 11, image: feature3, username: "@dora_julia " },
];
export const featureDetails = {
  id: 12,
  creator: 300,
  users: "12.1k",
  sessions: "9.11k",
};
export const creatorItems = [
  {
    id: 13,
    title: "Engagement",
    description: "Engage on a deeper level with the fans that matter most",
    image: engagement,
  },
  {
    id: 15,
    title: "Autonomy",
    description: "Full autonomy on when and who you talk to",
    image: autonomy,
  },
  {
    id: 16,
    title: "Free",
    description: "No monthly fees or annual subscription fees",
    image: free,
  },
  {
    id: 17,
    title: "Earn",
    description: "Add a new source of income that you can control",
    image: earn,
  },
];
export const PricingItems = [
  {
    Colors: "#fff",
    id: 18,
    plan: "Personal",
    price: "Free",
    description: "Explore our product for free",
    feature: [
      "20 free fantasy reports",
      "Limited access to AI-writer",
      "max 15 hours per month",
      "14 outreach tokens ",
    ],
  },
  {
    Colors: "#ffb84cff",
    id: 19,
    plan: "Professional",
    price: "$20",
    description: "For the ambitious solo professional",
    feature: [
      "50 free fantasy reports",
      "Unlimited access to AI-writer",
      "max 35 hours per month",
      "72 free outreach tokens ",
    ],
  },
  {
    Colors: "#fff",
    id: 19,
    plan: "Team",
    price: "$699",
    description: "Licenses for up to 16 members",
    feature: [
      "1200 free fantasy reports",
      "Access to AI-writer M2",
      "Unlimited hours per month",
      "435 outreach tokens",
    ],
  },
];
