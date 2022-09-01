export const actions = {
    async getSongs () {
        let songs = await this.$axios.$get('api/songs')
        return songs
    },
    async getSong (context, id) {
        let song = await this.$axios.$get('api/song/' + id)
        return song
    },
}