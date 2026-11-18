
let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("id");

console.log(id);

fetch(`https://dummyjson.com/products/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let detalleProducto = document.querySelector(".art-producto");

        let contenidoProducto = `
            <h1 class="titulo-producto">${data.title}</h1>

            <img class="img-producto" src="${data.thumbnail}" alt="${data.title}">

            <h3 class="producto-desc">${data.brand}</h3>

            <p class="producto-desc">${data.description}</p>

            <p class="producto-desc">Categoría: ${data.category}</p>

            <p class="producto-desc">Precio: $${data.price}</p>

            <p class="producto-desc">Stock: ${data.stock} unidades</p>

            <p class="producto-desc">Tags:</p>

<p class="producto-desc">Tags:</p>


        `;

contenidoProducto += `<ul class="producto-desc">`;

for (let i = 0; i < data.tags.length; i++) {
    contenidoProducto += `<li>${data.tags[i]}</li>`;
}

contenidoProducto += `</ul>`;


        detalleProducto.innerHTML = contenidoProducto;

let listaComentarios = document.querySelector(".comentario");

let contenidoComentarios = "";

for (let i = 0; i < data.reviews.length; i++) {
    let comentario = data.reviews[i];

    contenidoComentarios += `
        <li>
            <span>${comentario.comment}</span>
            <span>${comentario.rating}/5</span>
            <span>${comentario.date}</span>
            <span>${comentario.reviewerName}</span>
        </li>
    `;
}

listaComentarios.innerHTML = contenidoComentarios;

    })
    .catch(function(error) {
        console.log(error);
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

