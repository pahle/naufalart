/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '-2xl': {max: '1535px'},
        '-xl': {max: '1279px'},
        '-lg': {max: '1023px'},
        '-md': {max: '767px'},
        '-sm': {max: '639px'},
      },
      colors: {
        primary: "#75634D",
        secondary: "#797979",
        "off-white": "#F5F5F5",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        header: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};