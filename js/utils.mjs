export function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function crearMensaje(resultadoBatalla, ataqueJugador, ataqueEnemigo){
    return `<br>Tu mascota atacó con ${ataqueJugador}. La mascota de tu rival atacó con ${ataqueEnemigo}. ${resultadoBatalla}<br>`
}