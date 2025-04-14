const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');
const Paciente = require('@models/paciente/paciente');

const HistoriaClinica = sequelize.define('historias_clinicas', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:  DataTypes.UUIDV4,
            comment: 'Este es un nombre de columna que contiene la llave primaria'
        },
        fechaConsulta: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fecha_de_consulta',
            comment: 'Este es un nombre de columna que contiene la fecha de la consulta'
        },
        diagnostico: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'diagnostico',
            comment: 'Este es un nombre de columna que contiene el diagnostico'
        },
        tratamientos: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tratamientos',
            comment: 'Este es un nombre de columna que contiene el tratamiento'
        }   

    },
    {
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion'
    }
);

Paciente.hasOne(HistoriaClinica, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey: 'id_paciente',
    sourceKey: 'id'
});

HistoriaClinica.belongsTo(Paciente, { foreignKey: 'id_paciente', targetId: 'id'});

module.exports = HistoriaClinica;