<template>
    <nav class="flex items-center justify-between m-8">
        <h1 class="text-4xl"><a href="/">Chords</a></h1>
        <div class="invisible tablet:visible desktop:visible flex items-center space-x-8">
            <button v-if="status === 'unauthenticated'" @click="signIn('auth0')">Login</button>
            <Dropdown v-if="status === 'authenticated'" :text="data.user.name">
                <p><a href="#">Profile</a></p>
                <button v-if="status === 'authenticated'" @click="signOut">Logout</button>
            </Dropdown>
            <SearchBar />
            <p><a href="/browse">Browse</a></p>
            <p><a href="/upload">Upload</a></p>
        </div>
    </nav>
</template>

<script setup>
const { data, status, signOut, signIn } = useSession()
</script>