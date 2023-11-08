/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BannerTitle :['Permanent Marker', 'cursive'],
        Normal: ['Montserrat', 'sans-serif'],
        Title: ['RocknRoll One', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

