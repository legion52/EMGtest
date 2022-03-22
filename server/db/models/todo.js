'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User, {
        foreignKey: 'userid',
      })
      // define association here
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
