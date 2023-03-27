<template>
    <div class="">
      <h3 class="text-xl font-bold">Authentication Overview</h3>
      <pre v-if="status"><span>Status:</span> {{ status }}</pre>
      <pre v-if="data"><span>Data:</span> {{ data }}</pre>
    </div>
  </template>
  
  <script lang="ts" setup>
  const { data, status, getCsrfToken, getProviders } = useSession()
  const providers = await getProviders()
  </script>