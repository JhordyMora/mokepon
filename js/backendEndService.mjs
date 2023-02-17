export function unirseAlJuegoBackEnd(){
    fetch("http://localhost:8080/unirse")
    .then(function(res){
        console.log(res);
        if(res.ok){
            res.text()
            .then(function(data){
                                console.log(data)
                                return data;
                            }
                            )
                        }
            }
    )
}