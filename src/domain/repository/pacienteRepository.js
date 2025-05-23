const Paciente = require('@models/paciente/paciente');
const { validatePaciente, validatePacienteId } = require('@validations/pacienteValidation');
const { safeQuery } = require('@handleError/handleError');

class PacienteRepository {

  //metodo para obtener todos los pacientes
  static async getAllPacientes() {
    return await Paciente.findAll();
  }

  //metodo para crear un nuevo perfil de paciente
  static async createPaciente(data) {

    //Validacion de datos que llegan desde el lado del cliente.
    const { error } = validatePaciente(data);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    //  Crear un nuevo paciente
    const nuevoPaciente = await Paciente.create(data);

    // devolver el id del paciente creado
    return nuevoPaciente.id;
  }

  //metodo para obtener un paciente por id evaluando su llave foranea; solo usado para cargar datos del
  //paciente al iniciar sesion.
  static async getPaciente(id) {

    //Validacion de datos que llegan desde el lado del cliente.
    const { error } = validatePacienteId(id);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Buscar paciente por su llave foranea id_usuario
    const paciente = await safeQuery(
      Paciente.findOne({
        where: {
          id_usuario: id // Comparar el id proporcionado con el campo id_usuario
        }
      })
    );

    //si existe el paciente
    if (paciente.success === true) {
      return {
        message: ``,
        statusCode: paciente.statusCode,
        error: paciente.errors,
        success: paciente.success,
        data: paciente.data,
        errorType: paciente.errorType
      };
      //si no existe el paciente
    } else {
      return {
        message: paciente.message,
        statusCode: paciente.statusCode,
        error: paciente.errors,
        success: paciente.success,
        data: paciente.data,
        errorType: paciente.errorType
      };
    }
  }

  //metodo para actualizar un paciente
  static async updatePaciente(data, id) {

    //Validacion de datos que llegan desde el lado del cliente.
    const { error } = validatePaciente(data);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    //Buscar paciente por id, si el paciente existe a update se le asigna 1,
    //de lo contrario a update se le asigna 0  
    const [updated] = await Paciente.update(data, {
      where: { id: id }
    });

    //Busqueda del paciente actualizado
    const pacienteActualizado = await this.getPaciente(id);

    //Se retorna el paciente actualizado
    return pacienteActualizado;

  }

  //metodo para eliminar un paciente
  static async deletePaciente(id) {

    //Validacion de datos que llegan desde el lado del cliente.
    const { error } = validatePacienteId(id);
    if (error) {
      return res.status(404).json({ message: error.details[0].message });
    }

    // eliminar un paciente
    const pacienteEliminado = await Paciente.destroy({
      where: { id: id }
    });

    // retornamos 1 si el paciente se elimino y  0 si no se elimino
    return pacienteEliminado;

  }

  //metodo para  buscar un paciente por identificacion
  static async getPacienteByIdentification(data) {

    // Validacion de datos que llegan desde el lado del cliente.
    const { error } = validatePaciente(data)
    if (error) {
      throw new Error("Error  en la validacion de datos", error);
      ;
    }

    //  Buscar paciente por tipo de identificacion y numero de identificacion
    const paciente = await Paciente.findOne({
      where: {
        tipoIdentificacion: data.tipoIdentificacion,
        numeroIdentificacion: data.numeroIdentificacion
      }
    });

    // respuesta si se encuentra resultado en la base de datos
    if (paciente) {
      const respuesta = {
        idPaciente: paciente.id,
        nombre: paciente.nombre,
        apellido: paciente.apellido
      }

      return respuesta;
    } else {
      throw new Error("No se encontro el paciente");
    }
  }

}

module.exports = PacienteRepository;