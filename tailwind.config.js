/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'primary': '#19357D',
      'light-primary': '#2D58A5',
      'secondary': '#FDDC1E',
      'light-secondary': '#FFC115',
    },
    fontFamily: {
      calibri: ['calibri', 'sans-serif'],
      fashion: ['fashion', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

