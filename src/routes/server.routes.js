const express = require('express');
const router = express.Router();
const serverController = require('@controllers/serverController');

//Definir ruta obtener el inicio de la app
router.get('/', serverController);

module.exports = router;