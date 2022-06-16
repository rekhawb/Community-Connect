const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/;

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
          validator: function (v) {
            return phoneValidationRegex.test(v);
          },
        }
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
