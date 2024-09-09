/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "card-color": 'hsl(209, 23%, 22%)',
        "dark-color": 'hsl(207, 26%, 17%)'
      }
    },
  },
  plugins: [],
}