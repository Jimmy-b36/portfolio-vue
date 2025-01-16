<template>
  <div class="absolute inset-0 backface-hidden rotate-y-180">
    <Card
      class="xl:col-span-3 p-5 flex flex-col lg:h-[16rem] h-[13rem] justify-center items-center bg-dark-500 rounded-lg w-full"
      :unstyled="true"
    >
      <template #header>
        <h1 class="text-lg xl:text-2xl font-bold text-center text-highlight">
          {{ project.title }}
        </h1>
      </template>

      <template #content>
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-col flex-wrap justify-center items-center gap-3 mt-3">
            <p class="text-light-100 text-md">{{ project.role }}</p>
            <p
              class="text-light-100 text-sm"
              v-html="
                project.tech.map((tech) => `<span class='font-bold'>${tech}</span>`).join(' | ')
              "
            ></p>
          </div>
          <div class="flex flex-row gap-5 mt-5">
            <a v-if="project.webUrl" :href="project.webUrl" target="_blank">
              <i
                class="pi pi-globe text-light-100 hover:text-highlight transition-all duration-200"
                style="font-size: 2.5rem"
              ></i>
            </a>
            <a v-if="project.gitUrl" :href="project.gitUrl" target="_blank">
              <i
                class="pi pi-github text-light-100 hover:text-highlight transition-all duration-200"
                style="font-size: 2.5rem"
              ></i>
            </a>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { type IProject } from './index.vue'

const { project } = defineProps<{
  project: IProject
}>()
</script>
