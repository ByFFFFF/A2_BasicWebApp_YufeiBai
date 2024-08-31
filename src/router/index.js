import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import { ref } from 'vue'
import RegisterView from '@/views/RegisterView.vue'

const isLoggedIn = ref(false)

if (localStorage.getItem('isLoggedIn') === 'true') {
  isLoggedIn.value = true
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'About' && !isLoggedIn.value) {
    alert('The user is not logged in. Redirecting to login page...')
    next({ name: 'Login' })
  } else {
    next()
  }
})

export function setLoginStatus(status) {
  isLoggedIn.value = status
  localStorage.setItem('isLoggedIn', status)
}

export default router
export { isLoggedIn }
