import Contact from '@/components/contact/index.vue'
import Home from '@/components/home/index.vue'
import Projects from '@/components/projects/index.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type IRoutes = typeof Home | typeof Contact | typeof Projects
export const useNavigationStore = defineStore('navigation', () => {
  const currentRoute = ref<IRoutes>(Home)
  const navigateTo = (page: IRoutes) => {
    currentRoute.value = page
    return
  }

  const routes = ref<{ label: string; name: string; command: () => void }[]>([
    { label: 'Home', name: 'Home', command: () => navigateTo(Home) },
    { label: 'Contact', name: 'Contact', command: () => navigateTo(Contact) },
    { label: 'Projects', name: 'Projects', command: () => navigateTo(Projects) },
  ])

  return { currentRoute, navigateTo, routes }
})
