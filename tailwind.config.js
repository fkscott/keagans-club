/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display' : ['Raleway', 'sans-serif'],
        'body' : ['Poppins', 'sans-serif'],
        'mono': ['"Source Code Pro"', 'monospace']
      }
    },
  },
  plugins: [],
}
