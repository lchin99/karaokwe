const { Model, DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

class Group extends Model { }
Group.init({
  group_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  external_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  group_preferences: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'group',
  timestamps: false
})

module.exports = Group;