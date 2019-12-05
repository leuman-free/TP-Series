    const cargarSeries = () => {

        const valueInput = document.getElementById("serie");

        let series = []

        fetch("../json/serie.json")
        .then((res)=> res.json())
        .then((data)=>{
            series = data.series
            mostrarSeries(series)
        })
        .catch((error)=>{
          console.log(error)
        })

        const encontrarSerie = (e) => {

                  const valorInput = e.target.value.toLowerCase()

                  const arraySeries = series.filter(serie => {

                    return serie.nombre.toLowerCase().indexOf(valorInput) != -1

                  })
                    mostrarSeries(arraySeries)
             }

                valueInput.addEventListener("keyup", encontrarSerie)
      }

      document.addEventListener("DOMContentLoaded", cargarSeries)

      const mostrarSeries = (series) => {

        const mostrar = document.getElementById("mostrar");

        let html = "";

        if(series.length > 0){
            series.forEach((dato)=>{
                html += `
                  <div class="card m-5 p-3" style="width: 15rem;">
                      <img src="${dato.img}" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h5 class="card-title">${dato.nombre}</h5>
                              <p class="card-text">${dato.descripcion}</p>
                          </div>
                  </div>
                    `
              })
        }else{
            html += `<h2>No se ha encontrado la serie solicitada en nuestro sitio!!</h2>`
        }
        mostrar.innerHTML = html
     }
