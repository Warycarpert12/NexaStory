/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0D',
        surface: '#151418',
        surfaceAlt: '#1D1B20',
        border: '#232227',
        text: '#F3F1EC',
        textMuted: '#9C958C',
        textFaint: '#726C64',
        accent: '#C69B4E',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}