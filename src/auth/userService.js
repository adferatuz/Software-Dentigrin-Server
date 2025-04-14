const userRepository = require('./userRepository');

//Funcion para crear  un nuevo usuario
exports.createUser = async (data) => {
    try {
       
        //validar si ya  existe un usuario con el mismo username
        const user = await userRepository.create(data);

        // devolver el  usuario creado
        return user;

    } catch (error) {

        //  Manejar la excepción
        throw new Error(`Error al crear el usuario: ${error.message}`);          
    }
}

//Funcion para iniciar sesion
exports.initLoguin = async (data) => {

    //Llamado al repositorio  para iniciar sesion
    const user = await userRepository.login(data);

    //retorno del usuario logueado
    return user;
}