import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import { ref } from 'vue'
import RegisterView from '@/views/RegisterView.vue'
import AdminView from '@/views/AdminView.vue'

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
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    meta: { roles: ['admin'] }
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
  const role = localStorage.getItem('userRole')
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if ((to.name === 'Admin' || to.name === 'About') && !isLoggedIn) {
    alert('You must be logged in to access this page.')
    next({ name: 'Login' })
  } else if (to.name === 'Admin' && role !== 'admin') {
    alert('You do not have permission to access this page (Only Admin!!!).')
    next({ name: 'Home' })
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
