/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        rain: {
          "0%": { "background-position": "-400px 0px, 0px 0px, 0px 0px" },
          "100%": {
            "background-position":
              "50000px 50000px, 10000px 20000px, -10000px 15000px",
          },
        },
      },
      animation: {
        "pasta-rain": "rain 1000s linear infinite",
      },
      colors: {
        "custom-green": "#00b74f",
        "custom-pink": "#FF3EB5",
        "custom-yellow": "#FFE900",
        "custom-blue": "#0072CE",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities, addBase }) {
      addUtilities({
        ".hero-normal": {
          background:
            "url('/photos/Cafe Mars Facade Black.png') center center / cover no-repeat",
        },
        ".hero-inverted": {
          background:
            "url('/photos/Cafe Mars Facade inverse.jpg') center center / cover no-repeat",
        },
        ".bg-pasta-rain": {
          background:
            'url("/photos/pattern_1_etafix.png"), url("/photos/pattern_2_qhgojs.png"), url("/photos/pattern_3_fqyhrc.png")',
        },
        ".font-helevetica": {
          fontFamily: "'Helvetica', 'sans-serif'",
        },
        ".font-cafemars": {
          fontFamily: "Cafe Mars",
        },
      });
      addBase({
        "@font-face": {
          "font-family": "Cafe Mars",
          src: "url('/fonts/cafemarsregular-webfont.woff2') format('woff2'), url('/fonts/cafemarsregular-webfont.woff') format('woff')",
          "font-weight": "normal",
          "font-style": "normal",
          "font-display": "auto",
        },
        h1: {
          "font-size": "2.25rem",
          "line-height": "2.5rem",
          "text-transform": "uppercase",
          "letter-spacing": "2px",
        },
        h2: {
          "font-size": "1.875rem",
          "line-height": "2.25rem",
          "text-transform": "uppercase",
          "letter-spacing": "2px",
        },
        h3: {
          "font-size": "1.5rem",
          "line-height": "2rem",
          "text-transform": "uppercase",
          "letter-spacing": "2px",
        },
        h4: {
          "font-size": "1.25rem",
          "line-height": "1.75rem",
          "text-transform": "uppercase",
          "letter-spacing": "2px",
        },
      });
    }),
  ],
};
