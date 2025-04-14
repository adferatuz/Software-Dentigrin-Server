const odontologoRepository = require('@repository/odontologoRepository');

// Servicio para  obtener los odontólogos
exports.getOdontologos  = async () => {
    try {

        // Obtener los odontólogos
        return await odontologoRepository.getAllOdontologos();

    } catch (error) {
        throw new Error("Error al obtener los odontólogos");
    }
}

// Servicio para crear un registro de odontólogo
exports.createOdontologo  = async (data) => {
    try {

        // Llamado al repositorio  para crear un odontólogo
        return await odontologoRepository.createOdontologo(data);        

    } catch (error) {
        throw new Error("Error al crear el odontólogo");        
    }
}

// Servicio  para obtener un odontólogo por id
exports.getOdontologoById   = async (id) => {
    try {

        //  Obtener el odontólogo por id
        return await odontologoRepository.getOdontologo(id);
        
        
    } catch (error) {
        throw new Error("Error al obtener el odontólogo");        
    }
}

// Servicio para obtener un odontólogo por especialidad
exports.getEspecialty = async (data) => {
    try {
        
        // Llamado al repositorio para obtener un odontólogo por especialidad
        return await odontologoRepository.getEspecialty(data);
        
    } catch (error) {
                
    }
}

// Servicio para actualizar un odontólogo
exports.updateOdontologo   = async (data,id ) => {
    try {

        // Llamado al repositorio para  actualizar el odontólogo
        return await  odontologoRepository.updateOdontologo(data,id);
        
    } catch (error) {
        throw new Error("Error al actualizar el odontólogo");        
    }
}

// Servicio para eliminar un odontólogo
exports.deleteOdontologo = async (id) => {
    try {
        
        //  Llamado al repositorio para eliminar el odontólogo
        return await  odontologoRepository.deleteOdontologo(id);
        
    } catch (error) {
        throw new Error("Error al eliminar el odontólogo");        
    }
}