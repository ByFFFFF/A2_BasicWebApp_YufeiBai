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
                                    @blur="() => validateName(true)" @input="() => validateName(false)" />
                                <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="formData.password"
                                    @blur="() => validatePassword(true)" @input="() => validatePassword(false)" />
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
                            <p>Don’t have an account? <a href="#">Register here.</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row mt-5" v-if="submittedCards.length">
            <!-- <div class="card"> -->
            <DataTable :value="submittedCards" table-style="min-width: 50rem">
                <Column field="username" header="Username"></Column>
                <Column field="password" header="Password"></Column>
            </DataTable>
            <!-- </div>
            <div class="d-flex flex-wrap justify-content-start">
                <div v-for="(card, index) in submittedCards" :key="index" class="card m-2" style="width: 18rem;">
                    <div class="card-header">
                        User Information
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Username: {{ card.username }}</li>
                        <li class="list-group-item">Password: {{ card.password }}</li>
                    </ul>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const formData = ref({
    username: '',
    password: '',
})

const errors = ref({
    username: null,
    password: null,
})

const submittedCards = ref([])

const validateName = (blur) => {
    if (formData.value.username.length < 3) {
        errors.value.username = 'Username must be at least 3 characters!!!'
    } else {
        errors.value.username = null
    }
}

const validatePassword = (blur) => {
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

const submitForm = () => {
    validateName(true)
    validatePassword(true)
    if (!errors.value.username && !errors.value.password) {
        submittedCards.value.push({ ...formData.value });
        console.log('Form submitted with:', formData.value)
        formData.value = {
            username: '',
            password: ''
        };
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
</style>