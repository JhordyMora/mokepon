let jugadorId;

export function unirseAlJuegoBackEnd(){
    fetch("http://localhost:8080/unirse")
    .then(function(res){
        console.log(res);
        if(res.ok){
            res.text()
            .then(function(data){
                                console.log(data)
                                jugadorId = data;
                                return data;
                            }
                            )
                        }
            }
    )
}

export function mokemonJugadorBackEnd(mokemonJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, 
        {
            method: "post",
            headers:    {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                mokepon: mokemonJugador
            })
        }
    )
}

export function enviarAtaqueBackEnd(){
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
                        console.log(data);
                        //console.log(data.enemigos);
                        mokemonesEnemigosLista = data.enemigos.map(function(enemigo){
                            if(enemigo.mokepon.nombre){
                                const mokeponNombre = enemigo.mokepon.nombre  || "";
                                let mokeEnemigoHuman = null;
                                if (mokeponNombre === "Hipodoge"){
                                    mokeEnemigoHuman = new Mokepon("Hipodoge", "../assets/images/mokepons/hipodoge.png",5,"../assets/icons/mokepons/hipodoge.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "🔥", id: "btn-fuego"},
                                        {nombre: "💧", id: "btn-agua"},
                                        {nombre: "🌱", id: "btn-tierra"},
                                    )
                                } else if (mokeponNombre === "Capipego"){
                                    mokeEnemigoHuman = new Mokepon("Capipego","../assets/images/mokepons/capipepo.png",5,"../assets/icons/mokepons/capipepo.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "💧", id: "btn-agua"},
                                        {nombre: "🔥", id: "btn-fuego"},
                                        {nombre: "🌱", id: "btn-tierra"},
                                    );

                                } else if (mokeponNombre === "Ratigueya"){
                                    mokeEnemigoHuman = new Mokepon("Ratigueya","../assets/images/mokepons/ratigueya.png",5,"../assets/icons/mokepons/ratigueya.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "🌱", id: "btn-tierra"},
                                        {nombre: "💧", id: "btn-agua"},
                                        {nombre: "🔥", id: "btn-fuego"},
                                    );

                                } else if (mokeponNombre === "Pydos"){
                                    mokeEnemigoHuman = new Mokepon("Pydos","../assets/images/mokepons/pydos.png",5,"../assets/icons/mokepons/pydos.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "🔥", id: "btn-fuego"},
                                        {nombre: "🌱", id: "btn-tierra"},
                                    );

                                } else if (mokeponNombre === "Langostelvis"){
                                    mokeEnemigoHuman = new Mokepon("Langostelvis","../assets/images/mokepons/langostelvis.png",5,"../assets/icons/mokepons/langostelvis.png");;
                                    mokeEnemigoHuman.ataques.push(
                                        {nombre: "🌱", id: "btn-tierra"},
                                        {nombre: "💧", id: "btn-agua"},
                                    );

                                } else if (mokeponNombre === "Tucapalma"){
                                    mokeEnemigoHuman = new Mokepon("Tucapalma","../assets/images/mokepons/tucapalma.png",5,"../assets/icons/mokepons/tucapalma.png");;
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