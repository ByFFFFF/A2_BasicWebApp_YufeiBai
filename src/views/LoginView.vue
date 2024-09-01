<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div>
                    <h1 class="text-center">Login to Your Account</h1>
                    <form @submit.prevent="submitForm" class="form-group">
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" v-model="formData.username"
                                    @blur="validateName" @input="validateName" />
                                <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="formData.password"
                                    @blur="validatePassword" @input="validatePassword" />
                                <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-secondary w-100">Forgot Password?</button>
                            </div>
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-primary w-100">Login</button>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-secondary w-100">Login with Google</button>
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-secondary w-100">Login with Facebook</button>
                            </div>
                        </div>
                        <div class="text-center mt-4">
                            <p>Don’t have an account? <router-link to="/register">Register here.</router-link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-if="errorMessage" class="row mt-3">
            <div class="col-md-8 offset-md-2">
                <div class="alert alert-danger text-center">{{ errorMessage }}</div>
            </div>
        </div>
    </div>

    <!-- <div class="main-content" style="position: absolute; top: 50%; left: 10%; transform: translate(0, -50%);">
        <h2> This is login page!!! </h2>
    </div> -->
</template>

<script setup>
import { ref } from 'vue'
import router from '../router';
import { isLoggedIn } from '@/router/index.js'

const formData = ref({
    username: '',
    password: '',
})

const errors = ref({
    username: null,
    password: null,
})

const errorMessage = ref(null)

const validateName = () => {
    if (formData.value.username.length < 3) {
        errors.value.username = 'Username must be at least 3 characters!!!'
    } else {
        errors.value.username = null
    }
}

const validatePassword = () => {
    if (formData.value.password.length < 6) {
        errors.value.password = `Password must be at least 6 characters!!!.`
    } else {
        errors.value.password = null
    }
}

const submitForm = () => {
    validateName()
    validatePassword()

    if (!errors.value.username && !errors.value.password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user =>
            user.username === formData.value.username && user.password === formData.value.password
        );

        if (user) {
            console.log('Form submitted with:', formData.value)
            isLoggedIn.value = true
            localStorage.setItem('userRole', user.role)
            localStorage.setItem('isLoggedIn', 'true')
            alert("Login success")
            router.push({ name: user.role === 'admin' ? 'Admin' : 'About' })
            formData.value = {
                username: '',
                password: ''
            }
            errorMessage.value = null
        } else {
            errorMessage.value = "Incorrect username or password!"
        }
    }
}


</script>

<style scoped>
h1 {
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
}

.container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
    padding: 20px;
}

.text-center p {
    margin-top: 20px;
}

.btn {
    font-weight: bold;
}

.text-danger {
    color: red;
    font-size: 0.875em;
    margin-top: 5px;
}

.alert {
    font-weight: bold;
}
</style>