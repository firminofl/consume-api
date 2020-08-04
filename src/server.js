const express = require('express')
const cors = require('cors')

const app = express()

// Index Route
const indexRoute = require('./routes/index')

app.use(cors())
app.use(indexRoute)

app.listen('4567', () => {
    console.log(`Server running on port 4567`)
})