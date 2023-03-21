import prisma from "~~/server/data/prisma"

// app.get('/api/songs', validateApiKey, async (req, res) => {
//     const songs = await prisma.song.findMany()
//     res.json(songs)
// });

export default defineEventHandler(async (event) => {
    const songs = await prisma.song.findMany()
    return songs
})