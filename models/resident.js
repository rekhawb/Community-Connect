const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/;

class Resident extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }


}

Resident.init(
  {
    resident_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,

    },


    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validator: function (v) {
          return phoneValidationRegex.test(v);
        },
      }
    },
    isAdmin: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "No",
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'resident',
  }
);

module.exports = Resident;
