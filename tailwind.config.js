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
        "filter-use":"var(--filter-use)",
        "line-catalogo":"var(--bg-line)",
        "mobile-0a":"var(--base-menu-mobile-0a)",
        "back-catalogo":"var( --background-menu-catalogo)",
        "btn-filter":"var(--btn-filter)",
        "filter-options":"var( --bg-filter-options)",
        "filter-use":"var( --filter-use)",
        "base-menu-aplications":"var(--base-menu-aplications)",

      }),
      textColor: theme => theme('colors'),
      textColor: {
        "force-cf":"#CFCFCF",
        'title': 'var(--text-title)',        
        'subtitle': 'var(--text-subtitle)',        
        'cf-aplicates': 'var(--text-cf)',        
        'cf': 'var( --base-cf)',        
        'selected-filter': 'var(--text-selected-filter)',        
        'cf2': 'var(--base-bg-cf)',        
        'filter-aplicate': 'var(--text-filter-aplicate)',        
        'text-filter': 'var(--text-clor-filter-base)',        
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'menu-bar-select': 'var( --border-menu)',
        'buscar-dorado': 'var(--dorado)',

       }),
      width:{
        "18":"70px",
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
      },
       boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
        "btn-filter":"0px 2px 5px rgba(0, 0, 0, 0.25)"
      },
      rotate: {
        '-180': '-180deg',
         '-90': '-90deg',
        '-45': '-45deg',
         '0': '0',
         '45': '45deg',
         '90': '90deg',
        '135': '135deg',
         '180': '180deg',
        '270': '270deg',
       },
       screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1306px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
