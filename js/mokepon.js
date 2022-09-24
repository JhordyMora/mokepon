let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego(){
    let botonMascotaJugador = document.querySelector("#btn-mascota");
    //console.log(botonMascotaJugador);
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.querySelector("#btn-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.querySelector("#btn-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.querySelector("#btn-tierra");
    botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.querySelector("#hipodoge");
    let inputCapipego = document.querySelector("#capipego");
    let inputRatigueya = document.querySelector("#ratigueya");
    let inputLangostelvis = document.querySelector("#langostelvis");
    let inputTucapalma = document.querySelector("#tucapalma");
    let inputPydos = document.querySelector("#pydos");
    let spanMascotaJugador = document.querySelector("#mascota-jugador");

    if(inputHipodoge.checked){
        alert("Has seleccionado a hipodoge");
        spanMascotaJugador.innerHTML = "Hipodoge"
        //seleccionarMascotaEnemigo();
    } else if(inputCapipego.checked){
        alert("Has seleccionado a capipego");
        spanMascotaJugador.innerHTML = "Capipego"
        //seleccionarMascotaEnemigo();
    } else if(inputRatigueya.checked){
        alert("Has seleccionado a ratigueya");
        spanMascotaJugador.innerHTML = "Ratigueya"
        //seleccionarMascotaEnemigo();
    } else if(inputLangostelvis.checked){
        alert("Has seleccionado a langostelvis");
        spanMascotaJugador.innerHTML = "Langostelvis"
        //seleccionarMascotaEnemigo();
    } else if(inputTucapalma.checked){
        alert("Has seleccionado a tucapalma");
        spanMascotaJugador.innerHTML = "Tucapalma"
        //seleccionarMascotaEnemigo();
    } else if(inputPydos.checked){
        alert("Has seleccionado a pydos");
        spanMascotaJugador.innerHTML = "Pydos"
        //seleccionarMascotaEnemigo();
    } else {
        alert("No has seleccionado ningun Mokepon");
    }

    seleccionarMascotaEnemigo();
    /*
    alert("Has seleccionado una mascota");
    let Element = document.querySelector("#hipodoge");
    let Element = document.querySelector("#hipodoge");
    let Element = document.querySelector("#hipodoge");
    let Element = document.querySelector("#hipodoge");
    let Element = document.querySelector("#hipodoge");
    */

}

function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo = document.querySelector("#mascota-enemigo");
    let jsonMokemon = {
        1: "Hipodoge",
        2: "Capipego",
        3: "Ratigueya",
        4: "Langostelvis",
        5: "Tucapalma",
        6: "Pydos",
    }
    let randomNumber = aleatorio(1,6);

    spanMascotaEnemigo.innerHTML = jsonMokemon[randomNumber];
    alert("Tu enemigo has seleccionado a " + jsonMokemon[randomNumber]);
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function ataqueFuego(){
    ataqueJugador = "Fuego";
    ataqueAleatorioEnemigo();
}

function ataqueAgua(){
    ataqueJugador = "Agua";
    ataqueAleatorioEnemigo();
}

function ataqueTierra(){
    ataqueJugador = "Tierra";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio==1){
        ataqueEnemigo = "Fuego";
    } else if (ataqueAleatorio==2){
        ataqueEnemigo = "Agua";
    } else {
        ataqueEnemigo = "Tierra";
    }

    combate();
}

function crearMensaje(resultadoBatalla){
    let  parrafo = document.createElement("p");
    let sectionMessage = document.querySelector("#mensajes");

    parrafo.innerHTML = "Tu mascota atacó con "+ ataqueJugador + ". La mascota de tu enemigo ataco con " + ataqueEnemigo + " - " + resultadoBatalla;

    sectionMessage.appendChild(parrafo);
}

function combate(){
    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("Empate");
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        crearMensaje("Ganaste");
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("Ganaste");
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensaje("Ganaste");
    } else {
        crearMensaje("Perdiste");
    }
}

window.addEventListener("load", iniciarJuego);