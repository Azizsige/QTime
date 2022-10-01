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
        breadcrumbs: "#BEB7FB",
        sinopsis: "#8E95A9",
        detailSub: "#767E94",
        detailSubVal: "#C3C8D4",
        // bgDetail: "linear-gradient(#362C92, #126297)",
      },
      fontFamily: {
        primary: ["Poppins", "sans - serif"],
      },
      aspectRatio: {
        "8/3": "8 / 3",
        "4/3": "4 / 3",
        "6/3": "6 / 3",
        "7/3": "7 / 3",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
