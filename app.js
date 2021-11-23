require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname+'/views/partials', (err) => {});
// TODO: require('hbs)
app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Aprendiendo Nodejs',
    nombre: 'Ernesto'
  });
  // res.send('Home');
});
 
app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo')
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/public/index.html')
});

app.get('/generic', (req, res) => {
  // res.sendFile(__dirname+'/public/generic.html')
  res.render('generic', {
    titulo: 'Aprendiendo Nodejs',
    nombre: 'Ernesto'
  });
});

app.get('/elements', (req, res) => {
  // res.sendFile(__dirname+'/public/elements.html')
  res.render('elements', {
    titulo: 'Aprendiendo Nodejs',
    nombre: 'Ernesto'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname+'/public/404.html')
})
 
app.listen(port, () => {
    console.log(`Aplicacion ejecutandose en el puerto ${port}`);
});