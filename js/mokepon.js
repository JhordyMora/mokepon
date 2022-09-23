function iniciarJuego(){
    let botonMascotaJugador = document.querySelector("#btn-mascota");
    //console.log(botonMascotaJugador);
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.querySelector("#hipodoge");
    let inputCapipego = document.querySelector("#capipego");
    let inputRatigueya = document.querySelector("#ratigueya");
    let inputLangostelvis = document.querySelector("#langostelvis");
    let inputTucapalma = document.querySelector("#tucapalma");
    let inputPydos = document.querySelector("#pydos");
    let spanMascotaJugador = document.querySelector("#mascota-jugador");
    let spanMascotaEnemigo = document.querySelector("#mascota-enemigo");

    if(inputHipodoge.checked){
        alert("Has seleccionado a hipodoge");
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if(inputCapipego.checked){
        alert("Has seleccionado a capipego");
        spanMascotaJugador.innerHTML = "Capipego"
    } else if(inputRatigueya.checked){
        alert("Has seleccionado a ratigueya");
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if(inputLangostelvis.checked){
        alert("Has seleccionado a langostelvis");
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if(inputTucapalma.checked){
        alert("Has seleccionado a tucapalma");
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if(inputPydos.checked){
        alert("Has seleccionado a pydos");
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("No has seleccionado ningun Mokepon");
    }
    /*
    alert("Has seleccionado una mascota");
    let Element = document.querySelector("#hipodoge");
    let Element = document.querySelector("#hipodoge");
    let Element = document.querySelector("#hipodoge");
    let Element = document.querySelector("#hipodoge");
    let Element = document.querySelector("#hipodoge");
    */

}



window.addEventListener("load", iniciarJuego);