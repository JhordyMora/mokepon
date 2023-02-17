// hacer las imagenes mas pequenhas
// hacer mapa y demaas cosas responsive
// poner estilo botones y mejor organizacion
// mejorar los responsive
// investigar que es viewport - este viene ya por default en el html tag the vs code pero si no es muy importanta para que las cosas sean responsive. escribir el one note
import Mokepon from './mokepon.mjs';

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

let jugadorId = null;
let mokepones = [];
let mokemonJugador;
let mokemonEnemigo;
let mokemonesEnemigosLista = [];
let randomPositionMokeX = [];
let randomPositionMokeY = [];
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
let listaMokepones;
    
let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png",5,"/assets/hipodoge.png");
    
let capipego = new Mokepon("Capipego","./assets/mokepons_mokepon_capipepo_attack.png",5,"/assets/capipepo.png");
    
let ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png",5,"/assets/ratigueya.png");

let langostelvis = new Mokepon("Langostelvis","./assets/mokepons_mokepon_langostelvis_attack.png",5,"/assets/capipepo.png");

let tucapalma = new Mokepon("Tucapalma","./assets/mokepons_mokepon_tucapalma_attack.png",5,"/assets/capipepo.png");

let pydos = new Mokepon("Pydos","./assets/mokepons_mokepon_pydos_attack.png",5,"/assets/capipepo.png");

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
    unirseAlJuegoBackEnd();
}

function unirseAlJuegoBackEnd(){
    fetch("http://localhost:8080/unirse")
    .then(function(res){
        console.log(res);
        if(res.ok){
            res.text()
            .then(function(data){
                                console.log(data)
                                jugadorId = data;
                            }
                            )
                        }
                    }
        )
    }

function seleccionarMascotaJugador(){
    if(inputHipodoge.checked){
        mokemonJugador = hipodoge;
        // I think i can delete the parameter hier bcs we have a globa variable -> mokemon jugador
        setStatsBottonsPlayer(mokemonJugador);
        //seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        selectionEnemiesForMap();
        iniciarMapa();
    } else if(inputCapipego.checked){
        mokemonJugador = capipego;
        setStatsBottonsPlayer(mokemonJugador);
        //seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        selectionEnemiesForMap();
        iniciarMapa();
    } else if(inputRatigueya.checked){
        mokemonJugador = ratigueya;
        setStatsBottonsPlayer(mokemonJugador);
        //seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        selectionEnemiesForMap();
        iniciarMapa();
    } else if(inputLangostelvis.checked){
        mokemonJugador = langostelvis;
        setStatsBottonsPlayer(mokemonJugador);
        //seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        selectionEnemiesForMap();
        iniciarMapa();
    } else if(inputTucapalma.checked){
        mokemonJugador = tucapalma;
        setStatsBottonsPlayer(mokemonJugador);
        //seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        selectionEnemiesForMap();
        iniciarMapa();
    } else if(inputPydos.checked){
        mokemonJugador = pydos;
        setStatsBottonsPlayer(mokemonJugador);
        //seleccionarMascotaEnemigo();
        sectionSeleccionarMascota.style.display = 'none'
        //sectionSeleccionarAtaque.style.display = "Flex";
        sectionVerMapa.style.display = "flex";
        selectionEnemiesForMap();
        iniciarMapa();
    } else {
        alert("No has seleccionado ningun Mokepon");
    }
    //console.log(mokemonJugador);
    mokemonJugadorBackEnd(mokemonJugador); // seleccionarMokepon();
}

