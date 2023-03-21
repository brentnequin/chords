import prisma from "~~/server/data/prisma"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const song = await prisma.song.create({
        data: {
            name: body.name,
            artist: body.artist,
            key: body.key,
            content: body.content
        }
    })
    return song
})