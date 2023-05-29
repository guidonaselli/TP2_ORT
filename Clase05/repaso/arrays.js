
const array1 = [
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "edad": 25,
      "dirección": {
        "calle": "Calle Falsa",
        "numero": 123,
        "ciudad": "Buenos Aires"
      }
    },
    {
      "nombre": "María",
      "apellido": "González",
      "edad": 30,
      "dirección": {
        "calle": "Calle Real",
        "numero": 456,
        "ciudad": "Rosario"
      }
    },

  ];
  
  const array2 = [
    {
      "nombre": "María",
      "apellido": "González",
      "edad": 30,
      "correo": "maria.gonzalez2@mail.com"
    },
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "edad": 25,
      "correo": "juan.perez@mail.com"
    },
    
  ];
  
  // Aparear los arrays
  const arrayApareado = array1.map(obj1 => {
    const obj2 = array2.find(obj2 => obj2.nombre === obj1.nombre && obj2.apellido === obj1.apellido && obj2.edad === obj1.edad);


    return { ...obj1, ...obj2 };
  });
  
  console.log(arrayApareado);
  