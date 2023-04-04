// Definir una función en Node.js
function suma(a, b) {
    return a + b;
  }
 
  // Pasando argumentos a una función
  console.log(suma(2, 3)); // Output: 5
 
  // Declaración de una función anónima
  const resta = function(a, b) {
    return a - b;
  }
 
  console.log(resta(5, 2)); // Output: 3
 
  // Devolución de valores desde una función
  const multiplicacion = (a, b) => a * b;
 
  console.log(multiplicacion(4, 6)); // Output: 24