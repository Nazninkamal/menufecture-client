/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '28rem',
        '105': '32rem',
        '110': '36rem',
        '115': '40rem',
      }
    },
    plugins: [],
  }
}
