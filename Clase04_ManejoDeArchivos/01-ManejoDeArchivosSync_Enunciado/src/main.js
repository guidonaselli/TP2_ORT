const fs = require('fs');
const ap = require('./utils/apareo.js');
const fu = require('./utils/fileUtils.js');
const tu = require('./utils/transformUtils.js');

const PATH = '../in/';
const FILES = [
  PATH + '10NumerosOrdenadosEntre1y50(setA).json',
  PATH + '10NumerosOrdenadosEntre1y50(setB).json',
  PATH + 'imparesOrdenadosEntre1y999.json',
  PATH + 'paresOrdenadosEntre2y1000.json'
];

// Cargar los archivos de forma asíncrona y paralela
const promises = FILES.map(file => {
  if (fs.existsSync(file)) {
    //fs.readFileSync() en lugar de fs.readFile() para cargar los archivos de forma sincrónica
    return fs.promises.readFile(file, 'utf-8')
      .then(data => JSON.parse(data))
      .catch(error => console.error(error));
  }
});

//Se puede reemplazar for por un Promise.all() para cargarlos de forma asíncrona y paralela.
Promise.all(promises).then(numbers => {
  // Crear un array de objetos con los números de cada archivo

    //array de objetos con propiedades archivo, numero e indice para simplificar la lógica de apareamiento y ordenamiento (reemplazando el array bidimensional).
  
    const arrays = numbers.map((nums, index) => {
    return nums.map((num, i) => {
      return {
        archivo: index,
        numero: num,
        indice: i
      };
    });
  });

  console.table(arrays.flat());

  // Aparear los arrays
  const mergedArray = arrays.flat().sort((a, b) => a.numero - b.numero);

  
  console.table(mergedArray); //Para ver el array de forma más clara
});