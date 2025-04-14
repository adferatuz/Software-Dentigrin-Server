const Joi = require('joi');

const contactoSchema = Joi.object({
  id: Joi.string()/*.required()*/,
  direccion: Joi.string()/*.required()*/,
  movil: Joi.string()/*.required()*/,
  whatsapp: Joi.string()/*.required()*/,
  email: Joi.string()/*.required()*/,
  commentarios: Joi.string()/*.required()*/
});

const idContactoSchema = Joi.string().required();

exports.validateContacto = (data) => contactoSchema.validate(data);
exports.validateContactoId = (id) => idContactoSchema.validate(id);