const sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque");
const seccionReiniciar = document.querySelector("#reiniciar");
const botonMascotaJugador = document.querySelector("#btn-mascota");
const botonReiniciar = document.querySelector("#btn-reiniciar");

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.querySelector("#mascota-jugador");

const pVidasJugador = document.querySelector("#vidas-jugador");
const pVidasEnemigo = document.querySelector("#vidas-enemigo");
const pAtaqueJugador = document.querySelector("#ataque-jugador");
const pAtaqueEnemigo = document.querySelector("#ataque-enemigo");

const sectionMessage = document.querySelector("#mensaje-final");
const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
const ataqueSection = document.querySelector("#botones");
const sectionVerMapa = document.querySelector("#ver-mapa");
const mapa = document.querySelector("#mapa");

let mokepones = [];
let mokemonJugador;
let mokemonEnemigo;
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador;
let vidasEnemigo;
let opcionDeMokepones;
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
mapaBackground.src = "/assets/mokemap.png"


class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre=nombre;
        this.foto=foto;
        this.vida = vida;
        this.ataques=[];
        this.x = 20;
        this.y = 30;
        this.ancho = 80;
        this.alto = 80;
        this.mapaFoto = new Image();
        this.mapaFoto.src = foto;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png",5);

let capipego = new Mokepon("Capipego","./assets/mokepons_mokepon_capipepo_attack.png",5);

let ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png",5);

let langostelvis = new Mokepon("Langostelvis","./assets/mokepons_mokepon_langostelvis_attack.png",5);

let tucapalma = new Mokepon("Tucapalma","./assets/mokepons_mokepon_tucapalma_attack.png",5);

let pydos = new Mokepon("Pydos","./assets/mokepons_mokepon_pydos_attack.png",5);

hipodoge.ataques.push(
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "💧", id: "btn-agua"},
    {nombre: "🌱", id: "btn-tierra"},
);

capipego.ataques.push(
    {nombre: "💧", id: "btn-agua"},
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "🌱", id: "btn-tierra"},
);

ratigueya.ataques.push(
    {nombre: "🌱", id: "btn-tierra"},
    {nombre: "💧", id: "btn-agua"},
    {nombre: "🔥", id: "btn-fuego"},
);

langostelvis.ataques.push(
    {nombre: "🌱", id: "btn-tierra"},
    {nombre: "💧", id: "btn-agua"},
);

tucapalma.ataques.push(
    {nombre: "💧", id: "btn-agua"},
    {nombre: "🔥", id: "btn-fuego"},
);

pydos.ataques.push(
    {nombre: "🔥", id: "btn-fuego"},
    {nombre: "🌱", id: "btn-tierra"},
);

mokepones.push(hipodoge,capipego,ratigueya,langostelvis,tucapalma,pydos);

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
}

function seleccionarMascotaJugador(){
    // setInterval function dice que cada vez que la funcion pintar este activa (pq tenemos oprimido el raton sin soltarlo), se repetira la funcion cada 50 milisegundos
    intervalo = setInterval(pintarPersonajeYCanvas, 50);
    window.addEventListener("keydown",sePresionoUnaTecla);
    window.addEventListener("keyup",detenerMov);

    if(inputHipodoge.checked){
        mokemonJugador = hipodoge;
        // I think i can delete the parameter hier bcs we have a globar variable -> mokemon jugador
        setStatsBottonsPlayer(mokemonJugador);
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        pintarPersonajeYCanvas();
    } else if(inputCapipego.checked){
        mokemonJugador = capipego;
        setStatsBottonsPlayer(mokemonJugador);
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        pintarPersonajeYCanvas();
    } else if(inputRatigueya.checked){
        mokemonJugador = ratigueya;
        setStatsBottonsPlayer(mokemonJugador);
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        pintarPersonajeYCanvas();
    } else if(inputLangostelvis.checked){
        mokemonJugador = langostelvis;
        setStatsBottonsPlayer(mokemonJugador);
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        pintarPersonajeYCanvas();
    } else if(inputTucapalma.checked){
        mokemonJugador = tucapalma;
        setStatsBottonsPlayer(mokemonJugador);
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        pintarPersonajeYCanvas();
    } else if(inputPydos.checked){
        mokemonJugador = pydos;
        setStatsBottonsPlayer(mokemonJugador);
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        pintarPersonajeYCanvas();
    } else {
        alert("No has seleccionado ningun Mokepon");
    }
}

