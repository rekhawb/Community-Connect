const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const dateValidationRegex = /\d{4}-\d{2}-\d{2}/ ;

class Eventpost extends Model {}

Eventpost.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      
      event_dt: {
        type: DataTypes.DATEONLY,
        allowNull:false,
        defaultValue: DataTypes.NOW,
        validate: {
          validator: function(v) {
              return dateValidationRegex.test(v); 
          },
        }
    },
      resident_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'resident',
          key: 'resident_id',
        },
      },
   
  },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'eventpost',
  }
);

module.exports = Eventpost;
