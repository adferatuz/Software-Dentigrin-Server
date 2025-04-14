const Administrador = require('@models/administrador/administrador');
const { validateAdministrador, validateAdministradorId } = require('@validations/administradorValidation');

class AdministradorRepository {

    //Metodo para obtener un  administrador por id
    static async getAdministrador (id){
        
        //Validaciones de entrada de datos
        const {error} = validateAdministradorId(id);
        if(error){
            return res.status(400).json({ message: error.details[0].message });
        }

        // Se devuelve un administrador de la base de datos
        return await Administrador.findOne({
            where: { id_usuario: id }
        });

    }

    //Metodo  para obtener todos los administradores
    static async getAllAdministradores (){

        // Se devuelve todos los administradores de la base de datos
        return await Administrador.findAll();

    }

    //Metodo  para crear un administrador
    static async createAdministrador (data) {

        // Validaciones de entrada de datos
        const { error } = validateAdministrador(data);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        //  Se crea un administrador en la base de datos
        const administrador = await Administrador.create(data);

        //  Se devuelve el id del administrador creado
        return  administrador.id;

    }

    //Metodo para  actualizar un administrador
    static async updateAdministrador (id, data) {

        // validacion de datos que llegan
        const { error } = validateAdministrador(data);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Actualizar un  administrador en la base de datos
        await Administrador.update(data, {
            where: { id: id }
        });
        
        // Se devuelve el administrador actualizado
        return await this.getAdministrador(id);

    }

    //Metodo  para eliminar un administrador
    static async deleteAdministrador (id) {

        // validacion de los datos  que llegan
        const {error} =  validateAdministradorId(id);
        if (error) {
            throw new Error("Error ");            
        }

        //  Eliminar un administrador de la base de datos
        const administrador = await Administrador.destroy({ where : { id: id } });

        // devolver  el administrador eliminado
        return administrador;

    }

}

module.exports = AdministradorRepository;