function mokemonJugadorBackEnd(mokemonJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, 
    {
        method: "post",
        headers:    {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(
            {
                mokepon: mokemonJugador
                }
                )
                
            }
            )
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

function seleccionarMascotaEnemigo(mokemonEnemigo){
    let spanMascotaEnemigo = document.querySelector("#mascota-enemigo");
    //let randomNumber = aleatorio(0,mokepones.length-1);
    //mokemonEnemigo = mokepones[randomNumber];
    spanMascotaEnemigo.innerHTML = "La Mascota de tu Enemigo: " + mokemonEnemigo.nombre;
    vidasEnemigo = mokemonEnemigo.vida;
    pVidasEnemigo.innerHTML = "Vidas: " + vidasEnemigo;
}

function selectionEnemiesForMap(){
    let pydosEnemy = new Mokepon("Pydos","./assets/mokepons_mokepon_pydos_attack.png",5,"/assets/capipepo.png");;
    let tucapalmaEnemy = new Mokepon("Tucapalma","./assets/mokepons_mokepon_tucapalma_attack.png",5,"/assets/capipepo.png");;
    let langostelvisEnemy = new Mokepon("Langostelvis","./assets/mokepons_mokepon_langostelvis_attack.png",5,"/assets/capipepo.png");;
    let hipodogeEnemy = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png",5,"/assets/hipodoge.png");;
    let capipegoEnemy = new Mokepon("Capipego","./assets/mokepons_mokepon_capipepo_attack.png",5,"/assets/capipepo.png");;
    let ratigueyaEnemy = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png",5,"/assets/ratigueya.png");;
    let listPosibleEnemies = [pydosEnemy, tucapalmaEnemy, langostelvisEnemy, hipodogeEnemy, capipegoEnemy, ratigueyaEnemy];

    hipodogeEnemy.ataques.push(
        {nombre: "🔥", id: "btn-fuego"},
        {nombre: "💧", id: "btn-agua"},
        {nombre: "🌱", id: "btn-tierra"},
        );
        
    capipegoEnemy.ataques.push(
        {nombre: "💧", id: "btn-agua"},
        {nombre: "🔥", id: "btn-fuego"},
        {nombre: "🌱", id: "btn-tierra"},
    );
    
    ratigueyaEnemy.ataques.push(
        {nombre: "🌱", id: "btn-tierra"},
        {nombre: "💧", id: "btn-agua"},
        {nombre: "🔥", id: "btn-fuego"},
    );
    
    langostelvisEnemy.ataques.push(
        {nombre: "🌱", id: "btn-tierra"},
        {nombre: "💧", id: "btn-agua"},
    );
    
    tucapalmaEnemy.ataques.push(
        {nombre: "💧", id: "btn-agua"},
        {nombre: "🔥", id: "btn-fuego"},
    );
    
    pydosEnemy.ataques.push(
        {nombre: "🔥", id: "btn-fuego"},
        {nombre: "🌱", id: "btn-tierra"},
    );

    let randomNumberOfEnemiesMap = aleatorio(1,6);
    randomPositionEnemiesMoke(randomNumberOfEnemiesMap);
    for(let i = 0; i<randomNumberOfEnemiesMap;i++){
        let mokeEne = listPosibleEnemies[aleatorio(0,listPosibleEnemies.length-1)];
        mokemonesEnemigosLista.push(mokeEne);
    }
    
    for(let i = 0; i<mokemonesEnemigosLista.length;i++){
        mokemonesEnemigosLista[i].x = randomPositionMokeX[i];
        mokemonesEnemigosLista[i].y = randomPositionMokeY[i];
    }
    //console.log(mokemonesEnemigosLista);
}

function randomPositionEnemiesMoke(randomNumberOfEnemiesMap){
    for (let i =0;i<randomNumberOfEnemiesMap;i++){
        randomPositionMokeX.push(aleatorio(0,mapa.width));
        randomPositionMokeY.push(aleatorio(0,mapa.height));
    } 
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function ataqueFuego(){
    ataqueJugador = "Fuego";
    ataqueAleatorioEnemigo();
    enviarAtaqueBackEnd();
}

function ataqueAgua(){
    ataqueJugador = "Agua";
    ataqueAleatorioEnemigo();
    enviarAtaqueBackEnd();
}

function ataqueTierra(){
    ataqueJugador = "Tierra";
    ataqueAleatorioEnemigo();
    enviarAtaqueBackEnd();
}

function enviarAtaqueBackEnd(){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ataques: ataqueJugador
            })
        }
    )
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

function crearMensaje(resultadoBatalla){
    let historialCombate = document.querySelector("#historial-combate");

    historialCombate.innerHTML += `<br>Tu mascota atacó con ${ataqueJugador}. La mascota de tu rival atacó con ${ataqueEnemigo}. ${resultadoBatalla}<br>`
}

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

function iniciarMapa(){
    // setInterval function dice que cada vez que la funcion pintar este activa (pq tenemos oprimido el raton sin soltarlo), se repetira la funcion cada 50 milisegundos
    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener("keydown",sePresionoUnaTecla);
    window.addEventListener("keyup",detenerMov);
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

    enviarPosicionBackEnd(mokemonJugador.x, mokemonJugador.y);

    for(mokemon of mokemonesEnemigosLista){
        mokemon.pintarMokemon();
    }

    if( mokemonJugador.velocidadX !=0 ||
        mokemonJugador.velocidadY !=0
        ){
            for(mokemonEnemigo of mokemonesEnemigosLista){
                isCollision =revisarColision(mokemonEnemigo, mokemonJugador);

                if(isCollision){
                    sectionVerMapa.style.display = "none";
                    seleccionarMascotaEnemigo(mokemonEnemigo);
                    sectionSeleccionarAtaque.style.display = "Flex";
                }
            }

    }
}

