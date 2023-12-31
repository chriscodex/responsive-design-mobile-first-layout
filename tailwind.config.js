/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bitcoin-orange': '#f7931a',
      'soft-orange': '#ffe9d5',
      'secondary-blue': '#1a9af7',
      'soft-blue': '#e7f5ff',
      'warm-black': '#282623',
      'black': '#201e1c',
      'grey': '#bababa',
      'warm-grey': '#757575',
      'off-white': '#faf8f7',
      'just-white': '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}

