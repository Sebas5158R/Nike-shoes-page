/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        TradeGothic: ['Trade Gothic', 'sans-serif'],
        ThunderBold: ['ThunderBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

