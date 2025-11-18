/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinnamon: {
          50:  '#faf7f1',
          100: '#f4ede2',
          200: '#e8d9c3',
          300: '#d9c0a0',
          400: '#c9a47b',
          500: '#b98a5d',  // main cinnamon brown
          600: '#a6774e',
          700: '#8c6040',
          800: '#6b4a33',  // deep rich brown (used heavily in the design)
          900: '#4a3324',
          950: '#2c1f15',
        },
        parchment: '#d6c9b0',      // background texture color
        cream:     '#f9f5f0',      // light sections & cards
        sage:      '#8a9273',      // subtle green for ethical/organic touch
        gold: {
          400: '#e6b762',
          500: '#d4a24a',
          600: '#c48f38',        // elegant gold accent
        },
      },
    },
  },
  plugins: [],
}