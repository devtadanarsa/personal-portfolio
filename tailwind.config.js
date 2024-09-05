/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary-lavender': '#7456FF',
        'primary-black': '#0C0C0C',
        'secondary-black': '#0F0F0F',
        'primary-gray': '#707070',
        'secondary-gray': '#999999',
      }
    },
  },
  plugins: [],
}

