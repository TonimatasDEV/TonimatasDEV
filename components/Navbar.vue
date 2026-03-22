<style scoped>
@reference "tailwindcss";

@layer base {
  .navbar-link {
    @apply flex items-center gap-1 hover:text-gray-400 hover:scale-110 transition-all duration-150 ease-out;
  }

  .active-link {
    @apply text-gray-500 pointer-events-none;
  }
}
</style>
<template>
  <nav>
    <div class="mx-auto max-h-fit flex items-center justify-between">
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="text-2xl">
          <div class="font-bold flex items-center">
            <NuxtImg src="https://avatars.githubusercontent.com/u/79017964?v=4&size=64" alt="image" width="46" height="46" class="rounded-2xl" />
            <h1 class="px-2">TonimatasDEV</h1>
          </div>
        </NuxtLink>

        <div class="h-10 w-px bg-white/30"></div>

        <div class="flex items-center gap-10 text-xl">
          <NuxtLink to="/" class="navbar-link" exactActiveClass="active-link">
            <Icon name="uil:home-alt"></Icon>
            Home
          </NuxtLink>

          <NuxtLink to="/stats" class="navbar-link" exactActiveClass="active-link">
            <Icon name="uil:analytics"></Icon>
            Stats
          </NuxtLink>

          <NuxtLink to="/self-hosted" class="navbar-link" exactActiveClass="active-link">
            <Icon name="uil:server"></Icon>
            Self-Hosted
          </NuxtLink>

          <NuxtLink to="https://status.tonimatas.dev" class="navbar-link" exactActiveClass="active-link">
            <Icon name="uil:arrow-circle-up"></Icon>
            Status
          </NuxtLink>
        </div>
      </div>

      <NuxtLink to="https://github.com/TonimatasDEV" class="navbar-link text-xl" exactActiveClass="active-link">
        <Icon name="uil:github" size="25px" style="color: white"/>
      </NuxtLink>
    </div>
  </nav>
</template>
<script lang="ts" setup>

</script>