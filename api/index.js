import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

/** 
* logic for our api will go here
*/
export default {
  path: '/api',
  handler: app
}

app.get('/status', async (req, res) => {
  res.json({up: true})
})

app.post(`/song`, async (req, res) => {
    const result = await prisma.song.create({
      data: {
        title: req.body.title,
        artist: req.body.artist,
        key: req.body.key,
        content: req.body.content
      },
    })
    res.json(result)
})

app.get('/song/:id', async (req, res) => {
    const { id } = req.params
    const song = await prisma.song.findUnique({
      where: {
        id: Number(id),
      },
    })
    res.json(song)
})

app.get('/songs', async (req, res) => {
    const songs = await prisma.song.findMany({})
    res.json(songs)
})

app.delete(`/song/:id`, async (req, res) => {
    const { id } = req.params
    const song = await prisma.song.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json(song)
})

app.get('/filterSongs', async (req, res) => {
    const { searchString } = req.query
    const songs = await prisma.song.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchString,
            },
          },
          {
            artist: {
              contains: searchString,
            },
          },
          {
            content: {
              contains: searchString,
            },
          },
        ],
      },
    })
    res.send(songs)
})

module.exports = app;