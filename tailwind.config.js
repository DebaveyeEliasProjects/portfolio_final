

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro'],
      },
      width: {
        '120': '60rem',
        '110': '40rem',
      },
      height: {
        '110': '40rem',
        '120': '60rem',
      },
      maxHeight: {
        '120': '40rem',
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
