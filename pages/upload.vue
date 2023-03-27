<template>
    <form class="space-y-8">
        <div class="flex space-x-4 rounded-lg bg-slate-800 p-8">
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
        <div class="grid gap-4 grid-cols-2">
            <div class="space-y-4">
                <div contenteditable="true" class="p-8 w-full rounded-lg bg-slate-800 font-mono h-fit" @input="content = $event.target.innerText"></div>
            </div>
            <Chords name="Preview" :content="content" />
        </div>
        <div class="space-x-4">
                    <button @click="saveSong" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                </div>
    </form>
</template>

<script setup>
definePageMeta({ auth: true })
const { data } = useSession()


const name = ref('')
const artist = ref('')
const key = ref('C')
const content = ref('')

async function saveSong() {
    const data = {
        name: name.value,
        artist: artist.value,
        key: key.value,
        content: content.value,
        // user: data.user.name
    }
    let song
    try {
        song = await $fetch(`/api/songs`, { method: "POST", body: data })
    } catch (error) {
        console.log(error)
        return
    }
    await navigateTo(`/song/${song.id}`)
}
</script>