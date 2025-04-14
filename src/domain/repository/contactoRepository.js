const Contacto = require('@models/contacto/contacto');
const {validateContacto, validateContactoId} = require('@validations/contactoValidation');

class ContactoRepository {

    //Metodo para obtener todos los registros de contactos
    static async getContactos (){

        //Llamado a la base de datos para obtener  los datos de contactos
        const contactos = await Contacto.findAll();

        //Si hay registro de contactos para devolver
        if(contactos){
            return contactos;
        }else{
            throw new Error("En el momento no ahi registros en la base de datos");            
        }

    }

    //Metodo para crear un registro  de contacto
    static async createContacto (data) {

        //Llamado a las validaciones  para verificar si los datos son correctos
        const {error} = validateContacto(data);
        if(error){
            throw new Error(error.details[0].message);
        }

        //Llamado  a la base de datos para crear un nuevo registro de contacto
        const contacto = await Contacto.create(data);

        //Si se crea correctamente el registro en la base de datos
        if(contacto){
            return contacto.id;
        }else{
            throw new Error("No se pudo crear el registro en la base de datos");
        }
    }


}

module.exports =  ContactoRepository;
