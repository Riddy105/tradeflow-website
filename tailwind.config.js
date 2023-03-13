/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          100: "#F5F5F5",
        },
        blue: {
          100: "#1245A8",
          200: "#7C8DB0",
        },
        grey: {
          100: "#40495A",
          200: "#263238",
          300: "#F6F7F9",
        },
      },
      boxShadow: {
        shadow1: "0px 1px 5px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        lato: "Lato",
      },
      backgroundImage: {
        search: "url('/src/assets/icons/search-icon.png')",
      },
    },
  },
  plugins: [],
};
