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
        // Color palette from design document
        primary: {
          DEFAULT: "#224F70", // Bleu principal
          light: "#3A6A8F",
          dark: "#193A54",
        },
        accent: {
          DEFAULT: "#ECB455", // Jaune accent
          light: "#F3C878",
          dark: "#D19A3E",
        },
        cream: {
          DEFAULT: "#F9F5ED", // Crème clair
          dark: "#EEE8D8",
        },
        gray: {
          soft: "#CCC5B7", // Gris doux
        },
        dark: {
          DEFAULT: "#4A4A4A", // Ancre foncé
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}; 