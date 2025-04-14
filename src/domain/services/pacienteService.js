const pacienteRepository = require('@repository/pacienteRepository');

//Servicio para crear una persistencia de datos del ORM Paciente.
exports.createPaciente = async (data) => {
    try {

        //Llamada al  repositorio para crear un nuevo paciente.
        const nuevoPaciente = await pacienteRepository.createPaciente(data);

        //Si el paciente se creo correctamente, se devuelve el id del paciente creado.
        return nuevoPaciente;
        
    } catch (error) {
        throw new Error(`Error al crear el paciente: ${error.message}`);       
    }
};

//Servicio para listar todos los pacientes de la base de datos.
exports.getPacientes = async () => {
    try {
        const pacientes = await pacienteRepository.getAllPacientes();
        return pacientes;
    } catch (error) {
        throw new Error(`Error listar pacientes: ${error.message}`); 
    }
}

//Servicio para buscar un paciente por id.
exports.getPacienteById = async (id) => {
    try {

        //Llamada al repositorio para buscar un paciente por id.
        const paciente = await pacienteRepository.getPaciente(id);

        // Si el paciente existe, se devuelve el paciente.
        return paciente;

    } catch (error) {
        throw new Error(`Error al encontrar el paciente: ${error.message}`);
    }
}

//Servicio para actualizar un paciente
exports.updatePaciente = async (data, id) => {
    try {

        // Llamada al repositorio para actualizar un paciente.
        const paciente = await pacienteRepository.updatePaciente(data, id);

        //se devuelve el paciente actualizado.
        return paciente;

    } catch (error) {
        throw new Error(`Error al encontrar el paciente: ${error.message}`);
    }
}

//Servicio para  eliminar un paciente
exports.deletePaciente = async (id) => {
    try {

        //Llamada al repositorio para eliminar un paciente.
        const pacienteEliminado = await pacienteRepository.deletePaciente(id)

        // Se le asigna 1 si el paciente se elimino o  0 si no se elimino.
        return  pacienteEliminado;

    } catch (error) {
        throw new Error(`Error al eliminar el paciente: ${error.message}`);
        
    }
}

//Servicio para obtener un paciente por tipo de identificacion y numero de identificacion
exports.getPacienteByIdentification = async  (data) => {

    //Llamado al repositorio para  buscar un paciente por tipo de identificacion y numero de identificacion.
    const  paciente = await pacienteRepository.getPacienteByIdentification(data);

    // Si el paciente existe se devuelve el paciente.
    return paciente;
}

