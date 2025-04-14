const {validateUser, validateUserId, validateUsername, validatePassword} = require('./userValidation')
const User = require('@models/usuario/user');
const bcrypt =  require('bcrypt');

class UserRepository {
    static async create (data){

        //Validacion de datos que llegan desde el lado del cliente.
        const { error } = validateUser(data);
        if (error) {
            throw new Error(error.details[0].message);            
        }

        //validar si ya  existe un usuario con el mismo username
        const user = await User.findOne({where: { username: data.username }});
        if (user) {
            throw new Error('El usuario ya existe');
        } 

        //crear un nuevo usuario
        const nuevoUsuario = await User.create(data);

        // devolver el id del usuario creado
        return nuevoUsuario.id;

    }
    static async login ( data){

        //LLamado a las validaciones
        const { error } = validateUser(data);
        if (error) throw new Error(error.details[0].message);

        //Buscar en la base de datos si ya existe el usuario
        const user = await  User.findOne({where: { email: data.email, username:data.username }});

        //si el usuario no existe
        if (!user) throw new Error('El usuario no existe');

        const isValid = await bcrypt.compare(data.password,user.password);

        //Si no es valido el password
        if (!isValid) throw new Error('El password no es correcto');

        return {
            id_usuario: user.id,
            email:  user.email,
            rol :  user.rol
        }
    }
}
module.exports = UserRepository;
