// hacer las imagenes mas pequenhas y mejorar todo lo relacionado con ellas
// teclas moviemiento en html no reaccionan
import Mokepon, { creacionListaMokepones, selectionEnemiesForMap } from './mokepon.mjs';
import { aleatorio, crearMensaje } from './utils.mjs';
import { unirseAlJuegoBackEnd, mokemonJugadorBackEnd, enviarAtaqueBackEnd, enviarPosicionBackEnd, obtenerAtaques } from './backendEndService.mjs';

const sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque");
const seccionReiniciar = document.querySelector("#reiniciar");
const botonMascotaJugador = document.querySelector("#btn-mascota");
const botonReiniciar = document.querySelector("#btn-reiniciar");

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.querySelector("#mascota-jugador");

const pVidasJugador = document.querySelector("#vidas-jugador");
const pVidasEnemigo = document.querySelector("#vidas-enemigo");
// const pAtaqueJugador = document.querySelector("#ataque-jugador");
// const pAtaqueEnemigo = document.querySelector("#ataque-enemigo");

const sectionMessage = document.querySelector("#mensaje-final");
const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
const ataqueSection = document.querySelector("#botones");
const sectionVerMapa = document.querySelector("#ver-mapa");
const mapa = document.querySelector("#mapa");

let historialCombate = document.querySelector("#historial-combate");

let jugadorId = null;
let enemigoId = null;
let mokepones = [];
let mokemonJugador;
let mokemonEnemigo;
let mokemonesEnemigosLista = [];
// let ataqueJugador;
let ataqueEnemigo;
let vidasJugador;
let vidasEnemigo;
// let opcionDeMokepones;
let inputHipodoge;
let inputCapipego;
let inputRatigueya;
let inputLangostelvis;
let inputTucapalma;
let inputPydos;
let ataquesMokemonJugador = [];
let ataquesMokemonEnemigo = [];
let botonFuego;
let botonAgua;
let botonTierra;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "assets/maps/mokemap.png"
let listaMokepones;

mokepones = creacionListaMokepones();

let hipodoge = mokepones[0];
let capipego = mokepones[1];
let ratigueya = mokepones[2];
let langostelvis = mokepones[3];
let tucapalma = mokepones[4];
let pydos = mokepones[5];

function iniciarJuego(){
        sectionSeleccionarAtaque.style.display = "none"; 
        seccionReiniciar.style.display = "none";
        sectionVerMapa.style.display = "none";
        
        mokepones.forEach((mokepon)=>{
            listaMokepones =`<input type="radio" name="mascota" id="${mokepon.nombre}"/>
            <label for="${mokepon.nombre}" class="tarjeta-de-mokepon">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt="${mokepon.nombre}">
        </label>`
        contenedorTarjetas.innerHTML += listaMokepones;
        inputHipodoge = document.querySelector("#Hipodoge");
        inputCapipego = document.querySelector("#Capipego");
        inputRatigueya = document.querySelector("#Ratigueya");
        inputLangostelvis = document.querySelector("#Langostelvis");
        inputTucapalma = document.querySelector("#Tucapalma");
        inputPydos = document.querySelector("#Pydos");
    });
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonReiniciar.addEventListener("click", reiniciarJuego);
    jugadorId = unirseAlJuegoBackEnd();
}

function seleccionarMascotaJugador(){
    if(inputHipodoge.checked){
        mokemonJugador = hipodoge;
        // I think i can delete the parameter hier bcs we have a globa variable -> mokemon jugador
        inicializacionDelMundo(mokemonJugador);
    } else if(inputCapipego.checked){
        mokemonJugador = capipego;
        inicializacionDelMundo(mokemonJugador);
    } else if(inputRatigueya.checked){
        mokemonJugador = ratigueya;
        inicializacionDelMundo(mokemonJugador);
    } else if(inputLangostelvis.checked){
        mokemonJugador = langostelvis;
        inicializacionDelMundo(mokemonJugador);
    } else if(inputTucapalma.checked){
        mokemonJugador = tucapalma;
        inicializacionDelMundo(mokemonJugador);
    } else if(inputPydos.checked){
        mokemonJugador = pydos;
        inicializacionDelMundo(mokemonJugador);
    } else {
        alert("No has seleccionado ningun Mokepon");
    }
    mokemonJugadorBackEnd(mokemonJugador);
}

function inicializacionDelMundo(mokemonJugador){
    setStatsBottonsPlayer(mokemonJugador);
    sectionSeleccionarMascota.style.display = 'none'
    sectionVerMapa.style.display = "flex";
    // mokemonesEnemigosLista = selectionEnemiesForMap();
    iniciarMapa();
}

