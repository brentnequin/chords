<template>
    <Chords
        :name="song.name"
        :artist="song.artist"
        :key="song.key"
        :content="song.content" />
</template>

<script setup>
const route = useRoute()
const song = await $fetch(`/api/songs/${route.params.id}`)

</script>