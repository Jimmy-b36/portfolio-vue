<template>
  <div class="absolute inset-0 backface-hidden rotate-y-180">
    <Card
      class="col-span-6 p-5 flex flex-col h-[16rem] justify-center items-center bg-dark-500 rounded-lg w-full text-white"
      :unstyled="true"
    >
      <template #header>
        <h1 class="text-2xl font-bold text-center">{{ project.title }}</h1>
      </template>

      <template #content>
        <div class="flex flex-col justify-center items-center">
          <p class="text-zinc-200 text-center">
            {{ project.description }}
          </p>
          <div class="flex flex-row gap-5 mt-3">
            <a v-if="project.webUrl" :href="project.webUrl" target="_blank">
              <i class="pi pi-globe" style="font-size: 2.5rem"></i>
            </a>
            <a v-if="project.gitUrl" :href="project.gitUrl" target="_blank">
              <i> <img :src="gitSvg" alt="github logo" class="h-10 w-10" /></i>
            </a>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import gitSvg from '@/assets/icons/github-dark.svg?url'
import { type IProject } from './index.vue'

defineProps<{
  project: IProject
}>()
</script>
