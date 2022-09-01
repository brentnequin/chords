<template>
  <div class="bg-gray-800 min-h-screen w-screen text-gray-300">
    <TheHeader />
    <div class="container pt-5">
        <li v-for="song in songs" v-bind:key="song.title">
            <nuxt-link :to="{ path: 'song', query: { id: song.id }}">
                {{ song.title }} - {{ song.artist }}
            </nuxt-link>
        </li>
    </div>
  </div>
</template>

<script>
    export default {
      fetchOnServer: false,
      async fetch() {
          this.songs = await this.$store.dispatch('getSongs')
      },
    
      data() {
        return {
          songs: []
        }
      }
    }
    </script>