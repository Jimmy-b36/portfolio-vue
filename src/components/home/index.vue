<template>
  <section class="grid grid-cols-7 gap-4 p-4 m-24 w-2/3">
    <Card class="col-span-7 p-5 bg-zinc-900 rounded-lg" :unstyled="true">
      <template #title>
        <h1 class="text-4xl font-bold text-center text-orange-600">James Ball</h1>
        <h2 class="text-lg text-center text-zinc-400">Full Stack Developer</h2>
      </template>
    </Card>

    <Card class="col-span-3">
      <template #content>
        <Image
          src="https://github.com/Jimmy-b36/portfolio/blob/main/public/images/ProfilePic.jpg?raw=true"
          alt="Profile picture"
        />
      </template>
    </Card>

    <div class="col-span-4 grid gap-4">
      <Card>
        <template #title>
          <h2 class="text-2xl text-center text-orange-600 font-bold">Who am I?</h2>
        </template>
        <template #content>
          <p class="text-zinc-200">
            I am a web developer and ski instructor. I am an avid reader and currently working my
            way through the stormlight archive. I also enjoy climbing in my free time.
          </p>
        </template>
      </Card>

      <Card>
        <template #title>
          <h2 class="text-2xl text-center text-orange-600 font-bold">Education</h2>
        </template>
        <template #content>
          <p class="text-zinc-200">
            <span class="font-bold">Diploma: </span>Full Stack Web Development | Lighthouse Labs
          </p>
        </template>
      </Card>

      <Card>
        <template #title>
          <h2 class="text-2xl text-center text-orange-600 font-bold">Technologies</h2>
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
</script>

<style lang="css"></style>
