<template>
    <div class="bg-slate-800 my-8 p-8 rounded-md overflow-hidden">
        <h2 class="text-xl py-4">{{ heading }}</h2>
        <table class="table-auto min-w-full">
            <thead class="text-left">
                <tr>
                    <th class="py-2 pl-8 font-light">Song</th>
                    <th class="py-2 pl-8 font-light">Artist</th>
                    <!-- <th class="py-2 pl-8 font-light">Key</th> -->
                </tr>
            </thead>
            <tbody class="px-8">
                <tr v-for="song in songs" v-bind:key="song.id" class="border-t border-slate-600">
                    <td class="py-4 pl-8"><a :href="'song/' + song.id">{{ song.name }}</a></td>
                    <td class="py-4 pl-8">{{ song.artist }}</td>
                    <!-- <td class="py-4 pl-8 pr-2">{{ song.key }}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['songs', 'heading']
}
</script>