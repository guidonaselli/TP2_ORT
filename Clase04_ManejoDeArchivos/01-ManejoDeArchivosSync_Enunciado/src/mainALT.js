const fs = require('fs');


//import fu from './utils/fileUtils.js';
// const fu = require('./utils/fileUtils.js');

const PATH = '../in/';
const FILES = [
                PATH + '10NumerosOrdenadosEntre1y50(setA).json',
                PATH + '10NumerosOrdenadosEntre1y50(setB).json',
                PATH + 'imparesOrdenadosEntre1y999.json',
                PATH + 'paresOrdenadosEntre2y1000.json'
              ]

// console.log(fu.leerArchivoComoString(FILES[0]));

// cargos todos los archivos en memoria

for (let i = 0; i < FILES.length; i++) { 
  //Verifico que exista el archivo 
  if (fs.existsSync(FILES[i])) {
    //Leo el archivo JSON
    fs.readFile(FILES[i], 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const numbers = JSON.parse(data);
      console.log(numbers);
    });
  }
}


// preparo 4 arrays para aparear

const arrays = [[], [], [], []];

async function prepararArrays(){
for (let i = 0; i < FILES.length; i++) { 
  return new Promise((response) => {
    //Verifico que exista el archivo 
    if (fs.existsSync(FILES[i])) {
      //Leo el archivo JSON
      fs.readFile(FILES[i], 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
  
        const numbers = JSON.parse(data);
  
        for (let j = 0; j < numbers.length; j++) {
          arrays[i].push({
            numero: numbers[j],
            indice: j
          });
        }
      });
    }
  })
  
  
}
}

await function mostrarArray(){
for (let i = 0; i < arrays.length; i++) {
  for (let j = 0; j < arrays[i].length; j++) {
    console.log("mostrarArray()"+arrays[i][j]);
  }
}
}

prepararArrays()


// apareo simple


// armo un array con los 4 arrays que quiero aparear


// apareo múltiple
