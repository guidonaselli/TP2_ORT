// En el package.json agrego     
//     "start": "node .",
//     "dev": "node --watch .",
// dentro del script. El primero (npm start) es para correrlo y el segundo es
// para que qeude corriendo con el npm run dev, pero de forma nativa de node
// Y, arriba, type: modules para importar de otra forma



// Para pasar algo de un archivo al otro, el otro tiene que exportarmelo
// Y yo importarlo desde este.

//Esta es la forma nativa de NODE para importar
// Common JS
    // const saludar = require("./saludar.js");

// Type: modules (ECMA Script 7) - Esta es la forma a utilizar
import saludar from "./saludar.js"

saludar();

