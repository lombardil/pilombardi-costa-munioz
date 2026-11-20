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
          contenidoResultados =`<p class="producto-desc">No hay resultados para el termino: ${busqueda}</p>`;
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

let formularioBusqueda = document.querySelector(".buscador");
let inputBusqueda = document.querySelector(".buscador-input");
let mensajeBusqueda = document.querySelector(".mensaje-busqueda");

formularioBusqueda.addEventListener("submit", function(evento) {
    let texto = inputBusqueda.value.trim();

    if (texto.length < 3) {
        evento.preventDefault();
        mensajeBusqueda.innerHTML = "La búsqueda debe tener al menos 3 caracteres.";
    }
});

fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let listaCategorias = document.querySelector(".categorias-lista");
        let contenidoCategorias = "";

        for (let i = 0; i < data.length; i++) {
            let categoria = data[i];

            contenidoCategorias += `
                <li class="categoria-item">
                    <a class="categoria-link" href="./category.html?cat=${categoria.slug}">
                        ${categoria.name}
                    </a>
                </li>
            `;
        }

        listaCategorias.innerHTML = contenidoCategorias;
    })
    .catch(function(error) {
        console.log(error);
    });