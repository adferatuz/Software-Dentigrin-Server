const Joi = require('joi');

const historiaClinicaSchema = Joi.object({
  id: Joi.string()/*.required()*/,
  id_paciente: Joi.string()/*.required()*/,
  fechaConsulta: Joi.string()/*.required()*/,
  diagnostico: Joi.string()/*.required()*/,
  tratamientos: Joi.string()/*.required()*/
});

const idHistoriaClinicaSchema = Joi.string().required();

exports.validateHistoriaClinica = (data) => historiaClinicaSchema.validate(data);
exports.validateHistoriaClinicaId = (id) => idHistoriaClinicaSchema.validate(id);