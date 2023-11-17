/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-purple': '#D0D6F9',
        'white': '#ffffff',
        'opacity-white': 'rgba(255, 255, 255, 0.04)',
        'dark': '#0B0D17',
        'grey': '#979797',
        'dark-purple': '#383B4B'
      },
    },
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      'bellefair': ['Bellefair', 'serif'],
    }
  },
  plugins: [],
}