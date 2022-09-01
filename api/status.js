import express from 'express'

const app = express()

app.get('/api/status', async (req, res) => {
    res.status(200)
})

module.exports = app;