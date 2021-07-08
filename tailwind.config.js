module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:theme=>({
        ...theme("colors"),
        "separatedBar":"#6A6A6A",
        "1d":"#1D1D1D",
        "0a":"#0A0A0A",
        "6a":"#6A6A6A",
        "2e":"#2E2E2E",
      }),
      width:{
        "336":"336px",
        "212":"212px",
        
      },
      height:{
        "77":"77px",        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
