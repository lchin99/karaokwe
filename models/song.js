const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class Song extends Model { }
Song.init({
  song_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  song: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
      type: DataTypes.STRING,
      allowNull: false
  },
  year: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  explicit: {
      type: DataTypes.BOOLEAN,
      allowNull: false
  }
}, {
  sequelize,
  modelName: 'song'
})

module.exports = Song;