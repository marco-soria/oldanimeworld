
const imagenes = ['imagen/uno.jpg', 'imagen/dos.jpg', 'imagen/tres.jpg', 'imagen/cuatro.jpg', 'imagen/cinco.jpg'];

let contador = 0;

const botonAtras = document.querySelector('.atras')
const botonAdelante = document.querySelector('.adelante')
const cambioImagen = document.querySelector('.imagenCarrucel')

// Agrega un event listener al botón de "adelante"

botonAdelante.addEventListener('click', function(){

    contador++;
    if (contador >= imagenes.length) {
        contador = 0
    }
    cambiarImagen()
})

// Agrega un event listener al botón de "atras"

botonAtras.addEventListener('click', function(){

    contador--;
    if (contador < 0) {
        contador = imagenes.length -1
    }
    cambiarImagen()
})

// Función para cambiar la imazzzgen

function cambiarImagen(){
    cambioImagen.src = imagenes[contador];
}