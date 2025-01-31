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

//ejercicio 7 Escribe un programa que lea una calificación numérica entre 0 y 10 y la transforma en
//calificación alfabética, escribiendo el resultado.
const boton7 = document.getElementById('boton7');
boton7.addEventListener('click', () =>{
    const num = prompt('Introduce el numero');
    if (num < 3) {	
        mensaje.textContent ='Muy deficiente';
    }else if (num < 5)
    {
        mensaje.textContent ='Insuficiente';
    }else if (num < 6)
    {
        mensaje.textContent ='Bien';
    }else if (num < 9)
    {
        mensaje.textContent ='Notable';
    }else if(num >=9 && num <= 10)
    {
        mensaje.textContent ='Sobresaliente';
    }
});

//ejercicio 8 Realiza un programa que lea un número positivo N y calcule y visualice su factorial N!
//Siendo el factorial:
const boton8 = document.getElementById('boton8');
boton8.addEventListener('click', () =>{
   const num = prompt('Introduce el numero');
   let factorial = 1;
   for (let i = 1; i <=num; i++){
    factorial *= i;
    mensaje.textContent = 'El factorial es: ' + factorial;
}
});

//ejercicio 9 Escribe un programa que recibe como datos de entrada una hora expresada en horas,
//minutos y segundos que nos calcula y escribe la hora, minutos y segundos que serán,
//transcurrido un segundo.
const boton9 = document.getElementById('boton9');
boton9.addEventListener('click', () =>{
   let hora = prompt('Introduce la hora');
   let minuto = prompt('Introduce el minuto');
   let segundo = prompt('Introduce el segundo');
   segundo ++;
   if (segundo >= 60) {
    segundo = 0;
    minuto++;
    
    }
    if (minuto >= 60) {
    minuto = 0;
    hora++;
    
    }
    if (hora >= 24) {
    hora = 0;
    }
    mensaje.textContent = 'La hora seria: ' + hora + ' : ' + minuto + ' : ' + segundo;
});

//ejercicio 10 Realiza un programa que lea 10 números no nulos y luego muestre un mensaje de si ha
//leído algún número negativo o no.
const boton10 = document.getElementById('boton10');
boton10.addEventListener('click', () =>{
   let cont = 0;
   let bucle = 0;

   do{
    let num = prompt('Introduce un numero (hasta 10)' + bucle);
    bucle++;
    if(num < 0){
        cont++;
    }
    }while(bucle <= 10);
   
    if(cont>0){
        mensaje.textContent = "Ha leido un numero negativo";
    }
    else{
        mensaje.textContent = "No ha leido un numero negativo";
    }
    bucle = 0;

});

//ejercicio 11
const boton11 = document.getElementById('boton11');
boton11.addEventListener('click', () =>{
    let contpos = 0;
    let conneg = 0;
   for (let i = 1; i <=10; i++){
    const num = prompt('Introduce un numero(hasta 10)' +i);  
    if(num>0){
        contneg++;
    }
    else{
        contpos++;
    }
    }
    if(cont>0){
        mensaje.textContent = "Ha leido " +conneg + " numeros negativos";
    }
    else{
        mensaje.textContent = "Ha leido " +contpos + " numeros negativos";
    }
});

//ejercicio 12
const boton12 = document.getElementById('boton12');
boton12.addEventListener('click', () =>{
    let posi = 0;
    let nega = 0;
    let cont = 0;
    while(cont <=0 ){
    const num = prompt('Introduce el numero');
    cont += num;
    }
});