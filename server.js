const express = require('express')
const { seed, movies, users, movieswatched} = require('./models')
const usersRoute = require('./routes/users');
const moviesRoute = require('./routes/movies');
const app = express(); 

app.use(express.json())
app.use('/users', usersRoute);
app.use('/movies', moviesRoute);


async function main () {
    await seed()

    const PORT = 3000
    app.listen(PORT, () => { console.log(`Listening on port ${PORT}.`)})

}

main()