module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'text' : '#424242',
      'primario' : '#0D6FFD',
      'naranja' : '#FC7619'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
content: [
  "./node_modules/flowbite/**/*.js"
]
}
