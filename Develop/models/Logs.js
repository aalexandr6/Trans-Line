const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Logs extends Model {}

Logs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        start_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        starting_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ending_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Logs',
    }
);

module.export = Logs;