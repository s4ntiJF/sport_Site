const restablecerPassword = document.querySelector(".restablecerPassword");
const emailPassword = document.querySelector("#emailPassword");
const emailObligatorio = document.querySelector(".campo-email");

restablecerPassword.addEventListener("submit", (e) => {
    e.preventDefault();

    let condicion = false;
    emailObligatorio.lastElementChild.innerHTML = "";

    if( emailPassword.value === "" ){
        let mensajeNoValido = document.querySelector(".emailPassword");
        mensajeNoValido.lastElementChild.innerHTML = "Por favor indique un correo válido";
        let campoObligatorio = document.querySelector(".inputPassword");
        campoObligatorio = emailPassword.style.border = "1px solid red";
        condicion = false;
    }

    return condicion;
})