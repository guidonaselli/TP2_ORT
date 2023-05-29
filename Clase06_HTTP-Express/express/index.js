// En la documentacion lo importan del método CommonJS
// const express = require('express')
// const app = express()
// const port = 3000

import express from "express";
const app = express();
const port = 8080;

//Imports
import router from "./router/index.js";

    // Para poder usar los routers tengo que ejecutar un MIDDLEWARE.
    // Es una funcion 'en el medio de...'
//Middlewares
app.use(router)


// //EJEMPLOS DE ROOTEOS
  // tambien recibe peticion y respuesta
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/obj', (req, res) => {
//   res.send({nombre:"Guido"})
// });

// app.get('/html', (req, res) => {
//   res.send('<h1>Hola, estamos en /html</h1>')
// });

// El metodo listen(puerto, callback) por el momento va abajo de todo
app.listen(port, () => {
  console.log(`Server OK con Express | http://localhost:${port}`)
})