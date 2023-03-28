<template>
    <div class="relative">
        <button class="flex items-center space-x-1" @click="toggle">
            <p>{{ text }}</p>
            <ChevronUp v-if="isVisible" />
            <ChevronDown v-else />
        </button>
        <div v-if="isVisible" class="z-10 bg-slate-700 rounded-lg absolute mt-4 space-y-2 px-4 py-2 min-w-full">
            <slot />
        </div>
    </div>
</template>

<script setup>
import ChevronUp from '~icons/mdi/chevron-up'
import ChevronDown from '~icons/mdi/chevron-down'

const props = defineProps({
    text: String
})

const isVisible = ref(false)
const toggle = () => isVisible.value = !isVisible.value
</script>