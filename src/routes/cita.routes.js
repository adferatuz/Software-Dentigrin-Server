const express = require('express');
const router = express.Router();
const citaMedicaController = require('@controllers/citaMedicaController')

//Definir rutas
//Obtener todas la programacion de citas
router.get('/cronograma-citas', citaMedicaController.getAllCitas);
router.post('/registrar-cita-medica', citaMedicaController.programarCita);
router.post('/borrar-cita-medica', citaMedicaController.deleteCita); 
router.get('/obtener-citas-disponibles', citaMedicaController.getCitasActivas); 
router.put('/agendar-cita', citaMedicaController.scheduleDentalAppointment); 
router.post('/obtener-citas-agendadas', citaMedicaController.setAppointments); 

module.exports = router;