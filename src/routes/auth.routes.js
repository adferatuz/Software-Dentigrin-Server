const express = require('express');
const router = express.Router();
const authController = require('@auth/authController');

//Definir ruta obtener el inicio de la app
router.post('/register', authController.createUser);
router.post('/login', authController.initLoguin);
router.post('/logout', authController.logout);
router.get('/protected', authController.protected);

module.exports = router;