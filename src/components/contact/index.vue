<template>
  <Button
    class="h-screen w-14 items-center flex justify-center bg-midnight_green-300 hover:bg-midnight_green-200"
    unstyled
    @click="props.command"
  >
    <h1 class="transform -rotate-90 font-bold text-2xl">Contact</h1>
  </Button>
  <section class="flex flex-wrap p-4 m-24 flex-col w-full justify-center">
    <form class="flex flex-col space-y-4 w-full max-w-lg mx-auto" @submit.prevent="sendEmail">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <InputText
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="contactForm.user_email"
          required
        />
      </div>
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
        <InputText
          id="subject"
          type="text"
          class="mt-1 block w-full"
          v-model="contactForm.user_subject"
          required
        />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <Textarea
          id="message"
          rows="4"
          class="mt-1 block w-full"
          v-model="contactForm.user_query"
          required
        />
      </div>
      <Button type="submit" label="Send" class="w-full" />
    </form>
    <Message
      :severity="success ? 'success' : 'error'"
      class="mt-4 w-1/2 mx-auto justify-center flex"
      v-if="success || error"
      >{{ success ? success : error }}</Message
    >
  </section>
</template>
<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const props = defineProps<{ command: () => void }>()

const contactForm = ref({
  user_email: '',
  user_subject: '',
  user_query: '',
})

const error = ref('')
const success = ref('')

const setMessage = (message: string, type: 'error' | 'success') => {
  type === 'error' ? (error.value = message) : (success.value = message)
  setTimeout(() => {
    type === 'error' ? (error.value = '') : (success.value = '')
  }, 3000)
}

const sendEmail = async () => {
  try {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID ?? 'no service id',
        import.meta.env.VITE_TEMPLATE_ID ?? 'no template id',
        contactForm.value ?? 'no form',
        import.meta.env.VITE_EMAIL_PUBLIC_KEY ?? 'no public key',
      )
      .then(
        (result) => {
          setMessage(`Message sent successfully! ${result.text}`, 'success')
          console.log('SUCCESS!', result.text)
        },
        (error) => {
          setMessage(`Message failed to send! ${error.text}`, 'error')
          console.log('FAILED...', error.text)
        },
      )
  } catch (error) {
    setMessage(`Message failed to send! ${error}`, 'error')
  } finally {
    return (contactForm.value = {
      user_email: '',
      user_subject: '',
      user_query: '',
    })
  }
}
</script>
<style lang="css"></style>
