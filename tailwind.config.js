/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ecoGreen: {
          100: "#e0f2e9",
          500: "#2e7d32",
          800: "#1b5e20",
        },
        ecoBrown: {
          100: "#efebe9",
          500: "#6d4c41",
          800: "#3e2723",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        serif: ['"Roboto Slab"', "serif"],
      },
    },
  },
  plugins: [],
};
