console.log('¡El archivo JavaScript está funcionando!');

const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');
const botonFondo = document.getElementById('botonFondo');

boton.addEventListener('click', () =>{  
mensaje.textContent = '¡Este es un mensaje dinamico generado con JavaScript';
});


botonFondo.addEventListener('click', () =>{
    document.body.style.backgroundColor = "red";
})