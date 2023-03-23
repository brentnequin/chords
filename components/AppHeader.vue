<template>
    <div class="flex items-center justify-between m-8">
        <h1 class="text-4xl"><a href="/">Chords</a></h1>
        <div class="flex items-center space-x-8">
            <button v-if="status === 'authenticated'" @click="signOut">Logout</button>
            <p v-if="status !== 'authenticated'"><a href="/login">Login</a></p>
            <p v-if="status === 'authenticated'"><a href="#">{{ data.user.name }}</a></p>
            <SearchBar />
            <p><a href="/browse">Browse</a></p>
            <p><a href="#">Upload</a></p>
        </div>
    </div>
</template>

<script setup>
const { data, status, signOut } = useSession()

</script>