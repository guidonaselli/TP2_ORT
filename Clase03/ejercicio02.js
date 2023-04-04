// Crear un programa en JavaScript que use la librería async.js para resolver una tarea asincrónica por ejemplo sumar una serie de números 

const async = require('async');
const numeros = [1, 2, 3, 4, 5];

function sumArray(array, callback) {
  let sumatoria = 0;
  for (let i = 0; i < array.length; i++) {
    sumatoria += array[i];
  }
  callback(null, sumatoria);
}

async.reduce(numeros, 0, function(reducir, valorInicial, callback) {
  sumArray([reducir, valorInicial], callback);
}, function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log(`El resultado de la suma es ${result}`);
  }
});

