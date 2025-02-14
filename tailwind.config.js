/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B2730",
        secondary: "#FFB84C",
        lightgray: "#F6F6F6",
      },
      container: { padding: "96px", center: true },
    },
  },
  plugins: [],
};
