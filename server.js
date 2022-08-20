const express = require('express')
const { seed, movies, users, movieswatched} = require('./models')
const app = express(); 

app.use(express.json())

app.get('/movies', async (req, res) => {
    const data = await movies.findAll()
    res.send(data)
})

app.get('/movies/:id', async (req, res) => {
    const data = await movies.findByPk(req.params.id)

    if (!data) {
        res.status(404).send(`Sorry! No movies with id ${req.params.id}`)
        return
    }
    res.send(data)
})

// delete a movie

app.delete('/movies/:id', async (req, res) => {
    const deleted = await movies.destroy({
        where: { id: req.params.id }
    })

if(!deleted) {
    res.status(404).send(`No movies with id ${req.params.id}`)
    return
}

await logTable(movies)
    res.status(202).send(`Movie with id ${req.params.id} was deleted.`)
})


// create a new movie

app.post('/movies', async (req, res) => {
    try {
        await movies.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        res.status(400).send(error.errors)
    }
    await logTable(movies)
})

// update a movie by id

app.put('/movies/:id', async (req, res) =>{
    const moviesToUpdate = await movies.findByPk(req.params.id)

    if (!moviesToUpdate) {
        res.sendStatus(404)
        return
    }

    try {
        await moviesToUpdate.update(req.body)
        res.sendStatus(200)
    }   catch (error) {
        res.status(400).send(error.errors)
    }

    await logTable(movies)
})


// -----------USERS------------

app.get('/users', async (req, res) => {
    const data = await users.findAll()
    res.send(data)
})

app.get('/users/:id', async (req, res) => {
    const data = await users.findByPk(req.params.id)

    if (!data) {
        res.status(404).send(`No users with id ${req.params.id}`)
        return
    }
    res.send(data)
})

app.get('/users/:id/movieswatched', async (req, res) => {
    const data = await movieswatched.findByPk(req.params.id)

    if (!data) {
        res.status(404).send(`This user has seen no movies yet`)
        return
    }
    res.send(data)
})

// watch a movie (IE add a movie to movies watched)


// delete a user

app.delete('/users/:id', async (req, res) => {
    const deleted = await users.destroy({
        where: { id: req.params.id }
    })

if(!deleted) {
    res.status(404).send(`No users with id ${req.params.id}`)
    return
}

await logTable(users)
    res.status(202).send(`User with id ${req.params.id} was deleted.`)
})


// create a new movie

app.post('/users', async (req, res) => {
    try {
        await users.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        res.status(400).send(error.errors)
    }
    await logTable(users)
})

// update a movie by id

app.put('/users/:id', async (req, res) =>{
    const usersToUpdate = await users.findByPk(req.params.id)

    if (!usersToUpdate) {
        res.sendStatus(404)
        return
    }

    try {
        await usersToUpdate.update(req.body)
        res.sendStatus(200)
    }   catch (error) {
        res.status(400).send(error.errors)
    }

    await logTable(users)
})

async function main () {
    await seed()

    const PORT = 3000
    app.listen(PORT, () => { console.log(`Listening on port ${PORT}.`)})

}

main()