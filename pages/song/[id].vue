<template>
    <Chords :name="song.name" :artist="song.artist" :key="song.key" :content="song.content" />
    <div class="m-4">
        <button v-if="status === 'authenticated'" @click="editSong"
            class="px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
    </div>
</template>

<script setup>
const { status } = useSession()
const route = useRoute()
const song = await $fetch(`/api/songs/${route.params.id}`)

async function editSong() {
    await navigateTo(`/edit/${route.params.id}`)
}

</script>