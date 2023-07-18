const correoCuenta = document.querySelector("#correo");
const passwordCuenta = document.querySelector("#password");
const ingresarCuenta = document.querySelector(".ingresar-cuenta");
const camposObligatorios = document.querySelectorAll(".input-control");

ingresarCuenta.addEventListener("keyup", (e) => {
    e.preventDefault();
    validarFormulario();
})

function validarFormulario(){
    let condicion = true;
    camposObligatorios.forEach(elemento => {
        elemento.lastElementChild.innerHTML = "";
        elemento = correoCuenta.style.border = "";
        elemento = passwordCuenta.style.border = "";
    })

    if( correoCuenta.value === "" ){
        validarCampos("correo", "Este campo es obligatorio", "campo-obligatorio");
        condicion = false;
    } 

    if( passwordCuenta.value === "" ){
        validarCampos("password", "Este campo es obligatorio", "campo-obligatorio");
        condicion = false;
    } else if( passwordCuenta.value.length < 8 ){
        validarCampos("password", "Por favor, no escribas menos de 8 caracteres", "campo-obligatorio");
        condicion = false;
    }

    return condicion;
}

ingresarCuenta.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario();
})

function validarFormulario(){
    let condicion = true;
    camposObligatorios.forEach(elemento => {
        elemento.lastElementChild.innerHTML = "";
        elemento = correoCuenta.style.border = "";
        elemento = passwordCuenta.style.border = "";
    })

    if( correoCuenta.value === "" ){
        validarCampos("correo", "Este campo es obligatorio", "campo-obligatorio");
        condicion = false;
    } 

    if( passwordCuenta.value === "" ){
        validarCampos("password", "Este campo es obligatorio", "campo-obligatorio");
        condicion = false;
    }

    return condicion;
}

function validarCampos(clase, mensaje, elemento){
    let entrada = document.querySelector(`.${clase}`);
    entrada.lastElementChild.innerHTML = mensaje;
    let error = document.querySelectorAll(`.${elemento}`);
    error = correoCuenta.style.border = "1px solid red";
    error = passwordCuenta.style.border = "1px solid red";
}













