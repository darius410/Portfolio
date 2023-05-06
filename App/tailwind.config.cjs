/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary':'Bebas Neue, sans-serif;',
        'secondary': 'Teko, sans-serif;',
        'third' : 'Varela Round, sans-serif;',
       
      },
    },
  },
  plugins: [],
}