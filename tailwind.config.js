/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileNav: "950px",
      },
      colors: {
        white: {
          100: "#F5F5F5",
          200: "#FFF",
          300: "#F4F8FF",
        },
        blue: {
          100: "#1245A8",
          200: "#7C8DB0",
          300: "#EBF2FF",
          400: "#C3D8FF",
        },
        grey: {
          100: "#40495A",
          200: "#263238",
          300: "#F6F7F9",
          400: "#6B6F80",
          500: "#292B33",
          600: "#B0B0B0",
          700: "#979797",
        },
        black: {
          100: "#141519",
          200: "#000",
        },
      },
      boxShadow: {
        custom1: "0px 1px 5px rgba(0, 0, 0, 0.15)",
        custom2: "4.59211px 4.59211px 30.9967px rgba(0, 0, 0, 0.15)",
        custom3: "2px 2px 9px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        lato: "Lato",
      },
      backgroundImage: {
        search: "url('/src/assets/icons/search-icon.png')",
        world: "url('/src/assets/images/world-map.png')",
        blueworld: "url('/src/assets/images/blue-world.png')",
        pattern: "url('/src/assets/images/form-pattern.png')",
      },
      backgroundSize: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
