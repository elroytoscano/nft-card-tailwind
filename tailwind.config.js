module.exports = {
  content: ['./src/**/*.{html,js}'],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      screens: {
        sm: '375px',
        smd: '540px',
        md: '1080px',
        lg: '1200px',
        xl: '1440px',
      },
      colors: {
        softBlue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        mainBG: 'hsl(217, 54%, 11%)',
        cardBG: 'hsl(216, 50%, 16%)',
        lineColor: 'hsl(215, 32%, 27%)',
        whiteColor: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
