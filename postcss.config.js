// postcss.config.js

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-color-variables')(),

  ],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.js"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

