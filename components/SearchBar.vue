<template>
    <form class="flex items-center space-x-2">
        <input type="song" id="song"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 focus:outline-none
                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a song..." required>
        <!-- <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
        </button> -->
    </form>
</template>

<script setup>
// https://headlessui.com/vue/combobox
const filteredItems = computed(() =>
    query.value === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.value.toLowerCase())
        })
  )

</script>