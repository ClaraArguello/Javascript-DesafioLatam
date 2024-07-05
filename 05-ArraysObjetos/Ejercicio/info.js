let librosVenta = [
    {
        titulo: 'harry potter',
        autor: 'j.k. rowling',
        editorial: 'sfsdfs',
        valor: 45
    },
    {
        titulo: 'el hobbit',
        autor: 'tolkien',
        editorial: 'yiuyiyiyui',
        valor: 80
    },
    {
        titulo: 'percy jackson',
        autor: 'clara arguello',
        editorial: 'bnvbnvbnvbn',
        valor: 20
    },
    {
        titulo: 'el señor de los anillos',
        autor: 'tolkien',
        editorial: 'mlkmlmlmlml',
        valor: 75
    },
]

let librosCamino = [
    {
        titulo: 'la biblia',
        autor: 'jisus',
        editorial: 'espiritu santo',
        valor: 30
    },
    {
        titulo: 'rayuela',
        autor: 'cortazar',
        editorial: 'weqweqweqew',
        valor: 40
    },
    {
        titulo: 'eloquent js',
        autor: 'pepito perez',
        editorial: 'ppokpoipip',
        valor: 20
    },
    {
        titulo: 'el señor de los anillos 2',
        autor: 'tolkien',
        editorial: 'pdiapodiap',
        valor: 100
    },
]

let htmlVentas = ''

for(let libro of librosVenta ){
    htmlVentas+= `
        <h3 className='titulo'>${libro.titulo}</h3>
        <h6 className='autor'>${libro.autor}</h6>
        <p className='editorial'>${libro.editorial}</p>
        <p className='valor'>$${libro.valor}</p>
    `
}

const libros_venta = document.querySelector('#libros_venta')
if(libros_venta) libros_venta.innerHTML = htmlVentas


let htmlCamino = ''

for(let libro of librosCamino ){
    htmlCamino+= `
        <h3 className='titulo'>${libro.titulo}</h3>
        <h6 className='autor'>${libro.autor}</h6>
        <p className='editorial'>${libro.editorial}</p>
        <p className='valor'>$${libro.valor}</p>
    `
}

const libros_camino = document.querySelector('#libros_camino')
if(libros_camino) libros_camino.innerHTML = htmlCamino


let htmlIndexVenta = ''

for(let i = 0; i < 3; i++){
    htmlIndexVenta+= `
        <h3 className='titulo'>${librosVenta[i].titulo}</h3>
        <h6 className='autor'>${librosVenta[i].autor}</h6>
        <p className='editorial'>${librosVenta[i].editorial}</p>
        <p className='valor'>$${librosVenta[i].valor}</p>
    `
}
const libros_index_venta = document.querySelector('#venta')
console.log(libros_index_venta)
if(libros_index_venta) libros_index_venta.innerHTML = htmlIndexVenta

if(libros_index_venta) libros_index_venta.innerHTML += `
    <a href="libros_venta.html">Ver todos los libros en venta</a>
`


let htmlIndexCamino = ''

for(let i = 0; i < 3; i++){
    htmlIndexCamino+= `
        <h3 className='titulo'>${librosCamino[i].titulo}</h3>
        <h6 className='autor'>${librosCamino[i].autor}</h6>
        <p className='editorial'>${librosCamino[i].editorial}</p>
        <p className='valor'>$${librosCamino[i].valor}</p>
    `
}
const libros_index_camino = document.querySelector('#camino')
console.log(libros_index_camino)
if(libros_index_camino) libros_index_camino.innerHTML = htmlIndexCamino

if(libros_index_camino) libros_index_camino.innerHTML += `
    <a href="libros_en_camino.html">Ver todos los libros en camino</a>
`
