let botonLogout = document.querySelector("#logout");

if (botonLogout !== null) {
    botonLogout.addEventListener("click", function(evento) {
        evento.preventDefault();
        localStorage.removeItem("email");
        window.location.href = "./index.html";
    });
}