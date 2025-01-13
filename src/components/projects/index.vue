<template>
  <Button
    class="h-screen w-14 items-center flex justify-center bg-ut_orange-300 hover:bg-ut_orange-200 z-300"
    unstyled
    @click="props.command"
  >
    <h1 class="transform -rotate-90 font-bold text-2xl">Projects</h1>
  </Button>

  <section class="flex flex-wrap p-4 m-24 w-full justify-center">
    <template v-for="project in projects" :key="project.id">
      <div
        class="relative col-span-12 lg:col-span-5 xl:col-span-4 h-[17rem] w-[30rem] perspective m-5"
        @mouseleave="resetFlipped"
      >
        <div
          class="relative transform-style-3d transition-transform duration-500"
          :class="{ 'rotate-y-180': flipped?.id === project.id }"
        >
          <CardFront :project="project" @mouseenter="flipCard(project)" />
          <CardBack :project="project" @mouseleave="flipped = null" />
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import projects from '@/data/projects.json'
import { ref } from 'vue'

const props = defineProps<{
  command: () => void
}>()

export interface IProject {
  id: number
  title: string
  description: string
  image: string
  webUrl: string
  gitUrl: string
}

const flipped = ref<IProject | null>(null)

const flipCard = (project: IProject) => {
  flipped.value = flipped.value?.id === project.id ? null : project
}

const resetFlipped = () => {
  flipped.value = null
}
</script>
