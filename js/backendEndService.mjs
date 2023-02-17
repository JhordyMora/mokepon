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