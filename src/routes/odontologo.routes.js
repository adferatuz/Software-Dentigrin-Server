const express = require('express');
const router = express.Router();
const odontologoController = require('@controllers/odontologoController');


//Definir ruta obtener odontologos
router.get('/odontologos', odontologoController.getOdontologos);
router.post('/odontologos', odontologoController.createOdontologo);
router.post('/dentist-especialty', odontologoController.getEspecialty);
router.get('/odontologos/:id', odontologoController.getOdontologoById);
router.put('/odontologos/:id', odontologoController.updateOdontologo);
router.delete('/odontologos/:id', odontologoController.deleteOdontologo);

module.exports = router;