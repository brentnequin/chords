<template>
    <div class="rounded-lg p-8">
        <div v-if="name" class="py-4">
            <span class="text-xl">{{ name }}<text v-if="artist"> by <b>{{ artist }}</b></text></span>
        </div>
        <div v-bind:class="`my-4 font-mono space-y-4 text-sm tablet:text-base`" v-html="markdownToHtml"></div>
    </div>
</template>
  
<script>
import MarkdownIt from 'markdown-it'
import MarkdownItChords from 'markdown-it-chords'

var md = MarkdownIt()
md.use(MarkdownItChords)


export default {
    name: 'App',
    props: {
        name: String,
        artist: String,
        key: String,
        content: {
            type: String,
            default: ""
        },
        // contentFontSize: {
        //     type: Number,
        //     default: "1"
        // }
    },
    computed: {
        markdownToHtml() {
            return md.render(this.content).replace(/\[N\.C\.\]/g, '<span class="chord"><span class="inner"><i class="name">N.C.</i></span></span>')
        }
    }
}
</script>
  
<style>
@import 'markdown-it-chords/markdown-it-chords.css';
h1 {
    @apply text-xl
}
</style>