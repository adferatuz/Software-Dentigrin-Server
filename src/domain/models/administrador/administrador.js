const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');
const Usuario = require('@models/usuario/user');

const Administrador = sequelize.define('administradores', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:  DataTypes.UUIDV4,
            comment: 'Este es un nombre de columna que contiene la llave primaria'
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'nombres',
            comment: 'Este es un nombre de columna que contiene los nombres'
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'apellidos',
            comment: 'Este es un nombre de columna que contiene los apellidos'
        },
        numeroContacto: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'numero_contacto',
            comment: 'Este es un nombre de columna que contiene el numero de contacto'
        }    

    },
    {
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);

Usuario.hasOne(Administrador, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey: 'id_usuario',
    sourceKey: 'id'
});

Administrador.belongsTo(Usuario, { foreignKey: 'id_usuario', targetId: 'id'});

module.exports = Administrador;