/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.9' },
          '70%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '0.7' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 3s cubic-bezier(0.9, 0, 1, 0.3) infinite',
      },
    },
  },
  plugins: [],
}
