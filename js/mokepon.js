let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none";
    
    let seccionReiniciar = document.querySelector("#reiniciar");
    seccionReiniciar.style.display = "none";

    let botonMascotaJugador = document.querySelector("#btn-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.querySelector("#btn-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.querySelector("#btn-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.querySelector("#btn-tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonReiniciar = document.querySelector("#btn-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "Flex";
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

    let inputHipodoge = document.querySelector("#hipodoge");
    let inputCapipego = document.querySelector("#capipego");
    let inputRatigueya = document.querySelector("#ratigueya");
    let inputLangostelvis = document.querySelector("#langostelvis");
    let inputTucapalma = document.querySelector("#tucapalma");
    let inputPydos = document.querySelector("#pydos");
    let spanMascotaJugador = document.querySelector("#mascota-jugador");

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Hipodoge"
        //seleccionarMascotaEnemigo();
    } else if(inputCapipego.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Capipego"
        //seleccionarMascotaEnemigo();
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Ratigueya"
        //seleccionarMascotaEnemigo();
    } else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Langostelvis"
        //seleccionarMascotaEnemigo();
    } else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Tucapalma"
        //seleccionarMascotaEnemigo();
    } else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Pydos"
        //seleccionarMascotaEnemigo();
    } else {
        alert("No has seleccionado ningun Mokepon");
    }

    seleccionarMascotaEnemigo();

    sectionSeleccionarMascota.style.display = 'none'
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

    spanMascotaEnemigo.innerHTML = "La Mascota de tu Enemigo: " + jsonMokemon[randomNumber];
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

function crearMensaje(){
    let pVidasJugador = document.querySelector("#vidas-jugador");
    let pVidasEnemigo = document.querySelector("#vidas-enemigo");
    let pAtaqueJugador = document.querySelector("#ataque-jugador");
    let pAtaqueEnemigo = document.querySelector("#ataque-enemigo");



    pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
    pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    pAtaqueJugador.innerHTML = ataqueJugador;
    pAtaqueEnemigo.innerHTML = ataqueEnemigo;
}

/*function crearMensaje(resultadoBatalla){
    let  parrafo = document.createElement("p");
    let sectionMessage = document.querySelector("#mensajes");

    parrafo.innerHTML = "Tu mascota atacó con "+ ataqueJugador + ". La mascota de tu enemigo ataco con " + ataqueEnemigo + " - " + resultadoBatalla;

    sectionMessage.appendChild(parrafo);
}*/

function crearMensajeFinal(resultadoFinal){
    //let  parrafo = document.createElement("p");
    let sectionMessage = document.querySelector("#mensaje-final");

    sectionMessage.innerHTML = resultadoFinal ;

    //sectionMessage.appendChild(parrafo);

    let botonFuego = document.querySelector("#btn-fuego");
    botonFuego.disabled = true;
    let botonAgua = document.querySelector("#btn-agua");
    botonAgua.disabled = true;
    let botonTierra = document.querySelector("#btn-tierra");
    botonTierra.disabled = true;

    let seccionReiniciar = document.querySelector("#reiniciar");
    seccionReiniciar.style.display = "Flex";

}

function combate(){
    let spanVidasJugador = document.querySelector("#vidas-jugador");
    let spanVidasEnemigo = document.querySelector('#vidas-enemigo');

    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("Empate");
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else {
        crearMensaje("Perdiste");
        vidasJugador--;
        spanVidasJugador.innerHTML = "Vidas: " + vidasJugador;
    }

    revisarVidas(vidasEnemigo, vidasJugador);
}

function revisarVidas(vidasEnemigo, vidasJugador){
    if(vidasEnemigo==0){
        crearMensajeFinal("Muy bien!! Ganaste :D");
    } else if (vidasJugador ==0){
        crearMensajeFinal("Ohh que mal! Perdiste :(");
    }
}

function reiniciarJuego(){
    location.reload();
}

window.addEventListener("load", iniciarJuego);