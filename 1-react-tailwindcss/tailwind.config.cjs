/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'neon': '#ccff00'
      }),
      backgroundColor: theme => ({
        'neon': '#ccff00'
      })
    },
  },
  plugins: [],
}
