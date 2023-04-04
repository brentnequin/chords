<template>
    <SongList :songs="songs" heading="Browse" />
</template>
    
<script setup>
useSeoMeta({
  title: 'Browse | Chords'
})
const songs = await $fetch('/api/songs')

</script>