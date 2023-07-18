const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos");
const tipoDocumento = document.querySelector("#tipoDocumento");
const email = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const checkbox = document.querySelector("#checkbox");
const crearCuenta = document.querySelector(".crearCuenta");
const inputs = document.querySelectorAll(".input-container");

crearCuenta.addEventListener("submit", (e) => {
    e.preventDefault();
    validandoFormulario();
})

function validandoFormulario(){
    let condicion = false;
    inputs.forEach(input => {
        input.lastElementChild.innerHTML = "";
        input = nombres.style.border = "";
        input = apellidos.style.border = "";
        input = tipoDocumento.style.border = "";
        input = email.style.border = "";
        input = password1.style.border = "";
        input = password2.style.border = "";
        input = checkbox.style.color = "";
    })

    if( nombres.value === "" ){
        validandoCampos("nombres", "Este campo es obligatorio.", "input");
        condicion = true;
    }

    if( apellidos.value === "" ){
        validandoCampos("apellidos", "Este campo es obligatorio.", "input");
        condicion = true;
    }

    if( tipoDocumento.selectedIndex === 0 || tipoDocumento.selectedIndex == null ){
        validandoCampos("tipoDocumento", "Este campo es obligatorio.", "input");
        condicion = true;
    }

    if( email.value === "" ){
        validandoCampos("email", "Este campo es obligatorio.", "input");
        condicion = true;
    }

    if( password1.value === "" ){
        validandoCampos("password1", "Este campo es obligatorio.", "input");
        condicion = true;
    } 

    if( password2.value === "" ){
        validandoCampos("password2", "Este campo es obligatorio.", "input");
        condicion = true;
    } 

    if( !checkbox.checked ){
        validandoCampos("checkbox", "Este campo es obligatorio");
        condicion = true;
    } else {
        validandoCampos("checkbox", "");
        condicion = true;
    }

    return condicion;
}

crearCuenta.addEventListener("keyup", (e) => {
    e.preventDefault();
    validandoFormulario();
})

function validandoFormulario(){
    let condicion = false;
    inputs.forEach(input => {
        input.lastElementChild.innerHTML = "";
        input = nombres.style.border = "";
        input = apellidos.style.border = "";
        input = tipoDocumento.style.border = "";
        input = email.style.border = "";
        input = password1.style.border = "";
        input = password2.style.border = "";
        input = checkbox.style.color = "";
    })

    if( nombres.value === "" ){
        validandoCampos("nombres", "Este campo es obligatorio.", "input");
        condicion = true;
    }

    if( apellidos.value === "" ){
        validandoCampos("apellidos", "Este campo es obligatorio.", "input");
        condicion = true;
    }

    if( tipoDocumento.selectedIndex === 0 || tipoDocumento.selectedIndex == null ){
        validandoCampos("tipoDocumento", "Este campo es obligatorio.", "input");
        condicion = true;
    }

    if( email.value === "" ){
        validandoCampos("email", "Este campo es obligatorio.", "input");
        condicion = true;
    }

    if( password1.value === "" ){
        validandoCampos("password1", "Este campo es obligatorio.", "input");
        condicion = true;
    } else if( password1.value.length < 8 ){
        validandoCampos("password1", "Por favor, no escribas menos de 8 caracteres.", "input");
        condicion = true;
    } else if( password1.value.length >= 20 ){
        validandoCampos("password1", "Por favor, no escribas más de 20 caracteres.", "input");
        condicion = true;
    }

    if( password2.value === "" ){
        validandoCampos("password2", "Este campo es obligatorio.", "input");
        condicion = true;
    } else if( password1.value != password2.value ){
        validandoCampos("password2", "Contraseña no coincide.", "input");
        condicion = true;
    } 

    if( !checkbox.checked ){
        validandoCampos("checkbox", "Este campo es obligatorio");
        condicion = true;
    } else {
        validandoCampos("checkbox", "");
        condicion = true;
    }

    return condicion;
}

function validandoCampos(clase, mensaje, elemento){
    let entrada = document.querySelector(`.${clase}`);
    entrada.lastElementChild.innerHTML = mensaje;
    let input = document.querySelector(`.${elemento}`);
    input = nombres.style.border = "1px solid red";
    input = apellidos.style.border = "1px solid red";
    input = tipoDocumento.style.border = "1px solid red";
    input = email.style.border = "1px solid red";
    input = password1.style.border = "1px solid red";
    input = password2.style.border = "1px solid red";
}


