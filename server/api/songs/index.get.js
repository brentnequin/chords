import prisma from "~~/server/data/prisma"

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const options = {}

    options.take = parseInt(query.limit) || 20

    switch(query.sortBy) {
        case 'mostRecent':
            options.dateAdded = 'desc'
            break
        case undefined:
            break
        default:
            setResponseStatus(event, 400)
            return { message: `Invalid sortBy value ${query.sortBy}. Select from ('mostRecent').` }
    }

    const songs = await prisma.song.findMany(options)
    return songs
})