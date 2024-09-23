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
      NotFound : "#D91656",
      NotAvailbaleBG : "#FFBE98"
    },
    fontFamily: {
      southFont: ["Kanit", "sans-serif"],
    },
  },
  plugins: [],
}
