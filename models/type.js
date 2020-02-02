const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class Type extends Model { }
Type.init({
  type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'type'
})

module.exports = Type;