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

const seedMovies = [
    {
        name: 'Godfather',
        genre: 'Crime, Drama',
        box_office: 250000000,
        rating: 9.2
    },

    {
        name: 'Godfather II',
        genre: 'Crime, Drama',
        box_office: 250000000,
        rating: 9.0
    },

    {
        name: 'American History X',
        genre: 'Crime, Drama',
        box_office: 23900000,
        rating: 8.5
    },

    {
        name: 'The Untouchables',
        genre: 'Crime, Drama',
        box_office: 106200000,
        rating: 7.9
    }
]
 
async function seedMovies () {
    for (let movie of seedMovies) {
        await movies.create(film)
    }
}

module.exports = {movies, seedMovies}