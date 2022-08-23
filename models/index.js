const db = require('../db')
const users = require('./users')
const movies = require('./movies')

const { db } = require('../db')
const { movies, seedMovies } = require('./movies')
const { User, seedUser } = require('./users')


users.belongsToMany(movies, { through: 'user_movies' })
movies.belongsToMany(users, { through: 'user_movies' })


async function seed() {
    
    await db.sync({ force: true })
    
    await seedFilm()
    await seedUser()
}


module.exports = { seed, users, movies}