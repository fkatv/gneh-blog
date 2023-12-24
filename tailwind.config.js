/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['roboto', 'arial', 'sans-serif'],
      'lato': ['lato', 'arial', 'sans-serif'],
    }
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
}