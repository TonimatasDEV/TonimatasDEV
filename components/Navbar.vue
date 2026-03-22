<template>
  <nav class="">
    <div class="bg-black max-w-7xl mx-auto max-h-fit px-10 py-4 flex items-center justify-between rounded-b-2xl">
      <div class="text-xl font-bold">
        <NuxtLink to="/">TonimatasDEV</NuxtLink>
      </div>
      <ul class="flex space-x-8">
        <li>
          <NuxtLink class="hover:text-gray-400" to="/" exact-active-class="text-gray-400 underline-offset-1 underline">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-gray-400" to="https://stats.tonimatas.dev">Stats</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-gray-400" to="https://status.tonimatas.dev">Status</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-gray-400" external target="_blank" to="https://github.com/TonimatasDEV">
            <Icon name="uil:github" size="25px" style="color: white"/>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts" setup>
</script>