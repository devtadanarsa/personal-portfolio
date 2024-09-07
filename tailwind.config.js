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
        'secondary-lavender': '#8368FF',
        'primary-white': '#F5F5F5',
        'secondary-white': '#FAFAFA',
        'third-white': '#F0F0F0',
        'primary-black': '#0C0C0C',
        'secondary-black': '#0F0F0F',
        'third-black': '#131313',
        'primary-gray': '#707070',
        'secondary-gray': '#999999',
      }
    },
  },
  plugins: [],
}

