/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "480px" },

      md: { min: "481px", max: "768px" },

      lg: { min: "769px", max: "1900px" },
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/logo.png')",
      },
    },
  },
  plugins: [],
};
