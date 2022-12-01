const http = require('http');

http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, Edgar\n');
    // res.write('2, Angeles\n');
    // res.write('3, Lilith\n');
    // res.write('4, Elliot\n');
    res.write('Hola Mundo');
    res.end();
}).listen(8080);

console.log('Escuchando el puerto: ', 8080);