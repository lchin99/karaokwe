const Sequelize = require('sequelize')

const sequelize = new Sequelize('local', 'root', 'Karaoke123', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize;