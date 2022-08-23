const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    const data = await users.findAll()
    res.send(data)
})

router.get('/:id', async (req, res) => {
    const data = await users.findByPk(req.params.id)

    if (!data) {
        res.status(404).send(`No users with id ${req.params.id}`)
        return
    }
    res.send(data)
})

router.get('/:id/movieswatched', async (req, res) => {
    const data = await movieswatched.findByPk(req.params.id)

    if (!data) {
        res.status(404).send(`This user has seen no movies yet`)
        return
    }
    res.send(data)
})

// watch a movie (IE add a movie to movies watched)


// delete a user

router.delete('/:id', async (req, res) => {
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

router.post('/', async (req, res) => {
    try {
        await users.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        res.status(400).send(error.errors)
    }
    await logTable(users)
})

// update a movie by id

router.put('/:id', async (req, res) =>{
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

module.exports = router;