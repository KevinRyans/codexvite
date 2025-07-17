/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,html}'
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        snappy: 'cubic-bezier(0.25, 1, 0.5, 1)'
      }
    },
  },
  plugins: [],
}
