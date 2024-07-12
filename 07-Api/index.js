async function getRandomUser(){
    const res = await fetch("https://randomuser.me/api")
    const data = await res.json()
    console.log('Data:', data)
}
getRandomUser()


//EJEMPLO GRAFICO
// async function getAndCreateDataToChart() {
//   const res = await fetch("https://api.gael.cloud/general/public/sismos");
//   const sismos = await res.json();
//   const labels = sismos.map((sismo) => {
//     return sismo.Fecha;
//   });
//   const data = sismos.map((sismo) => {
//     const magnitud = sismo.Magnitud.split(" ")[0];
//     return Number(magnitud);
//   });
//   const datasets = [
//     {
//       label: "Sismo",
//       borderColor: "rgb(255, 99, 132)",
//       data,
//     },
//   ];
//   return { labels, datasets };
// }

// async function renderGrafica() {
//   const data = await getAndCreateDataToChart();
//   const config = {
//     type: "line",
//     data,
//   };
//   const myChart = document.getElementById("myChart");
//   myChart.style.backgroundColor = "white";
//   new Chart(myChart, config);
// }

// renderGrafica();





async function getAndCreateDataToChart() {
    const res = await fetch("https://mindicador.cl/api/dolar/2024")
    const cambios = await res.json();
    let info = []
    for(let i = 0; i < 10; i++){
        info.unshift(cambios.serie[i])
    }
    console.log('')
    const labels = info.map((cambio) => {
        return cambio.fecha.split("T")[0].split('-').reverse().join('-');
    });
    const data = info.map((cambio) => {
        return cambio.valor;
    });
    const datasets = [
        {
        label: "Cambio",
        borderColor: "rgb(255, 99, 132)",
        data,
        },
    ];
    return { labels, datasets };
}

async function renderGrafica() {
  const data = await getAndCreateDataToChart();
  const config = {
    type: "line",
    data,
  };
  const myChart = document.getElementById("myChart");
  myChart.style.backgroundColor = "white";
  new Chart(myChart, config);
}

renderGrafica();


//Ejercicio 2 - Guia Api
async function llamadoApi(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = await res.json()
    console.log('Data', data)
}

llamadoApi()