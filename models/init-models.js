var DataTypes = require("sequelize").DataTypes;
var _time_dimension = require("./time_dimension");

function initModels(sequelize) {
  var time_dimension = _time_dimension(sequelize, DataTypes);


  return {
    time_dimension,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
