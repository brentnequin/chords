import express from 'express'

const app = express()

app.get('/api/status', async (req, res) => {
    res.status(200).send(1)
})

module.exports = app;