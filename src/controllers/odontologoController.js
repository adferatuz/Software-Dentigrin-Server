const odontologoService = require('@services/odontologoService');

//Obtener todos los odontologos
exports.getOdontologos = async (req, res) => {
  try {

    // obtener el usuario autorizado para esta accion
    const { user } = req.session;
    //Validar que el usuario tenga permisos para realizar esta accion
    if (user.rol !== 'admin') return res.status(403).send('Acceso no autorizado');

    //Servicio  para obtener todos los odontologos
    const odontologos = await odontologoService.getOdontologos();

    // Si hay odontologos
    if (odontologos) {
      res.status(200).json(odontologos);

      // Si no hay odontologos
    } else {
      // Lanza una respuesta http 204 que significa no-content
      res.status(204).json({ message: 'Aun no ahi Odontologos' });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear un nuevo Odontologo
exports.createOdontologo = async (req, res) => {
    try {

      // obtener el usuario autorizado para esta accion
      const { user } = req.session;
      //Validar que el usuario tenga permisos para realizar esta accion
      if (!user) return res.status(403).send('Acceso no autorizado');

      //Llamado al servicio  para crear un nuevo odontologo
      const nuevoOdontologo = await odontologoService.createOdontologo(req.body);

      // Si se creo el odontologo
      res.status(201).json(nuevoOdontologo);

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

//Obtener  un odontologo por id
exports.getOdontologoById = async (req, res) => {
  try {

    // obtener el usuario autorizado para esta accion
    const { user } = req.session;
    //Validar que el usuario tenga permisos para realizar esta accion
    if (!user) return res.status(403).send('Acceso no autorizado');
    
    //Llamado  al servicio  para obtener un odontologo por id
    const odontologo = await odontologoService.getOdontologoById(req.params.id);
    
    if(odontologo){
      res.status(200).json(odontologo);
    } else{
      // Lanza una respuesta http 204 que significa no-content
      res.status(204).json({ message: 'Aun no ahi Odontologos'});
    }
    
  } catch (error) {
    res.status(400).json({ message: error.message });    
  }
}

// Obtener Odontologo por especialidad
exports.getEspecialty = async (req, res) => {
  try {

    // obtener el usuario autorizado para esta accion
    const { user } = req.session;
    //Validar que el usuario tenga permisos para realizar esta accion
    if (!user) return res.status(403).send('Acceso no autorizado');

    //Llamado al servicio para obtener un odontologo por especialidad
    const odontologo = await odontologoService.getEspecialty(req.body);

    // Respuesta al lado del cliente
    if(odontologo){
      res.status(200).json(odontologo);
    } else{
      res.status(404).json({ message: 'No se encontro el odontologo' });
    }
    
  } catch (error) {
    res.status(400).json({ message: error.message });
    
  }
}

//Actualizar  un odontologo
exports.updateOdontologo  = async (req, res) => {
  try {

    // obtener el usuario autorizado para esta accion
    const { user } = req.session;
    //Validar que el usuario tenga permisos para realizar esta accion
    if (!user) return res.status(403).send('Acceso no autorizado');

    // Llamado al servicio para actualizar un odontologo
    const actualizado = await odontologoService.updateOdontologo( req.body,req.params.id);

    // Respuesta al lado del cliente
    res.status(200).json(actualizado);
    
  } catch (error) {
    res.status(400).json({ message: error.message });    
  }
}

//Eliminar un odontologo
exports.deleteOdontologo = async (req, res) => {
  try {  
    
    // obtener el usuario autorizado para esta accion
    const { user } = req.session;
    //Validar que el usuario tenga permisos para realizar esta accion
    if (user.rol !== 'admin') return res.status(403).send('Acceso no autorizado');

    //Llamado al servicio para eliminar un odontologo
    const odontologoElimindado =  await odontologoService.deleteOdontologo(req.params.id);

    // Respuesta al lado del cliente
    if(odontologoElimindado){
      res.status(200).json({ message: 'Odontologo eliminado con exito' });
    }  else{
      res.status(204).json({ message: 'No se encontro el odontologo' });
    }
    
  } catch (error) {
    res.status(400).json({ message: error.message });
    
  }
}