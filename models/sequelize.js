const Sequelize = require('sequelize')

const sequelize = new Sequelize('karaokwe', 'admin', 'password', {
  host: 'karaokwe.cp3gxwnmrzaj.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
})

module.exports = sequelize;