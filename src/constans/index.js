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
import testimonial8 from "@/public/testimonial/testimonial8.webp";
import testimonial7 from "@/public/testimonial/testimonial7.webp";
import testimonial6 from "@/public/testimonial/testimonial6.webp";
import testimonial5 from "@/public/testimonial/testimonial5.webp";
import testimonial10 from "@/public/testimonial/testimonial10.webp";
import testimonial2 from "@/public/testimonial/testimonial2.webp";
import testimonial3 from "@/public/testimonial/testimonial3.webp";
import testimonial1 from "@/public/testimonial/testimonial1.webp";
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
    cta: "Start for free",
    Colors: "#fff",
    id: 18,
    plan: "Personal",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
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
    cta: "Start creating",
    Colors: "#ffb84cff",
    id: 19,
    plan: "Professional",
    price: "",
    monthlyPrice: "$20",
    yearlyPrice: "$240",
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
    cta: "Sign up your team",
    monthlyPrice: "$50",
    yearlyPrice: "$600",
    description: "Licenses for up to 16 members",
    feature: [
      "1200 free fantasy reports",
      "Access to AI-writer M2",
      "Unlimited hours per month",
      "435 outreach tokens",
    ],
  },
];
export const testimonials = [
  {
    program: "professional",
    description:
      "Yadora has been pivotal in helping me connect with others that share my same passions!",
    image: testimonial7,
    name: "Maria Sanchez",
    title: "CEO & Founder at Creation LAB's",
  },
  {
    program: "team",
    description:
      "Sharing my skills with clients around the world has never been easier. Very affordable solution for our team.",
    image: testimonial6,
    name: "Nick Ridley",
    title: "Product lead at EducationWave",
  },
  {
    program: "personal",
    description:
      "I love how easy and intuitive the platform is. Took me less than a day to get up and started!",
    image: testimonial10,
    name: "Asia Moore",
    title: "Head of HR at inspireUSA",
  },
  {
    program: "personal",
    description:
      "Having access to 50 free fantasy reports per month allows my small business to generate leads each month",
    image: testimonial2,
    name: "Tina Rodriguez",
    title: "Tech lead at GE accelerator",
  },
  {
    program: "team",
    description:
      "The free version of Yadora is generous with its offering and has helped fuel our business to new heights!",
    image: testimonial3,
    name: "Jai Ahuja",
    title: "GForce Labs  trader & Founder",
  },
  {
    program: "team",
    description:
      "Yadora’s Customer service has been very gracious in helping me navigate the platform. Loving it so far!",
    image: testimonial1,
    name: "Amy Young",
    title: "Creative director at FertilityHealth",
  },
  {
    program: "personal",
    description:
      "Getting my music business off the ground has been a breeze with the help of Yadora’s outreach accelerator.",
    image: testimonial5,
    name: "Tanner Hall",
    title: "Musician and Solo-prenuer",
  },
  {
    program: "team",
    description:
      "I wish i have known about this platform a year ago. The AI writer empowers our team to edit and revise their work easily.",
    image: testimonial8,
    name: "Diego Perez",
    title: "Analyst at SimplyMade",
  },
];
