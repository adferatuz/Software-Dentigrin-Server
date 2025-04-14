const historiaClinicaService = require('@services/historiaClinicaService');

//Obtener registros del paciente por la llave foranea idPaciente
exports.getHistoriaClinicaByIdPaciente = async (req, res) => {
    try {

        // obtener el usuario autorizado para esta accion
        const { user } = req.session;
        //Validar que el usuario tenga permisos para realizar esta accion
        if (user.rol !== 'odontologo') return res.status(403).send('Acceso no autorizado');

        //Llamado al servicio para  obtener los registros del paciente
        const historiaClinica = await historiaClinicaService.getHistoriaClinicaByIdPaciente(req.body);

        //Respuesta  con los registros del paciente
        res.status(200).json(historiaClinica);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Crear un registro de historia clinica del paciente
exports.createHistoriaClinica = async (req, res) => {
    try {

        // obtener el usuario autorizado para esta accion
        const { user } = req.session;
        //Validar que el usuario tenga permisos para realizar esta accion
        if (user.rol !== 'odontologo') return res.status(403).send('Acceso no autorizado');

        //Llamado al servicio para  crear un registro de historia clinica
        const historiaClinica = await historiaClinicaService.createHistoriaClinica(req.body);

        // Respuesta Http con el registro creado al lado del cliente
        res.status(200).json({ "id_historia_clinica": historiaClinica });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Actualizar un registro  de historia clinica del paciente
exports.updateHistoriaClinica = async (req, res) => {
    try {

        // obtener el usuario autorizado para esta accion
        const { user } = req.session;
        //Validar que el usuario tenga permisos para realizar esta accion
        if (user.rol !== 'odontologo') return res.status(403).send('Acceso no autorizado');

        //Llamado al servicio para actualizar un registro de historia clinica
        const registroActualizado = await historiaClinicaService.updateHistoriaClinica(req.body);

        //Respuesta Http  con el registro actualizado al lado del cliente
        res.status(200).json(registroActualizado);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

//Eliminar  un registro de historia clinica del paciente
exports.deleteHistoriaClinica = async (req, res) => {
    try {

        // obtener el usuario autorizado para esta accion
        const { user } = req.session;
        //Validar que el usuario tenga permisos para realizar esta accion
        if (user.rol !== 'odontologo') return res.status(403).send('Acceso no autorizado');

        //Llamado  al servicio para eliminar un registro de historia clinica
        const registroEliminado = await historiaClinicaService.deleteHistoriaClinica(req.body);

        //Respuesta  Http con del registro eliminado al lado del cliente
        res.status(200).json(registroEliminado);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

