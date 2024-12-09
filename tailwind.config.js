/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector', //selector es claro y media es dark.
  theme: {
    extend: {
      layout: '64px 1fr 100px',
    },
  },
  plugins: [],
}

