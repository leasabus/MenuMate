/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'orange' : '#fe6400',
      'dark' : '#454545',
      'orange-dark' : '#ff5900',
      'orange-light' : '#f7d8c4',
      'gray' : '#8d99ae',
      'white' : '#ffffff'
    },
    fontWeight : {
      'normal' : 300,
      'semibold': 600,
      'bold' : 800,

    }
  },
  plugins: [],
}

