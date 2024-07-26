let emptyElement = document.querySelector('.about .empty');
let titleElement = document.querySelector('.about .title');
let figureElement = document.querySelectorAll('.services figure'); //Cargamos todos los elementos de etiqueta figure que estan contenidos en la clase servicios
let imageElement = document.querySelector('figure .avatar');
let imageElement2 = document.querySelector('.about .avatar img');

window.addEventListener('mousemove', react);

function react(value){ //value toma todos los valores que mousemove tenga
    //console.log(value.clientX);

    figureElement.forEach(function(element){ //figureElement es un array donde estan los elementos de etiquera figure // Element es el elmento individual es este array ya que se recorre con un forEach
        element.style.flexBasis = (window.innerWidth - value.clientX) +'px';
    });

    imageElement.style.padding = value.clientX / 2 - 'px';
    emptyElement.style.flexBasis = value.clientX + 'px'; //.clientX es la posicion en X en que esta mouse, es una de las propiedades del objeto mousemove
    titleElement.style.flexBasis = value.clientY / 2 + 'px';
}

var servicios = document.getElementById("Servicios");
servicios.addEventListener('click', function(){
    let menu = document.querySelectorAll(".menu");
    menu.forEach(function(elemento){
        elemento.style.animation = 'desplegarMenu 0.5s forwards';
        elemento.style.display = 'block';
    })
})

function cerrarMenu(){
    let menu = document.querySelectorAll(".menu");
    menu.forEach(function(elemento){
        elemento.style.animation = 'cerrarMenu 0.5s forwards';
    })
}

var a = document.querySelectorAll('[id="lista"]');
a.forEach(function(elemento){
    elemento.addEventListener('click', cerrarMenu);
    //console.log(elemento);
})

// Detectar tecla F5 y Ctrl+R
window.addEventListener('keydown', function(event) {
    if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
        event.preventDefault();
        window.location.href = 'index.html';
    }
});

window.addEventListener('load', function() {
    let rutaActual = window.location.pathname + window.location.hash;
    let rutaInicial = window.location.pathname;
        if ( rutaActual != rutaInicial) {
            window.location.href = 'index.html';
            return;
            //window.location.href = 'index.html';
        }
});