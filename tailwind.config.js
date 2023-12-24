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
    },
    animation: {
      'pulse-bg-once': 'pulse-bg-once 4s ease-in infinite', //animation-pulse-bg-once from-red-400 to-yellow-600
      'wiggle': 'wiggle 1s ease-in-out infinite',
    },
    keyframes: {
      'pulse-bg-once': {
        '0%': { backgroundColor: 'var(--tw-gradient-from)' },
        '60%': { backgroundColor: 'var(--tw-gradient-to)' },
        '100%': { backgroundColor: 'var(--tw-gradient-from)' },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    }
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
}