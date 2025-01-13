<template>
  <Button
    class="h-screen w-14 items-center flex justify-center bg-secondary-300 hover:bg-secondary-200"
    unstyled
    @click="props.command"
  >
    <h1 class="transform -rotate-90 font-bold text-2xl">Home</h1>
  </Button>
  <section class="grid grid-cols-7 gap-4 p-4 m-24">
    <Card class="col-span-7 p-5 bg-dark-500 rounded-lg" :unstyled="true">
      <template #title>
        <h1 class="text-4xl font-bold text-center text-highlight">James Ball</h1>
        <h2 class="text-lg text-center text-zinc-400">Full Stack Developer</h2>
      </template>
    </Card>

    <Card class="col-span-3 !bg-dark-500">
      <template #content>
        <Image
          src="https://github.com/Jimmy-b36/portfolio/blob/main/public/images/ProfilePic.jpg?raw=true"
          alt="Profile picture"
        />
      </template>
    </Card>

    <div class="col-span-4 grid gap-4">
      <Card class="!bg-dark-400">
        <template #title>
          <h2 class="text-2xl text-center text-highlight font-bold">Who am I?</h2>
        </template>
        <template #content>
          <p class="text-zinc-200">
            I am a web developer and ski instructor. I am an avid reader and currently working my
            way through the stormlight archive. I also enjoy climbing in my free time.
          </p>
        </template>
      </Card>

      <Card class="!bg-dark-500">
        <template #title>
          <h2 class="text-2xl text-center text-highlight font-bold">Education</h2>
        </template>
        <template #content>
          <p class="text-zinc-200">
            <span class="font-bold">Diploma: </span>Full Stack Web Development | Lighthouse Labs
          </p>
        </template>
      </Card>

      <Card class="!bg-dark-300">
        <template #title>
          <h2 class="text-2xl text-center text-highlight font-bold">Technologies</h2>
        </template>
        <template #content>
          <div class="grid grid-cols-6 gap-4 place-items-center">
            <i v-for="icon in icons" :key="icon" class="w-10 h-10">
              <img :src="icon" alt="technology icon" />
            </i>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { icons } from './iconImports'
const props = defineProps<{ command: () => void }>()
</script>

<style lang="css"></style>
