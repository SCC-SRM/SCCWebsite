/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custommonth:'#F18C00',
        custom1:'#ffffff',
        orangeHeader:"#F18C00",
      }
    },
  },
  plugins: [
   
  ],
};

