/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/components/**/*.{html,ts,tsx,js,jsx}',
    './src/feature/**/*.{html,ts,tsx,js,jsx}',
    './src/view/**/*.{html,ts,tsx,js,jsx}',
    './src/App.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['gg sans', 'sans-serif'],
        display: ['ABC Ginto Nord Trial', 'sans-serif'],
        regular: ['gg sans Regular', 'sans-serif'],
        bold: ['gg sans Bold', 'sans-serif'],
        medium: ['gg sans Medium', 'sans-serif'],
        semibold: ['gg sans Semibold', 'sans-serif'],
        kr: ['NotoSansKR-VariableFont_wght', 'sans-serif'],
      },
      fontSize: {
        'heading-sm': '0.875rem', // 14px
        'heading-md': '1rem', // 16px
        'heading-lg': '1.25rem', // 20px
        'heading-xl': '1.5rem', // 24px
        'heading-xxl': '2rem', // 32px
        'text-xxs': '0.625rem', // 10px
        'text-xs': '0.75rem', // 12px
        'text-sm': '0.875rem', // 14px
        'text-md': '1rem', // 16px
        'text-lg': '1.25rem', // 20px
        'display-sm': '1.5rem', // 24px
        'display-md': '2.125rem', // 34px
        'display-lg': '2.75rem', // 44px
        lg: '16px',
        base: '14px',
        sm: '12px',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      lineHeight: {
        none: '1',
        tight: '1.1',
        snug: '1.2',
        normal: '1.5',
        relaxed: '1.75',
      },
      colors: {
        'wrapper': '#313338',
        'sidebar': '#2E3036',
        'chat': '#37393F',
        'off': '#8E9297',
        'des': '#DCDDDE',
        'primary': '#5865F2',
        'primary-hover': 'rgb(70, 84, 192)',
        'panel': '#292b2f',
        'blurple': '#5865F2', // CMYK 80, 60, 0, 0
        'green': '#57F287', // CMYK 50, 0, 55, 0
        'yellow': '#FEE75C', // CMYK 0, 5, 80, 0
        'fuchsia': '#EB459E', // CMYK 0, 90, 0, 0
        'red': '#ED4245', // CMYK 0, 90, 65, 0
        'white': '#FFFFFF', // CMYK 0, 0, 0, 0
        'black': '#000000', // CMYK 35, 0, 0, 100
      },
      width: {
        'wrapper': '72px',
        'sidebar': '272px',
        'chat': '1576px',
      },
    },
  },
  plugins: [],
};
