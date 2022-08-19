const db = require('../db')
const { DataTypes } = require('sequelize')

const Users = db.define('Users', {
    Name: {
        type: DataTypes.STRING
    },
    Age: {
        type: DataTypes.INTEGER
    }
})

module.exports = Users