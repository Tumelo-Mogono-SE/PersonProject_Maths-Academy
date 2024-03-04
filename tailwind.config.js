/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': {
          500: '#223d50',
        },
        'myblue': '#223d50',
    },
  },
  plugins: [],
}
}
