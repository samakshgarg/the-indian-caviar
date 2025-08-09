/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        ink: "#0a0a0a",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(212,175,55,0.15)"
      }
    }
  },
  plugins: []
};
