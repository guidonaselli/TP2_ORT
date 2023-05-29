const titulares = [
  { nombre: "Lionel", apellido: "Messi", posicion: "Delantero", numero: 10 },
  { nombre: "Sergio", apellido: "Agüero", posicion: "Delantero", numero: 19 },
  { nombre: "Giovani", apellido: "Lo Celso", posicion: "Centrocampista", numero: 20 },
  { nombre: "Rodrigo", apellido: "De Paul", posicion: "Centrocampista", numero: 16 },
  { nombre: "Nicolás", apellido: "Tagliafico", posicion: "Defensa", numero: 3 },
  { nombre: "Nicolás", apellido: "Otamendi", posicion: "Defensa", numero: 17 },
  { nombre: "Marcos", apellido: "Acuña", posicion: "Defensa", numero: 8 },
  { nombre: "Emiliano", apellido: "Martínez", posicion: "Portero", numero: 23 }
];

const suplentes = [
  { nombre: "Paulo", apellido: "Dybala", posicion: "Delantero", numero: 21 },
  { nombre: "Gonzalo", apellido: "Higuaín", posicion: "Delantero", numero: 9 },
  { nombre: "Ángel", apellido: "Di María", posicion: "Centrocampista", numero: 11 },
  { nombre: "Leandro", apellido: "Paredes", posicion: "Centrocampista", numero: 5 },
  { nombre: "Germán", apellido: "Pezzella", posicion: "Defensa", numero: 2 },
  { nombre: "Lucas", apellido: "Martínez Quarta", posicion: "Defensa", numero: 6 },
  { nombre: "Gonzalo", apellido: "Montiel", posicion: "Defensa", numero: 4 },
  { nombre: "Agustín", apellido: "Marchesín", posicion: "Portero", numero: 12 }
];



const array1 = titulares.map(obj => {
  return { ...obj, categoria:'titular' };
});

const array2 = titulares.map(obj => {
  return { ...obj, categoria:'suplente' };
});

plantel = array1.concat(array2)

console.table(plantel)

// OTRA OPCION, PERO AGREGANDO EL ATRIBUTO

// function apareoJugadores(arr1, aarr2){
//   new array = [...titulares, ...suplentes];

//   function separar(i){
//     if(titulares.includes(i)){
//       i["Situación"]="Titular"
//     } else
//     i["Situación"]="Suplente"
//   }
//   return i
// }

// jugadores = new_array.map(i => separar(i))

// return jugadores