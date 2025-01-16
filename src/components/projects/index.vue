<template>
  <slot name="navigation"> </slot>

  <section class="flex flex-wrap flex-col p-4 lg:m-24 mt-12 w-full justify-center">
    <Card class="col-span-7 p-5 rounded-lg mb-20 bg-dark-500" :unstyled="true">
      <template #title>
        <h1 class="text-4xl font-bold text-center text-highlight">James Ball</h1>
        <h2 class="text-lg text-center text-light-50">
          <i class="pi pi-map-marker"></i> Canada | Full Stack Developer
        </h2>
      </template>
      <template #content>
        <div class="flex justify-center items-center space-x-4 mt-2">
          <a href="https://www.github.com/Jimmy-b36" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-github text-2xl text-light-50 hover:text-highlight"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/james-ball-57831a229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="pi pi-linkedin text-2xl text-light-50 hover:text-highlight"></i>
          </a>
          <button
            @click="copyEmail('jamie.j.ball@gmail.com')"
            class="text-light-50 hover:text-highlight"
          >
            <i class="pi pi-envelope text-2xl" v-if="copied === null"></i>
            <i v-if="copied === true" class="pi pi-check text-green-400"></i>
            <i v-if="copied === false" class="pi pi-times text-red-400"></i>
          </button>
        </div>
      </template>
    </Card>
    <div class="flex flex-wrap flex-row justify-center items-center">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { type IProject, projects } from '@/data/projects.ts'
import { copyToClipboard } from '@/utils/helpers'
import { ref } from 'vue'

const flipped = ref<IProject | null>(null)

const flipCard = (project: IProject) => {
  flipped.value = flipped.value?.id === project.id ? null : project
}

const resetFlipped = () => {
  flipped.value = null
}

const copied = ref<boolean | null>(null)
const copyEmail = (email: string) => {
  copied.value = copyToClipboard(email)
  console.log('🔥', copied.value)
  setTimeout(() => {
    copied.value = null
  }, 2000)
}
</script>
