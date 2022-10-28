const { randomInt } = require("crypto");
const express = require("express");

const app = express();

const jugadores = [];

class Jugador{
    constructor(id){
        this.id = id;
    }
}

app.get("/unirse", (req,res)=>{
        const id = `Tu id es el siguiente: ${Math.round(Math.random()*100)}`;
        const jugador = new Jugador(id);
        jugadores.push(jugador);
        res.setHeader("Access-Control-Allow-Origin", "*");
        console.log(req);
        res.send(jugador.id);
    }
)

app.listen(8080, ()=>{
        console.log("Servidor funcionando")
    }
)