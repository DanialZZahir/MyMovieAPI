const {seed, Movies} = require('../models') 
const { logTable } = require('sequelize-logger') 


async function test () {
    await seed() 
    await logTable(Movies)

}

test()