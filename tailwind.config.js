const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        shadowSkils: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },

      backgroundImage: {
        "hero-pattern": "url('./images/hero2.png')",
      },

      fontFamily: {
        sans: ["Source Sans pro", "system-ui-Serif"],
        mono: ["IBM Plex Mono", "ui-monospace"],
      },
      colors: {
        borderbtn: "#FCE72D",
      },
    },
  },
  plugins: [],
};
