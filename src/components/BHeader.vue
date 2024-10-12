<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" active-class="active" aria-current="page">Global
                            Steps</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" active-class="active">About Us</router-link>
                    </li>
                    <li class="nav-item" v-if="isAdmin">
                        <router-link to="/admin" class="nav-link" active-class="active">Admin</router-link>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <router-link to="/register" class="nav-link" active-class="active">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/rating" class="nav-link" active-class="active">Rating</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/dataTables" class="nav-link" active-class="active">Data Tables</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/map" class="nav-link" active-class="active">Map</router-link>
                    </li>
                    <li v-if="isLoggedIn" class="nav-item">
                        <button @click="logout" class="btn btn-secondary">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getAuth } from 'firebase/auth'

const router = useRouter()
const route = useRoute()
const auth = getAuth()

const isLoggedIn = ref(false)
const isAdmin = ref(false)

onMounted(() => {
    updateUserRole()
    watchAuthState()
})

watch(route, () => {
    updateUserRole()
})

const updateUserRole = () => {
    const userRole = localStorage.getItem('userRole')
    isAdmin.value = userRole === 'admin'
}

const watchAuthState = () => {
    isLoggedIn.value = !!auth.currentUser
    auth.onAuthStateChanged((user) => {
        if (user) {
            isLoggedIn.value = true
            updateUserRole()
        } else {
            isLoggedIn.value = false
        }
    })
}

const logout = () => {
    auth.signOut().then(() => {
        isLoggedIn.value = false
        isAdmin.value = false
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('userRole')
        alert("You have been logged out.")
        router.push({ name: 'Login' })
    })
}
</script>

<style scoped>
.navbar-nav {
    display: flex;
    flex-direction: row;
}

.nav-item {
    margin: 0 15px;
}

.nav-link {
    color: white;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #007bff;
}

.nav-link.active {
    background-color: #007bff;
    color: white !important;
    border-radius: 5px;
}
</style>
