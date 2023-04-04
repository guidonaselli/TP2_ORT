// Escribir una función que acepte un callback como argumento y llame al callback después de un cierto tiempo de espera.

function llamarDespuesDeEspera(callback, tiempoEspera) {
    setTimeout(callback, tiempoEspera);
}

function funcCallback() {
    console.log("Función callback utilizada");
}

llamarDespuesDeEspera(funcCallback, 1000); // 1 segundo

