/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': '#ffffff',
        'background': '#111111',
        'barrafondo': '#D9D9D9',
        'dorado3': '#C89B3C',
        'dorado2': '#C89B3C',
        'dorado1': '#F0E6D2',
        'dorado0': '#F0E6D2',
        'gris': '#3C3C41',
        'bord': '#42331A',
        'turquesa': '#31969D',
        'background3': 'linear-gradient(180deg, #000000 0%, #140B00 100%)',
        'amvar': '#140B00',
        'light': '#000000'
      },
    },
  },
  plugins: [],
}
