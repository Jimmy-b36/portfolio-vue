<template>
  <slot name="navigation"> </slot>

  <section class="flex flex-wrap flex-col p-4 lg:m-24 xxl:mt-12 w-full justify-center">
    <h1 class="text-5xl font-bold text-center text-highlight mb-7">
      Some Of My Work <span class="inline-block animate-bounce">👇</span>
    </h1>
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
    <div class="fixed bottom-0 w-full left-0 mb-12">
      <div class="flex justify-center items-center space-x-4">
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
