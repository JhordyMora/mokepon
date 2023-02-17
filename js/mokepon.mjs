const mapa = document.querySelector("#mapa");
let lienzo = mapa.getContext("2d");


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