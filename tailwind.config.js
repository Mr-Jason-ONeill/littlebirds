/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./littlebirds/**/*.{liquid}"],
  theme: {
    colors: {
      transparent: 'transparent',
      blue: '#262262',
      lightBlue: '#00B4CD',
      aliceBlue: '#f0f8ff',
      fontBlue: '#015A6B',
    },
    extend: {
      opacity: {
         '88' : '0.88'
      }
    }
  },
  plugins: [],
}

