import express from 'express'

const app = express()

app.get('/status', async (req, res) => {
    res.json({})
})

module.exports = app;