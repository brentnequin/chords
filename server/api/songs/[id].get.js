import prisma from "~~/server/data/prisma"

export default defineEventHandler(async (event) => {

    const song = await prisma.song.findUnique({
        where: { id: parseInt(event.context.params.id) }
    })
    return song
})