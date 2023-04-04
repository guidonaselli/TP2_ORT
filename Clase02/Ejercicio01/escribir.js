const fs = require('fs');

function escribir(texto, path){
    fs.appendFileSync(path, texto);
}

module.exports = {
    estoyEscribiendo: escribir //El primer parámetro es el módulo, el segundo la función
};