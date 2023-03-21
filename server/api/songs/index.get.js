import prisma from "~~/server/data/prisma"

export default defineEventHandler(async (event) => {
    const songs = await prisma.song.findMany()
    return songs
})