// index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AdminView from '@/views/AdminView.vue'
import RatingView from '@/views/RatingView.vue'

import { auth } from '../firebaseConfig'

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
    meta: { roles: ['admin'], requiresAuth: true }
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
  },
  {
    path: '/rating',
    name: 'Rating',
    component: RatingView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const role = localStorage.getItem('userRole')

  if (requiresAuth && !currentUser) {
    alert('You must be logged in to access this page.')
    next({ name: 'Login' })
  } else if (to.name === 'Admin' && role !== 'admin') {
    alert('You do not have permission to access this page (Only Admin!!!).')
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
