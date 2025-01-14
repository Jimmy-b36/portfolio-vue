import Contact from '@/components/contact/index.vue'
import Home from '@/components/home/index.vue'
import Projects from '@/components/projects/index.vue'
import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'

type IRoutes = {
  component: typeof Home | typeof Contact | typeof Projects
  index: number
}
export const useNavigationStore = defineStore('navigation', () => {
  const routes: Record<string, IRoutes> = {
    Home: { component: Home, index: 3 },
    Projects: { component: Projects, index: 2 },
    Contact: { component: Contact, index: 1 },
  }

  const currentRoute = shallowRef<IRoutes>({
    component: Home,
    index: 3,
  })
  const navigateTo = (page: IRoutes) => {
    return currentRoute.value.component === page.component
      ? (currentRoute.value = { component: Home, index: 3 })
      : (currentRoute.value = page)
  }

  return { currentRoute, navigateTo, routes }
})
