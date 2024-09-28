/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        ticker: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, // Adjust this to match the total height
        },
      },
      animation: {
        ticker: 'ticker .2s linear infinite',
      },
      fontFamily: {
        mono: ["Departure Mono", "SF Mono", "ui-monospace", "monospace"]
      }
    },
  },
  plugins: [],
};
