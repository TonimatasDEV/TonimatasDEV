<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const chart = ref(null)
const isLoading = ref(true)
let instance = null

defineProps({
  api: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})

onMounted(async () => {
  const response = await fetch("https://stats.tonimatas.dev/api/" + __props.api)
  const data = await response.json()
  const names = data?.names || []
  const values = data?.values || []

  instance = echarts.init(chart.value, 'dark')

  const option = {
    backgroundColor: '#1d1d1d',
    title: {
      text: __props.title,
      left: 'center'
    },
    tooltip: {},
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: names,
      inverse: true,
    },
    series: [
      {
        realtimeSort: true,
        type: 'bar',
        data: values,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
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
