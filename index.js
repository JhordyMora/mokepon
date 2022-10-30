const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const jugadores = [];

class Jugador{
    constructor(id){
        this.id = id;
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre;
    }
}

app.post("/mokepon/:jugadorId", (req, res)=>{
        const jugadorId = req.params.jugadorId || "";
        console.log(jugadores);
        console.log(jugadorId);
        res.end();
    }
)

app.get("/unirse", (req,res)=>{
        const id = `${Math.round(Math.random()*100)}`;
        const jugador = new Jugador(id);
        jugadores.push(jugador);
        res.setHeader("Access-Control-Allow-Origin", "*");
        //console.log(req);
        res.send(jugador.id);
    }
)

app.listen(8080, ()=>{
        console.log("Servidor funcionando")
    }
)