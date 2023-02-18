const mapa = document.querySelector("#mapa");
let lienzo = mapa.getContext("2d");
let randomPositionMokeX = [];
let randomPositionMokeY = [];
let mokemonesEnemigosLista = [];


import { aleatorio } from "./utils.mjs";

export default class Mokepon{
    constructor(nombre, foto, vida, mokeFaceMap, id= null){
        this.id = id;
        this.nombre=nombre;
        this.foto=foto;
        this.vida = vida;
        this.ataques=[];
        this.x = aleatorio(0,mapa.width);
        this.y = aleatorio(0,mapa.height);
        this.ancho = 60;
        this.alto = 60;
        this.mapaFoto = new Image();
        this.mapaFoto.src = mokeFaceMap;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
    
    pintarMokemon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
            );
        }
}

export function creacionListaMokepones() {
    let hipodoge = new Mokepon("Hipodoge", "../assets/images/mokepons/hipodoge.png",5,"../assets/icons/mokepons/hipodoge.png");
    let capipego = new Mokepon("Capipego","../assets/images/mokepons/capipepo.png",5,"../assets/icons/mokepons/capipepo.png");
    let ratigueya = new Mokepon("Ratigueya","../assets/images/mokepons/ratigueya.png",5,"../assets/icons/mokepons/ratigueya.png");
    let langostelvis = new Mokepon("Langostelvis","../assets/images/mokepons/langostelvis.png",5,"../assets/icons/mokepons/langostelvis.png");
    let tucapalma = new Mokepon("Tucapalma","../assets/images/mokepons/tucapalma.png",5,"../assets/icons/mokepons/tucapalma.png");
    let pydos = new Mokepon("Pydos","../assets/images/mokepons/pydos.png",5,"../assets/icons/mokepons/pydos.png");

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
        
    return [hipodoge,capipego,ratigueya,langostelvis,tucapalma,pydos]
}

export function selectionEnemiesForMap(){
    let listPosibleEnemies = creacionListaMokepones();

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
    return mokemonesEnemigosLista;

}

function randomPositionEnemiesMoke(randomNumberOfEnemiesMap){
    for (let i =0;i<randomNumberOfEnemiesMap;i++){
        randomPositionMokeX.push(aleatorio(0,mapa.width));
        randomPositionMokeY.push(aleatorio(0,mapa.height));
    } 
}