/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        monster: ["Monsterrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        happy: ["Seaweed Script", "cursive"],
      },
      colors: {
        bg: "#FFEAE3",
        primary: "#121481",
        secondary: "#FFCBCB",
        basic: "#FFB1B1",
      },
    },
  },
  plugins: [],
};
