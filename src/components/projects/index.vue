<template>
  <slot name="navigation"> </slot>

  <section class="flex flex-wrap p-4 lg:m-24 mt-12 w-full justify-center">
    <template v-for="project in projects" :key="project.id">
      <div
        class="relative col-span-12 lg:col-span-5 xl:col-span-4 lg:h-[15rem] h-[12.25rem] w-[25rem] perspective m-5"
        @mouseleave="resetFlipped"
      >
        <div
          class="relative transform-style-3d transition-transform duration-500"
          :class="{ 'rotate-y-180': flipped?.id === project.id }"
        >
          <CardFront
            :project="project"
            @mouseenter="flipCard(project)"
            @touchstart="flipCard(project)"
          />
          <CardBack :project="project" @mouseleave="flipped = null" @touchend="flipped = null" />
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import projects from '@/data/projects.ts'
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
  tech: string[]
}

const flipped = ref<IProject | null>(null)

const flipCard = (project: IProject) => {
  flipped.value = flipped.value?.id === project.id ? null : project
}

const resetFlipped = () => {
  flipped.value = null
}
</script>
