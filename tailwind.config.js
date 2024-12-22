/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{html,ts,tsx,js,jsx}',
    './src/pages/**/*.{html,ts,tsx,js,jsx}',
    './src/App.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'wrapper': '#313338',
        'sidebar': '#2E3036',
        'chat': '#37393F',
      },
      fontSize: {},
      fontFamily: {
        regular: ['gg sans Regular', 'sans-serif'],
        bold: ['gg sans Bold', 'sans-serif'],
        medium: ['gg sans Medium', 'sans-serif'],
        semibold: ['gg sans Semibold', 'sans-serif'],
        kr: ['NotoSansKR-VariableFont_wght', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        sans: ['sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
