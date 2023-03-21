export default defineEventHandler((event) => {
    setResponseStatus(event, 405)
    return { message: 'Unsupported request method' }
})