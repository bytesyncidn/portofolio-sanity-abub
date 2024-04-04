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
    },
  },
  plugins: [],
}
