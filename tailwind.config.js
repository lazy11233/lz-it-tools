/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: { side: '15rem' },
      padding: { side: '15rem' },
      keyframes: {
        // trans-
      }
    },
  },
  plugins: [],
}

