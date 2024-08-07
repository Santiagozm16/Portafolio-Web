let emptyElement = document.querySelector('.about .empty');
let titleElement = document.querySelector('.about .title');
let figureElement = document.querySelectorAll('.services figure'); //Cargamos todos los elementos de etiqueta figure que estan contenidos en la clase servicios
let imageElement = document.querySelector('figure .avatar');
let imageElement2 = document.querySelector('.about .avatar img');

window.addEventListener('mousemove', react);

function react(value){ //value toma todos los valores que mousemove tenga
    //console.log(value.clientX);

    figureElement.forEach(function(element){ //figureElement es un array donde estan los elementos de etiquera figure // Element es el elmento individual es este array ya que se recorre con un forEach
        if(value.clientX > 800 && value.clientX < 1100){
            element.style.flexBasis = (window.innerWidth - value.clientX) +'px';
        }
    });

    imageElement.style.padding = value.clientX / 2 - 'px';
    if(value.clientX > 800 && value.clientX < 1100){
        emptyElement.style.flexBasis = value.clientX + 'px'; //.clientX es la posicion en X en que esta mouse, es una de las propiedades del objeto mousemove
    }
    titleElement.style.flexBasis = value.clientY / 2 + 'px';
}


var menuAbierto = false;
var servicios = document.getElementById("Servicios");
servicios.addEventListener('click', function(){
    let menu = document.querySelectorAll(".menu");
    if (menuAbierto == true){
        cerrarMenu();
    }else {
        menuAbierto = true; 
        menu.forEach(function(elemento){
            elemento.style.animation = 'desplegarMenu 0.5s forwards';
            elemento.style.display = 'block';
        })
    }
})

function cerrarMenu(){
    let menu = document.querySelectorAll(".menu");
    menu.forEach(function(elemento){
        elemento.style.animation = 'cerrarMenu 0.5s forwards';
    })
    menuAbierto = false;
}


var enlaces = document.querySelectorAll('#div_menu a');
enlaces.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Remove 'sticky' y 'Nosticky' classes de todas las secciones
        enlaces.forEach(function(e){
            let targetId2 = e.getAttribute('href').substring(1);
            document.getElementById(targetId2).classList.remove('sticky');
            document.getElementById(targetId2).classList.remove('Nosticky');
        });

        // Scroll a la sección objetivo con una animación suave
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Agregar 'sticky' a la sección objetivo después de que la animación haya terminado
        setTimeout(function() {
            // Agregar 'sticky' a todas las secciones
            enlaces.forEach(function(e){
                let targetId2 = e.getAttribute('href').substring(1);
                document.getElementById(targetId2).classList.add('sticky');
                document.getElementById(targetId2).classList.remove('Nosticky');
            });
        }, 100);

        cerrarMenu();
    });
});

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

document.querySelector('body').addEventListener('click', function(elemento){
    if(elemento.target.closest('.menu') || elemento.target.id == 'Servicios'){ //Si se hace click en la zona que contiene la clase menu o en el enlace de Servicios el menu no se cierra
        return;
    }else{ // Si hacemos click fuera del menu de servicios el menu se cierra.
        cerrarMenu();
    }
});
