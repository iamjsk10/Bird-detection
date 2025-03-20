/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pokedex-screen': 'url(/Users/jasmeetsinghkalsi/Projects/Bird_detection/src/assets/images/pokeDex.jpeg)',
      },
      mixBlendMode: {
        'multiply': 'multiply',
      },
      colors: {
        'background': '#ebe9e1', // Single background color
        'primary-text': '#2F4F4F', // Single text color
      },
      fontFamily: {
        'body-font': ['"Press Start 2P"', 'monospace'], // All body text
        'nav-font': ['"Roboto Condensed"', 'sans-serif'], // Navigation only
        'brand-font': ['"Pokemon Hollow"', 'sans-serif'] // Special div
      },
      animation: {
        'spin-open': 'spin-open 0.8s ease-out forwards', 
        'shake': 'shake 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'success-bounce': 'successBounce 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'flash': 'flash 0.5s linear',
        'flip-in': 'flipIn 0.5s ease-out forwards',
      },
      keyframes: {
        'spin-open': {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(180deg) scale(1.1)', opacity: '1' },
          '100%': { transform: 'rotate(360deg) scale(1.2)', opacity: '0' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-8px) rotate(-10deg)' },
          '50%': { transform: 'translateX(8px) rotate(10deg)' },
          '75%': { transform: 'translateX(-4px) rotate(-5deg)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'successBounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'flash': {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0' },
        },
        'lipIn': {
          '0%': { transform: 'rotateY(90deg) scale(0.5)', opacity: '0' },
          '100%': { transform: 'rotateY(0) scale(1)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}