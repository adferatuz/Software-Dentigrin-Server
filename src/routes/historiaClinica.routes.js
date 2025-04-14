const express = require('express');
const router = express.Router();
const historiaClinicaController = require('@controllers/historiaClinicaController');


//Definir ruta obtener historias clinicas
router.post('/historias-clinica/id-paciente', historiaClinicaController.getHistoriaClinicaByIdPaciente);
router.post('/historia-clinica', historiaClinicaController.createHistoriaClinica);
router.put('/historia-clinica', historiaClinicaController.updateHistoriaClinica);
router.delete('/historia-clinica', historiaClinicaController.deleteHistoriaClinica);

module.exports = router;