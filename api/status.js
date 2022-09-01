import express from 'express'

const app = express()

app.use(express.json())

export default {
    // path: '/api/status',
    handler: app
}

app.get('/api/status', async (req, res) => {
    res.json({})
})

module.exports = app;