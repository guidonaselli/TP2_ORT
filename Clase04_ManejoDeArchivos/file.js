const fs = require('fs');

// leer un archivo JSON
fs.readFile('users.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const users = JSON.parse(data);
  console.log(users);
});

// escribir un archivo JSON
const users = [
  {
    id: 1,
    name: 'Juan',
    email: 'juan@example.com'
  },
  {
    id: 2,
    name: 'María',
    email: 'maria@example.com'
  }
];

fs.writeFile('users.json', JSON.stringify(users), err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Archivo guardado correctamente');
});
