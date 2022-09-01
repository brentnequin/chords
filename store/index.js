export const actions = {
    async getSongs () {
        let songs = await this.$axios.$get('api/songs')
        return songs
    },
    async getSong (context, id) {
        let song = await this.$axios.$get('api/song/' + id)
        return song
    },
    async uploadSong (context, song) {
        this.$axios.post('api/song', {
            title: song.title, 
            artist: song.artist,
            key: song.key,
            content: song.content
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}