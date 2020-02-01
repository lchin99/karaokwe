const { Model, DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

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

module.exports = Group;