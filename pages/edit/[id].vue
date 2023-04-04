<template>
    <form>
        <div class="grid gap-4 grid-cols-4">
            <div class="space-y-8 rounded-lg bg-slate-800 p-8">
                <div>
                    <label for="name" class="block">Name</label>
                    <input class="rounded-lg bg-gray-700 p-2.5" id="name" v-model="name">
                </div>
                <div>
                    <label for="artist" class="block">Artist</label>
                    <input class="rounded-lg bg-gray-700 p-2.5" id="artist" v-model="artist">
                </div>
                <div>
                    <label for="key" class="block">Key</label>
                    <input class="rounded-lg bg-gray-700 p-2.5" id="key" v-model="key">
                </div>
            </div>
            <div class="col-span-3 space-y-4">
                <textarea class="p-8 w-full rounded-lg bg-slate-800 font-mono" v-model="content"></textarea>
                <Chords name="Preview" :content="content" />
                <div class="space-x-4">
                    <button @click="saveSong" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    <button @click="goToSong" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
const { data, status } = useSession()
if (status.value === 'unauthenticated') await navigateTo('/')
const route = useRoute()
const song = await $fetch(`/api/songs/${route.params.id}`)

useSeoMeta({
  title: `Edit - ${song.name} | Chords`
})

let name = song.name
let artist = song.artist
let key = song.key
let content = ref(song.content)

async function saveSong() {
    try {
        await $fetch(`/api/songs/${route.params.id}`, {
            method: "PUT",
            body: {
                name: name,
                artist: artist,
                key: key,
                content: content.value,
                userEmail: data.value.user.email
            }
        })
        goToSong()
    } catch (error) {
        console.log(error)
    }
}
async function goToSong() {
    await navigateTo(`/song/${route.params.id}`)
}
</script>