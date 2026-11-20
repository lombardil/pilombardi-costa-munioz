let emailGuardado = localStorage.getItem("email");
let menu = document.querySelector(".menu");

if (emailGuardado !== null) {
   menu.innerHTML = `
    <li class="menu-item"><a class="menu-link" href="./index.html">Home</a></li>
    <li class="menu-item menu-link">Bienvenido: ${emailGuardado}</li>
    <li class="menu-item"><a class="menu-link" href="#" id="logout">Logout</a></li>
`;
}

