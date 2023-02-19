const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const jugadores = [];

class Jugador{
    ataqueJugador = "nada";
    constructor(id){
        this.id = id;
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon;
    }

    actualizarPosicion(x,y){
        this.mokepon.x = x;
        this.mokepon.y = y;
    }

    asignarAtaques(ataqueJugador){
        this.ataqueJugador = ataqueJugador;
    }
}

class Mokepon{
    constructor(nombre, x = 0, y = 0){
        this.nombre = nombre;
        this.x = x;
        this.y = y;
    }
}

app.get("/unirse", (req,res)=>{
    const id = `${Math.round(Math.random()*100)}`;
    const jugador = new Jugador(id);
    jugadores.push(jugador);
    res.setHeader("Access-Control-Allow-Origin", "*");
    //console.log(req);
    res.send(jugador.id);
}
)

app.post("/mokepon/:jugadorId", (req, res)=>{
        console.log("jugadores", jugadores);
        const jugadorId = req.params.jugadorId || "";
        // esta linea se pudo haber disminuido si se hubiera hecho req.body.mokepon.nombre
        const mokemon = req.body.mokepon || "";
        const mokemonBackEnd = new Mokepon(mokemon.nombre);
        for(let jugador of jugadores){
            if(jugador.id === jugadorId){
                jugador.asignarMokepon(mokemonBackEnd);
            } else {
                console.log("Jugador no encontrado");
            }
        }
        res.end();
    }
)
    
app.post("/mokepon/:jugadorId/posicion", (req,res)=>{
        const jugadorId = req.params.jugadorId || "";
        // Aqui se pone en body el valor del key del dict que se envie en el front end
        const mokemonPosXBackEnd = req.body.x || 0;
        const mokemonPosYBackEnd = req.body.y || 0;
        
        for(let jugador of jugadores){
            if(jugador.id === jugadorId){
                jugador.actualizarPosicion(mokemonPosXBackEnd, mokemonPosYBackEnd);
            } 
            //else {
            //    console.log("Jugador no encontrado");
            //}
            
        }
        
        const enemigos = jugadores.filter((jugador)=> jugadorId !== jugador.id )
        res.send(
            {
                // acordarse de ese truco de que si el key y el value son iguales, se escribe una vez
                enemigos,
            }
        );
        console.log(jugadores);
        console.log(jugadorId);
    }
)

app.post("/mokepon/:jugadorId/ataques", (req, res)=>{
    const jugadorId = req.params.jugadorId || "";
    // esta linea se pudo haber disminuido si se hubiera hecho req.body.mokepon.nombre
    const ataqueJugador = req.body.ataqueJugador;
    for(let jugador of jugadores){
        if(jugador.id === jugadorId){
            console.log("____________");
            console.log("jugador.id", jugador.id);
            console.log("jugadorId", jugadorId);
            console.log("jugadorataqueJugadorBE", ataqueJugador);
            console.log("jugador", jugador);
            jugador.asignarAtaques(ataqueJugador);
        } else {
            console.log("Ataque no encontrado");
            console.log("____________");
        }
    }
    res.end();
    }
)

app.get("/mokepon/:jugadorId/ataqueJugador", (req, res)=>{
        const jugadorId = req.params.jugadorId || "";
        const jugador = jugadores.find((jugador)=>jugador.id===jugadorId);
        res.send({
            ataques: jugador.ataques
        })
    }
)

app.listen(8080, ()=>{
        console.log("Servidor funcionando")
    }
)