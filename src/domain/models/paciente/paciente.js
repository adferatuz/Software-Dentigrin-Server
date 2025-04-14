const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');
const Usuario = require('@models/usuario/user');

const Paciente = sequelize.define('pacientes', 
    {
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
            field: 'apellido',
            comment: 'Este es un nombre de columna que contiene la llave primaria'
        },
        tipoIdentificacion: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'tipo_de_identificacion',
            comment: 'Este es un nombre de columna que contiene el tipo de identificacion'
        },
        numeroIdentificacion: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'numero_de_identificacion',
            comment: 'Este es un nombre de columna que contiene el numero de identificación'
        },
        edad: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'edad',
            comment: 'Este es un nombre de columna que contiene la edad'
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'genero',
            comment: 'Este es un nombre de columna que contiene el genero del usuario'
        },
        numeroContacto: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'numero_de_contacto',
            comment: 'Este es un nombre de columna que contiene el numero de contacto'
        },
        fechaNacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fecha_de_nacimiento',
            comment: 'Este es un nombre de columna que contiene la fecha de nacimiento'
        },
        tipoSangre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tipo_de_sangre',
            comment: 'Este es un nombre de columna que contiene el tipo de sangre'
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'pais',
            comment: 'Este es un nombre de columna que contiene el pais'
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'departamento',
            comment: 'Este es un nombre de columna que contiene el departamento'
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ciudad',
            comment: 'Este es un nombre de columna que contiene la ciudad'
        },
        direccionResidencia: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'direccion_de_residencia',
            comment: 'Este es un nombre de columna que contiene la dirección de residencia'
        }
    },
    {
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);

Usuario.hasOne(Paciente, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey: 'id_usuario',
    sourceKey: 'id'
});

Paciente.belongsTo(Usuario, { foreignKey: 'id_usuario', targetId: 'id'});

module.exports = Paciente;