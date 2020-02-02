const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const song = require('./song');
const type = require('./type');

class HasType extends Model { }
HasType.init({
  song_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: song,
        key: 'song_id',
    },
    unique: 'compositeKey'
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: type,
        key: 'type_id',
    },
    unique: 'compositeKey'
  }
}, {
  sequelize,
  underscored: true,
  freezeTableName: true,
  tableName: 'has_type',
  modelName: 'hasType'
})

module.exports = HasType;