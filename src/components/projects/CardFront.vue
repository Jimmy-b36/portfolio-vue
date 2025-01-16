<template>
  <div class="absolute inset-0 backface-hidden">
    <Card
      class="xl:col-span-3 p-5 bg-dark-500 rounded-lg w-full text-white h-[13.5rem] lg:h-[16rem] flex flex-col"
      :unstyled="true"
    >
      <template #header>
        <div class="w-full h-full flex items-center justify-center overflow-hidden">
          <Image
            :src="project.image"
            alt="Project image"
            class="max-w-full max-h-[11rem] lg:max-h-[14rem] object-contain"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { type IProject } from '@/data/projects.ts'

const { project } = defineProps<{
  project: IProject
}>()
</script>
