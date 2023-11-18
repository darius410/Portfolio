/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{js,ts,jsx,tsx}",
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