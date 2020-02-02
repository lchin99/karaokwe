const { Model, DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

class GroupSong extends Model { }
GroupSong.init({
  group_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  song_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'group_song',
  tableName: 'group_chosen_songs',
  timestamps: false
})

module.exports = GroupSong;