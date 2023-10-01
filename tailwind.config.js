/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      opacity: {
         '88' : '0.88'
      },
      colors: {
        transparent: 'transparent',
        blue: '#262262',
        lightBlue: '#00B4CD',
        aliceBlue: '#f0f8ff',
        fontBlue: '#015A6B',
        grey: '#383838'
      }
    }
  },
  
  plugins: [],
}

