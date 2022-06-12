const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Participant extends Model {}

Participant.init(
  {
    participant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    resident_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'resident',
          key: 'resident_id',
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'category',
          key: 'category_id',
        },
      },
      category_name:{
        type:DataTypes.STRING,
        },
      item_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'item',
          key: 'item_id',
        }
      },
      item_name:{
      type:DataTypes.STRING,
      },
      donation_dt:{
          type:DataTypes.DATEONLY,
          allowNull: true,
          defaultValue: DataTypes.NOW,

  },
  item_qty:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0,
    validate:{
      isNumeric: true
    }
  }
  },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'participant',
  }
);

module.exports = Participant;
