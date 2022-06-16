const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Contact extends Model { }

Contact.init(
  {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
          },
  
      },
   message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },




  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'contact',
  }
);

module.exports = Contact;
