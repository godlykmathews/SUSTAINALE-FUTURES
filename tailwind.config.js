/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './vite.config.ts', './postcss.config.js'],
  theme: {
    extend: {
      colors: {
        primary: '#2C5530',
        secondary: '#E5DCC7',
        accent: '#7CAFC4',
        offwhite: '#FAFAF8',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure this plugin is included
  ],
};