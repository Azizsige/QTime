/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#121829",
        textPrimary: "#A8AEBF",
        textSecondary: "#9C92F8",
        textAlternate: "#EBEEF5",
        input: "#475069",
        tabs: "salmon",
        tabsTitle: "#767E94",
        rating: "#FFAD49",
        cardMovies: "rgba(32,40,62,80%)",
        cardRating: "rgba(0,0,0,65%)",
        movieTitle: "#EBEEF5",
      },
      fontFamily: {
        primary: ["Poppins", "sans - serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
