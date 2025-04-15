//require('dotenv').config();
const { Sequelize } = require('sequelize');

console.log('🔎 DEBUG - CONEXIÓN DB');
console.log('HOST:', process.env.DB_HOST);
console.log('PORT:', process.env.DB_PORT);
console.log('DIALECT:', process.env.DB_DIALECT);


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
  }
);

module.exports = sequelize;
