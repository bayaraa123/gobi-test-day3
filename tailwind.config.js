/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      purple: '#3A416F',
      grayDark: '#273444',
      gray: '#8492a6',
      grayNight: '#d3dce6',
    },
    fontSize: {
      xs: ['12px', '14px'],
      sm: ['12px', '24px'],
      md: ['13px', '26px'],
      // base: ['16px', '24px'],
      md2: ['18px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
