<template>
    <nav class="flex items-center justify-between m-8">
        <NuxtLink class="text-4xl" to="/">Chords</NuxtLink>
        <div class="hidden desktop:flex items-center space-x-8">
            <button v-if="status === 'unauthenticated'" @click="signIn('auth0')">Login</button>
            <HeadlessPopover as="div" v-slot="{ open }" v-if="status === 'authenticated'" class="relative">
                <HeadlessPopoverButton :open="true" class="flex items-center space-x-1 focus:outline-none">
                    <p>{{ data.user.name }}</p>
                    <ChevronUp v-if="open" aria-hidden="true" />
                    <ChevronDown v-else aria-hidden="true" />
                </HeadlessPopoverButton>
                <transition 
                    enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <HeadlessPopoverPanel class="absolute mt-4 min-w-full rounded-md bg-slate-700 shadow-lg focus:outline-none">
                        <div class="grid">
                            <NuxtLink to="#" class="m-2 px-4 py-2 rounded-md hover:bg-slate-600 text-left">Profile</NuxtLink>
                            <button @click="signOut" class="m-2 px-4 py-2 rounded-md hover:bg-slate-600 text-left">Logout</button>
                        </div>
                    </HeadlessPopoverPanel>
                </transition>
            </HeadlessPopover>
            <SearchBar />
            <NuxtLink to="/browse">Browse</NuxtLink>
            <NuxtLink to="/upload">Upload</NuxtLink>
        </div>
        <div class="hidden tablet:flex desktop:hidden items-center space-x-8">
            <button v-if="status === 'unauthenticated'" @click="signIn('auth0')">Login</button>
            <HeadlessPopover as="div" v-slot="{ open }" v-if="status === 'authenticated'" class="relative">
                <HeadlessPopoverButton :open="true" class="flex items-center space-x-1 focus:outline-none">
                    <p>{{ data.user.name }}</p>
                    <ChevronUp v-if="open" aria-hidden="true" />
                    <ChevronDown v-else aria-hidden="true" />
                </HeadlessPopoverButton>
                <transition 
                    enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <HeadlessPopoverPanel class="absolute mt-4 min-w-full rounded-md bg-slate-700 shadow-lg focus:outline-none">
                        <div class="grid">
                            <NuxtLink to="#" class="m-2 px-4 py-2 rounded-md hover:bg-slate-600 text-left">Profile</NuxtLink>
                            <button @click="signOut" class="m-2 px-4 py-2 rounded-md hover:bg-slate-600 text-left">Logout</button>
                        </div>
                    </HeadlessPopoverPanel>
                </transition>
            </HeadlessPopover>
            <HeadlessPopover v-slot="{ open }" class="relative inline-block text-left">
                <HeadlessPopoverButton :open="true" class="flex items-center">
                    <MenuIcon class="text-xl" />
                </HeadlessPopoverButton>
                <transition 
                    enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <HeadlessPopoverPanel class="absolute mt-4 right-0 rounded-md bg-slate-700 shadow-lg">
                        <div class="grid">
                            <SearchBar class="m-2 px-2 py-2 rounded-md hover:bg-slate-600 place-start col-span-2" />
                            <NuxtLink to="/browse" class="m-2 px-4 py-2 rounded-md hover:bg-slate-600 text-left">Browse</NuxtLink>
                            <NuxtLink to="/upload" class="m-2 px-4 py-2 rounded-md hover:bg-slate-600 text-left">Upload</NuxtLink>
                        </div>
                    </HeadlessPopoverPanel>
                </transition>
            </HeadlessPopover>
        </div>
        <div class="flex tablet:hidden items-center space-x-8">
            <HeadlessPopover v-slot="{ close }" class="relative inline-block text-left">
                <HeadlessPopoverButton class="flex items-center">
                    <MenuIcon class="text-xl" />
                </HeadlessPopoverButton>
                <transition 
                    enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <HeadlessPopoverPanel class="absolute mt-4 right-0 rounded-md bg-slate-700 shadow-lg w-80">
                        <div class="grid">
                            <SearchBar class="m-2 px-2 py-2 rounded-md hover:bg-slate-600 place-start" />
                            <NuxtLink 
                                v-for="link in menuLinks"
                                :href=link.to
                                class="m-2 px-4 py-2 rounded-md hover:bg-slate-600 text-left" 
                                @click.native="close()">
                                <p class="text-sm">{{ link.name }}</p>
                                <p class="text-sm text-gray-400">{{ link.description }}</p>
                            </NuxtLink>
                        </div>
                        <div v-if="status === 'authenticated'" class="bg-gray-700 grid rounded-b-lg">
                            <p class="m-2 px-4 py-2 text-lg col-span-2">{{ data.user.name }}</p>
                            <NuxtLink href='/#' class="m-2 px-4 py-4 rounded-md hover:bg-slate-600 text-left" @click.native="close()">
                                <p class="text-sm text-center">Profile</p>
                            </NuxtLink>
                            <button class="m-2 px-4 py-4 rounded-md hover:bg-slate-600 text-sm text-center" @click="logout()">Logout</button>
                        </div>
                    </HeadlessPopoverPanel>
                </transition>
            </HeadlessPopover>
        </div>
    </nav>
</template>

<script setup>
import MenuIcon from '~icons/mdi/menu'
import ChevronUp from '~icons/mdi/chevron-up'
import ChevronDown from '~icons/mdi/chevron-down'
const { data, status, signOut, signIn } = useSession()

const menuLinks = [
    {
        name: 'Browse',
        to: '/browse',
        description: 'Get a list of all songs'
    },
    {
        name: 'Upload',
        to: '/upload',
        description: 'Upload a song'
    },
]
</script>