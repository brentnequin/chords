export default defineEventHandler((event) => {
    if (event.req.headers['x-api-key'] !== process.env.API_KEY) {
        setResponseStatus(event, 401)
        return { message: 'Unauthorized' }
    }
})