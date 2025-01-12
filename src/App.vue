<template>
  <main class="flex min-h-screen flex-col w-full overflow-x-hidden lg:flex-row xl:flex-row">
    <template v-for="(page, index) in pages" :key="page.name">
      <div
        class="absolute h-screen items-center flex justify-center bg-zinc-900 hover:bg-zinc-800 transition-transform duration-500 ease-in-out"
        :style="{
          left: `${index * 3.5}rem`,
          transform: checkAdjusted(page.component, index + 1, currentRoute.index)
            ? `translateX(calc(100vw - 10.5rem))`
            : 'none',
          width: `calc(100vw - 7rem)`,
        }"
      >
        <component :is="page.component" :command="page.command" />
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import Contact from '@/components/contact/index.vue'
import Home from '@/components/home/index.vue'
import Projects from '@/components/projects/index.vue'
import { useNavigationStore } from '@/stores/navigation'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const pages = ref([
  {
    name: 'Contact',
    command: () =>
      navigationStore.navigateTo({
        component: Contact,
        index: 1,
      }),
    component: Contact,
    color: 'bg-orange-600',
  },
  {
    name: 'Projects',
    command: () =>
      navigationStore.navigateTo({
        component: Projects,
        index: 2,
      }),
    component: Projects,
    color: 'bg-orange-500',
  },
  {
    name: 'Home',
    command: () =>
      navigationStore.navigateTo({
        component: Home,
        index: 3,
      }),
    component: Home,
    color: 'bg-orange-400',
  },
])

const navigationStore = useNavigationStore()

const checkAdjusted = (
  component: typeof Home | typeof Contact | typeof Projects,
  index: number,
  pageIndex: number,
) => currentRoute.value.component !== component && index > pageIndex

const { currentRoute } = storeToRefs(navigationStore)
</script>

<style></style>

<style scoped></style>
