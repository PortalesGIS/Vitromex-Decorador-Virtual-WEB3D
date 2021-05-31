module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:theme=>({
        ...theme("colors"),
        "separatedBar":"#6A6A6A"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
