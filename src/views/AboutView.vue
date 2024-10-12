<template>
    <div class="about">
        <h1>About Us</h1>
        <p>Welcome to Global Steps. Our mission is to provide comprehensive support and resources to help immigrants
            adjust and integrate into their new lives.</p>

        <button @click="callFunction">Call Cloud Function</button>
        <p v-if="functionResponse">{{ functionResponse }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const functionResponse = ref(null)

const callFunction = async () => {
    try {
        const response = await fetch('https://helloworld-thl4nahqhq-uc.a.run.app')

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json()
        functionResponse.value = data.message
    } catch (error) {
        console.error('Error calling Cloud Function:', error)
        functionResponse.value = 'Error calling function'
    }
}
</script>

<style scoped>
.about {
    text-align: center;
    margin-top: 50px;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

p {
    margin-top: 20px;
    font-size: 1.2em;
}
</style>
