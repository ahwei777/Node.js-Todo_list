'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todos.init({
    to_do_id: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    reserved_time: DataTypes.STRING,
    modified_time: DataTypes.STRING,
    brief: DataTypes.STRING,
    level: DataTypes.INTEGER,
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Todos',
  });
  return Todos;
};