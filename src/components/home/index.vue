<template>
  <Button
    class="h-screen w-14 items-center flex justify-center bg-secondary-300 hover:bg-secondary-200"
    unstyled
    @click="props.command"
  >
    <h1 class="transform -rotate-90 font-bold text-2xl">Home</h1>
  </Button>
  <section class="grid grid-cols-7 gap-8 p-4 m-24">
    <Card class="col-span-7 p-5 bg-dark-400 rounded-lg" :unstyled="true">
      <template #title>
        <h1 class="text-4xl font-bold text-center text-highlight">James Ball</h1>
        <h2 class="text-lg text-center text-zinc-400">Full Stack Developer</h2>
      </template>
    </Card>

    <div class="col-span-3 grid gap-4">
      <Card class="!bg-dark-400 flex justify-center items-center">
        <template #content>
          <Image :src="profilePic" alt="Profile picture" />
        </template>
      </Card>

      <Card class="!bg-dark-400">
        <template #title>
          <h2 class="text-2xl text-center text-highlight font-bold">Contact</h2>
        </template>
        <template #content>
          <div class="flex flex-col gap-2 items-center">
            <p class="text-zinc-200">
              <a
                @click="copyToClipboard('jamie.j.ball@gmail.com')"
                class="cursor-pointer"
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
                  ><img :src="gitSvg" alt="github logo" class="h-7 w-7 m-2 cursor-pointer" /></a
              ></i>
              <i
                ><a
                  href="https://www.linkedin.com/in/james-ball-57831a229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    :src="linkedInSvg"
                    alt="linkedin logo"
                    class="h-7 w-7 m-2 cursor-pointer" /></a
              ></i>
            </div>
          </div>
        </template>
      </Card>
    </div>

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

      <Card class="!bg-dark-400">
        <template #title>
          <h2 class="text-2xl text-center text-highlight font-bold">Education</h2>
        </template>
        <template #content>
          <p class="text-zinc-200">
            <span class="font-bold">Diploma: </span>Full Stack Web Development | Lighthouse Labs
          </p>
        </template>
      </Card>

      <Card class="!bg-dark-400">
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
import gitSvg from '@/assets/icons/github-dark.svg?url'
import linkedInSvg from '@/assets/icons/linkedin.svg?url'
import profilePic from '@/assets/images/profile-pic.png?url'

import { icons } from '@/utils/iconImports'
import { ref } from 'vue'
const props = defineProps<{ command: () => void }>()

const copied = ref<boolean | null>(null)

const copyToClipboard = (text: string) => {
  try {
    navigator.clipboard.writeText(text)
    copied.value = true
  } catch (error) {
    copied.value = false
  } finally {
    setTimeout(() => {
      copied.value = null
    }, 2000)
  }
}
</script>

<style lang="css"></style>
