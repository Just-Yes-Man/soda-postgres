'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Refresco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Refresco.init({
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING,
    tipo: DataTypes.STRING,
    sabor: DataTypes.STRING,
    tamano: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Refresco',
  });
  return Refresco;
};