let emptyElement = document.querySelector('.about .empty');
let titleElement = document.querySelector('.about .title');
let figureElement = document.querySelectorAll('.services figure'); //Cargamos todos los elementos de etiqueta figure que estan contenidos en la clase servicios
let imageElement = document.querySelector('figure .avatar');
let imageElement2 = document.querySelector('.about .avatar img');

console.log(imageElement2);
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