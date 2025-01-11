<template>
  <nav class="card flex justify-center m-5">
    <Menubar :model="routes" class="!border-none" />
  </nav>
  <main class="w-full h-[90vh] flex justify-center align-middle">
    <component :is="currentRoute" />
  </main>
</template>

<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import { storeToRefs } from 'pinia'

const navigationStore = useNavigationStore()

const { currentRoute, routes } = storeToRefs(navigationStore)
</script>
