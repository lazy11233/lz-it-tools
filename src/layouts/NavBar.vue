<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

import SearchInput from '@/components/SearchInput.vue'
</script>

<template>
  <nav class="flex py-2 space-x-3 bg-white dark:bg-slate-900">
    <IconifyIcon
      icon="mdi:view-sequential"
      class="text-4xl cursor-pointer hover:bg-gray-200 rounded-full p-1 text-stone-700"
    />
    <IconifyIcon
      icon="mdi:home"
      class="text-4xl cursor-pointer hover:bg-gray-200 rounded-full p-1 text-stone-700"
    />
    <SearchInput />
    <ElButton @click="toggleDark()">简体中文</ElButton>
    <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    <IconifyIcon inline-block align-middle i="dark:carbon-moon carbon-sun" />
    <IconifyIcon
      icon="mdi:information-slab-circle-outline"
      class="text-4xl cursor-pointer hover:bg-gray-200 rounded-full p-1"
    />
    <IconifyIcon icon="mdi:white-balance-sunny" class="text-2xl cursor-pointer hover:bg-gray-100" />
    <IconifyIcon icon="mdi:weather-night" class="text-2xl cursor-pointer hover:bg-gray-100" />
  </nav>
</template>
