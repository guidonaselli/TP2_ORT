const fs = require('fs');

// 1. Crear un objeto
const objeto = {
  "nombre": "Juan",
  "apellido": "Pérez",
  "edad": 25,
  "dirección": {
    "calle": "Calle Falsa",
    "numero": 123,
    "ciudad": "Buenos Aires"
  }
};

// 2. Convertir el objeto en una cadena de JSON
const objetoJSON = JSON.stringify(objeto);

// 3. Leer un archivo JSON
fs.readFile('datos.json', (error, datos) => {
  if (error) {
    console.error(error);
  } else {
    // 4. Mostrar por consola la lista de objetos leídos del archivo JSON
    const listaObjetos = JSON.parse(datos);
    console.log(listaObjetos);

    // 5. Agregar el objeto creado a la lista de objetos leídos
    listaObjetos.push(objeto);

    // 6. Convertir la lista de objetos en una cadena de JSON
    const listaJSON = JSON.stringify(listaObjetos);

    // 7. Escribir la cadena de JSON resultante en un archivo
    fs.writeFile('datos2.json', listaJSON, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Archivo guardado');
      }
    });
   

  }


});
