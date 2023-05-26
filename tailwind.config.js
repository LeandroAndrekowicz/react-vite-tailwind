/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",],
  theme: {
    extend: {
      colors: {
        pormade: {
          100: '#2A7827',
          200: '#000000',
          300: '#FFF829',
          400: '#131313'
        }
      }
    }
  },
  plugins: [],
}

