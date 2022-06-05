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
      item_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'item',
          key: 'item_id',
        },
      },
      pick_up:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "No",
      },
      pick_up_dt:{
          type:DataTypes.DATEONLY,
          allowNull: true,
          defaultValue: "1900-01-01",

      },
      pick_up_loc:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: "N/A",

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
