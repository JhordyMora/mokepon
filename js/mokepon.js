let mokepones = [];
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

const sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque");
const seccionReiniciar = document.querySelector("#reiniciar");
const botonMascotaJugador = document.querySelector("#btn-mascota");
const botonFuego = document.querySelector("#btn-fuego");
const botonAgua = document.querySelector("#btn-agua");
const botonTierra = document.querySelector("#btn-tierra");
const botonReiniciar = document.querySelector("#btn-reiniciar");

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');

const inputHipodoge = document.querySelector("#hipodoge");
const inputCapipego = document.querySelector("#capipego");
const inputRatigueya = document.querySelector("#ratigueya");
const inputLangostelvis = document.querySelector("#langostelvis");
const inputTucapalma = document.querySelector("#tucapalma");
const inputPydos = document.querySelector("#pydos");
const spanMascotaJugador = document.querySelector("#mascota-jugador");

const pVidasJugador = document.querySelector("#vidas-jugador");
const pVidasEnemigo = document.querySelector("#vidas-enemigo");
const pAtaqueJugador = document.querySelector("#ataque-jugador");
const pAtaqueEnemigo = document.querySelector("#ataque-enemigo");

const spanVidasJugador = document.querySelector("#vidas-jugador");
const spanVidasEnemigo = document.querySelector('#vidas-enemigo');

const sectionMessage = document.querySelector("#mensaje-final");

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre=nombre;
        this.foto=foto;
        this.vida = vida;
        this.ataques=[];
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png",5);

let capipego = new Mokepon("Capipego","./assets/mokepons_mokepon_capipepo_attack.png",5);

let ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png",5);

let langostelvis = new Mokepon("Langostelvis","./assets/2001.i203.007_cartoon_monster_set-11.jpg",5);

let tucapalma = new Mokepon("Tucapalma","./assets/58_03.jpg",5);

let pydos = new Mokepon("Pydos","./assets/Funny-orange-monster-on-transparent-PNG.png",5);

hipodoge.ataques.push(
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "💧", id: "btn-agua"},
    {nombre: "🌱", id: "btn-tierra"},
);

capipego.ataques.push(
    {nombre: "💧", id: "btn-agua"},
    {nombre: "💧", id: "btn-agua"},
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "🌱", id: "btn-tierra"},
);

ratigueya.ataques.push(
    {nombre: "🌱", id: "btn-tierra"},
    {nombre: "🌱", id: "btn-tierra"},
    {nombre: "💧", id: "btn-agua"},
    {nombre: "🔥", id: "btn-fuego"},
);

langostelvis.ataques.push(
    {nombre: "🌱", id: "btn-tierra"},
    {nombre: "🌱", id: "btn-tierra"},
    {nombre: "💧", id: "btn-agua"},
    {nombre: "💧", id: "btn-agua"},
);

tucapalma.ataques.push(
    {nombre: "💧", id: "btn-agua"},
    {nombre: "💧", id: "btn-agua"},
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "🔥", id: "btn-fuego"},
);

pydos.ataques.push(
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "🌱", id: "btn-tierra"},
    {nombre: "🌱", id: "btn-tierra"},
);

mokepones.push(hipodoge,capipego,ratigueya,langostelvis,tucapalma,pydos);

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"; 
    seccionReiniciar.style.display = "none";
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonTierra.addEventListener("click", ataqueTierra);
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador(){
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Hipodoge"
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
    } else if(inputCapipego.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Capipego"
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Ratigueya"
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
    } else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Langostelvis"
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
    } else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Tucapalma"
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
    } else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + "Pydos"
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
    } else {
        alert("No has seleccionado ningun Mokepon");
    }
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
    sectionMessage.innerHTML = resultadoFinal ;
    //sectionMessage.appendChild(parrafo);
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;  
    seccionReiniciar.style.display = "Flex";
}

function combate(){
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