function enviarPosicionBackEnd(x, y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, 
        {
            method: "post",
            headers: {
                        "Content-Type": "application/json"
                    },
            body: JSON.stringify({
                // se pudo haver escrito solo x, y, pq cuando son iguales, js lo sabe interpretar
                x: x,
                y: y
            })
        }
    
    ).then(function (res){
            if (res.ok){
                res.json().then(function(data){
                        console.log(data);
                        //console.log(data.enemigos);
                        mokemonesEnemigosLista = data.enemigos.map(function(enemigo){
                            if(enemigo.mokepon.nombre){
                                const mokeponNombre = enemigo.mokepon.nombre  || "";
                                let mokeEnemigoHuman = null;
                                if (mokeponNombre === "Hipodoge"){
                                    mokeEnemigoHuman = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png",5,"/assets/hipodoge.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "🔥", id: "btn-fuego"},
                                        {nombre: "💧", id: "btn-agua"},
                                        {nombre: "🌱", id: "btn-tierra"},
                                    )
                                } else if (mokeponNombre === "Capipego"){
                                    mokeEnemigoHuman = new Mokepon("Capipego","./assets/mokepons_mokepon_capipepo_attack.png",5,"/assets/capipepo.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "💧", id: "btn-agua"},
                                        {nombre: "🔥", id: "btn-fuego"},
                                        {nombre: "🌱", id: "btn-tierra"},
                                    );

                                } else if (mokeponNombre === "Ratigueya"){
                                    mokeEnemigoHuman = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png",5,"/assets/ratigueya.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "🌱", id: "btn-tierra"},
                                        {nombre: "💧", id: "btn-agua"},
                                        {nombre: "🔥", id: "btn-fuego"},
                                    );

                                } else if (mokeponNombre === "Pydos"){
                                    mokeEnemigoHuman = new Mokepon("Pydos","./assets/mokepons_mokepon_pydos_attack.png",5,"/assets/capipepo.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "🔥", id: "btn-fuego"},
                                        {nombre: "🌱", id: "btn-tierra"},
                                    );

                                } else if (mokeponNombre === "Langostelvis"){
                                    mokeEnemigoHuman = new Mokepon("Langostelvis","./assets/mokepons_mokepon_langostelvis_attack.png",5,"/assets/capipepo.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "🌱", id: "btn-tierra"},
                                        {nombre: "💧", id: "btn-agua"},
                                    );

                                } else if (mokeponNombre === "Tucapalma"){
                                    mokeEnemigoHuman = new Mokepon("Tucapalma","./assets/mokepons_mokepon_tucapalma_attack.png",5,"/assets/capipepo.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "💧", id: "btn-agua"},
                                        {nombre: "🔥", id: "btn-fuego"},
                                    );

                                }
                                console.log(enemigo.x);
                                mokeEnemigoHuman.y = enemigo.mokepon.y;
                                mokeEnemigoHuman.x = enemigo.mokepon.x;

                                return mokeEnemigoHuman;
                            }    
                            }
                        )
                    }
                )
            }
        }
    )
}

function moverMokeponDerecha(){
    if(mokemonJugador.x < mapa.width-80){
        mokemonJugador.velocidadX = 2;
        //console.log(`ancho mapa: ${mapa.width}`);
        //console.log(`posicion moke: ${mokemonJugador.x}`);
        //console.log(`tamanho pixeles foto moke: ${mokemonJugador.mapaFoto.width}`);
        //mejorar para que se pare cuando llegue en le borde se pare
    } else {
        detenerMov();
    }
}

function moverMokeponIzquierda(){
    if(mokemonJugador.x > 4){
        mokemonJugador.velocidadX = -2;
        // mejorar para que se pare cuando llegue en le borde se pare
    } else {
        detenerMov();
    }
}

function moverMokeponArriba(){
    if(mokemonJugador.y > 0){
        mokemonJugador.velocidadY = -2;
        //mejorar para que se pare cuando llegue en le borde se pare
    } else {
        detenerMov();
    }
}

function moverMokeponAbajo(){
    if(mokemonJugador.y < mapa.height - 80){
        mokemonJugador.velocidadY = 2;
        //mejorar para que se pare cuando llegue en le borde se pare
    } else {
        detenerMov();
    }
}

function detenerMov(){
    mokemonJugador.velocidadY = 0;
    mokemonJugador.velocidadX = 0;
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

    detenerMov();   
    return true;
}

window.addEventListener("load", iniciarJuego);