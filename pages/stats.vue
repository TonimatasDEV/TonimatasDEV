<script setup lang="ts">
</script>
<template>
  <div class="mt-8">
    <div class="flex flex-row">
      <StatsModpacksWithGraph name="Packet Fixer" id="39585"/>
      <StatsModpacksWithGraph name="Mekanism Curios" id="77177"/>
    </div>

    <StatsBarGraph title="CurseForge downloads" api="curseforge"/>
    <StatsBarGraph title="Modrinth downloads" api="modrinth"/>
    <StatsBarGraph title="SpigotMC downloads" api="spiget"/>
    <StatsBarGraph title="Hangar downloads" api="hangar"/>
  </div>
</template>
<style scoped>

</style>