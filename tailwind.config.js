/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{html,ts,tsx,js,jsx}',
    './src/pages/**/*.{html,ts,tsx,js,jsx}',
    './src/App.tsx',
  ],
  theme: {
    fontSize: {
      lg: '16px',
      base: '14px',
      sm: '12px',
    },
    extend: {
      colors: {
        'wrapper': '#313338',
        'sidebar': '#2E3036',
        'chat': '#37393F',
        'off': '#8E9297',
        'des': '#DCDDDE',
        'primary': '#5865F2',
        'panel': '#292b2f',
      },
      fontFamily: {
        regular: ['gg sans Regular', 'sans-serif'],
        bold: ['gg sans Bold', 'sans-serif'],
        medium: ['gg sans Medium', 'sans-serif'],
        semibold: ['gg sans Semibold', 'sans-serif'],
        kr: ['NotoSansKR-VariableFont_wght', 'sans-serif'],
      },
      width: {
        'wrapper': '72px',
        'sidebar': '272px',
        'chat': '1576px',
      },
    },
  },
  plugins: [],
}
