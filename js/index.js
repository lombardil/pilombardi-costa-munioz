
fetch("https://dummyjson.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    console.log(data);

    let productosVictoria = document.querySelector(".productos-victoria");
    let productosOtras = document.querySelector(".productos-otras");
  
    let contenidoVictoria = "";
let contenidoOtras = "";

})
    .catch(function(error) {
        console.log(error);
    });
