/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['var(--font-family-ubuntu)'],
      },
      colors: {
        abub: {
          black: '#231F20',
          primary: '#E6E7E9',
        },
      },
      boxShadow: {
        abub: '-10px 10px 26px 0px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
};
