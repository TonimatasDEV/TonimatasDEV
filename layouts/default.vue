<script setup lang="ts">
</script>
<template>
  <title>TonimatasDEV</title>

  <div class="min-h-screen flex flex-col bg-[#131313]">
    <Navbar class="bg-[#0F0F0F] text-white p-5" />
    <NuxtPage class="flex-1 text-white p-10" />
  </div>
</template>
<style scoped>
.page-enter-active, .page-leave-active {
  transition: all 200ms;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(0.4rem);
}
</style>