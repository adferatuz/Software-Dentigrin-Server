const citaMedicaRepository = require('@repository/citaMedicaRepository');

// Obtener todas las citas agendadas en la base de datos
exports.getAllCitas  = async () => {

    // Llamado al repositorio  para obtener todas las citas
    return await citaMedicaRepository.getAllCitas();

}

// Crear un nuevo registro de citas en la base de datos
exports.programarCita = async (data) => {

    //  Llamado al repositorio para crear un nuevo registro de citas
    return await citaMedicaRepository.programarCita(data);

}

//Eliminar un registro  de citas en la base de datos
exports.deleteCita = async (id) => {

    //  Llamado al repositorio para eliminar un registro de citas
    return await citaMedicaRepository.deleteCita(id);

}

//Obtener las citas disponibles en la base de datos
exports.getCitasActivas = async () => {

    //Llamado al repositorio para obtener las citas medicas
    return await citaMedicaRepository.getCitasActivas();
}

//Agendar cita odontologica
exports.scheduleDentalAppointment = async (data) => {

    //Llamado al repositorio para agendar cita odontologica
    return await citaMedicaRepository.scheduleDentalAppointment(data);

}

//Obtener citas agendadas
exports.setAppointments = async (data) => {

    //Llamado al repositorio para obtener citas agendadas
    return await  citaMedicaRepository.setAppointments(data);

}


