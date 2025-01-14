<template>
  <Button
    class="h-screen w-14 items-center flex justify-center"
    :class="props.color.join(' ')"
    unstyled
    @click="props.command"
    v-if="!props.isHidden"
  >
    <p class="transform -rotate-90 font-bold text-2xl">{{ props.title }}</p>
  </Button>
</template>
<script setup lang="ts">
const props = defineProps<{
  command: () => void
  title: string
  isHidden: boolean
  color: string[]
}>()
</script>
