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

    user_interested:{
      type:DataTypes.STRING,
      allowNull: false,
      defaultValue:'no',
      validate: {
        isIn: [['yes', 'no']],
      }
    },
      resident_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'resident',
          key: 'resident_id',
          key: 'resident_id'
        },

      }
    },
    /*,
      resident_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'resident',
          key: 'resident_id',
        },
      }*/
 
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usercomment',
  }
  );

module.exports = Usercomment;
