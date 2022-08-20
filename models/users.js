const db = require('../db')
const { DataTypes } = require('sequelize')

const users = db.define('Users', {
    Name: {
        type: DataTypes.STRING
    },
    Age: {
        type: DataTypes.INTEGER
    }
})

module.exports = users