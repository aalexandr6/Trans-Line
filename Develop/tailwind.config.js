/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/.{html}"],

  theme: {
    extend: {},
      backgroundImage:{
          'hero-pattern': "url('/public/images/truck1.png')}"
      }
  },
  plugins: [],
}
module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}
module.exports = {

  content: [
      "./node_modules/flowbite/**/*.js"
  ]

}

