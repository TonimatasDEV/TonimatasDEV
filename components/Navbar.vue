<template>
  <nav class="">
    <div class="bg-black max-w-7xl mx-auto max-h-fit px-10 py-4 flex items-center justify-between rounded-b-2xl">
      <div class="text-xl font-bold">
        <NuxtLink to="/">TonimatasDEV</NuxtLink>
      </div>
      <ul class="flex space-x-8">
        <li><NuxtLink to="/" class="hover:text-gray-400">Home</NuxtLink></li>
        <li><NuxtLink to="https://stats.tonimatas.dev" class="hover:text-gray-400">Stats</NuxtLink></li>
        <li><NuxtLink to="https://status.tonimatas.dev" class="hover:text-gray-400">Status</NuxtLink></li>
        <li>
          <NuxtLink to="https://github.com/TonimatasDEV" target="_blank" external class="hover:text-gray-400">
            <Icon name="uil:github" style="color: white" size="25px"/>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup lang="ts">
</script>