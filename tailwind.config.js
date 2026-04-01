/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'green',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};