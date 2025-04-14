const { DataTypes} = require('sequelize');
const sequelize = require('@config/db');
const bcrypt =  require('bcrypt');
const {SALT_ROUNDS} = require('@config/config')

const Usuario = sequelize.define('usuarios', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:  DataTypes.UUIDV4,
            field: 'id_usuario',
            comment: 'Este es un nombre de columna que contiene la llave primaria'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'username',
            comment: 'Este es un nombre de columna que contiene los alias'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field : 'email',
            unique : true,
            comment: 'Este es un nombre de columna que contiene el correo electronico'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field : 'contraseña',
            comment: 'Este es un nombre de columna que contiene la contraseña'
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false,
            field : 'rol',
            comment: 'Este es un nombre de columna que contiene los roles'
        }
    }, 
    {
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
        hooks:{
            // Hook para encriptar la contraseña antes de crear o actualizar el usuario
            beforeSave: async (usuario) => {
                if(usuario.password){
                    usuario.password = await bcrypt.hash(usuario.password, SALT_ROUNDS);
                }
            }
        }
    }
);

module.exports = Usuario;