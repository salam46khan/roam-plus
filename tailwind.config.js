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
        Title: ['Donegal One', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

