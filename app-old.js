const http = require('http');
const port = 8080;
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'application/json' });
    let salida = { nombre: 'Daniel García', edad: 44, nacimiento: '04/12/1974', url: req.url };
    res.write(JSON.stringify(salida));
    res.end();
}).listen(port);
console.log(`Escuchando el puerto ${port}`);