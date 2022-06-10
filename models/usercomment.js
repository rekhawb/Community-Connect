const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Usercomment extends Model {}

Usercomment.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
       description: {
        type: DataTypes.STRING,
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'eventpost',
          key: 'post_id',
        }
    },
    
    
      resident_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'resident',
          key: 'resident_id'
        },
      }
    },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usercomment',
  }
  );

module.exports = Usercomment;
