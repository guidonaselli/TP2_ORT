import http from "http";
console.log("🚀 ~ file: index.js:2 ~ http:", http)

// Le paso un callback que va a estar manejando las cosas
const server = http.createServer((peticion, respuesta)=>{
    // La peticion es lo que pide el cliente, la respuesta es la que se le da al cliente
    respuesta.setHeader("Content-Type", "text/html"); //Para poder utilizar cosas del header HTML
    respuesta.end("<h1>Hola</h1>");
});

// Para saber donde esta levantado el server le paso primero el puerto
// y como segundo parametro, un callback
server.listen(8080, ()=>{
    console.log("Server OK | http://localhost:8080")
    // No se ve en el navegador, solo en la del proyecto.
})

