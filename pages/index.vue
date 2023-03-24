<template>
    <SongList />
</template>

<script setup>
const songs = await $fetch('/api/songs', { })

</script>