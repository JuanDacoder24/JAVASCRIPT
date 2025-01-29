console.log('¡El archivo JavaScript está funcionando!');

//ejercicio 1 Escribe un programa que pide la edad por teclado y nos muestra el mensaje de “Eres
//mayor de edad” solo si lo somos
const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', () =>{
    const edad = prompt("Introduce tu edad");
    if(edad >= 18){
        mensaje.textContent = 'Eres mayor de edad';
    }
});

//ejercicio 2 Escribe un programa que pide la edad por teclado y nos muestra el mensaje de “eres
//mayor de edad” o el mensaje de “eres menor de edad”.
const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', () =>{
    const edad = prompt("Introduce tu edad");
    if(edad >= 18){
        mensaje.textContent = 'Eres mayor de edad';
    }else{
        mensaje.textContent = 'Eres menor de edad';
    }
});

//ejercicio 3 Realiza un programa que muestre por pantalla los 20 primeros números naturales (1, 2,
//3... 20).
const boton3 = document.getElementById('boton3');
boton3.addEventListener('click', () =>{
    for (let i = 1; i <=20; i++){
        mensaje.textContent += ' - '+ i;
    }
});

//ejercicio 4 Realiza un programa que muestre los números pares comprendidos entre el 1 y el 200.
//Para ello utiliza un contador y suma de 2 en 2.
const boton4 = document.getElementById('boton4');
boton4.addEventListener('click', () =>{
    for (let i = 2; i <=200; i+=2){
        mensaje.textContent += ' - ' + i;
    }
});

//ejercico 5 Realiza un programa que muestre los números pares comprendidos entre el 1 y el 200.
//Esta vez utiliza un contador sumando de 1 en 1
const boton5 = document.getElementById('boton5');
boton5.addEventListener('click', () =>{
    for (let i = 1; i <=200; i++){
        mensaje.textContent += ' - '+ i;
    }
});

//ejercicio 6 Realiza un programa que muestre los números desde el 1 hasta un número N que se
//introducirá por teclado.
const boton6 = document.getElementById('boton6');
boton6.addEventListener('click', () =>{
   const num = prompt('Introduce el numero');
   for (let i = 1; i <=num; i++){
    mensaje.textContent += ' - '+ i;
}
});
