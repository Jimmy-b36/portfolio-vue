<template>
  <div class="absolute inset-0 backface-hidden">
    <Card
      class="xl:col-span-3 p-5 bg-dark-500 rounded-lg w-full text-white h-[16rem]"
      :unstyled="true"
    >
      <template #header>
        <Image :src="project.image" alt="Project image" width="100%" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { type IProject } from '@/components/projects/index.vue'

const { project } = defineProps<{
  project: IProject
}>()
</script>
