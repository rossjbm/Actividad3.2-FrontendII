/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily : {
      'titulos': ['Abril Fatface', 'cursive'],
      'textos': ['Merriweather', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f9efdb',
      'black': '#000000',
      'gray': {
        100: '#e0e0e0',
        200: '#9e9e9e',
        300: '#000000cc',
        400: '#000000b3',
      },
      'green': {
        100: '#c4ffc9',
      },
      'blue':{
        200: '#5ecde0',
        300: '#6BCFCD',
      },
    },
    extend: {
      backgroundImage: {
        'parallaxFondo1': "url('/src/assets/Parallax/ImgCompleta.png')",
        'parallaxFondo2': "url('/src/assets/Parallax/ImgRecorte.png')",
        'landingFondo1': "url('/src/assets/fondoHotel1.jpg')",
        'bgFondo1': "url('/src/assets/fondoHotel2.jpg')",
        'bgFondo2': "url('/src/assets/fondoHotel3.jpg')",
      },
    },
  },
  plugins: [],
}

