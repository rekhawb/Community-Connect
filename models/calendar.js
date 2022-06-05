const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Calendar extends Model {}

Calendar.init({},
    {
        sequelize,
        freezeTableName: true,
        tableName: 'time_dimension',
        underscored: true,
        modelName: 'time_dimension',
      }
    );

    module.exports = Calendar;