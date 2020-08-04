const router = require('express').Router()
const axios = require('axios')

router.get('/api', async(req, res, next) => {

    try {
        // response é a resposta do axios, mas eu o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router