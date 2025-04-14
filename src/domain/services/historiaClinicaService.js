const historiaClinicaRepository = require('@repository/historiaClinicaRepository');

//funcion para obtener todos los registros de un paciente por la llave foranea idPaciente
exports.getHistoriaClinicaByIdPaciente = async (data) => {

    //Llamado al repositorio para obtener  los registros de un paciente
    const registros = await historiaClinicaRepository.getHistoriaClinicaByIdPaciente(data);

    //Retorno  de los registros
    return registros;

}

//Funcion para crear un registro de historia clinica en la  base de datos
exports.createHistoriaClinica = async (data) => {

    //Llamado al repositorio para  crear un registro de historia clinica
    const registro = await historiaClinicaRepository.createHistoriaClinica(data);

    //retorno  del registro creado
    return registro;
}

// Funcion para actualizar un registro de historia clinica
exports.updateHistoriaClinica = async (data) => {

    //Llamado al  repositorio para actualizar un registro de historia clinica
    const registroActualizado = await historiaClinicaRepository.updateHistoriaClinica(data);

    //Retornamos el registro  actualizado
    return registroActualizado;
}

//Funcion  para eliminar un registro de historia clinica
exports.deleteHistoriaClinica = async (data) => {

    //Llamado  al repositorio para eliminar un registro de historia clinica
    const  registroEliminado = await historiaClinicaRepository.deleteHistoriaClinica(data);

    //Retorno  del registro eliminado
    return  registroEliminado;

}

