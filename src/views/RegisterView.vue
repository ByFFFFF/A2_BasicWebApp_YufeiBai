<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div>
                    <h1 class="text-center">Register Your Account</h1>
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
                            <div class="col-sm-12">
                                <label for="role" class="form-label">Role</label>
                                <select v-model="formData.role" class="form-control">
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
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
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { sendEmail } from '../emailService';

const formData = ref({
    email: '',
    password: '',
    role: 'user'
})

const errors = ref({
    email: null,
    password: null
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

        createUserWithEmailAndPassword(auth, formData.value.email, formData.value.password)
            .then(async (userCredential) => {
                const user = userCredential.user
                try {
                    await setDoc(doc(db, 'users', user.uid), {
                        email: formData.value.email,
                        role: formData.value.role
                    })

                    await sendEmail(formData.value.email, 'Welcome to our platform!', '<p>Thank you for registering!</p>')

                    alert('Registration successful! A welcome email has been sent.')
                    router.push({ name: 'Login' })
                } catch (error) {
                    errorMessage.value = 'Failed to save user role or send email!'
                }
            })
            .catch((error) => {
                errorMessage.value = error.message
            })
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
