const http = require('http');
function obtenerClima(ciudad, callback) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=d6382ca05d21979767c0f8d1676330a0`;
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });


    res.on('end', () => {
      const clima = JSON.parse(data);
      callback(null, clima);
    });
  }).on('error', (err) => {
    callback(err);
  });
}
obtenerClima('Buenos Aires', (err, clima) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(clima);
});
