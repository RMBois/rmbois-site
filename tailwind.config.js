/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily:{ sans:['Montserrat','sans-serif'] },
      colors:{ amber:{200:'#fef3c7'} }
    },
  },
  plugins: [],
};
