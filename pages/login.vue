<template>
    <section class="grid justify-items-stretch my-24">
        <div class="justify-self-center bg-gray-800 py-12 w-96 rounded-lg">
            <h1 class="text-xl text-center">Sign in to your account</h1>
            <div class="mt-24 mb-4 flex justify-center">
                <button class="w-1/3 bg-gray-700 rounded-lg hover:bg-gray-600" @click="signIn('github')">
                    <span class="flex mx-4 my-4 items-center space-x-2">
                        <GitHubIcon class="text-2xl" />
                        <p>GitHub</p>
                    </span>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import GitHubIcon from '~icons/mdi/github'
definePageMeta({ auth: false })
const { signIn } = useSession()
</script>