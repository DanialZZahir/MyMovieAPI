const db = require('../db')
const { DataTypes } = require('sequelize')

const movieswatched = db.define('movieswatched', {
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

module.exports = movieswatched