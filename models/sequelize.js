const Sequelize = require('sequelize')

<<<<<<< HEAD
const sequelize = new Sequelize('karaokwe', 'admin', 'password', {
  host: 'karaokwe.cp3gxwnmrzaj.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
})
=======
const sequelize = new Sequelize('local', 'root', 'Karaoke123', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});
>>>>>>> 2958c5934126a168d2fc7d0885249b15ad0339e7

module.exports = sequelize;