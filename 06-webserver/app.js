const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Implementar handlebars.js (hbs en express)
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Home page');
// });

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo en su respectiva ruta');
// });

app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/public/index.html');
    res.render('home', {
        nombre: 'Edgar Lao',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    //res.sendFile(__dirname + '/public/index.html');
    res.render('generic', {
        nombre: 'Edgar Lao',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    //res.sendFile(__dirname + '/public/index.html');
    res.render('generic', {
        nombre: 'Edgar Lao',
        titulo: 'Curso de Node'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
    //res.send('404 | Page not found');
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});