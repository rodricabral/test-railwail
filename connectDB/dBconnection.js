const { Sequelize } = require('sequelize')

const dBconnection = new Sequelize('crud_uade', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = { dBconnection }