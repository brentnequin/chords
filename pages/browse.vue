<template>
    <SongList :songs="songs" />
</template>
    
<script setup>
const songs = await $fetch('/api/songs')

</script>