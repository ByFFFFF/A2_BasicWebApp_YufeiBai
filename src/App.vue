<script setup>
import BHeader from './components/BHeader.vue'
import Form from './components/Form.vue';
</script>

<template>
  <header>
    <BHeader />
  </header>

  <main>
    <!-- <Form>
    </Form> -->
    <router-view></router-view>
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
</style>
