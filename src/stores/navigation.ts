import Contact from '@/components/contact/index.vue'
import Home from '@/components/home/index.vue'
import Projects from '@/components/projects/index.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type IRoutes = {
  component: typeof Home | typeof Contact | typeof Projects
  index: number
}
export const useNavigationStore = defineStore('navigation', () => {
  const currentRoute = ref<IRoutes>({
    component: Home,
    index: 3,
  })
  const navigateTo = (page: IRoutes) => {
    currentRoute.value = page
    return
  }

  return { currentRoute, navigateTo }
})
