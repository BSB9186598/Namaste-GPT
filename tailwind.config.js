/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min':'360px' , 'max':'640px'},
      },
    },
  },
  plugins: [],
}