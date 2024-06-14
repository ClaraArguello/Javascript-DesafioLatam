let edad = 18
let altura = 200
let color = 'celeste'

if(altura < 150){
    console.log('Sos petiso')
}else if(altura >150){
    console.log('Sos normal')
}else if(altura >160){
    console.log('Sos alto')
} else{
    console.log('Sos altisimo!')
}


if(altura > 160){
    console.log('sos alto')
}
if(edad >=18){
    console.log('sos mayor de edad')
}




if(edad>=18){
    console.log('sos mayor de edad')
}else{
    console.log('no tenes la edad minima requerida')
}



let hola = document.querySelector('div')
console.log("🚀 ~ div:", hola)

hola.innerText('HOLA CHICOS DEL GRUPO 2')


let temp = prompt('Ingrese la temperatura en grqados celcius')
if(temp>30){
    console.log('Hace mucho calor')
}else if(temp>21){
    console.log('Hace calor')
}else if(temp>11){
    console.log('Esta agradable')
}else if(temp>0){
    console.log('HAce frio')
}else {
    console.log('Hace mucho frio')
}



if(temp<0){
    console.log('Hace mucho frio')
}else if(temp<=10){
    console.log('Hace calor')
}else if(temp<=20){
    console.log('Esta agradable')
}else if(temp<=30){
    console.log('Hace calor')
}else {
    console.log('Hace mucho calor')
}

// let imagen = document.querySelector('div')

// imagen = addEventListener('click', imagen.className = 'borde' )