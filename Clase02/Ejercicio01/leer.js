const fs = require('fs');

function leer(texto){
    const data = fs.readFileSync(texto, 'utf-8')
    return data;
}

module.exports = {
    leer: leer //El primer parámetro es el módulo, el segundo la función
};
