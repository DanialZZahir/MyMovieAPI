const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    Storage: ':memory',
    logging: false
})

module.exports = db 