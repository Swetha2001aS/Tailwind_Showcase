/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Include all HTML and JS files in the src directory
    './*.{html,js}', // Include HTML and JS files in the root directory
    './build/**/*.html' // Include HTML files in the build directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

