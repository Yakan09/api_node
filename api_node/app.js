const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenido a la API de Distribuciones Mediterráneo – Nakay Fernández Seco');
  } else if (req.url === '/estado') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      servicio: 'api_node',
      hostname: os.hostname(),
      uptime_segundos: process.uptime(),
      fecha: new Date().toISOString()
    }));
  } else {
    res.writeHead(404); res.end('No encontrado');
  }
});

server.listen(3000, () => console.log('API escuchando en el puerto 3000'));