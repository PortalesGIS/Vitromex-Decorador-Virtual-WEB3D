module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:theme=>({
        ...theme("colors"),
        "base-black":"var(--base-black)",
        "base-white":"var( --base-white)",
        "base-black-opacity":"var(--base-black-opacity)",
        "separatedBar":"#6A6A6A",
        "1d":"var(--base-1d)",
        "0a":"var(--base-oa)",
        "menu-select-piso-muro":"var(--color-select-aplication)",
        "6a":"var(--base-6a)",
        "2e":"var(--base-2e)",
        "67":"var(--base-67)",
        "mobile-0a":"var(--base-menu-mobile-0a)",
        "back-catalogo":"var( --background-menu-catalogo)",

      }),
      textColor: theme => theme('colors'),
      textColor: {
        'title': 'var(--text-title)',        
        'subtitle': 'var(--text-subtitle)',        
        'cf': 'var( --base-cf)',        
        'cf2': 'var(--base-bg-cf)',        
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'menu-bar-select': 'var( --border-menu)',
       }),
      width:{
        "336":"336px",
        "212":"212px",
        "471":"471px",
        
      },
      height:{
        "77":"77px",        
      },
      zIndex: {
        '0': 0,
       '10': 10,
       '20': 20,
       '30': 30,
       '40': 40,
       '50': 50,
       '25': 25,
       '50': 50,
       '75': 75,
       '100': 100,
        'auto': 'auto',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
