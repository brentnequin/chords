<template>
    <div class="m-8 p-8 bg-gray-700">
        <div class="py-4"><span class="text-xl">{{ name }} by <b>{{ artist }}</b></span></div>
        <div class="my-4 font-mono" v-html="markdownToHtml"></div>
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
    },
    computed: {
        markdownToHtml() {
            return md.render(this.content)
        }
    }
}
</script>
  
<style src='markdown-it-chords/markdown-it-chords.css'>
</style>