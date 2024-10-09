<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div>
                    <h1 class="text-center">Login to Your Account</h1>
                    <form @submit.prevent="submitForm" class="form-group">
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label for="email" class="form-label">Email</label>
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
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-secondary w-100">Forgot Password?</button>
                            </div>
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-primary w-100">Login</button>
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
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const formData = ref({
    email: '',
    password: '',
})

const errors = ref({
    email: null,
    password: null,
})

const errorMessage = ref(null)
const router = useRouter()

const validateEmail = () => {
    if (!formData.value.email) {
        errors.value.email = 'Email is required!'
    } else {
        errors.value.email = null
    }
}

const validatePassword = () => {
    if (formData.value.password.length < 6) {
        errors.value.password = 'Password must be at least 6 characters!'
    } else {
        errors.value.password = null
    }
}

const submitForm = () => {
    validateEmail()
    validatePassword()

    if (!errors.value.email && !errors.value.password) {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, formData.value.email, formData.value.password)
            .then((userCredential) => {
                const user = userCredential.user
                localStorage.setItem('userRole', 'user')
                alert('Login successful!')
                router.push({ name: 'Home' })
            })
            .catch((error) => {
                errorMessage.value = error.message
            })
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
