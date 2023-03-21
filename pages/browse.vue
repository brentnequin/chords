<template>
    <div class="bg-gray-800 m-8 p-8 rounded-md overflow-hidden">
        <table class="table-auto min-w-full my-4">
            <thead class="text-left">
                <tr>
                    <th class="py-2 pl-8 font-light">Song</th>
                    <th class="py-2 pl-8 font-light">Artist</th>
                    <th class="py-2 pl-8 font-light">Key</th>
                </tr>
            </thead>
            <tbody class="px-8">
                <tr v-for="song in songs" v-bind:key="song.id" class="border-t border-slate-600">
                    <td class="py-4 pl-8"><a :href="'song/' + song.id">{{ song.name }}</a></td>
                    <td class="py-4 pl-8">{{ song.artist }}</td>
                    <td class="py-4 pl-8 pr-2">{{ song.key }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script setup>
const songs = await $fetch('/api/songs')

</script>