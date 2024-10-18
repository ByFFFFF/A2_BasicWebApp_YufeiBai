// index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AdminView from '@/views/AdminView.vue'
import RatingView from '@/views/RatingView.vue'
import DataTablesView from '@/views/DataTablesView.vue'
import MapView from '@/views/MapView.vue'

import { auth } from '../firebaseConfig'

const checkUserRole = (role, requiredRoles) => {
  return requiredRoles.includes(role)
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
  },
  {
    path: '/dataTables',
    name: 'DataTables',
    component: DataTablesView
  },
  {
    path: '/map',
    name: 'Map',
    component: MapView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const requiredRoles = to.meta.roles || []
  const role = localStorage.getItem('userRole')

  if (requiresAuth && !currentUser) {
    alert('You must be logged in to access this page.')
    next({ name: 'Login' })
  } else if (requiredRoles.length > 0 && !checkUserRole(role, requiredRoles)) {
    alert('You do not have permission to access this page.')
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
