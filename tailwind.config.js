/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/landing.gif')",
      },
      fontSize: {
        'responsive-sm': 'clamp(40px, -8.4225352113px + 8.0845070423vw, 200px)',
        'responsive-lg':
          'clamp(60px, -10.4225352113px + 22.0845070423vw, 260px)',
      },
    },
  },
  plugins: [],
}
