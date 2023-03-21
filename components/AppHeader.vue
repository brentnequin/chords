<template>
    <div class="flex items-center justify-between m-8">
        <h1 class="text-4xl">Chords</h1>
        <div class="flex items-center space-x-8">
            <SearchBar />
            <p><a href="/browse">Browse</a></p>
            <p><a href="#">Upload</a></p>
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
export default {
    components: { SearchBar }
}
</script>