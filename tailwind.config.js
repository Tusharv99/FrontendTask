/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-fill-color': 'transparent',
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': 'currentColor', // This ensures that stroke color matches text color
        },
      });
    },
  ],
}

