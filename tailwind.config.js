/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'container': '1fr 3fr',
        'header': '1fr 2fr',
      }
    },
  },
  plugins: [],
}
