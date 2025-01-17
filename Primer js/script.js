document.addEventListener('DOMContentLoaded', function () {

    const cuerpo = document.getElementById('cuerpo');
    const botonRestaurar = document.getElementById('botonRestaurar');
    const enlacesMenu = document.querySelectorAll('nav a');
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

        estilosActuales.colorFondo = colorAleatorio;
        estilosActuales.colorTexto = obtenerColorContraste(colorAleatorio);
    }

    function cambiarTamañoTexto() {
        const tamanoTexto = this.getAttribute('data-tamano');
        cuerpo.style.fontSize = tamanoTexto;
        estilosActuales.tamanoTexto = tamanoTexto;
    }

    function restaurarEstilos() {
        cuerpo.style.backgroundColor = estilosIniciales.colorFondo;
        cuerpo.style.fontSize = estilosIniciales.tamanoTexto;
        cuerpo.style.color = estilosIniciales.colorTexto;

        imagenInteractiva.style.width = dimensionesRestaurar.ancho;
        imagenInteractiva.style.height = dimensionesRestaurar.alto;
        imagenInteractiva.style.transform = 'rotate(0deg)';
        estilosActuales = { ...estilosIniciales };
    }

    function obtenerColorContraste(color) {
        const luminosidad = (0.299 * parseInt(color.substring(1, 3), 16)) +
                            (0.587 * parseInt(color.substring(3, 5), 16)) +
                            (0.114 * parseInt(color.substring(5, 7), 16));

        return luminosidad > 128 ? '#000' : '#fff';
    }

    parrafoInteractivo.addEventListener('click', cambiarEstilo);
    enlacesMenu.forEach(enlace => enlace.addEventListener('click', cambiarTamañoTexto));
    botonRestaurar.addEventListener('click', restaurarEstilos);
    imagenInteractiva.addEventListener('click', cambiarEstiloImagen);
    
    //terminar 
})