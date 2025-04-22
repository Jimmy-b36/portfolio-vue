<template>
  <main class="flex min-h-screen flex-col w-full overflow-x-hidden bg-dark-100">
    <!-- Mobile Nav -->
    <nav class="xl:hidden flex justify-around bg-dark-300 p-4 fixed w-full z-50">
      <Button
        v-for="page in pages"
        :key="page.name"
        @click="page.command"
        class="font-bold px-4 py-2 rounded !bg-midnight_green-700 !border !border-midnight_green-700 !hover:bg-midnight_green-200"
      >
        {{ page.name }}
      </Button>
    </nav>

    <!-- Desktop Nav -->
    <div class="hidden xl:flex">
      <template v-for="(page, index) in pages" :key="page.name">
        <div
          class="absolute h-screen items-center flex justify-center bg-dark-100 transition-transform duration-500 ease-in-out"
          :style="{
            left: `${index * 3.5}rem`,
            transform: checkAdjusted(page.component, index + 1, currentRoute.index)
              ? `translateX(calc(100vw - 7em))`
              : 'none',
            width: `calc(100vw - 3.5em)`,
          }"
        >
          <component :is="page.component" :command="page.command">
            <template #navigation>
              <NavButton
                :command="page.command"
                :title="page.name"
                :is-hidden="false"
                :color="page.color"
              />
            </template>
          </component>
        </div>
      </template>
    </div>

    <!-- Mobile Content -->
    <div class="xl:hidden pt-16">
      <component :is="currentRoute.component" :command="() => {}" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Home from '@/components/home/index.vue'
import Projects from '@/components/projects/index.vue'
import { useNavigationStore } from '@/stores/navigation'
import { storeToRefs } from 'pinia'
import { shallowRef } from 'vue'

const pages = shallowRef([
  {
    name: 'Projects',
    command: () =>
      navigationStore.navigateTo({
        component: Projects,
        index: 1,
      }),
    component: Projects,
    color: ['bg-[#96E6B3]', 'hover:bg-[#6ADC94]'],
  },
  {
    name: 'Home',
    command: () =>
      navigationStore.navigateTo({
        component: Home,
        index: 2,
      }),
    component: Home,
    color: ['bg-[#F2E94E]', 'hover:bg-[#EEE31B]'],
  },
])

const navigationStore = useNavigationStore()

const checkAdjusted = (
  component: typeof Home | typeof Projects,
  index: number,
  pageIndex: number,
) => currentRoute.value.component !== component && index > pageIndex

const { currentRoute } = storeToRefs(navigationStore)
</script>

<style></style>

<style scoped></style>
