/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#333333',
        'eb-primary': '#20367F',
        'eb-primary-1': '#344889',
        'eb-primary-2': '#5B6B9E',
        'eb-primary-3': '#828DB1',
        'eb-primary-4': '#EFF1F6',
        'eb-secondary': '#C8CBD6',
        'eb-secondary-1': '#545454',
        'eb-secondary-2': '#757575',
        'eb-secondary-3': '#AFAFAF',
        'eb-danger': '#E5761A',
        'eb-danger-1': '#E5CFBC',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}