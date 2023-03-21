// require('dotenv').config()

// const app = require('express')()
// var cors = require('cors')
// const corsOptions = {
//     origin: 'http://localhost:8080', 
//     credentials: true,  // access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions))


// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// function validateApiKey(req, res, next) {
//     if (!(apiKey = req.header('x-api-key')) || apiKey !== process.env.API_KEY)
//         return res.status(401).json({ message: "Unauthorized" })
//     next()
// }

// app.get('/api/songs', validateApiKey, async (req, res) => {
//     const songs = await prisma.song.findMany()
//     res.json(songs)
// });

// app.listen(process.env.API_PORT || 5001);

export default defineEventHandler((event) => {
    return { message: 'OK' }
})