function setStatsBottonsPlayer(mokemonJugador){
    spanMascotaJugador.innerHTML = "Tu Mascota: " + mokemonJugador.nombre;
    vidasJugador = mokemonJugador.vida;
    pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
    mokemonJugador.ataques.forEach((ataque)=>{
        mokemonJugador.ataques = `<button id=${ataque.id} class="ataques">${ataque.nombre}</button>`;
        ataquesMokemonJugador.push(ataque.id);
        ataqueSection.innerHTML += mokemonJugador.ataques;    
    });
    if(ataquesMokemonJugador.includes("btn-fuego")){
        botonFuego = document.querySelector("#btn-fuego");
        botonFuego.addEventListener("click", ataqueFuego);
    }
    if(ataquesMokemonJugador.includes("btn-agua")){
        botonAgua = document.querySelector("#btn-agua");
        botonAgua.addEventListener("click", ataqueAgua);                
    }
    if(ataquesMokemonJugador.includes("btn-tierra")){
        botonTierra = document.querySelector("#btn-tierra")
        botonTierra.addEventListener("click", ataqueTierra);
    }
}

function seleccionarMascotaEnemigo(mokemonEnemigo){
    let spanMascotaEnemigo = document.querySelector("#mascota-enemigo");

    spanMascotaEnemigo.innerHTML = "La Mascota de tu Enemigo: " + mokemonEnemigo.nombre;
    vidasEnemigo = mokemonEnemigo.vida;
    pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
}

function ataqueFuego(){
    let ataqueJugador = "Fuego";
    // ataqueAleatorioEnemigo();
    enviarAtaqueBackEnd(ataqueJugador);
    console.log("enemigoId", enemigoId);
    ataqueEnemigo = obtenerAtaques(enemigoId);
    combate(ataqueJugador, ataqueEnemigo);
}

function ataqueAgua(){
    let ataqueJugador = "Agua";
    // ataqueAleatorioEnemigo();
    enviarAtaqueBackEnd(ataqueJugador);
    console.log("enemigoId", enemigoId);
    ataqueEnemigo = obtenerAtaques(enemigoId);
    combate(ataqueJugador, ataqueEnemigo);
}

function ataqueTierra(){
    let ataqueJugador = "Tierra";
    // ataqueAleatorioEnemigo();
    enviarAtaqueBackEnd(ataqueJugador);
    console.log("enemigoId", enemigoId);
    ataqueEnemigo = obtenerAtaques(enemigoId);
    combate(ataqueJugador, ataqueEnemigo);
}

function ataqueAleatorioEnemigo(){
    mokemonEnemigo.ataques.forEach((ataque)=>{
        ataquesMokemonEnemigo.push(ataque.id);  
    });
    let ataqueAleatorio = aleatorio(0,ataquesMokemonEnemigo.length-1);
    if(ataquesMokemonEnemigo[ataqueAleatorio].includes("btn-fuego")){
        ataqueEnemigo = "Fuego";
    }
    if(ataquesMokemonEnemigo[ataqueAleatorio].includes("btn-agua")){
        ataqueEnemigo = "Agua";              
    }
    if(ataquesMokemonEnemigo[ataqueAleatorio].includes("btn-tierra")){
        ataqueEnemigo = "Tierra";
    }
    combate();
}

// function crearMensaje(){
//     pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
//     pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
//     pAtaqueJugador.innerHTML = ataqueJugador;
//     pAtaqueEnemigo.innerHTML = ataqueEnemigo;
// }

function crearMensajeFinal(resultadoFinal){
    sectionMessage.style.display = "flex";
    sectionMessage.innerHTML = resultadoFinal;

    if(ataquesMokemonJugador.includes("btn-fuego")){
        botonFuego.disabled = true;        
    }
    if(ataquesMokemonJugador.includes("btn-agua")){
        botonAgua.disabled = true;                
    }
    if(ataquesMokemonJugador.includes("btn-tierra")){
        botonTierra.disabled = true;  
    }
    seccionReiniciar.style.display = "Flex";
}

