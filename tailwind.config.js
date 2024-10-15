/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.html', 
    './src/js/**/*.js',     
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

