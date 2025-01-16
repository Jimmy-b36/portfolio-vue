import Home from '@/components/home/index.vue'
import Projects from '@/components/projects/index.vue'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

type IRoutes = {
  component: typeof Home | typeof Projects
  index: number
}
export const useNavigationStore = defineStore('navigation', () => {
  const routes: Record<string, IRoutes> = {
    Home: { component: Home, index: 2 },
    Projects: { component: Projects, index: 1 },
  }

  const currentRoute = shallowRef<IRoutes>({
    component: Home,
    index: 2,
  })
  const navigateTo = (page: IRoutes) => {
    return currentRoute.value.component === page.component
      ? (currentRoute.value = { component: Home, index: 2 })
      : (currentRoute.value = page)
  }

  return { currentRoute, navigateTo, routes }
})
