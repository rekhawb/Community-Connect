const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_dimension', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    db_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: "td_dbdate_idx"
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quarter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    week: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day_name: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    month_name: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    holiday_flag: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "f"
    },
    weekend_flag: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "f"
    },
    event: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'time_dimension',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "td_ymd_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "year" },
          { name: "month" },
          { name: "day" },
        ]
      },
      {
        name: "td_dbdate_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "db_date" },
        ]
      },
    ]
  });
};



