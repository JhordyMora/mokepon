let mokepones = [];
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
let ataqueMokemonJugador = [];
let botonFuego;// = document.querySelector("#btn-fuego");
let botonAgua;// = document.querySelector("#btn-agua");
let botonTierra;// = document.querySelector("#btn-tierra");

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
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + hipodoge.nombre;
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
        vidasJugador = hipodoge.vida;
        pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
        hipodoge.ataques.forEach((ataque)=>{
            ataques = `<button id=${ataque.id} class="ataques">${ataque.nombre}</button>`
            ataqueMokemonJugador.push(ataque.id);
            ataqueSection.innerHTML += ataques;    
        });
        if(ataqueMokemonJugador.includes("btn-fuego")){
            botonFuego = document.querySelector("#btn-fuego");
            botonFuego.addEventListener("click", ataqueFuego);
        }
        if(ataqueMokemonJugador.includes("btn-agua")){
            botonAgua = document.querySelector("#btn-agua");
            botonAgua.addEventListener("click", ataqueAgua);                
        }
        if(ataqueMokemonJugador.includes("btn-tierra")){
            botonTierra = document.querySelector("#btn-tierra")
            botonTierra.addEventListener("click", ataqueTierra);
        }
    } else if(inputCapipego.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + capipego.nombre;
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
        vidasJugador = capipego.vida;
        pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
        capipego.ataques.forEach((ataque)=>{
            ataques = `<button id=${ataque.id} class="ataques">${ataque.nombre}</button>`
            ataqueMokemonJugador.push(ataque.id);
            ataqueSection.innerHTML += ataques;
        });
        if(ataqueMokemonJugador.includes("btn-fuego")){
            botonFuego = document.querySelector("#btn-fuego");
            botonFuego.addEventListener("click", ataqueFuego);
        }
        if(ataqueMokemonJugador.includes("btn-agua")){
            botonAgua = document.querySelector("#btn-agua");
            botonAgua.addEventListener("click", ataqueAgua);                
        }
        if(ataqueMokemonJugador.includes("btn-tierra")){
            botonTierra = document.querySelector("#btn-tierra")
            botonTierra.addEventListener("click", ataqueTierra);
        }
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + ratigueya.nombre;
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
        vidasJugador = ratigueya.vida;
        pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
        ratigueya.ataques.forEach((ataque)=>{
            ataques = `<button id=${ataque.id} class="ataques">${ataque.nombre}</button>`
            ataqueMokemonJugador.push(ataque.id);
            ataqueSection.innerHTML += ataques;
        });
        if(ataqueMokemonJugador.includes("btn-fuego")){
            botonFuego = document.querySelector("#btn-fuego");
            botonFuego.addEventListener("click", ataqueFuego);
        }
        if(ataqueMokemonJugador.includes("btn-agua")){
            botonAgua = document.querySelector("#btn-agua");
            botonAgua.addEventListener("click", ataqueAgua);                
        }
        if(ataqueMokemonJugador.includes("btn-tierra")){
            botonTierra = document.querySelector("#btn-tierra")
            botonTierra.addEventListener("click", ataqueTierra);
        }
    } else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + langostelvis.nombre;
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
        vidasJugador = langostelvis.vida;
        pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
        langostelvis.ataques.forEach((ataque)=>{
            ataques = `<button id=${ataque.id} class="ataques">${ataque.nombre}</button>`
            ataqueMokemonJugador.push(ataque.id);
            ataqueSection.innerHTML += ataques;
        });
        if(ataqueMokemonJugador.includes("btn-fuego")){
            botonFuego = document.querySelector("#btn-fuego");
            botonFuego.addEventListener("click", ataqueFuego);
        }
        if(ataqueMokemonJugador.includes("btn-agua")){
            botonAgua = document.querySelector("#btn-agua");
            botonAgua.addEventListener("click", ataqueAgua);                
        }
        if(ataqueMokemonJugador.includes("btn-tierra")){
            botonTierra = document.querySelector("#btn-tierra")
            botonTierra.addEventListener("click", ataqueTierra);
        }
    } else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + tucapalma.vida;
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
        vidasJugador = tucapalma.vida;
        pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
        tucapalma.ataques.forEach((ataque)=>{
            ataques = `<button id=${ataque.id} class="ataques">${ataque.nombre}</button>`
            ataqueMokemonJugador.push(ataque.id);
            ataqueSection.innerHTML += ataques;
        });
        if(ataqueMokemonJugador.includes("btn-fuego")){
            botonFuego = document.querySelector("#btn-fuego");
            botonFuego.addEventListener("click", ataqueFuego);
        }
        if(ataqueMokemonJugador.includes("btn-agua")){
            botonAgua = document.querySelector("#btn-agua");
            botonAgua.addEventListener("click", ataqueAgua);                
        }
        if(ataqueMokemonJugador.includes("btn-tierra")){
            botonTierra = document.querySelector("#btn-tierra")
            botonTierra.addEventListener("click", ataqueTierra);
        }
    } else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = "Tu Mascota: " + pydos.vida;
        seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        sectionSeleccionarAtaque.style.display = "Flex";
        vidasJugador = pydos.vida;
        pVidasJugador.innerHTML = "Vidas: " + vidasJugador;
        pydos.ataques.forEach((ataque)=>{
            ataques = `<button id=${ataque.id} class="ataques">${ataque.nombre}</button>`
            ataqueMokemonJugador.push(ataque.id);
            ataqueSection.innerHTML += ataques;
        });
        if(ataqueMokemonJugador.includes("btn-fuego")){
            botonFuego = document.querySelector("#btn-fuego");
            botonFuego.addEventListener("click", ataqueFuego);
        }
        if(ataqueMokemonJugador.includes("btn-agua")){
            botonAgua = document.querySelector("#btn-agua");
            botonAgua.addEventListener("click", ataqueAgua);                
        }
        if(ataqueMokemonJugador.includes("btn-tierra")){
            botonTierra = document.querySelector("#btn-tierra")
            botonTierra.addEventListener("click", ataqueTierra);
        }
    } else {
        alert("No has seleccionado ningun Mokepon");
    }
}

function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo = document.querySelector("#mascota-enemigo");
    let randomNumber = aleatorio(0,mokepones.length);

    spanMascotaEnemigo.innerHTML = "La Mascota de tu Enemigo: " + mokepones[randomNumber].nombre;
    vidasEnemigo = mokepones[randomNumber].vida;
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

function crearMensaje(resultadoBatalla){
    let resultadoCombate = document.querySelector("#resultadoCombate");

    resultadoCombate.innerHTML = resultadoBatalla;
}

function crearMensajeFinal(resultadoFinal){
    //let  parrafo = document.createElement("p");
    sectionMessage.innerHTML = resultadoFinal ;
    //sectionMessage.appendChild(parrafo);
    if(ataqueMokemonJugador.includes("btn-fuego")){
        botonFuego.disabled = true;        
    }
    if(ataqueMokemonJugador.includes("btn-agua")){
        botonAgua.disabled = true;                
    }
    if(ataqueMokemonJugador.includes("btn-tierra")){
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
        crearMensajeFinal("Muy bien!! Ganaste :D");
    } else if (vidasJugador ==0){
        crearMensajeFinal("Ohh que mal! Perdiste :(");
    }
}

function reiniciarJuego(){
    location.reload();
}

window.addEventListener("load", iniciarJuego);