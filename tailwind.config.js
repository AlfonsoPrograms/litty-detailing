/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "litty-dark": "#0f172a", // Slate 900
        "litty-light": "#f8fafc", // Slate 50
        "litty-accent": "#06b6d4", // Cyan 500
        "litty-accent-hover": "#0891b2", // Cyan 600
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
