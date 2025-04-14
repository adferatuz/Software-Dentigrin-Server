const Odontologo = require('@models/odontologo/odontologo');
const {validateOdontologo, validateOdontologoId} = require('@validations/odontologoValidation')

class OdontologoRepository {

    // Obtener todos los odontólogos
    static async getAllOdontologos(){
        return await Odontologo.findAll();
    }

    // crear el registro de el perfil odontologo
    static async createOdontologo(data){

        //Llamado a la validacion de datos que llegan desde el servidor.
        const { error } = validateOdontologo(data);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        //  Crear un nuevo odontólogo
        return  await Odontologo.create(data);

    }

    // Obtener un odontólogo por id
    static async getOdontologo(id) {

        //Llamado a la validacion de datos que llegan desde el servidor.
        const { error } = validateOdontologoId(id);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        //Obtener un odontólogo por id
        return await Odontologo.findByPk(id);

    }

    // Obtener odontologo por esppecialidad
    static async getEspecialty(data) {
        console.log(data)
        return await Odontologo.findOne({
            where: {
                especializacion: data.especializacion
            }
        })
    }

    // Actualizar un odontólogo
    static async updateOdontologo(data,id){

        //Llamado a la validacion de datos que llegan desde el servidor.
        const { error } = validateOdontologoId(id);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        //   Actualizar un odontólogo
        const [updated] = await Odontologo.update(data, {
            where: { id: id }
          });
        
        // Si se actualizó el odontologo
        if(updated){
            return await Odontologo.findByPk(id);

        //  Si no se actualizó el odontologo
        }else{
            return res.status(400).json({ message: "No se pudo actualizar el odontólogo"});
        }

    }

    // Eliminar el regisrto de un odontologo
    static async deleteOdontologo(id) {

        //Llamado a la validacion de datos que llegan desde el servidor.
        const { error } = validateOdontologoId(id);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        //  Eliminar el registro de un odontólogo
        const odontologo = await Odontologo.destroy({
            where: { id: id }
        });

        // Si se elimina un registro en la base de datos,
        // se asigna un 1 a la varible odontologo,
        // si no se elimina, se asigna un 0
        return odontologo;
    }
}

module.exports = OdontologoRepository;