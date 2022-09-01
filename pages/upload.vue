<template>
    <div>
        <TheHeader />
        <div class="container pt-5">
            <form v-on:submit.prevent="submitSong">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input v-model="song.title" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Song Title" required>
                    </div>
                    <div>
                        <label for="artist" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Artist</label>
                        <input v-model="song.artist" type="text" id="artist" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Song Artist" required>
                    </div>
                    <div>
                        <label for="key" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Key</label>
                        <select v-model="song.key" type="text" id="key" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="C" required>
                            <option v-for="option in keyOptions" v-bind:key="option" :value="option">{{ option }}</option>
                        </select>
                    </div>  
                </div>
                <div class="mb-6">
                    <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Content</label>
                    <textarea v-model="song.content" type="email" id="content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="contentPlaceholder" required></textarea>
                </div> 
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    </div>

</template>

<script>
export default {

    data() {
        return {
            submitted: false,
            keyOptions: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
            contentPlaceholder: `[Verse 1]
[C]La [D]La
[G]La
            `,
            song: {
                title: "",
                artist: "",
                key: "C",
                content: ""
            }
        }
    },

    methods: {
        async submitSong() {
            let result = await this.$store.dispatch('uploadSong', this.song)
        }
    }
}
</script>