<template>
    <div class="grid tablet:grid-cols-3 gap-4 mobile:grid-cols-1">
        <div class="flex flex-wrap gap-4 h-10">
            <div class="flex">
                <button 
                    @click="transposeSteps--"
                    class="px-3 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-l-lg">
                    -
                </button>
                <span class="w-10 text-white bg-blue-800 focus:outline-none font-medium text-sm text-center">
                    <p class="my-2.5">{{ key }}</p>
                </span>
                <button
                    @click="transposeSteps++"
                    class="px-3 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-r-lg">
                    +
                </button>
            </div>
            <div>
                <button
                    @click="bassOnlyEnabled = !bassOnlyEnabled"
                    class="px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bass Only</button>
            </div>
            <!-- <div class="flex">
                <button 
                    @click="fontSize--"
                    class="px-3 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-l-lg">
                    -
                </button>
                <span class="w-10 text-white bg-blue-800 focus:outline-none font-medium text-sm text-center">
                    <p class="my-2.5">{{ fontSize }}</p>
                </span>
                <button
                    @click="fontSize++"
                    class="px-3 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-r-lg">
                    +
                </button>
            </div> -->
            <div>
                <button v-if="status === 'authenticated'" @click="editSong" class="px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
            </div>
        </div>
        <Chords 
            :name="song.name"
            :artist="song.artist"
            :key="key"
            :content="bassOnlyEnabled ? baseOnlyContent : content"
            class="col-span-2" />
    </div>
</template>

<script setup>
const { status } = useSession()
const route = useRoute()
const song = await $fetch(`/api/songs/${route.params.id}`)

useSeoMeta({
    title: `${song.name} | Chords`
})

const editSong = async () => await navigateTo(`/edit/${song.id}`)

const bassOnlyEnabled = ref(false)
const transposeSteps = ref(0)
// const fontSize = ref(1)

const key = computed(() => CHROMATIC_SEQUENCE_SHARPS[(((CHROMATIC_SEQUENCE_SHARPS.indexOf(song.key) + transposeSteps.value) % CHROMATIC_SEQUENCE_SHARPS.length) + CHROMATIC_SEQUENCE_SHARPS.length) % CHROMATIC_SEQUENCE_SHARPS.length])
const content = computed(() => transpose(song.content, transposeSteps.value))
const baseOnlyContent = computed(() => bass(transpose(song.content, transposeSteps.value)))
</script>