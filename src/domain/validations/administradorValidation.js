const Joi = require('joi');

const administradorSchema = Joi.object({
  id_usuario: Joi.string()/*.required()*/,
  nombre: Joi.string()/*.required()*/,
  apellido: Joi.string()/*.required()*/,
  numeroContacto: Joi.string()/*.required()*/,
});

const idAdministradorSchema = Joi.string().required();

exports.validateAdministrador = (data) => administradorSchema.validate(data);
exports.validateAdministradorId = (id) => idAdministradorSchema.validate(id);