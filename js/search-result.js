let parametros = new URLSearchParams(window.location.search);
let busqueda = parametros.get("q"); 

console.log(busqueda);

let tituloBusqueda = document.querySelector(".titulo-pagina");

tituloBusqueda.innerHTML = `Resultados de búsqueda: ${busqueda}`;  

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let resultados = document.querySelector(".resultados-contenido");

        let contenidoResultados = "";

        if (data.products.length === 0) {
          contenidoResultados =`<p class="producto-desc">No se encontraron productos que coincidan con tu búsqueda.</p>`;
     } else {

    for (let i = 0; i < data.products.length; i++) {
        let producto = data.products[i];

      contenidoResultados += `
        <article class="perfume"> 
            <img class="perfume-img" src="${producto.thumbnail}" alt="${producto.title}">

            <h2 class="perfume-nombre">${producto.title}</h2>

            <p class="perfume-desc">${producto.description}</p>

            <p class="perfume-desc">$${producto.price}</p>

            <p class="perfume-boton-cont">
                <a class="perfume-boton" href="./product.html?id=${producto.id}">Ver detalle</a>
            </p>
        </article>
    `;
  } 
}

resultados.innerHTML = contenidoResultados;

    })
    .catch(function(error) {
        console.log(error);
    });

