var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var alumnosController = require('./controllers/alumnos');

// Para parsear req.body en json
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hola Mundo');
});

app.get('/alumnos', alumnosController.getAlumnos);
app.get('/alumnos/:id', alumnosController.getAlumno);
app.post('/alumnos', alumnosController.addAlumno);
app.put('/alumnos', alumnosController.updateAlumno);
app.delete('/alumnos/:id', alumnosController.deleteAlumno);

app.listen(3000, function(){
  console.log('Iniciando servidor en puerto 3000');
});
