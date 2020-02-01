const { Model, DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

class User extends Model { }
User.init({
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_group: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Group',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
})

module.exports = User;