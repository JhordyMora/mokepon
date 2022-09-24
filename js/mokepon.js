let ataqueJugador = 

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
    alert(ataqueJugador);
}

function ataqueAgua(){
    ataqueJugador = "Agua";
    alert(ataqueJugador);
}

function ataqueTierra(){
    ataqueJugador = "Tierra";
    alert(ataqueJugador);

}

window.addEventListener("load", iniciarJuego);