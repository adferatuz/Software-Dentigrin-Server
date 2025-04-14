const contactoRepository = require('@repository/contactoRepository');

exports.getContactos = async (data) => {

    //Llamado a la capa repositorio
    const contactos = await contactoRepository.getContactos();

    //Retornamos  la respuesta
    return contactos;

}

//Funcion para crear un registro de contacto
exports.createContacto = async (data) => {

    //Llamado a la capa repositorio
    const registro = await contactoRepository.createContacto(data);

    //Retorno  de la respuesta
    return  registro;

}
