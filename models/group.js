const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql2');

class Group extends Model { }
Group.init({
  id_group: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  external_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'group'
})