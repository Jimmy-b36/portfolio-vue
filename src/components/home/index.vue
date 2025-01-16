<template>
  <slot name="navigation"> </slot>
  <section class="grid grid-cols-7 gap-4 p-4 lg:m-24 mt-12 xxl:gap-12 xxl:m-56">
    <Card class="col-span-7 p-5 rounded-lg" :unstyled="true" :class="cardColor">
      <template #title>
        <h1 class="text-5xl font-bold text-center text-highlight">
          Hi I'm James Ball <span class="inline-block origin-[70%_70%] animate-wave">👋</span>
        </h1>
        <h2 class="text-lg text-center mt-2 text-light-50">
          <i class="pi pi-map-marker"></i> Canada | Full Stack Developer
        </h2>
      </template>
    </Card>

    <div class="col-span-7 lg:col-span-3 grid gap-4 xxl:gap-8">
      <Card class="flex justify-center items-center" :class="cardColor">
        <template #content>
          <Image :src="profilePic2" alt="Profile picture" />
        </template>
      </Card>
    </div>

    <div class="lg:col-span-4 col-span-7 grid gap-4 xxl:gap-8">
      <div class="grid grid-cols-2 gap-4 xxl:gap-8">
        <Card class="col-span-2 lg:col-span-1" :class="cardColor">
          <template #title>
            <h2 class="text-2xl text-center text-highlight font-bold">Contact</h2>
          </template>
          <template #content>
            <div class="flex flex-col gap-2 items-center">
              <p class="text-light-50 text-lg">
                <a
                  @click="copyEmail('jamie.j.ball@gmail.com')"
                  class="cursor-pointer hover:underline"
                  v-if="copied === null"
                  >jamie.j.ball@gmail.com</a
                >
                <span v-if="copied" class="text-green-400">Copied!</span>
                <span v-if="!copied && copied !== null" class="text-red-400">Copy-failed</span>
              </p>
              <div class="flex flex-row">
                <i
                  ><a
                    href="https://www.github.com/Jimmy-b36"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                      :src="gitSvg"
                      alt="github logo"
                      class="h-auto w-10 m-2 cursor-pointer hover:scale-110 transition-transform duration-200" /></a
                ></i>
                <i
                  ><a
                    href="https://www.linkedin.com/in/james-ball-57831a229/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                      :src="linkedInSvg"
                      alt="linkedin logo"
                      class="h-auto w-10 m-2 cursor-pointer hover:scale-110 transition-transform duration-200" /></a
                ></i>
              </div>
            </div>
          </template>
        </Card>

        <Card class="col-span-2 lg:col-span-1" :class="cardColor">
          <template #title>
            <h2 class="text-2xl text-center text-highlight font-bold">Education</h2>
          </template>
          <template #content>
            <p class="text-light-50 text-center">Full Stack Web Development | Lighthouse Labs</p>
            <br />
            <p class="text-light-50 text-center">
              HarvardX: CS50's Introduction to Computer Science
            </p>
          </template>
        </Card>
      </div>

      <Card class="" :class="cardColor">
        <template #title>
          <h2 class="text-2xl text-center text-highlight font-bold">Who Am I?</h2>
        </template>
        <template #content>
          <p class="text-light-50 text-center">
            As a Web Developer and Ski Instructor, I’m passionate about combining adventure and
            technology to solve problems and improve lives. In my downtime, I love climbing, skiing,
            and reading epic fantasy like The Stormlight Archive.
          </p>
        </template>
      </Card>

      <Card class="" :class="cardColor">
        <template #title>
          <h2 class="text-2xl text-center text-highlight font-bold">Technologies</h2>
        </template>
        <template #content>
          <div class="grid grid-cols-6 gap-4 place-items-center mt-5">
            <i
              v-for="icon in icons"
              :key="icon.name"
              class="w-9 h-16 flex flex-col justify-center items-center"
            >
              <img :src="icon.icon" :alt="icon.alt" />
              <p class="text-light text-center text-sm mt-2 font hidden lg:block">
                {{ icon.name }}
              </p>
            </i>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import gitSvg from '@/assets/icons/github-dark.svg?url'
import linkedInSvg from '@/assets/icons/linkedIn.svg?url'
import profilePic2 from '@/assets/images/profile-pic-tall.jpg?url'
import { copyToClipboard } from '@/utils/helpers'

import { icons } from '@/utils/iconImports'
import { ref } from 'vue'
const cardColor = ref<string>('!bg-dark-500')

const copied = ref<boolean | null>(null)

const copyEmail = (email: string) => {
  copied.value = copyToClipboard(email)
  setTimeout(() => {
    copied.value = null
  }, 2000)
}
</script>

<style lang="css"></style>
