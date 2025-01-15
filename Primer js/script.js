document.addEventListener('DOMContentLoaded', function () {

    const cuerpo = document.getElementById('cuerpo');
    const botonRestaurar = document.getElementById('botonRestaurar');
    const parrafoInteractivo = document.getElementById('parrafoInteractivo');

    const estilosIniciales = {
        colorFondo: '#fff',
        tamanoTexto: '24px',
        tamanoImagen: '100%'
    };

    let estilosActuales = { ...estilosIniciales };

    const dimensionesRestaurar = {
        ancho: '580px',
        alto: '410px'
    };

    function cambiarEstilo() {
        const colores = ['#f39c12', '#e74c3c', '#27ae60', '#3498db'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        cuerpo.style.backgroundColor = colorAleatorio;
        cuerpo.style.color = obtenerColorContraste(colorAleatorio);
        // Actualizar los estilos actuales
        estilosActuales.colorFondo = colorAleatorio;
        estilosActuales.colorTexto = obtenerColorContraste(colorAleatorio);
    }
})