var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('API para consultar los items de cada vendedor de Mercado Libre. Ingresar http://localhost:3000/api/seller/[el id del vendedor] .. para obtener la información requerida')
});

module.exports = router;
