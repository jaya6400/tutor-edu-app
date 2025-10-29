/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0B5FFF",      // bright CTA blue
        brandNavy: "#22265F",      // heading/nav color
        softPink: "#FF6B8A",       // pink card tile
        softTileBlue: "#2D7CFF",   // blue tile
        pageBg: "#F7F8FB"          // light page background
      },
      boxShadow: {
        'card': '0 10px 30px rgba(20,20,50,0.06)'
      }
    },
  },
  plugins: [],
}
