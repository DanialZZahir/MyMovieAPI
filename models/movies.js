const db = require('../db')
const { DataTypes } = require('sequelize')

const movies = db.define('Movies', {
    MovieName: {
        type: DataTypes.STRING
    },
    Duration: {
        type: DataTypes.STRING
    },
    Genre: {
        type: DataTypes.STRING
    },
    ReleaseDate: {
        type: DataTypes.STRING,
        type: DataTypes.INTEGER
    }
})

module.exports = movies