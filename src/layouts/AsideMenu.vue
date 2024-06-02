<template>
  <aside class="fixed left-0 top-0 bottom-0 w-[240px]
    bg-white overflow-auto shadow-xl hidden md:block transition-all"
  >
    <div v-for="item in 20" :key="item" class="text-slate-500">{{ item }}</div>
  </aside>
</template>
