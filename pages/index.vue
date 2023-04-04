<template>
    <SongList heading="Recently Added" :songs="songs" />
</template>

<script setup>
useSeoMeta({
  title: 'Home | Chords'
})
const songs = await $fetch('/api/songs', { query: {limit: 5, sortBy: 'mostRecent'}})

</script>