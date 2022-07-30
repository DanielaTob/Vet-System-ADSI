/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-home': "url('/assets/bg_home.jpg')"
      }
    },
  },
  plugins: [],
}
