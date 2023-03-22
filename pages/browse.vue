<template>
    <div class="bg-gray-800 m-8 p-8 rounded-md overflow-hidden">
        <SongList :songs="songs" />
    </div>
</template>
    
<script setup>
const songs = await $fetch('/api/songs')

</script>