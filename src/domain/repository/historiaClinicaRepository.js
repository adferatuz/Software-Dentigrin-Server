const HistoriaClinica = require('@models/historia-clinica/historiaClinica');
const {validateHistoriaClinica, validateHistoriaClinicaId} = require('@validations/historiaClinicaValidations');

class HistoriaClinicaRepository {
    
    //Metodo para obtener todos los registros de un  paciente por la llave foranea
    static async getHistoriaClinicaByIdPaciente(data){
        
        //Llamado a las validaciones de datos
        const {error} = validateHistoriaClinica(data);
        if(error){
            throw new Error(error.details[0].message);
        }

        //Busqueda en la  base de datos
        const registros= await HistoriaClinica.findAll({where: {id_paciente : data.id_paciente}})

        //Si se encuentran registros en la base de datos
        if(registros){
            const respuesta = await registros.map( (registro) => {
                return {
                    id: registro.id,
                    diagnostico : registro.diagnostico,
                    tratamientos :  registro.tratamientos
                }
            })
            return  respuesta;
        }else{
            throw new Error("No ahi registros del usuario en la base de datos");
            
        }

    }

    //Metodo para crear un registro  de historia clinica
    static async createHistoriaClinica(data){

        //Llamado al metodo para validacion de datos
        const {error} = validateHistoriaClinica(data);
        if(error){
            throw new Error(error.details[0].message);
        }

        //Llamado a la  base de datos para crear un nuevo registro
        const registro = await HistoriaClinica.create(data);

        if(registro){
            return registro.id;
        }else{
            throw new Error("No se pudo crear el registro en la base de datos");
        }

    }

    //Metodo para  actualizar un registro de historia clinica
    static async updateHistoriaClinica(data){

        //Llamado a las validaciones
        const {error} = validateHistoriaClinica(data);
        if(error){
            throw new Error(error.details[0].message);
        }

        // Llamado a la base de datos para actualizar el registro
        const registro = await HistoriaClinica.update(data, {where: {id: data.id}});

        //Si se actualiza el registro
        if(registro){
            const registro = await HistoriaClinica.findByPk(data.id);
            const registroActualizado = {
                id: registro.id,
                diagnostico : registro.diagnostico,
                tratamientos : registro.tratamientos
            }
            return  registroActualizado;

        }else{
            throw new Error("No se pudo actualizar el registro en la base de datos");
        }

    }

    //Metodo para  eliminar un registro de historia clinica
    static async deleteHistoriaClinica(data){

        //Llamado a las validaciones de datos
        const {error} =  validateHistoriaClinica(data);
        if(error){
            throw new Error(error.details[0].message);
        }

        //Llamado a la base de datos para eliminar el registro
        const registro = await HistoriaClinica.destroy({where: {id: data.id}});

        //Si se elimino el registro
        if(registro){
            return (`El Registro de historia clinica con el id: ${data.id} a sido eliminado con exito de la base de datos.`);
        }else{
            throw new Error("No se pudo eliminar el registro de la base de datos");
        }

    }
}

module.exports = HistoriaClinicaRepository;