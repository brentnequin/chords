<template>
    <SongList :songs="songs" heading="Browse" />
</template>
    
<script setup>
const songs = await $fetch('/api/songs')

</script>