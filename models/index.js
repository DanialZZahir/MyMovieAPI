const db = require('../db')
const users = require('./users')
const movies = require('./movies')
const movieswatched = require('./movieswatched')

//seeding movies
// async function seed(){

//     await db.sync({force: true})

    // await movies.create({MovieName: 'Movie 1', Genre: 'Action', Duration: '1 hour', ReleaseDate:'19.02.15'})
    // await movies.create({MovieName: 'Movie 2', Genre: 'Horror', Duration: '4 hour', ReleaseDate:'22.05.10'})
    // await movies.create({MovieName: 'Movie 3', Genre: 'Comedy', Duration: '3 hour', ReleaseDate:'01.01.18'})
// }

// seeding users
async function seed(){

    await db.sync({force: true})

    await users.create({Name: 'Gavin', Age: '23'})
    await users.create({Name: 'Gary', Age: '57'})
    await users.create({Name: 'Gabriel', Age: '38'})

    await movies.create({MovieName: 'Movie 1', Genre: 'Action', Duration: '1 hour', ReleaseDate:'19.02.15'})
    await movies.create({MovieName: 'Movie 2', Genre: 'Horror', Duration: '4 hour', ReleaseDate:'22.05.10'})
    await movies.create({MovieName: 'Movie 3', Genre: 'Comedy', Duration: '3 hour', ReleaseDate:'01.01.18'})

    await movieswatched.create({MovieName: 'Movie 4', Genre: 'Drama', Duration: '2 hour', ReleaseDate:'06.03.13'})
}

module.exports = { seed, users, movies, movieswatched}