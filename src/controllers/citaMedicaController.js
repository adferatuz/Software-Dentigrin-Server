const citaMedicaService = require('@services/citaMedicaService');

//Obtener todas las citas agendadas
exports.getAllCitas = async (req, res) => {
    try {
        // Obtener el usuario que tiene el permiso para esta acción
        const { user } = req.session;

        // Si ahi ausencia de usuario
        if (!user) return res.status(403).send('No tienes permiso para realizar esta acción');

        // Si el usuario no tiene permiso para esta acción
        if (user.rol !== 'admin') return res.status(403).send('Acceso no autorizado');

        // Llamada al servicio  para obtener todas las citas
        const citas = await citaMedicaService.getAllCitas();

        // Validar que los datos lleguen correctamente
        if(citas){
            // Respuesta HTTP al lado del cliente
            res.status(200).json(citas);
        }else{
            // Respuesta HTTP al lado del cliente
            res.status(404).json({message: 'No hay citas agendadas'});
        }


    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

// Crear un nuevo registro de cita en el cronograma en la base de datos.
exports.programarCita = async (req, res) => {
    try {

        // Obtener el usuario que tiene el permiso para esta acción
        const { user } = req.session;

        // Si ahi ausencia de usuario
        if (!user) return res.status(403).send('No tienes permiso para realizar esta acción');

        // Si el usuario no tiene permiso para esta acción
        if (user.rol !== 'admin') return res.status(403).send('Acceso no autorizado');

        // Llamada al servicio para crear un nuevo registro de cita
        const nuevaCita = await citaMedicaService.programarCita(req.body);

        //Respuesta al lado del cliente
        res.status(200).json(nuevaCita);

      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

//Eliminar un registro de una cita medica programada
exports.deleteCita = async (req, res) => {
    try {

        // Obtener el usuario que tiene el permiso para esta acción
        const { user } = req.session;

        // Si ahi ausencia de usuario
        if (!user) return res.status(403).send('No tienes permiso para realizar esta acción');

        // Si el usuario no tiene permiso para esta acción
        if (user.rol !== 'admin') return res.status(403).send('Acceso no autorizado');

        //Llamado al servicio para  eliminar un registro de cita
        const citaEliminada = await citaMedicaService.deleteCita(req.body.id);

        //Respuesta  al lado del cliente
        res.status(200).json(citaEliminada);

    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
}

//Obtener citas disponibles en la programacion
exports.getCitasActivas = async (req, res) => {
    try {

        // Obtener el usuario que tiene el permiso para esta acción
        const { user } = req.session;

        // Si ahi ausencia de usuario
        if (!user) return res.status(403).send('No tienes permiso para realizar esta acción');

        // Si el usuario no tiene permiso para esta acción
        //if (user.rol !== 'admin') return res.status(403).send('Acceso no autorizado');

        //Llamado al servicio para obtener citas disponibles
        const citasActivas = await citaMedicaService.getCitasActivas();

        //Respuesta http del  lado del cliente
        res.status(200).json(citasActivas);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Agendar cita medica
exports.scheduleDentalAppointment = async (req, res) => {
    try {
        
        //Llamado al servicio para  agendar cita medica
        const appointScheduled = await citaMedicaService.scheduleDentalAppointment(req.body);

        //Respuesta del lado del cliente
        res.status(200).json(appointScheduled);

    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
}

//obtener citas agendadas
exports.setAppointments = async (req,res) => {
    try {
        
        //Llamado al servicio para obtener citas agendadas
        const appointments = await citaMedicaService.setAppointments(req.body);

        //Respuesta http  del lado del cliente
        res.status(200).json(appointments);

    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
}