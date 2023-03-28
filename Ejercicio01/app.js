
const path = './texto.txt';
const leer = require('./leer.js');
const escribir = require('./escribir.js');


let texto = leer.leer(path);

escribir.estoyEscribiendo("\nTexto agregado: " + texto, path) //Le cambie el nombre para orientarme de cuál era el módulo.

console.log(leer.leer(path))