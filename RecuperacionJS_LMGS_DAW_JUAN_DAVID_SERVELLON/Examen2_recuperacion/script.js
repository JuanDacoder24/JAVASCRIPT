console.log('¡El archivo JavaScript está funcionando!');

//ejercicio 1 Escribe un programa que solicite al usuario una cantidad en euros y 
//la convierta en dolares y libras, usando el siguiente simulador: 1 eur = 1.10 usd y 1 eur = 0.85 gbp.
const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', () =>{
    const cantidad = parseFloat(prompt('Introduce la cantidad en euros: '));
    if (isNaN(cantidad) || cantidad <= 0) {
        resultado.textContent = 'Por favor, introduce una cantidad válida en euros.';
        return;
    }
    const dolares = cantidad * 1.10;
    const libras = cantidad * 0.85;
    resultado.textContent = 'La cantidad en dólares es:' + dolares.toFixed(2) + 'y en libras es: ' + libras.toFixed(2);
    });

/*ejercicio 2 Escribe una función que, dado un número N introducido por el usuario, imprima 
todos los números del 1 al N indicando si cada uno es par o impar.*/
const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', () =>{  
    const numero = parseInt(prompt('Introduce un número:'));
    if (isNaN(numero) || numero <= 0) {
        mensaje.textContent = 'Por favor, introduce un número válido mayor que 0.';
        return;
    }

    let resultadoTexto = '';
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            resultadoTexto = i + ' es par ';
        } else {
            resultadoTexto = i + ' es impar ';
        }
    }

    mensaje.textContent = resultadoTexto;
    });

//ejercicio 3 Solicita al usuario dos números: base y exponente. Escribe una función que devuelva el 
//resultado de elevar la base al exponente.
const boton3 = document.getElementById('boton3');
boton3.addEventListener('click', () =>{  
    const base = parseFloat(prompt('Introduce la base: '));
    const exponente = parseInt(prompt('Introduce el exponente: '));
    const resultado = Math.pow(base, exponente);
    mensaje.textContent = 'El resultado de '+base+ ' elevado a '+ exponente + ' es:' + resultado;

});

/*ejercicio 4 Solicita al usuario el precio de un producto y si es un producto general (21%), reducido 
(10%) o superreducido (4%). Calcula y muestra el precio final con el IVA correspondiente. */
const boton4 = document.getElementById('boton4');
boton4.addEventListener('click', () =>{  
    
    });

//ejercicio 5 Juego de piedra papel o tijera
const boton5 = document.getElementById('boton5');
boton5.addEventListener('click', () =>{  
    const opciones = ['piedra', 'papel', 'tijera'];
    const jugador = prompt('Elige piedra, papel o tijera: ').toLowerCase();
    const computadora = opciones[Math.floor(Math.random() * 3)];
    if (!opciones.includes(jugador)) {
        mensaje.textContent = 'Opción no válida.';
        return;
    }
    mensaje.textContent = 'Computadora eligió: ' + computadora;
    if (jugador === computadora) {
        mensaje.textContent += ' ¡Es un empate!';
    } else if (
        (jugador === 'piedra' && computadora === 'tijera') ||
        (jugador === 'papel' && computadora === 'piedra') ||
        (jugador === 'tijera' && computadora === 'papel')
    ) {
        mensaje.textContent += ' ¡Ganaste!';
    } else {
        mensaje.textContent += ' ¡Perdiste!';
    }
    });

//ejercicio 6 Solicita al usuario las horas trabajadas y el pago por hora. Si trabaja más de 40 horas, 
//las horas extra se pagan al 150%. Calcula y muestra el sueldo final.
const boton6 = document.getElementById('boton6');
boton6.addEventListener('click', () =>{  
    const horasTrabajadas = parseFloat(prompt('Introduce las horas trabajadas: '));
    const pagoPorHora = parseFloat(prompt('Introduce el pago por hora: '));
    let sueldoFinal = 0;
    if (isNaN(horasTrabajadas) || horasTrabajadas < 0 || isNaN(pagoPorHora) || pagoPorHora < 0) {
        mensaje.textContent = 'Por favor, introduce valores válidos para las horas trabajadas y el pago por hora.';
        return;
    }
    if (horasTrabajadas > 40) {
        const horasExtra = horasTrabajadas - 40;
        sueldoFinal = (40 * pagoPorHora) + (horasExtra * pagoPorHora * 1.5);
    } else {
        sueldoFinal = horasTrabajadas * pagoPorHora;
    }

    mensaje.textContent = 'El sueldo final es:' + sueldoFinal.toFixed(2) + 'euros';
    });

//ejercicio 7 Pide al usuario que introduzca 5 notas, guárdalas en un array, y muestra la nota media.
const boton7 = document.getElementById('boton7');
boton7.addEventListener('click', () =>{  
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
        const nota = parseFloat(prompt(`Introduce la nota ${i}:`));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            mensaje.textContent = 'Por favor, introduce notas válidas entre 0 y 10.';
            return;
        }
        suma += nota;
    }

    const media = suma / 5;
    mensaje.textContent = `La nota media es: ${media.toFixed(2)}.`;
});

//ejercicio 8 
const boton8 = document.getElementById('boton8');
boton8.addEventListener('click', () =>{  
    
    
 });