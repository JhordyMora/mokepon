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

    asignarMokepon(mokepon){
        this.mokepon = mokepon;
    }

    actualizarPosicion(x,y){
        this.mokepon.x = x;
        this.mokepon.y = y;
    }
}

class Mokepon{
    constructor(nombre, x = 0, y = 0){
        this.nombre = nombre;
        this.x = x;
        this.y = y;
    }
}

app.post("/mokepon/:jugadorId", (req, res)=>{
        const jugadorId = req.params.jugadorId || "";
        // esta linea se pudo haber disminuido si se hubiera hecho req.body.mokepon.nombre
        const mokemon = req.body.mokepon || "";
        const mokemonBackEnd = new Mokepon(mokemon.nombre);
        for(jugador of jugadores){
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
        
        for(jugador of jugadores){
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