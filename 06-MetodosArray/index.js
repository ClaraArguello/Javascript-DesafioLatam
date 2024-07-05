const serviciosHotel = [
    { id: 1, nombre: "Desayuno buffet" },
    { id: 2, nombre: "Servicio a lahabitación" },
    { id: 3, nombre: "Acceso al spa" },
    { id: 4, nombre: "Wi-Fi de altavelocidad" },
    { id: 5, nombre: "Estacionamientoprivado" }
];


let renderServicios = () => {
    let lista = document.querySelector('#servicios-lista')
    let total = document.querySelector('#total')
    let html = ''

    for(servicio of serviciosHotel){
        html += `<li>${servicio.id} ${servicio.nombre}<button onClick='eliminar(${servicio.id})'>Eliminar</button></li>`
    }

    lista.innerHTML = html
    total.innerHTML = serviciosHotel.length
}

renderServicios()

let eliminar = (id) => {
    let indice = serviciosHotel.findIndex((servicio) => servicio.id === id )
    serviciosHotel.splice(indice, 1)

    renderServicios()
}


