module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    colors: {
      white: "#ffffff",
      aquamarine: "#54E6AF",
      "space-cadet": "#2C344B",
      "rich-black": "#121725",
      "dark-blue-gray": "#5A668A",
      "periwinkle-crayola": "#C2CBE5",
      "magic-mint": "#B3FFE2",
      "tart-orange": "#FB3E3E",
    },
    fontSize: {
      "title-mobile": ["26px", { lineHeight: "38px" }],
      "title-tablet": ["48px", { lineHeight: "56px" }],
      "body-mobile": ["15px", { lineHeight: "25px" }],
      "body-tablet": ["18px", { lineHeight: "28px" }],
    },
    fontFamily: {
      chivo: "Chivo, sans-serif",
    },
    extend: {
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
