<template>
  <Button
    class="h-screen w-14 items-center flex justify-center bg-zinc-900 hover:bg-zinc-800 z-300"
    unstyled
    @click="props.command"
  >
    <h1 class="transform -rotate-90 font-bold text-2xl">Projects</h1>
  </Button>
  <section class="grid grid-cols-12 gap-4 p-4 m-24">
    <Card class="col-span-12 p-5 bg-zinc-900 rounded-lg" :unstyled="true">
      <template #title>Projects</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
          ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </Card>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  command: () => void
}>()
</script>
<style lang="css"></style>
