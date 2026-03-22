<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const chart = ref(null)
const isLoading = ref(true)
let instance = null

defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
})

onMounted(async () => {
  const response = await fetch("https://stats.tonimatas.dev/api/modpacks?id=" + __props.id)
  const data = await response.json()
  const total = data?.total
  const modData = data?.modpackCount

  instance = echarts.init(chart.value, 'dark')

  const option = {
    backgroundColor: '#1d1d1d',
    title: {
      text: 'Modpacks with ' + __props.name,
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Data',
        type: 'pie',
        radius: '50%',
        data: [
          { value: total - modData, name: 'Other' },
          { value: modData, name: __props.name }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  instance.setOption(option)
  isLoading.value = false

  window.addEventListener('resize', () => {
    instance && instance.resize()
  })
})

onBeforeUnmount(() => {
  instance && instance.dispose()
  window.removeEventListener('resize', () => {
    instance && instance.resize()
  })
})
</script>
<template>
  <div class="flex flex-col items-center justify-center w-full h-[400px] relative">
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-white text-lg">Loading...</h1>
    </div>

    <div ref="chart" class="w-full h-[400px] z-0" />
  </div>
</template>
