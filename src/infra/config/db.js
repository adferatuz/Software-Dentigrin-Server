// Cargar dotenv solo si no es producción
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.NODE_ENV === 'production') {
  // Configuración para entorno de producción usando variables de entorno
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      logging: false,
    }
  );
} else {
  // Configuración para desarrollo usando config.json
  const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
      logging: false,
    }
  );
}

module.exports = sequelize;
