/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        prime: '#008080',
        second: '#FFBF00',
        accent: '#f472b6',
        neutral: colors.slate,
        transparent: 'transparent',
        black: '#212529',
        white: '#F8F9FA',
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        primary: { DEFAULT: '#05804a', active: '#1e8d5c', hover: '#057343' },
        primaryCt: '#fafafa',
        secondary: { DEFAULT: '#e17110', active: '#e47f28', hover: '#cb660e' },
        secondaryCt: '#27272a',
        textlight: '#DBE9FF',
        salvia: '#05804a',
        menta: '#0aab70',
        violeta: '#5e3dd9',
        ocre: '#e17110',
        terracota: '#b24207',
        salviaCt: '#fafafa',
        mentaCt: '#27272a',
        violetaCt: '#fafafa',
        ocreCt: '#27272a',
        terracotaCt: '##fafafa',
      },
      fontFamily: {
        'poppins-thin': ['Poppins Thin', 'sans serif'],
        poppins: ['Poppins Bold', 'sans serif'],
        'roboto-thin': ['Roboto Thin', 'sans serif'],
        'roboto-thin-italic': ['Roboto Thin Italic', 'sans serif'],
        roboto: ['Roboto', 'sans serif'],
        'roboto-italic': ['Roboto Italic', 'sans serif'],
        'roboto-black': ['Roboto Black', 'sans serif'],
        'roboto-back-italic': ['Roboto Black Italic', 'sans serif'],
      },
      fontSize: {
        caption: '10px',
        small: '12px',
        regular: '14px',
        large: '16px',
        xlarge: '20px',
        xxlarge: '26px',
        hero: '48px',
        header1: '36px',
        header2: '28px',
      },
    },
  },
  plugins: [],
}
