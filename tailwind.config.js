/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      transitionDuration: {
        '1000': '1000ms', // 1 soniya
        '1500': '1500ms', // 1.5 soniya
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
