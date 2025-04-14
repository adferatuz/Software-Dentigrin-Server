const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');

const Contacto = sequelize.define('contactos', 
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:  DataTypes.UUIDV4,
            comment: 'Este es un nombre de columna que contiene la llave primaria'
        },   
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'direccion',
            comment: 'Este es un nombre de columna que contiene la dirección'
        },
        movil: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'movil',
            comment: 'Este es un nombre de columna que contiene el numero movil'
        },
        whatsapp: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'whatsapp',
            comment: 'Este es un nombre de columna que contiene el whatsapp'
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'email',
            comment: 'Este es un nombre de columna que contiene el email'
        },
        commentarios: {
            type:DataTypes.TEXT,
            allowNull: false,
            field: 'commentarios',
            comment: 'Este es un nombre de columna que contiene los commentarios'
        }
    },
    {
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);
module.exports = Contacto;