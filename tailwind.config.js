/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#F5F0EC',
        'off-black': '#111',
        'primary': '#1B5B31',
        'secondary': '#DCC1AB'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width'
      }
    },
    screens: {
      '2xl': '1440px'
    }
  },
  plugins: [],
}

