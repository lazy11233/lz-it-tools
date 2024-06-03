<script setup lang="ts">

</script>

<template>
  <div class="flex flex-1 rounded bg-gray-100 pl-3 py-1.5 cursor-pointer hover:bg-gray-200 text-stone-400">
    <IconifyIcon icon="mdi:magnify" class="text-2xl mr-4" />
    <span class="mr-4 select-none">{{ $t('search') }}</span>
    <div class="rounded outline items-center px-2 outline-stone-300 select-none">
      Cmd + K
    </div>
  </div>
</template>
