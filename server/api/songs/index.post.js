import prisma from "~~/server/data/prisma"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const song = await prisma.song.create({
        data: {
            name: body.name,
            artist: body.artist,
            key: body.key,
            content: body.content,
            createdBy: {
                connect: {
                    email: body.userEmail
                }
            },
            updatedBy: {
                connect: {
                    email: body.userEmail
                }
            }
        }
    })
    return song
})