function combate(ataqueJugador, ataqueEnemigo){
    if(ataqueEnemigo==ataqueJugador){
        historialCombate.innerHTML += crearMensaje("Empate 🔁", ataqueEnemigo, ataqueJugador);
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        historialCombate.innerHTML += crearMensaje("Ganaste 🥳", ataqueEnemigo, ataqueJugador);
        vidasEnemigo--;
        pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        historialCombate.innerHTML += crearMensaje("Ganaste 🥳", ataqueEnemigo, ataqueJugador);
        vidasEnemigo--;
        pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        historialCombate.innerHTML += crearMensaje("Ganaste 🥳", ataqueEnemigo, ataqueJugador);
        vidasEnemigo--;
        pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else {
        historialCombate.innerHTML += crearMensaje("Perdiste😪", ataqueEnemigo, ataqueJugador);
        vidasJugador--;
        pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
    }

    revisarVidas(vidasEnemigo, vidasJugador);
}

function revisarVidas(vidasEnemigo, vidasJugador){
    if(vidasEnemigo==0){
        crearMensajeFinal("Muy bien!! Ganaste 🥳🎈🥇");
    } else if (vidasJugador ==0){
        crearMensajeFinal("Ohh que mal! Perdiste 😪😣😢");
    }
}

function reiniciarJuego(){
    location.reload();
}

function iniciarMapa(){
    // setInterval function dice que cada vez que la funcion pintar este activa (pq tenemos oprimido el raton sin soltarlo), se repetira la funcion cada 50 milisegundos
    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener("keydown",sePresionoUnaTecla);
    window.addEventListener("keyup",()=>{
        mokemonJugador.velocidadY = 0;
        mokemonJugador.velocidadX = 0;
    });
}

function pintarCanvas(){
    mokemonJugador.x = mokemonJugador.x + mokemonJugador.velocidadX;
    mokemonJugador.y = mokemonJugador.y + mokemonJugador.velocidadY;

    mapa.width = 320;
    mapa.height = 240;

    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mokemonJugador.pintarMokemon();
    var humanosBackend;
    humanosBackend = enviarPosicionBackEnd(mokemonJugador.x, mokemonJugador.y);
    for(let enemigo of humanosBackend){
        mokemonesEnemigosLista.push(enemigo);
    }
    // console.log("mokemonesEnemigosLista", mokemonesEnemigosLista);
    for(let mokemonEnemigo of mokemonesEnemigosLista){
        mokemonEnemigo.pintarMokemon();
        let isCollision =revisarColision(mokemonEnemigo, mokemonJugador);

        if(isCollision){
            clearInterval(intervalo);
            enemigoId = mokemonEnemigo.id;// no se si es necesario
            sectionVerMapa.style.display = "none";
            seleccionarMascotaEnemigo(mokemonEnemigo);
            sectionSeleccionarAtaque.style.display = "Flex";
        }
    }

    
    // if( mokemonJugador.velocidadX !=0 ||
    //     mokemonJugador.velocidadY !=0
    //     ){
    //         for(mokemonEnemigo of mokemonesEnemigosLista){
    //             let isCollision =revisarColision(mokemonEnemigo, mokemonJugador);

    //             if(isCollision){
    //                 sectionVerMapa.style.display = "none";
    //                 seleccionarMascotaEnemigo(mokemonEnemigo);
    //                 sectionSeleccionarAtaque.style.display = "Flex";
    //             }
    //         }

    // }
}

function moverMokeponDerecha(){
    if(mokemonJugador.x < mapa.width-80){
        mokemonJugador.velocidadX = 2;
        //mejorar para que se pare cuando llegue en le borde se pare
    } 
}

function moverMokeponIzquierda(){
    if(mokemonJugador.x > 4){
        mokemonJugador.velocidadX = -2;
        // mejorar para que se pare cuando llegue en le borde se pare
    } 
}

function moverMokeponArriba(){
    if(mokemonJugador.y > 0){
        mokemonJugador.velocidadY = -2;
        //mejorar para que se pare cuando llegue en le borde se pare
    } 
}

function moverMokeponAbajo(){
    if(mokemonJugador.y < mapa.height - 80){
        mokemonJugador.velocidadY = 2;
        //mejorar para que se pare cuando llegue en le borde se pare
    } 
}

function sePresionoUnaTecla(e){
    if(e.code=="ArrowUp"){
        moverMokeponArriba();
        pintarCanvas();
    } else if (e.code=="ArrowDown"){
        moverMokeponAbajo();
        pintarCanvas();
    } else if (e.code=="ArrowRight"){
        moverMokeponDerecha();
        pintarCanvas();
    } else if (e.code=="ArrowLeft"){
        moverMokeponIzquierda();
        pintarCanvas();
    }
}

function revisarColision(enemigo, mokemonJugador){
    const arribaEnemigo = enemigo.x ; 
    const abajoEnemigo = enemigo.x + enemigo.alto ;
    const izquierdaEnemigo = enemigo.y ;
    const derechaEnemigo = enemigo.y +enemigo.ancho ;

    const arribaMascota = mokemonJugador.x ; 
    const abajoMascota = mokemonJugador.x + mokemonJugador.alto ;
    const izquierdaMascota = mokemonJugador.y ;
    const derechaMascota = mokemonJugador.y + mokemonJugador.ancho ;

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return false;
    }

    mokemonJugador.velocidadY = 0;
    mokemonJugador.velocidadX = 0;   
    return true;
}

window.addEventListener("load", iniciarJuego);