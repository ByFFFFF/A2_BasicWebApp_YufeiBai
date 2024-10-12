<script setup>
import BHeader from './components/BHeader.vue'
import { ref } from 'vue'
import html2pdf from 'html2pdf.js'

const documentRef = ref(null)

const exportToPDF = () => {
  const element = documentRef.value
  if (element) {
    html2pdf(element, {
      margin: 1,
      filename: 'generated-pdf.pdf',
    })
  }
}
</script>

<template>
  <header>
    <BHeader />
  </header>

  <main>
    <div ref="documentRef">
      <router-view></router-view>
    </div>

    <button @click="exportToPDF">Export to PDF</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.about {
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #45a049;
}
</style>
