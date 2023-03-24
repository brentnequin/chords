<template>
    <SongList />
</template>

<script setup>
const songs = await $fetch('/api/songs', { query: {limit: 5, sortBy: 'mostRecent'}})

</script>