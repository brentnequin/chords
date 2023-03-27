<template>
    <div class="rounded-lg p-8 bg-slate-800">
        <div v-if="name" class="py-4">
            <span class="text-xl">{{ name }}<text v-if="artist"> by <b>{{ artist }}</b></text></span>
        </div>
        <div class="my-4 font-mono space-y-4" v-html="markdownToHtml"></div>
    </div>
</template>
  
<script>
import MarkdownIt from 'markdown-it'
import MarkdownItChords from 'markdown-it-chords'

var md = MarkdownIt()
md.use(MarkdownItChords)

const CHORD_REGEX = /\[([A-G]{1}[b#♭♯]*)(\/|M|Δ|[Mm]aj|m|[Mm]in|‑|[Dd]im|°|ø|[Aa]ug|\+|[Ss]usp?|[Aa]dd)?(\d|[A-G]{1}[b#♭♯]*)?\]/g;
const CHROMATIC_SEQUENCE_SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B']
const CHROMATIC_SEQUENCE_FLATS =  ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

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
        },
        bass(content, steps) {
        
            return content.replace(CHORD_REGEX, function (full_match, $1, $2, $3) {
                return '[' + ($2 == '/' ? $3 : $1) + ']'
            });
        },
        transpose(content, steps) {

            return content.replace(CHORD_REGEX, function (full_match, $1, $2, $3) {

                // $1: note + b|#|etc
                // $2: '/' or maj|dim|m|etc
                // $3: if $2=='/': bass note, otherwise 7|etc
            
                var new_note = CHROMATIC_SEQUENCE_SHARPS[(((CHROMATIC_SEQUENCE_SHARPS.indexOf($1) + steps) % CHROMATIC_SEQUENCE_SHARPS.length) + CHROMATIC_SEQUENCE_SHARPS.length) % CHROMATIC_SEQUENCE_SHARPS.length]

                if ($2 === '/') {
                    var new_bass_note = CHROMATIC_SEQUENCE_SHARPS[(((CHROMATIC_SEQUENCE_SHARPS.indexOf($3) + steps) % CHROMATIC_SEQUENCE_SHARPS.length) + CHROMATIC_SEQUENCE_SHARPS.length) % CHROMATIC_SEQUENCE_SHARPS.length]
                    return '[' + new_note + '/' + new_bass_note + ']'
                } else {
                    return '[' + new_note + ($2 || '') + ($3 || '') + ']'
                }
            });
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