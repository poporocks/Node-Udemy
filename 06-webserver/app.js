const express = require('express');
const app = express();
const port = 8080

// Servir contenido estático
app.use(express.static('public/templated-roadtrip/'));

// app.get('/', (req, res) => {
//     res.send('Home page');
// });

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo en su respectiva ruta');
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/elements.html');
});

app.get('*', (req, res) => {
    //res.send('404 | Page not found');
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});