<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AsideMenu from './AsideMenu.vue'
import NavBar from '@/layouts/NavBar.vue'
</script>
<template>
  <div class="relative px-4 pb-6">
    <AsideMenu />
    <div class="md:pl-[260px] px-1">
      <NavBar />

      <RouterView />
    </div>
  </div>
</template>
