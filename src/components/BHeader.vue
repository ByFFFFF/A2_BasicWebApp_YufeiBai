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
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link" active-class="active">Register</router-link>
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
import { useRouter } from 'vue-router'
import { isLoggedIn } from '@/router'

const router = useRouter()

const logout = () => {
    isLoggedIn.value = false
    alert("You have been logged out.")
    router.push({ name: 'Login' })
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