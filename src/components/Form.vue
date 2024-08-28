<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Login to Your Account</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" v-model="formData.username" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="formData.password" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <button type="button" class="btn btn-secondary w-100">Forgot Password?</button>
                        </div>
                        <div class="col-md-6">
                            <button type="submit" class="btn btn-primary w-100">Login</button>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <button type="button" class="btn btn-secondary w-100">Login with Google</button>
                        </div>
                        <div class="col-md-6">
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
</template>


<script setup>
import { ref } from 'vue'

const formData = ref({
    username: '',
    password: '',
})

const submitForm = () => {
    console.log('Form submitted with:', formData.value)
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
    max-width: 80vw;
    margin: 0 auto;
    padding: 20px;
}

.text-center p {
    margin-top: 20px;
}

.btn {
    font-weight: bold;
}
</style>