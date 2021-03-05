var express = require('express');
var router = express.Router();

//Aqui van a ir todas las rutas. Conforme la ruta podemos simplemente dar datos o renderizar componentes
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //En este caso se renderiza un componente
});

module.exports = router;
