const Joi = require('joi');

const citaMedicaSchema = Joi.object({
  id: Joi.string()/*.required()*/,
  id_paciente: Joi.string()/*.required()*/,
  id_odontologo: Joi.string()/*.required()*/,
  horaConsulta: Joi.string()/*.required()*/,
  fechaConsulta: Joi.string()/*.required()*/,
  motivo: Joi.string()/*.required()*/,
  servicio: Joi.string()/*.required()*/,
  estado: Joi.boolean()/*.required()*/
});

const idCitaMedicaSchema = Joi.string().required();

exports.validateCitaMedica = (data) => citaMedicaSchema.validate(data);
exports.validateCitaMedicaId = (id) => idCitaMedicaSchema.validate(id);