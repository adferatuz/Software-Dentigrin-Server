const pacienteService = require('@services/pacienteService');

//Obtener todos los pacientes
exports.getPacientes = async (req, res) => {
  try {
    const {user} = req.session;

    if(user.rol !== 'admin') return res.status(403).send('Acceso no autorizado');

    //Llamada al servicio para crear un nuevo paciente
    const pacientes = await pacienteService.getPacientes();

    if (pacientes) {
      res.json(pacientes);
    } else {
      // Lanza una respuesta http 204 que significa no-content
      res.status(204).json({ message: 'Aun no ahi pacientes' });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un paciente por ID
exports.getPacienteById = async (req, res) => {
  try {

    const {user} = req.session;

    if(!user) return res.status(403).send('Acceso no autorizado');

    //Llamada al servicio para buscar un paciente por id.
    const paciente = await pacienteService.getPacienteById(req.params.id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo paciente
exports.createPaciente = async (req, res) => {
  try {

    const {user} = req.session;

    if(user.rol === 'odontologo') return res.status(403).send('Acceso no autorizado');

    //Llamada al servicio para crear un nuevo paciente
    const nuevoPaciente = await pacienteService.createPaciente(req.body);

    //Respuesta al lado del cliente
    res.status(201).json(nuevoPaciente);

  } catch (error) {

    //Manejador de errores
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un paciente
exports.updatePaciente = async (req, res) => {
  try {

    const {user} = req.session;

    if(user.rol === 'odontologo') return res.status(403).send('Acceso no autorizado');

    //Llamada al servicio para actualizar un paciente
    const actualizado = await pacienteService.updatePaciente(req.body, req.params.id);

    //Respuesta al lado del cliente
    res.status(200).json(actualizado);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un paciente
exports.deletePaciente = async (req, res) => {
  try {

    const {user} = req.session;

    if(user.rol !== 'admin') return res.status(403).send('Acceso no autorizado');

    //Llamada al servicio para eliminar un paciente
    const deleted = await pacienteService.deletePaciente(req.params.id);

    //Respuesta al lado del cliente; si deleted es 1 el paciente se ha eliminado
    if (deleted) {
      res.status(204).json({ message: 'Paciente eliminado' });

      //Si deleted es 0 no se elimina el paciente
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Obtener el paciente por tipo de identificacion y numero de identificacion
exports.getPacienteByIdentification = async (req, res) => {
  try {

    const {user} = req.session;

    if(user.rol === 'paciente') return res.status(403).send('Acceso no autorizado');

    // Llamada al servicio para obtener el paciente por tipo de identificacion y numero de identificacion
    const paciente = await pacienteService.getPacienteByIdentification(req.body);

    // Respuesta al lado del cliente
    res.status(200).json(paciente);
    
  } catch (error) {
    res.status(400).json({ message: error.message });
    
  }
}