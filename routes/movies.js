const express = require('express')
const router = express.Router();

router.get('/movies', async (req, res) => {
    const data = await movies.findAll()
    res.send(data)
})

router.get('/movies/:id', async (req, res) => {
    const data = await movies.findByPk(req.params.id)

    if (!data) {
        res.status(404).send(`Sorry! No movies with id ${req.params.id}`)
        return
    }
    res.send(data)
})

// delete a movie

router.delete('/movies/:id', async (req, res) => {
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

router.post('/movies', async (req, res) => {
    try {
        await movies.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        res.status(400).send(error.errors)
    }
    await logTable(movies)
})

// update a movie by id

router.put('/movies/:id', async (req, res) =>{
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

async function main () {
    await seed()

    const PORT = 3000
    app.listen(PORT, () => { console.log(`Listening on port ${PORT}.`)})

}

module.exports = router;