/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        AuthBackground: "#697565",
        AuthText: "#EEDF7A",
        NotFound: "#D91656",
        NotAvailbaleBG: "#C96868",
        AdminHeader : "#3A6D8C"
      },
      fontFamily: {
        southFont: ["Kanit", "sans-serif"],
      },
    },

    screens: {
      'older-mobile': {'raw': 'screen and (device-aspect-ratio: 40/71)'},
      'mobile': {'max': '767px' },
      'tablet': {'min': '768px', 'max': '1223px'},
      'tablet-or-mobile': {'max': '1224px'},
      'desktop-or-laptop': {'min': '1224px'},
      'in-portrait': {'raw': '(orientation: portrait)'},
      'retina': {'raw': '(min-resolution: 2dppx)'},
    },
  },
  plugins: [require('daisyui')],
};
