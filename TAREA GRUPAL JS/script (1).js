//Os voy dejando comentarios para que cuando lo leais sepais que hace cada cosa

//Esto son los enlazadores de los elementos de html para poder trabajar con ellos en javascript
const bottonVisualizacion = document.getElementById("cambiar_estilos");
const cuerpo = document.getElementById("cuerpo");
const cabecera = document.getElementById("cabecera");
const botonesAgregar = document.querySelectorAll(".botones_agregar");
const carritoHtml = document.querySelector(".carrito_compra");


//Defino un array para almacenar los elementos agregados previamente a añadirlos a la web
let objetosAlmacenados = [];

//Como los botones de eliminar estan seleccionados todos con un querySelector, que da como resultado un arbol de nodos
//tengo que crear una función que a cda botón le agregue un evenlistener, que llama a la funcion de agregar al carrito
//cuando pueda creo en el html y el css el elemento carrito
botonesAgregar.forEach(botonesAgregar=>{
    botonesAgregar.addEventListener('click',agregarCarro);
});



//Esta va a ser la primera función para agregar al carrito, estoy probando cosas
function agregarCarro(event){
    leerDatosHamburguesa (event.target.parentElement);
    console.log(leerDatosHamburguesa);
}

//Función para manejar los datos de la hamburguesa que queremos agregar al carrito
function leerDatosHamburguesa(hamburguesa){
    //Creo un objeto con lo que me hace falta de cada hamburguesa
    let infoBurguer = {
        foto : hamburguesa.querySelector("img").src,
        precio : parseFloat(hamburguesa.querySelector("span").textContent),
        cantidad : 1,
        id: hamburguesa.querySelector("button").getAttribute("id")
    }
    almacenarObjetosIntermedios(infoBurguer);
}

//Función para agregar objetos almacenados a nuestro arreglo
function almacenarObjetosIntermedios(infoBurguer){
    objetosAlmacenados.push(infoBurguer);
    console.log(objetosAlmacenados);
}

//Funcion que crea elementos en el carrito de la compra
function crearListadoCompra(){
    objetosAlmacenados.forEach(objeto => {
        createElem("div");
    })
}


//Esta es la función para cambiar entre modo oscuro y modo claro. Lo que va haciendo es agregar una clase adicional a cada elemento
//de html y luego se codifica el css para esa clase en modo oscuro y modo claro. Así que cada elemento va a tener dos bloques
//en css, uno para oscuro y otro para claro. Por ahora no he añadido todos los elementos, van pocos simplemente para probar
bottonVisualizacion.addEventListener("click", ()=>{
    cuerpo.classList.toggle("oscuro");
    cabecera.classList.toggle("cabecera_oscura");
});









