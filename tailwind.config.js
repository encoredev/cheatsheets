const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { fontWeight } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
      colors: {
        purple: {
          50: '#F6F5FF',
          100: '#E9E1F8',
          200: '#CFBCF2',
          300: '#A081D9',
          400: '#8662C7',
          500: '#724BB7',
          600: '#663BAD',
          700: '#51279B',
          800: '#421887',
          900: '#341270',
          1000: '#240754',
        },
        coolgray: colors.coolGray,
        gray: colors.warmGray,
        lightblue: colors.lightBlue,
        teal: colors.teal,
        rose: colors.rose,
        amber: colors.amber,
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        header: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      typography: {
        DEFAULT: {
          css: {
            'code': {
              fontWeight: "700",
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            }
          }
        }
      },
    },
  },
  variants: {
    visibility: ['responsive', 'group-hover'],
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
