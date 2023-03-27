import prisma from "~~/server/data/prisma"

export default defineEventHandler(async (event) => {

    const id = parseInt(event.context.params.id)
    const body = await readBody(event)
    const song = await prisma.song.update({
        where: { id: id },
        data: {
            name: body.name,
            artist: body.artist,
            key: body.key,
            content: body.content,
            updatedBy: {
                update: {
                    email: body.userEmail
                }
            }
        }
    })
    return song
})