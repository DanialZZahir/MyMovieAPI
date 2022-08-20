const {seed, movies, users, movieswatched} = require('../models') 
const { logTable } = require('sequelize-logger') 


async function test () {
    await seed() 
    await logTable(movies)

}

async function test () {
    await seed() 
    await logTable(users)

}

async function test () {
    await seed() 
    await logTable(movieswatched)

}

test()