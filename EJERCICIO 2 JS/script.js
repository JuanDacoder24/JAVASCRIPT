console.log('¡El archivo JavaScript está funcionando!');

//ejercicio 1
const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', () =>{  
    mensaje.textContent = 'Buenos dias';
    });

//ejercicio 2
const lado = 5
const area = lado*lado

const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', () =>{  
    mensaje.textContent = 'El resultado del area de un cuadrado de 5 es: ' + area;
    });

//ejercicio 3
const boton3 = document.getElementById('boton3');
boton3.addEventListener('click', () =>{  
    function calcularAreaCuadrado(lado) {
        return lado * lado; 
    }
    const lado = prompt("Introduce la longitud del lado del cuadrado:");
    const area = calcularAreaCuadrado(lado);
    mensaje.textContent = 'El área del cuadrado es: ' + area;
    });

//ejercicio 4
const boton4 = document.getElementById('boton4');
boton4.addEventListener('click', () =>{
    const numero1 = parseInt(prompt('Introduce el numero'));
    const numero2 = parseInt(prompt('Introduce el numero'));
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;

    mensaje.textContent = 'El resultado es: ' + suma + ' El resultado es: ' + resta + ' El resultado es: ' + multiplicacion + ' El resultado es: ' + division;
});

//ejercicio 5
const boton5 = document.getElementById('boton5');
boton5.addEventListener('click', () =>{
    const numero1 = parseInt(prompt('Introduce el numero'));
});