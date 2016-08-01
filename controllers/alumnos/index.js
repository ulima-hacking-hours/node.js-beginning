var alumnos = {
  '20121212': {nombre: 'Obi Wan Kenobi', edad: 70},
  '20121214': {nombre: 'Anakin Skywalker', edad: 40},
  '20121219': {nombre: 'Luke Skywalker', edad: 20},
  '20121211': {nombre: 'Han Solo', edad: 28}
};

var operaciones = {
  getAlumnos : function(req, res){
    res.json(alumnos);
  },
  getAlumno : function(req, res){
    // Se consultara /alumnos/20122323
    var codigo = req.params.id;
    res.json(alumnos[codigo]);
  },
  addAlumno : function(req, res){
    alumnos[req.body.codigo] = req.body;
    res.json({
      status : "OK"
    });
  },
  updateAlumno : function(req, res){
    alumnos[req.body.codigo] = req.body;
    res.json({
      status : "OK"
    });
  },
  deleteAlumno : function(req, res){
    var codigo = req.params.id;
    delete alumnos[codigo];
    res.json({
      status : "OK"
    });
  }
};
module.exports = operaciones;
