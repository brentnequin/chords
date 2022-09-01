import express from 'express'

const app = express()

app.get('/status', async (req, res) => {
    res.status(200)
})

module.exports = app;