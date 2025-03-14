console.log('¡El archivo JavaScript está funcionando!');

//ejercicio 1 Conversion de temperatura
const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', () =>{
    let mensaje = prompt('Inserte los grados de temperatura')
    let celcius;
    let fahrenheit; 
    let kelvin;  
    mensaje.textContent = 'Buenos dias';
    });

//ejercicio 2 Análisis de números primos 
const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', () =>{  

    });

//ejercicio 3 Cálculo del factorial
const boton3 = document.getElementById('boton3');
boton3.addEventListener('click', () =>{  
    let num = prompt('Introduce el numero');
    let factorial = 1;
    for (let i = 1; i <=num; i++){
    factorial *= i;
    mensaje.textContent = 'El factorial es: ' + factorial;
}
});

//ejercicio 4 Cálculo de descuento en una compra
const boton4 = document.getElementById('boton4');
boton4.addEventListener('click', () =>{  
    let precio = prompt('Ingrese el precio')
    let cantidad = prompt('Ingrese la cantidad')
    let montoTotal = precio * cantidad
    if (montoTotal < 100) {
        diferencia = 100 - montoTotal;
    } else {
        if (montoTotal >= 100 && montoTotal <= 300) {
            descuento = montoTotal * 0.05;
            totalConDesc = montoTotal - descuento;
        } else {
            descuento = montoTotal * 0.10;
            totalConDesc = montoTotal - descuento;
            mensaje.textContent = 'Por su compra tiene un descuento del 10% que equivale a: ' + descuento
                    + ' El monto total con descuento es de: ' + totalConDesc
        }
        
        }
    });

//ejercicio 5 Juego de adivinanza 
const boton5 = document.getElementById('boton5');
boton5.addEventListener('click', () =>{  
    mensaje.textContent = 'Buenos dias';
    });

//ejercicio 6 Cálculo de salario con bonificaciones 
const boton6 = document.getElementById('boton6');
boton6.addEventListener('click', () =>{  
    mensaje.textContent = 'Buenos dias';
    });

//ejercicio 7 Ordenamiento de números  
const boton7 = document.getElementById('boton7');
boton7.addEventListener('click', () =>{  
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Ingresa el número " + (i + 1) + ":"));
        numeros.push(numero);
    }
    numeros.sort((a, b) => a - b);
    mensaje.textContent = 'Números ordenados de menor a mayor: '
    numeros.forEach(numero => {
        mensaje.textContent = numero;
    });
});

//ejercicio 8 Contador de vocales en una palabra 
const boton8 = document.getElementById('boton8');
boton8.addEventListener('click', () =>{  
    function contarVocales(palabra) {
        palabra = palabra.toLowerCase();
        const vocales = ['a', 'e', 'i', 'o', 'u'];
        let contador = 0;
        for (let i = 0; i < palabra.length; i++) {

            if (vocales.includes(palabra[i])) {
                contador++;
            }
        }
        return contador;
    }
    const palabra = prompt("Ingrese una palabra:");
    const totalVocales = contarVocales(palabra);
    alert(`La palabra "${palabra}" tiene ${totalVocales} vocales.`);
    });