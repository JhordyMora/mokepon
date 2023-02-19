import { creacionListaMokepones } from "./mokepon.mjs";

let jugadorId;
let listaMokepones = creacionListaMokepones();
let mokemonesEnemigosLista;
let intervalo;

export function unirseAlJuegoBackEnd(){
    fetch("http://localhost:8080/unirse")
    .then(function(res){
        // console.log(res);
        if(res.ok){
            res.text()
            .then(function(data){
                                console.log(data)
                                jugadorId = data;
                                return data;
            })
        }}
    )
}

export function mokemonJugadorBackEnd(mokemonJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, 
        {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                mokepon: mokemonJugador
            })
        }
    )
}

export function enviarAtaqueBackEnd(ataqueJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ataqueJugador: ataqueJugador,
            })
        }
    )
    // intervalo = setInterval(obtenerAtaques, 50);
}

export function obtenerAtaques(enemigoId){
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataqueJugador`)
        .then(function (res){
            if(res.ok){
                res.json()
                    .then(function({ataques}){
                        if(ataques != "nada"){
                            clearInterval(intervalo);
                            return ataques;
                        }
                    })
            }
        })
}

export function enviarPosicionBackEnd(x, y){
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
                        mokemonesEnemigosLista = data.enemigos.map(function(enemigo){
                            if(enemigo?.mokepon.nombre){
                                const mokeponNombre = enemigo.mokepon.nombre  || "";
                                let mokeEnemigoHuman = null;
                                if (mokeponNombre === "Hipodoge"){
                                    mokeEnemigoHuman = listaMokepones[0]; 
                                } else if (mokeponNombre === "Capipego"){
                                    mokeEnemigoHuman = listaMokepones[1]; 
                                } else if (mokeponNombre === "Ratigueya"){
                                    mokeEnemigoHuman = listaMokepones[2]; 
                                } else if (mokeponNombre === "Pydos"){
                                    mokeEnemigoHuman = listaMokepones[5];
                                } else if (mokeponNombre === "Langostelvis"){
                                    mokeEnemigoHuman = listaMokepones[3];
                                } else if (mokeponNombre === "Tucapalma"){
                                    mokeEnemigoHuman = listaMokepones[4];
                                }
                                mokeEnemigoHuman.y = enemigo.mokepon.y;
                                mokeEnemigoHuman.x = enemigo.mokepon.x;
                                mokeEnemigoHuman.id = enemigo.id;
                                mokeEnemigoHuman.ataques = "nada";
                                // console.log("enemigo.mokepon", enemigo.mokepon);
                                // console.log("mokeEnemigoHuman", mokeEnemigoHuman);
                                return mokeEnemigoHuman;
                            }    
                        })
                    }
                )
            }
        }
    )
    console.log("mokemonesEnemigosLista", mokemonesEnemigosLista);
    return mokemonesEnemigosLista;
}