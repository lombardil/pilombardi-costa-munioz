
let formularioLogin = document.querySelector(".formulario");
let email = document.querySelector("#email");
let contrasenia = document.querySelector("#password");
let mensajeLogin = document.querySelector(".mensaje-login");

formularioLogin.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (email.value.trim() === "") {
        mensajeLogin.innerHTML = "Tenés que completar el email.";
    } else if (contrasenia.value.trim() === "") {
        mensajeLogin.innerHTML = "Tenés que completar la contraseña.";
    } else {
        mensajeLogin.innerHTML = "Formulario completado correctamente.";
    }
});
