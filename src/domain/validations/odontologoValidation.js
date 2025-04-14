const Joi = require('joi');

const odontologoSchema = Joi.object({
    id_usuario: Joi.string()/*.required()*/,
    nombre: Joi.string()/*.required()*/,
    apellido: Joi.string()/*.required()*/,
    direccionResidencia: Joi.string()/*.required()*/,
    genero: Joi.string().valid('M', 'F')/*.required()*/,
    especializacion: Joi.string()/*.required()*/,
  });

const idOdontologoSchema = Joi.string().required();

exports.validateOdontologo = (data) => odontologoSchema.validate(data);
exports.validateOdontologoId = (id) => idOdontologoSchema.validate(id);