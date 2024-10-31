module.exports = {
  content: [
    './index.html', // Incluye el archivo HTML en la raíz
    './src/**/*.{html,js}', // Incluye archivos en src con extensiones html y js
  ],
  theme: {
    extend: {
      fontFamily: {
        'hello-kitty': ['"Patrick Hand"', 'cursive'], // Agrega la fuente "Patrick Hand"
      },
    },
  },
  plugins: [],
}
