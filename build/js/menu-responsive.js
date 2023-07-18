document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    navegacionFija();
})

function eventListeners(){
    const menuResponsive = document.querySelector('.navegacion-responsive');
    menuResponsive.addEventListener('click', navegacion);
}

function navegacion(){
    const navegacionPrincipal = document.querySelector('.navegacion-principal');
    if( navegacionPrincipal.classList.contains('mostrar') ){
        navegacionPrincipal.classList.remove('mostrar');
    } else {
        navegacionPrincipal.classList.add('mostrar');
    }
}


