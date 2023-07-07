/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#EE3425',
        'secondary': '#FBDC00',
        'light': '#FFFEF2',
      },
    },
  },
  plugins: [],
}