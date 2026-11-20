
let formularioLogin = document.querySelector(".formulario");
let email = document.querySelector("#email");
let contrasenia = document.querySelector("#password");
let mensajeLogin = document.querySelector(".mensaje-login");

formularioLogin.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (email.value === "") {
        mensajeLogin.innerHTML = "Tenés que completar el email.";
    } else if (contrasenia.value === "") {
        mensajeLogin.innerHTML = "Tenés que completar la contraseña.";
    } else if (contrasenia.value.length < 6) {
    mensajeLogin.innerHTML = "La contraseña debe tener al menos 6 caracteres.";

} else {
    localStorage.setItem("email", email.value);
    this.submit();
}

});
