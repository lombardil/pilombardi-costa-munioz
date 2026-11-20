let formularioRegistro = document.querySelector(".formulario");
let email = document.querySelector("#email");
let contrasenia = document.querySelector("#password");
let repetirContrasenia = document.querySelector("#password2");
let terminos = document.querySelector("#terminos");
let mensajeRegistro = document.querySelector(".mensaje-registro");

formularioRegistro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (email.value == "") {
        mensajeRegistro.innerHTML = "Tenés que completar el email.";
    } else if (contrasenia.value === "") {
        mensajeRegistro.innerHTML = "Tenés que completar la contraseña.";
    } else if (contrasenia.value.length < 6) {
    mensajeRegistro.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
    } else if (repetirContrasenia.value === "") {
        mensajeRegistro.innerHTML = "Tenés que repetir la contraseña.";
    } else if (contrasenia.value !== repetirContrasenia.value) {
        mensajeRegistro.innerHTML = "Las contraseñas no coinciden.";
    } else if (terminos.checked === false) {
        mensajeRegistro.innerHTML = "Tenés que aceptar los términos y condiciones.";
    } else {
       this.submit()
    }
});

