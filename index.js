require('module-alias/register');

const sequelize = require('@config/db');
const app = require('./app.js')
const { PORT } = require('@config/config.js');

sequelize.authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
    return sequelize.sync(/*{force: true}*/);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.log('Error al sincronizar la base de datos: ', err);
  });