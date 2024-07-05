function pintar (color) {
    let elemento = document.querySelector('body');
    elemento.style.backgroundColor = color;
}


// let pintar = function (color) {
//     let elemento = document.querySelector('body');
//     elemento.style.backgroundColor = color;
// }

let pintar =  (color)  => {
    let elemento = document.querySelector('body');
    elemento.style.backgroundColor = color;
}


// pintar('red')

//Definicion de funcion
function suma(a, b){
    return a + b
}

//Expresion de funcion
let suma = function (a, b){
    return a + b
}

//Arrow Function (funcion flecha)
let suma =  (a, b) => {
    return a + b
}

//Arrow Function de una sola linea (se eliminan las {} y el return)
let suma =  (a, b) => a + b







/*
let color;

let div = docuemnt.getElementByID('key')
div.styles.bgcolor 

document.addEventListener('keydown', function(event){
    if(event.key === a){
        color = rosa    
        div.styles.bgColor = color
    } 
    else if (event.key === s) {
        color = naranja
    }
    else if(event.key === d) color = celeste
})

document.addEventListener('keydown', function(event){
    if(event.key === a || s || d){ 
        div.styles.bgColor = color
    }
})

*/


function getPrioridad (id) {
    if(id > 7) return 'Alta importancia'
    else if(id === 7) console.log('Importancia Exacta')
    else console.log('Baja importancia')
}
