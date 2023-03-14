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
        },
        blue: {
          100: "#1245A8",
          200: "#7C8DB0",
          300: "#EBF2FF",
        },
        grey: {
          100: "#40495A",
          200: "#263238",
          300: "#F6F7F9",
          400: "#6B6F80",
          500: "#292B33",
          600: "#B0B0B0",
        },
      },
      boxShadow: {
        custom1: "0px 1px 5px rgba(0, 0, 0, 0.15)",
        custom2: "4.59211px 4.59211px 30.9967px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        lato: "Lato",
      },
      backgroundImage: {
        search: "url('/src/assets/icons/search-icon.png')",
        world: "url('/src/assets/images/world-map.png')",
        blueworld: "url('/src/assets/images/blue-world.png')",
      },
      backgroundSize: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
