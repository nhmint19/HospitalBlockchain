/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primaryLight: '#1976D2',
      primaryDarkBg: '#333',
      textDark: '#fff',
      error: '#f00',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      boxShadow: {
        custom: '0 4px 6px -1px rgba(118, 188, 161, 0.4), 0 2px 4px -1px rgba(143, 180, 166, 0.2)',
      },
    },
  },
  plugins: [],
};
