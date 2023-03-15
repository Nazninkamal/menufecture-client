/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      // spacing: {
      //   '100': '28rem',
      //   '105': '32rem',
      //   '110': '36rem',
      //   '115': '40rem',
      // }
    },
    plugins: [

    ],
  }
}
