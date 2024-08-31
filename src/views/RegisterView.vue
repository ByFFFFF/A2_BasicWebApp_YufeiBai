<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div>
                    <h1 class="text-center">Register Your Account</h1>
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
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" v-model="formData.email"
                                    @blur="validateEmail" @input="validateEmail" />
                                <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
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
                            <div class="col-sm-12">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword"
                                    v-model="formData.confirmPassword" @blur="validateConfirmPassword"
                                    @input="validateConfirmPassword" />
                                <div v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword }}
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-primary w-100">Register</button>
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-secondary w-100" @click="goToLogin">Already have an
                                    account? Login here.</button>
                            </div>
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
</template>

<script setup>
import { ref } from 'vue'
import router from '../router';

const formData = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const errors = ref({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
})

const errorMessage = ref(null)

const validateName = () => {
    if (formData.value.username.length < 3) {
        errors.value.username = 'Username must be at least 3 characters!!!'
    } else {
        errors.value.username = null
    }
}

const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.value.email)) {
        errors.value.email = 'Invalid email address!!!'
    } else {
        errors.value.email = null
    }
}

const validatePassword = () => {
    const password = formData.value.password
    const minLength = 8
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    if (password.length < minLength) {
        errors.value.password = `Password must be at least ${minLength} characters!!!.`
    } else if (!hasUppercase) {
        errors.value.password = 'Password must contain at least one uppercase letter!!!.'
    } else if (!hasLowercase) {
        errors.value.password = 'Password must contain at least one lowercase letter!!!.'
    } else if (!hasNumber) {
        errors.value.password = 'Password must contain at least one number!!!.'
    } else if (!hasSpecialChar) {
        errors.value.password = 'Password must contain at least one special character!!!.'
    } else {
        errors.value.password = null
    }
}

const validateConfirmPassword = () => {
    if (formData.value.confirmPassword !== formData.value.password) {
        errors.value.confirmPassword = 'Passwords do not match!!!'
    } else {
        errors.value.confirmPassword = null
    }
}

const submitForm = () => {
    validateName()
    validateEmail()
    validatePassword()
    validateConfirmPassword()

    if (!errors.value.username && !errors.value.email && !errors.value.password && !errors.value.confirmPassword) {
        const newUser = {
            username: formData.value.username,
            email: formData.value.email,
            password: formData.value.password,
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        console.log('Registration Form submitted with:', formData.value)
        alert("Registration successful")
        router.push({ name: 'Login' })
        formData.value = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
        errorMessage.value = null
    } else {
        errorMessage.value = "Please correct the errors before submitting the form!"
    }
}

const goToLogin = () => {
    router.push({ name: 'Login' })
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
