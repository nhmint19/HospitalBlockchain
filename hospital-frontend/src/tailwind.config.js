/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      boxShadow: {
        custom: '0 4px 6px -1px rgba(118, 188, 161, 0.4), 0 2px 4px -1px rgba(143, 180, 166, 0.2)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primaryLight: '#B4C8C8',
        primaryLightBg: '#EBEBEB',
        primaryDark: '#000',
        primaryDarkBg: '#333',
        textLight: '#000',
        textDark: '#fff',
        error: '#f00',
      },
    },
  },
  plugins: [],
};