function setStatsBottonsPlayer(mokemonJugador){
    spanMascotaJugador.innerHTML = "Tu Mascota: " + mokemonJugador.nombre;
    vidasJugador = mokemonJugador.vida;
    pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
    mokemonJugador.ataques.forEach((ataque)=>{
        ataques = `<button id=${ataque.id} class="ataques">${ataque.nombre}</button>`
        ataquesMokemonJugador.push(ataque.id);
        ataqueSection.innerHTML += ataques;    
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

function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo = document.querySelector("#mascota-enemigo");
    let randomNumber = aleatorio(0,mokepones.length-1);
    mokemonEnemigo = mokepones[randomNumber];
    spanMascotaEnemigo.innerHTML = "La Mascota de tu Enemigo: " + mokemonEnemigo.nombre;
    vidasEnemigo = mokemonEnemigo.vida;
    pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
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

function crearMensaje(){
    pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
    pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    pAtaqueJugador.innerHTML = ataqueJugador;
    pAtaqueEnemigo.innerHTML = ataqueEnemigo;
}

function crearMensaje(resultadoBatalla){
    let resultadoCombate = document.querySelector("#resultadoCombate");

    resultadoCombate.innerHTML += `<br>Tu mascota atacó con ${ataqueJugador}. La mascota de tu rival atacó con ${ataqueEnemigo}. ${resultadoBatalla}<br>`
}

function crearMensajeFinal(resultadoFinal){
    sectionMessage.style.border = "5px solid black";
    sectionMessage.style.padding = "10px 0px 10px 0px";
    sectionMessage.style.backgroundColor = "#FEF5AC";
    sectionMessage.style.marginTop = "30px";
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

function combate(){
    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("Empate 🔁");
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        crearMensaje("Ganaste 🥳");
        vidasEnemigo--;
        pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("Ganaste 🥳");
        vidasEnemigo--;
        pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensaje("Ganaste 🥳");
        vidasEnemigo--;
        pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
    } else {
        crearMensaje("Perdiste😪");
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

function pintarPersonajeYCanvas(){
    mokemonJugador.x = mokemonJugador.x + mokemonJugador.velocidadX;
    mokemonJugador.y = mokemonJugador.y + mokemonJugador.velocidadY;
    lienzo.clearRect(0,0,mapa.width, mapa.height);
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    lienzo.drawImage(
        mokemonJugador.mapaFoto,
        mokemonJugador.x,
        mokemonJugador.y,
        mokemonJugador.ancho,
        mokemonJugador.alto
    );
}

function moverMokeponDerecha(){
    mokemonJugador.velocidadX = 5;
}

function moverMokeponIzquierda(){
    mokemonJugador.velocidadX -= 5;
}

function moverMokeponArriba(){
    mokemonJugador.velocidadY -= 5;
}

function moverMokeponAbajo(){
    mokemonJugador.velocidadY += 5;
}

function detenerMov(){
    mokemonJugador.velocidadY = 0;
    mokemonJugador.velocidadX = 0;
}

function sePresionoUnaTecla(e){
    if(e.code=="ArrowUp"){
        moverMokeponArriba();
        pintarPersonajeYCanvas();
    } else if (e.code=="ArrowDown"){
        moverMokeponAbajo();
        pintarPersonajeYCanvas();
    } else if (e.code=="ArrowRight"){
        moverMokeponDerecha();
        pintarPersonajeYCanvas();
    } else if (e.code=="ArrowLeft"){
        moverMokeponIzquierda();
        pintarPersonajeYCanvas();
    }
}
window.addEventListener("load", iniciarJuego);