/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--steve-font-sans)', 'sans-serif'],
      serif: ['var(--steve-font-serif)', 'serif'],
    },
    extend: {
      scale: {
        80: "0.8",
      },
      colors: {
        light: '#eeeeee',
        primary: '#b1d9f3',
      }
    },
  },
  plugins: [],
}
