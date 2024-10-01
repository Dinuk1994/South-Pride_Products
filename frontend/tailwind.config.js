/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        AuthBackground: "#353E55",
        AuthText: "#EEDF7A",
        NotFound: "#D91656",
        NotAvailbaleBG: "#C96868",
        AdminHeader: "#3A6D8C",
        ShoppingHeader: "#697565",
        headerText: "#FFDB5C"
      },
      fontFamily: {
        southFont: ["Kanit", "sans-serif"],
      },
    },
    screens: {
      'older-mobile': { 'raw': 'screen and (device-aspect-ratio: 40/71)' },
      'mobile': { 'max': '767px' },
      'tablet': { 'min': '768px', 'max': '1223px' },
      'tablet-or-mobile': { 'max': '1224px' },
      'desktop-or-laptop': { 'min': '1224px' },
      'in-portrait': { 'raw': '(orientation: portrait)' },
      'retina': { 'raw': '(min-resolution: 2dppx)' },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
};
