const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const song = require('./song');
const language = require('./language');

class HasLanguage extends Model { }
HasLanguage.init({
  song_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: song,
        key: 'song_id',
    },
    unique: 'compositeKey'
  },
  language_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: language,
        key: 'language_id',
    },
    unique: 'compositeKey'
  }
}, {
  sequelize,
  freezeTableName: true,
  tableName: 'has_language',
  underscored: true,
  modelName: 'hasLanguage'
})

module.exports = HasLanguage;