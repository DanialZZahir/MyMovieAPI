const db = require('../db')
const users = require('./users')
const movies = require('./movies')

//seeding
async function seed(){

    await db.sync({force: true})

    await movies.create({MovieName: 'Movie 1', Genre: 'Action', Duration: '1 hour', ReleaseDate:'19.02.15'})
    await movies.create({MovieName: 'Movie 2', Genre: 'Horror', Duration: '4 hour', ReleaseDate:'22.05.10'})
    await movies.create({MovieName: 'Movie 3', Genre: 'Comedy', Duration: '3 hour', ReleaseDate:'01.01.18'})
}

module.exports = { seed, movies }