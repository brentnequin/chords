import prisma from "~~/server/data/prisma"

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id)
    const song = await prisma.song.findUnique({
        where: { id: id }
    })
    return song
})