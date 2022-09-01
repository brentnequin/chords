<template>
<div class="bg-gray-800 w-screen h-screen text-gray-300">
    <TheHeader />
    <div class="container pt-5 grid grid-cols-1 md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0">
        <div class="p-5 bg-gray-700 rounded-md h-fit space-y-4 justify-between">
            <div class="">
                <h1 class="text-3xl">{{ song.title }}</h1>
                <p class="self-end">by {{ song.artist }}</p>
            </div>
            <div class="space-y-4">
                <div class="flex bg-gray-700 rounded-md justify-between">
                    <div class="flex space-x-3">
                        <p class="self-center">Key:</p>
                        <p class="w-4 self-center">{{ key }}</p>
                    </div>
                    <div class="space-x-3">
                        <button class="bg-gray-600 rounded-md w-10 h-10 hover:bg-gray-500" id="transpose-up" @click="transpose(1)">+</button>
                        <button class="bg-gray-600 rounded-md w-10 h-10 hover:bg-gray-500" id="transpose-down" @click="transpose(-1)">-</button>
                    </div>
                </div>
                <div class="flex justify-end">
                    <button :class="bassNotesOnly ? 'text-green-200' : ''" class="px-4 h-10 w-24 lg:w-24 rounded-md bg-gray-600 hover:bg-gray-500" id="base-only" @click="toggleBassNotesOnly">Bass</button>
                </div>
            </div>
        </div>
        
        <div v-if="song.content" class="p-5 bg-gray-700 rounded-md col-span-2">
            <div v-html="$md.render(song.content)" class="font-mono space-y-4" />
        </div>
        <div v-else>placeholder</div>
    </div>
</div>
</template>
  
<script>
export default {

    fetchOnServer: false,
    async fetch() {
        this.song = await this.$store.dispatch('getSong', this.$route.query.id)
        this.original_content = this.song.content
    },

    data() {
        return {
            song: {},
            bassNotesOnly: false,
            transposeSteps: 0
        }
    },

    computed: {
        key() {
            const new_key = this.$transpose("[" + this.song.key + "]", this.transposeSteps)
            return new_key.match(/\[(.*?)\]/)[1]
        }
    },

    methods: {
        transpose(steps) {
            this.transposeSteps += steps
            this.updateContent();
            console.log("steps: " + this.transposeSteps)
        },
        toggleBassNotesOnly() {
            this.bassNotesOnly = !this.bassNotesOnly
            this.updateContent();
            console.log("base notes only: " + this.bassNotesOnly)
        },
        updateContent() {
            this.song.content = this.bassNotesOnly 
                ? this.$bass(this.$transpose(this.original_content, this.transposeSteps))
                : this.$transpose(this.original_content, this.transposeSteps)
        }
    },
}
</script>
