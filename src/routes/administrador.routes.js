const express = require('express');
const router = express.Router();
const administradorController = require('@controllers/administradorController');

//Definir ruta obtener odontologos
router.get('/admin', administradorController.getAdministradores);
router.post('/admin', administradorController.createAdministrador);
router.get('/admin/:id', administradorController.getAdministradorById);
router.put('/admin/:id', administradorController.updateAdministrador);
router.delete('/admin/:id', administradorController.deleteAdministrador);

module.exports = router;