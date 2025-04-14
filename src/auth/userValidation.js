const Joi = require('joi');

const userSchema = Joi.object({
    id: Joi.string()/*.required()*/,
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}}),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    rol: Joi.string(),/* .required(), */
  });

const idUserSchema = Joi.string().required();
const usernameSchema = Joi.string().required();
const passwordSchema = Joi.string().required();

exports.validateUser = (data) => userSchema.validate(data);
exports.validateUserId = (id) => idUserSchema.validate(id);
exports.validateUsername = (username) => usernameSchema.validate(username);
exports.validatePassword = (password) => passwordSchema.validate(password);