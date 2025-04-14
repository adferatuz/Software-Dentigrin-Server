const Joi = require('joi');

const pacienteSchema = Joi.object({
  id_usuario: Joi.string()/*.required()*/,
  nombre: Joi.string()/*.required()*/,
  apellido: Joi.string()/*.required()*/,
  tipoIdentificacion: Joi.string()/*.required()*/,
  numeroIdentificacion: Joi.string()/*.required()*/,
  edad: Joi.number().integer()/*.required()*/,
  genero: Joi.string().valid('M', 'F')/*.required()*/,
  numeroContacto: Joi.string()/*.required()*/,
  fechaNacimiento: Joi.string()/*.required()*/,
  tipoSangre: Joi.string()/*.required()*/,
  pais: Joi.string()/*.required()*/,
  departamento: Joi.string()/*.required()*/,
  ciudad: Joi.string()/*.required()*/,
  direccionResidencia: Joi.string()/*.required()*/,
});

const idPacienteSchema = Joi.string().required();

exports.validatePaciente = (data) => pacienteSchema.validate(data);
exports.validatePacienteId = (id) => idPacienteSchema.validate(id);
