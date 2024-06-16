<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import SearchInput from '@/components/SearchInput.vue'
import { useI18n } from 'vue-i18n'
import { getCurrentLang } from '@/utils/tool'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const i18n = useI18n()
const changeLanguage = () => {
  const usedLang = getCurrentLang()
  const currentLang = usedLang === 'zh' ? 'en' : 'zh'
  localStorage.setItem('lang', currentLang)
  i18n.locale.value = currentLang
}
</script>

<template>
  <nav class="flex p-2 space-x-3 items-center">
    <IconifyIcon
      icon="mdi:view-sequential"
      class="text-4xl cursor-pointer hover:bg-gray-200 hover:text-light-text-1 rounded-full p-1 text-light-text-2 dark:text-dark-text-1"
    />
    <IconifyIcon
      icon="mdi:home"
      class="text-4xl cursor-pointer hover:bg-gray-200 hover:text-light-text-1 rounded-full p-1 text-light-text-2 dark:text-dark-text-1"
    />
    <SearchInput />
    <ElButton @click="changeLanguage">{{ $t('language') }}</ElButton>
    <IconifyIcon
      icon="mdi:information-slab-circle-outline"
      class="text-4xl cursor-pointer hover:bg-gray-200 hover:text-light-text-1 rounded-full p-1 text-light-text-2 dark:text-dark-text-1"
    />
    <IconifyIcon
      :icon="isDark ? 'mdi:weather-night' : 'mdi:white-balance-sunny'"
      class="text-4xl cursor-pointer hover:bg-gray-200 hover:text-light-text-1 rounded-full p-1 text-light-text-2 dark:text-dark-text-1"
      @click="toggleDark()"
    />
  </nav>
</template>
