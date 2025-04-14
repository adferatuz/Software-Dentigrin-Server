const { SECRET_JWT_KEY } = require('@config/config.js');
const userService = require('./userService');
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {
  try {

      //Llamada al servicio para crear un nuevo usuario
      const nuevoUsuario = await userService.createUser(req.body)

      //Si el usuario se creo correctamente, se devuelve un mensaje de exito
      res.status(201).json(nuevoUsuario);

    } catch (error) {
      //Si hay un error en la creacion del usuario, se devuelve un mensaje de error
      res.status(400).json({ message: error.message });
    }
}

exports.initLoguin = async(req, res) => {
    try {

        //Llamado al servicio para  iniciar sesion
        const user = await userService.initLoguin(req.body);

        //Generando el token de inicio de sesion con jwt
        const token = jwt.sign(
          { id: user.id_usuario, email: user.email, rol: user.rol }, 
          SECRET_JWT_KEY,
          {expiresIn: '1h'});

        //Respuesta http  con el usuario logueado
        res
          .cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 *  60, // 1 hour
          })
          .status(200)
          .json({user, token});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.logout = async(req, res) => {
    try {
        res
        .clearCookie('access_token')
        .status(200)
        .json({ message: 'Se cerro la sesión exitosamente' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.protected = async(req, res) => {
    try {
        const {user} = req.session

        if(!user) return res.status(403).send('Acceso no autorizado');

        res.status(200).json({message: 'Acceso autorizado', user});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}