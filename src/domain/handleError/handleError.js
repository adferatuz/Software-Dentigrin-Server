const {
    DatabaseError,
    ValidationError,
    UniqueConstraintError,
    ForeignKeyConstraintError,
    ConnectionError
  } = require('sequelize');
  
  //Funcion para manejar errores de la base de datos
  exports.safeQuery = async function (promise) {
    try {
      const result = await promise;

      if (result === null) {
        return await {
          message: 'No se encontró el recurso solicitado',
          statusCode: 0,
          errors: 'Respuesta nula',
          success: false,
          data: result, 
          errorType: 'Valor de la consulta nula'
        };
      }else{
        return await {
          data: result, 
          success: true,
          statusCode: 0,
          message: 'Consulta exitosa',
          errors: false,
          errorType: 'No hay error'          
        };
      }
    } catch (error) {
      const errorMap = [
        { type: ValidationError, message: 'Error de validación', detailKey: 'errors' },
        { type: UniqueConstraintError, message: 'Violación de unicidad', detailKey: 'errors' },
        { type: ForeignKeyConstraintError, message: 'Error de clave foránea', detailKey: 'message' },
        { type: ConnectionError, message: 'No se pudo conectar a la base de datos', detailKey: 'message' },
        { type: DatabaseError, message: 'Error interno en la base de datos', detailKey: 'message' }
      ];
  
      for (const { type, message, detailKey } of errorMap) {
        if (error instanceof type) {
          return await {
                        data: null,
                        statusCode: 0,
                        errorType: type.name,
                        message,
                        errors: error[detailKey],
                        success: false
                      };
          
        }
      }
  
      console.error('Error desconocido:', error);
      return await { 
               errorType: 'Tipo de error desconocido', 
               message: 'Error interno del servidor', 
               errors: error.message, 
               success: false ,
               data: null,
               statusCode: 0
            };
    }
  };


  
  