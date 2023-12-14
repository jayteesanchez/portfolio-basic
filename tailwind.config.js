/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      black: '#100c08',
      white: 'rgb(231 229 228)'
    },
    extend: {
      backgroundImage: {
        'me': "radial-gradient(20vw 25vh, rgba(0, 0, 0, 0.43), rgba(16, 12, 8, 0.8)), url('./IMG_7358.JPG')"
      }
    },
  },
  plugins: [],
}
