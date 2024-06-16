<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AsideMenu from './AsideMenu.vue'
import NavBar from '@/layouts/NavBar.vue'
</script>
<template>
  <div class="relative pb-6 bg-light-bg dark:bg-dark-bg">
    <AsideMenu />
    <div class="md:pl-[260px]">
      <NavBar />

      <RouterView />
    </div>
  </div>
</template>
