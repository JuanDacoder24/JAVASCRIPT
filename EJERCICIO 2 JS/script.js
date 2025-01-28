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

//ejercicio 5 Escribe un programa que toma como dato de entrada un número que corresponde a la
//longitud de un radio y nos escribe la longitud de la circunferencia, el área del círculo y el
//volumen de la esfera que corresponden con dicho radio.
const boton5 = document.getElementById('boton5');
boton5.addEventListener('click', () =>{
    const numero1 = parseInt(prompt('Introduce el numero'));
    const area = 3.14 * (numero1 * numero1);
    const circunferencia = 2 * 3.14 * numero1;

    mensaje.textContent = 'El area es : ' + area + ' La circunferencia es: ' + circunferencia;
});

//ejercicio 6 Escribe un programa que dado el precio de un artículo y el precio de venta real nos
//muestre el porcentaje de descuento realizado.
const boton6 = document.getElementById('boton6');
boton6.addEventListener('click', () =>{
    const precio = parseInt(prompt('Introduce el precio'));
    const precioVenta = parseInt(prompt('Introduce el precio de venta'));
    const porcentaje = ((precio - precioVenta) / precio) * 100;

    mensaje.textContent = 'El porcentaje de descuento es: ' + porcentaje + '%';
});

//ejercicio 7 Escribe un programa que lea un valor correspondiente a una distancia en millas marinas
//y escriba la distancia en metros. Sabiendo que una milla marina equivale a 1.852 metros.
const boton7 = document.getElementById('boton7');
boton7.addEventListener('click', () =>{
    const millas = parseInt(prompt('Introduce el valor'));
    const metros = millas * 1852;

    mensaje.textContent = 'La distancia en metros es: ' + metros;
});

//ejercicio 8 Escribe un programa que lee dos números y los visualiza en orden ascendente.
const boton8 = document.getElementById('boton8');
boton8.addEventListener('click', () =>{
    const numero1 = parseInt(prompt('Introduce el primer numero'));
    const numero2 = parseInt(prompt('Introduce el segundo numero'));
    if (numero1 > numero2) {
        mensaje.textContent = 'El orden ascendente es: ' + numero1 + ' ' + numero2;
    }else if (numero2 > numero1) {
        mensaje.textContent = 'El mayor es: ' + numero2;
}
});

//ejercico 9 Escribe un programa que lee dos números y nos dice cuál es el mayor o si son iguales.
const boton9 = document.getElementById('boton9');
boton9.addEventListener('click', () =>{
    const numero1 = parseInt(prompt('Introduce el primer numero'));
    const numero2 = parseInt(prompt('Introduce el segundo numero'));
    if (numero1 > numero2) {
        mensaje.textContent = 'El mayor es: ' + numero1;
    }else if (numero2 > numero1) {
        mensaje.textContent = 'El mayor es: ' + numero2;
    }else {
        mensaje.textContent = 'Los numeros son iguales';
    }
});

//ejercicoo 10 Escribe un programa que lea tres números distintos y nos diga cuál es el mayor.
const boton10 = document.getElementById('boton10');
boton10.addEventListener('click', () =>{
    const numero1 = parseInt(prompt('Introduce el primer numero'));
    const numero2 = parseInt(prompt('Introduce el segundo numero'));
    const numero3 = parseInt(prompt('Introduce el tercer numero'));
    if (numero1 > numero2 && numero1 > numero3) {
        mensaje.textContent = 'El mayor es: ' + numero1;
        }else if (numero2 > numero1 && numero2 > numero3) {
            mensaje.textContent = 'El mayor es: ' + numero2;
            }else {
                mensaje.textContent = 'El mayor es: ' + numero3;
}
});

//ejercicio 11 Escribe un programa que lee dos números, calcula y muestra el valor de su suma, resta,
//producto y división. (Ten en cuenta la división por cero).
const boton11 = document.getElementById('boton11');
boton11.addEventListener('click', () =>{
    const numero1 = parseInt(prompt('Introduce el primer numero'));
    const numero2 = parseInt(prompt('Introduce el segundo numero'));
    if (numero1 == 0 && numero2 == 0) {
        mensaje.textContent = 'No se puede dividir entre cero';
    }
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;

    mensaje.textContent = 'El resultado es: ' + suma + ' El resultado es: ' + resta + ' El resultado es: ' + multiplicacion + ' El resultado es: ' + division;
});

//ejercicio 12 Escribe un programa que lee 2 números y muestra el mayor
//-----------------SE REPITE---------------------------

//ejercicio 13 Escribe un programa que lee un número y me dice si es positivo o negativo
//consideraremos el cero como positivo.
const boton13 = document.getElementById('boton13');
boton13.addEventListener('click', () =>{
    const numero = parseInt(prompt('Introduce un numero'));
    if (numero > 0) {
        mensaje.textContent = 'El numero es positivo';
    }else if (numero == 0) {
        mensaje.textContent = 'El numero es cero';
    }
});