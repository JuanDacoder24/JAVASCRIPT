console.log('¡El archivo JavaScript está funcionando!');
console.log('¡El archivo JavaScript está funcionando!');

document.addEventListener('DOMContentLoaded', () => {

//Lista de favoritos
    const listaFavoritos = document.getElementById('lista-favoritos');
    const añadirAFavoritos = (boton) => {
    const evento = boton.closest('.evento'); 
    const tituloEvento = evento.querySelector('.titulo-evento').textContent;
    const existeEnFavoritos = Array.from(listaFavoritos.children).some((item) => item.textContent.includes(tituloEvento));

        if (!existeEnFavoritos) {
            const itemFavorito = document.createElement('li');
            itemFavorito.textContent = tituloEvento;
            //boton de eliminar
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.style.marginLeft = '10px';
            botonEliminar.style.backgroundColor = 'red';
            botonEliminar.style.color = 'white';
            botonEliminar.style.border = 'none';
            botonEliminar.style.cursor = 'pointer';
            botonEliminar.style.borderRadius = '5px';
            botonEliminar.addEventListener('click', () => {
                itemFavorito.remove(); 
            });
            itemFavorito.appendChild(botonEliminar);
            listaFavoritos.appendChild(itemFavorito);
        } else {
            alert('Este evento ya está en favoritos.');
        }
    };

    const botonesFavorito = document.querySelectorAll('.btn-favorito');
    botonesFavorito.forEach((boton) => {
        boton.addEventListener('click', () => añadirAFavoritos(boton));
    });

//Inicio de sesion    
    // Mostrar la ventana 
    const modal = document.getElementById('modal');
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');
    document.body.style.overflow = 'hidden';

    // Credenciales correctas
    const validUsuario = 'RecuperacionJS';
    const validContraseña = '#2025jsEx';

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;

        if (usuario === validUsuario && contraseña === validContraseña) {
            // Credenciales correctas
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            //Mensaje de error
            mensajeError.style.display = 'block';
        }
    });
});