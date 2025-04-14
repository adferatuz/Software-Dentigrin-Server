const contactoService = require('@services/contactoService');

//Obtener todas las citas
exports.getContactos = async (req, res) => {
    try {
        
        //Llamado al servicio para  obtener los contactos
        const contactos = await contactoService.getContactos();

        //Respuesta http del lado del cliente
        res.status(200).json(contactos);


    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

//Crear registro  de contacto
exports.createContacto = async (req, res) => {
    try {

        //Llamado  al servicio para crear un contacto
        const contacto = await contactoService.createContacto(req.body);

        //Respuesta http  del lado del cliente
        res.status(201).json(contacto);
        
    } catch (error) {
        res.status(500).json({ message: error.message});        
    } 

}
