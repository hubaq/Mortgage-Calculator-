/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: 'hsl(61, 70%, 52%)',
        red: 'hsl(4, 69%, 50%)',
        white: 'hsl(0, 0%, 100%)',
        'Slate-100': 'hsl(202, 86%, 94%)',
        'Slate-300': 'hsl(203, 41%, 72%)',
        'Slate-500': 'hsl(200, 26%, 54%)',
        'Slate-700': ' hsl(200, 24%, 40%)',
        'Slate-900': ' hsl(202, 55%, 16%)',
      },
      fontFamily: {
        plus: 'Plus Jakarta Sans',
      },
    },
  },
  plugins: [],
};
