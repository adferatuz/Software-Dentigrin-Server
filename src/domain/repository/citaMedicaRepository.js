const Cita = require('@models/cita-medica/citaMedica');
const Odontologo =  require('@models/odontologo/odontologo');
const  Paciente =  require('@models/paciente/paciente');
const {validateCitaMedica, validateCitaMedicaId} = require('@validations/citaMedicaValidations');


class CitaMedicaRepository {

    //metodo para obtener todas las citas medicas que hay en la base de datos.
    static  async getAllCitas() {

        // se utiliza el modelo de cita medica para obtener todas las citas medicas.
        return await Cita.findAll();

    }

    //Metodo para crear un registro de cita odontologica en  la base de datos.
    static async programarCita(data) {

        //Serializacion de datos que llegan del lado del cliente
        const datosCitaMedica = {
            fechaConsulta:  data.fechaConsulta,
            horaConsulta: data.horaConsulta,
            motivo: data.motivo,
            servicio: data.servicio
        }

        //Validacion de datos que llegan del lado del cliente
        const {error} = validateCitaMedica(datosCitaMedica);
        if(error){
            throw new Error(error.details[0].message);           
        }
        
        //busqueda del odontologo para obtener  su id.
        const odontologo = await Odontologo.findOne({
            where: {
                especializacion: data.especializacion
            }
        });

        if(!odontologo){
            throw new Error("El odontologo no existe en la base de datos");
        }

        const nombreOdontologo = `${odontologo.nombre} ${odontologo.apellido}`;

        const datosRegistro = {
            fechaConsulta:  data.fechaConsulta,
            horaConsulta: data.horaConsulta,
            motivo: data.motivo,
            servicio: data.servicio,
            id_odontologo: odontologo.id,
            nombreOdontologo: nombreOdontologo
        }

        //Registro de la cita programada en la base de datos
        const registro = await Cita.create(datosRegistro);

        //  se devuelve el id de la nueva cita odontologica.
        if(registro){
            return registro;
        }else{
            throw new Error("Error al registrar la cita en la base de datos");            
        }
    }

    //Metodo  para eliminar un registro de cita odontologica en la base de datos.
    static async deleteCita(id) {

        //Validamos el tipo de dato entrante
        const {error} = validateCitaMedicaId(id);
        if(error){
            throw new Error(error.details[0].message);
        }

        //Eliminar un registro  de cita odontologica en la base de datos
        const registro = await Cita.destroy({ where: {id}});

        //Si el registro se elimino
        if(registro){
            return `El registro con el id ${id} fue eliminado con exito`
        }else{
            throw new Error("Error al eliminar el registro de cita odontologica");
        }

    }

    //Metodo para obtener las citas disponibles en la base de datos
    static async getCitasActivas() {

        //Obtenemos todas las citas activas de la base de datos
        const citasDisponibles = await Cita.findAll({where: {estado: true}});

        if(citasDisponibles.length === 0){
            return  "No hay citas disponibles";
        }else{
            return citasDisponibles
        }

    }

    //Metodo  para obtener las citas programadas en la base de datos
    static async scheduleDentalAppointment(data) {
        //Validamos el tipo de dato entrante
        const {error} = validateCitaMedica(data);
        if(error){
            throw new Error(error.details[0].message);
        }

        //Obtener la cita programada por el id
        const appointScheduled = await Cita.update(data,{where: {id: data.id}});

        // Si la  cita se programo
        if (appointScheduled === 0) {
            return `La cita con el id ${data.id} fue programada con exito`;            
        }else{
            return `Error al programar la cita con el id ${data.id}`;
        }
    }

    //Metodo para obtener las citas agendadas
    static async setAppointments(data) {

        //Validacion de datos que llegan
        const {error} = validateCitaMedica(data);
        if(error){
            throw new Error(error.details[0].message);
        }

        //Obtener las citas agendadas de la based de datos
        const citasAgendadas = await Cita.findAll({where: {estado: data.estado, id_odontologo: data.id_odontologo}});

        if (citasAgendadas.length === 0) {
            return "No hay citas agendadas";            
        }else{
            return citasAgendadas
        }

    }

}

module.exports = CitaMedicaRepository;