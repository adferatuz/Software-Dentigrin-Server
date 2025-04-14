const administradorRepository = require('@repository/administradorRepository');

// Obtener  un administrador por su id
exports.getAdministrador = async (id) =>{
    return await administradorRepository.getAdministrador(id);
}

//  Obtener todos los administradores
exports.getAllAdministradores = async () =>{
    return await administradorRepository.getAllAdministradores();
}

// Crear  un administrador
exports.createAdministrador = async (data) =>{

    // Llamado al repositorio para  crear un administrador
    return await administradorRepository.createAdministrador(data);
    
}

//  Actualizar un administrador
exports.updateAdministrador = async (id, data) =>{

    // Llamado al repositorio para  actualizar el administrador
    return await administradorRepository.updateAdministrador(id, data);

}

//   Eliminar un administrador
exports.deleteAdministrador = async (id) =>{

    //  Llamado al repositorio para eliminar el administrador
    return await administradorRepository.deleteAdministrador(id);

}

