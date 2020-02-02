const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class Language extends Model { }
Language.init({
  language_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  language_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'language'
})

module.exports = Language;