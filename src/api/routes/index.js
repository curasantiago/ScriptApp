const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController')


router.get('/', (req, res) => {
    res.json('API para consultar los items de cada vendedor de Mercado Libre. Ingresar http://localhost:3000/api/seller/[el id del vendedor] .. para obtener la información requerida')
})

router.get('/seller/:id',  apiController.getItems)

module.exports = router;