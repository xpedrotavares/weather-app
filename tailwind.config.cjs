/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,png}",
    "./src/components/*.{jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#101039',
      },
      content: {
        'search-icon': 'url("../src/assets/search-icon.svg")' 
      },
      backgroundImage: {
        'hero': "url('../src/assets/background.svg')",
      }
    },
  },
  plugins: [],
}
