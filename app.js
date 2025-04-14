const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { SECRET_JWT_KEY } = require('@config/config.js');
const { CORS_OPTIONS } = require('@config/config.js');

const routesContactos = require('@routes/contacto.routes.js');
const routesCitas = require('@routes/cita.routes.js');
const routesPacientes = require('@routes/paciente.routes.js');
const routesOdontologos = require('@routes/odontologo.routes.js');
const routesAdministrador = require('@routes/administrador.routes.js')
const routeServer = require('@routes/server.routes.js');
const routeHistoriaClinica = require('@routes/historiaClinica.routes.js');
const routerAuth = require('@routes/auth.routes.js');

app.use(express.json());
app.use(cors(CORS_OPTIONS));
app.use(cookieParser());
app.disable('x-powered-by');
app.use((req, res, next) => {
    let token = req.cookies.access_token;
    req.session = { user: null };

    try {
        const data = jwt.verify(token, SECRET_JWT_KEY);
        req.session.user = data;
        
    } catch (error){
        req.session.user = null
    }

    next();
})

app.use('/', routeServer);
app.use('/', routesContactos);
app.use('/', routesCitas);
app.use('/', routesPacientes);
app.use('/', routesOdontologos);
app.use('/', routesAdministrador);
app.use('/', routeHistoriaClinica);
app.use('/', routerAuth);

module.exports = app