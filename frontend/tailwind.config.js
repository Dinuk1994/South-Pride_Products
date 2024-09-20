/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      AuthBackground: "#697565",
      AuthText: "#EEDF7A",
    },
    fontFamily: {
      southFont: ["Kanit", "sans-serif"],
    },
  },
  plugins: [],
}
